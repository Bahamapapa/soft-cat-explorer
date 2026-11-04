#!/usr/bin/env node
// Checks that every language file has exactly the keys of i18n/ru.js and keeps
// leading/trailing whitespace, so concatenated UI fragments stay readable.
// Usage: node tools/check-i18n.js
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = path.join(__dirname, '..', 'i18n');
const ctx = {};
ctx.window = ctx; // in the browser `window` is the global object
vm.createContext(ctx);
for (const f of fs.readdirSync(dir).filter(n => n.endsWith('.js'))) {
  vm.runInContext(fs.readFileSync(path.join(dir, f), 'utf8'), ctx);
}
const all = ctx.I18N;
const ru = all.ru;
const ws = (s, re) => (s.match(re) || [''])[0];
let problems = 0;
for (const lang of Object.keys(all).filter(l => l !== 'ru')) {
  const d = all[lang];
  for (const k of Object.keys(ru)) {
    if (!(k in d)) { console.log(`${lang}: missing ${k}`); problems++; continue; }
    if (ws(ru[k], /^\s*/) !== ws(d[k], /^\s*/) || ws(ru[k], /\s*$/) !== ws(d[k], /\s*$/)) {
      console.log(`${lang}: whitespace differs at ${k}`); problems++;
    }
  }
  for (const k of Object.keys(d)) if (!(k in ru)) { console.log(`${lang}: extra key ${k}`); problems++; }
  console.log(`${lang}: ${Object.keys(d).length} keys`);
}
console.log(problems ? `${problems} problem(s)` : 'OK');
process.exit(problems ? 1 : 0);
