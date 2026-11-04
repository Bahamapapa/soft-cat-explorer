/* Minimal runtime for the Soft Cat page: renders the {{hole}} / sc-for / sc-if template with Preact. */
(function () {
  var P = window.preact, h = P.h;
  var inst = null, tplRoot = null, mounted = false, queued = false, container = null;

  function schedule() {
    if (queued) return; queued = true;
    Promise.resolve().then(function () { queued = false; doRender(); });
  }

  window.DCLogic = function DCLogic(props) { this.props = props || {}; this.state = {}; };
  window.DCLogic.prototype.setState = function (p) {
    var patch = typeof p === 'function' ? p(this.state, this.props) : p;
    this.state = Object.assign({}, this.state, patch || {});
    schedule();
  };
  window.DCLogic.prototype.forceUpdate = function () { schedule(); };

  var ids = new WeakMap(), idSeq = 0;
  var HOLE =/\{\{\s*([^}]+?)\s*\}\}/g;
  var WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;

  function lookup(path, scope) {
    path = path.trim();
    if (path === 'true') return true;
    if (path === 'false') return false;
    if (path === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(path)) return parseFloat(path);
    if (/^'.*'$|^".*"$/.test(path)) return path.slice(1, -1);
    var parts = path.split('.'), v = scope;
    for (var i = 0; i < parts.length; i++) { if (v == null) return undefined; v = v[parts[i]]; }
    return v;
  }
  function interp(str, scope) {
    return str.replace(HOLE, function (_, p) { var v = lookup(p, scope); return v == null ? '' : String(v); });
  }

  function kids(node, scope, out) {
    var c = node.firstChild;
    while (c) { var r = conv(c, scope); if (r != null) { if (Array.isArray(r)) Array.prototype.push.apply(out, r); else out.push(r); } c = c.nextSibling; }
    return out;
  }

  function conv(node, scope) {
    if (node.nodeType === 3) {
      var t = node.nodeValue;
      if (/^\s*$/.test(t) && t.indexOf('\n') >= 0) return null;
      return t.indexOf('{{') >= 0 ? interp(t, scope) : t;
    }
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'sc-for') {
      var list = lookup((WHOLE.exec(node.getAttribute('list')) || [0, ''])[1], scope) || [];
      var as = node.getAttribute('as') || 'item', out = [];
      for (var i = 0; i < list.length; i++) { var s = Object.create(scope); s[as] = list[i]; s.$index = i; s.__k = (scope.__k || '') + '.' + i; kids(node, s, out); }
      return out;
    }
    if (tag === 'sc-if') {
      var v = lookup((WHOLE.exec(node.getAttribute('value')) || [0, 'false'])[1], scope);
      return v ? kids(node, scope, []) : null;
    }
    var nid = ids.get(node); if (nid == null) { nid = ++idSeq; ids.set(node, nid); }
    var props = { key: 'n' + nid + (scope.__k || '') }, attrs = node.attributes, isInput = tag === 'input';
    for (var a = 0; a < attrs.length; a++) {
      var name = attrs[a].name, val = attrs[a].value;
      if (name.indexOf('hint-') === 0) continue;
      var m = WHOLE.exec(val), value = m ? lookup(m[1], scope) : (val.indexOf('{{') >= 0 ? interp(val, scope) : val);
      if (name.slice(0, 2) === 'on') {
        if (typeof value !== 'function') continue;
        if (isInput && name === 'onchange') name = 'oninput';
      }
      if (value === undefined) continue;
      props[name] = value;
    }
    if (tag === 'textarea') { props.value = interp(node.textContent, scope); return h(tag, props); }
    return h.apply(null, [tag, props].concat(kids(node, scope, [])));
  }

  function doRender() {
    if (!inst) return;
    var vals;
    try { vals = inst.renderVals(); } catch (e) { console.error(e); return; }
    var tree = kids(tplRoot, vals, []);
    P.render(h(P.Fragment, null, tree), container);
    if (!mounted) { mounted = true; if (inst.componentDidMount) inst.componentDidMount(); }
    else if (inst.componentDidUpdate) inst.componentDidUpdate();
  }

  window.DCBoot = function (Comp) {
    tplRoot = document.getElementById('tpl').content;
    container = document.getElementById('app');
    inst = new Comp({});
    doRender();
  };
})();
