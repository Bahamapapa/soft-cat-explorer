/* Soft Cat — interactive 3D engineering explorer. Language-aware build (RU / EN / BG). */
var LANGS = ['ru', 'en', 'bg'];
var LANG = (function () {
  try {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.indexOf(q) >= 0) return q;
    var s = localStorage.getItem('softcat-lang');
    if (s && LANGS.indexOf(s) >= 0) return s;
  } catch (e) {}
  var nav = (navigator.language || '').slice(0, 2).toLowerCase();
  return LANGS.indexOf(nav) >= 0 ? nav : 'ru';
})();
function U(k) { var d = (window.I18N && I18N[LANG]) || {}; var v = d[k]; if (v == null) v = I18N.ru[k]; return v == null ? k : v; }
function DICT() { return Object.assign({}, I18N.ru, (window.I18N && I18N[LANG]) || {}); }
var D2R, GEO, LEGS, SCHEMES, FAM, NCOL, ZONEC, ZONEN, CFN, ASM, COMPS, EXV, DEMOS, EXPRS, DEF, ROOTK, DOF, LIE, SIT, K, SCRIPTS, TOUCHR, MAN, MODES, MATS, TRADEOFFS, COVER, FEAS, DOFROWS, TORQUE, SIMNEEDS, POW, THERMAL, DIMROWS, PACK, AILOCAL, AICLOUD, AIFLOWS, RISKS, PRIVACY, HWSAFE, DFM, ASSEMBLY, SYSTEMS, LIDROWS, TOUCHROWS;
function __data() {

const D2R = Math.PI / 180;
const GEO = { L1: 80, L2: 85, paw: 16, hipY: -30, bodyH: 175, torso: [185, 62, 75], head: [66, 60, 70], tailSeg: 23, tailN: 10 };
const LEGS = [
  { k: 'FL', n: U('s200'), s: U('s201'), x: 130, z: -52, front: true, side: -1, ph: 0.25 },
  { k: 'FR', n: U('s202'), s: U('s203'), x: 130, z: 52, front: true, side: 1, ph: 0.75 },
  { k: 'RL', n: U('s204'), s: U('s205'), x: -125, z: -52, front: false, side: -1, ph: 0 },
  { k: 'RR', n: U('s206'), s: U('s207'), x: -125, z: 52, front: false, side: 1, ph: 0.5 }
];
const SCHEMES = {
  cream: { n: U('s22'), body: '#E8DCC8', accent: '#C4A984', inner: '#E9B4A9', nose: '#9A6A5C', muzzle: '#F6EFE4', rim: '#7fa7c9' },
  smoke: { n: U('s23'), body: '#BFC1C4', accent: '#8C8F95', inner: '#E2B3B1', nose: '#6E5A5C', muzzle: '#DEDFE1', rim: '#9fc3a8' },
  caramel: { n: U('s24'), body: '#D9AA7B', accent: '#A9784C', inner: '#F0B9A8', nose: '#7D4A3A', muzzle: '#F2DFC6', rim: '#d8b25a' },
  graphite: { n: U('s25'), body: '#5E5F64', accent: '#3E3F44', inner: '#C99A98', nose: '#2B2526', muzzle: '#7C7D82', rim: '#8fc7e8' },
  milk: { n: U('s26'), body: '#F3F0EA', accent: '#E0C7B2', inner: '#F0BDB3', nose: '#C08C80', muzzle: '#FFFFFF', rim: '#a9b8e0' }
};
const FAM = {
  fur: { n: U('s208'), c: '#d8c39c' }, foam: { n: U('s209'), c: '#efcd52' },
  pa: { n: U('s210'), c: '#6f8fb3' }, al: { n: U('s211'), c: '#bcc4ce' },
  act: { n: U('s212'), c: '#2f5fa0' }, pcb: { n: U('s213'), c: '#2e8a55' },
  cell: { n: U('s214'), c: '#d0543a' }, sil: { n: U('s215'), c: '#e58fb0' }, tpu: { n: 'TPU', c: '#8a6cc4' },
  steel: { n: U('s216'), c: '#5d636c' }, optic: { n: U('s217'), c: '#7cc3e6' },
  heater: { n: U('s218'), c: '#e07b2c' }, cord: { n: U('s219'), c: '#f4f4f4' }, disp: { n: U('s220'), c: '#20242e' }
};
const NCOL = { pa: '#575d67', al: '#b7bec7', act: '#2d323a', pcb: '#1f5b3c', cell: '#3f6ea6', sil: '#d9a6a0', tpu: '#3a3b42', steel: '#8b919a', optic: '#d8eef9', heater: '#c96d2c', cord: '#efefef', disp: '#111318', foam: '#e9d9a8', fur: '#ddd' };
const ZONEC = { forehead: '#e8743b', top: '#e0a030', cheek: '#d94f70', chin: '#9b5de5', back: '#2a9d8f', side: '#3a86ff', ear: '#c2185b', paw: '#8d6e63' };
const ZONEN = { forehead: U('s221'), top: U('s222'), cheek: U('s223'), chin: U('s224'), back: U('s225'), side: U('s226'), ear: U('s227'), paw: U('s228'), tail: U('s229') };
const CFN = { v: U('s53'), e: U('s55'), c: U('s57') };

const ASM = [
  ['EXT', U('s230'), U('s231')],
  ['HD', U('s232'), U('s233')],
  ['EAR', U('s234'), U('s235')],
  ['NK', U('s236'), U('s237')],
  ['CH', U('s238'), U('s239')],
  ['LG', U('s240'), U('s241')],
  ['TL', U('s229'), U('s242')],
  ['SN', U('s243'), U('s244')],
  ['EL', U('s245'), U('s246')],
  ['AU', U('s247'), U('s248')],
  ['PW', U('s249'), U('s250')],
  ['TH', U('s251'), U('s252')]
];

const COMPS = [
  { id: 'EXT-01', a: 'EXT', g: U('s253'), n: U('s254'), q: 1, m: 180, c1: [60, 120], c2: [12, 22], cf: 'c',
    pu: U('s255'), ma: U('s256'),
    pr: U('s257'), di: U('s258'), lo: U('s259'),
    pi: U('s260'), el: U('s261'),
    mt: U('s262'), fa: U('s263'),
    alt: U('s264') },
  { id: 'EXT-02', a: 'EXT', g: U('s253'), n: U('s265'), q: 1, m: 140, c1: [25, 50], c2: [4, 8], cf: 'e',
    pu: U('s266'), ma: U('s267'),
    pr: U('s268'), di: U('s269'), lo: U('s270'),
    pi: U('s271'), el: U('s272'),
    mt: U('s273'), fa: U('s274'),
    alt: U('s275') },
  { id: 'EXT-03', a: 'EXT', g: U('s253'), n: U('s276'), q: 1, m: 70, c1: [40, 80], c2: [6, 12], cf: 'c',
    pu: U('s277'), ma: U('s278'),
    pr: U('s279'), di: U('s280'), lo: U('s281'),
    pi: U('s282'), el: U('s283'), mt: U('s284'),
    fa: U('s285'), alt: U('s286') },
  { id: 'EXT-04', a: 'EXT', g: U('s253'), n: U('s287'), q: 1, m: 110, c1: [30, 60], c2: [5, 10], cf: 'c',
    pu: U('s288'), ma: U('s289'),
    pr: U('s290'), di: U('s291'), lo: U('s292'),
    pi: U('s293'), el: U('s283'), mt: U('s294'), fa: U('s295'),
    alt: U('s296') },
  { id: 'EXT-05', a: 'EXT', g: U('s253'), n: U('s297'), q: 1, m: 4, c1: [5, 15], c2: [0.5, 1.5], cf: 'c',
    pu: U('s298'), ma: U('s299'), pr: U('s300'), di: U('s301'), lo: U('s283'),
    pi: U('s302'), el: U('s283'), mt: U('s303'), fa: U('s304'), alt: '—' },

  { id: 'HD-01', a: 'HD', g: U('s232'), n: U('s305'), q: 1, m: 95, c1: [60, 120], c2: [3, 6], cf: 'e',
    pu: U('s306'), ma: U('s307'), pr: U('s308'),
    di: U('s309'), lo: U('s310'), pi: U('s311'), el: U('s312'),
    mt: U('s313'), fa: U('s314'), alt: U('s315') },
  { id: 'HD-02', a: 'HD', g: U('s232'), n: U('s316'), q: 1, m: 14, c1: [8, 15], c2: [3, 5], cf: 'e', mo: 'eyes', mv: U('s317'),
    pu: U('s318'), ma: U('s319'), pr: U('s320'),
    di: U('s321'), lo: U('s322'), pi: U('s323'), el: U('s324'),
    mt: U('s325'), fa: U('s326'), alt: U('s327') },
  { id: 'HD-03', a: 'HD', g: U('s232'), n: U('s328'), q: 1, m: 14, c1: [8, 15], c2: [3, 5], cf: 'e', mo: 'eyes', mv: U('s317'),
    pu: U('s329'), ma: U('s330'), pr: U('s320'), di: U('s331'), lo: U('s322'), pi: U('s330'), el: U('s332'),
    mt: U('s330'), fa: U('s330'), alt: U('s333') },
  { id: 'HD-04', a: 'HD', g: U('s232'), n: U('s334'), q: 1, m: 8, c1: [10, 30], c2: [0.8, 2], cf: 'e',
    pu: U('s335'), ma: U('s336'), pr: U('s337'),
    di: U('s338'), lo: U('s339'), pi: U('s340'), el: U('s283'), mt: U('s341'),
    fa: U('s342'), alt: U('s343') },
  { id: 'HD-05', a: 'HD', g: U('s232'), n: U('s344'), q: 1, m: 22, c1: [15, 30], c2: [4, 8], cf: 'c', mo: 'blink', mv: U('s345'),
    pu: U('s346'), ma: U('s347'),
    pr: U('s348'), di: U('s349'), lo: U('s350'),
    pi: U('s351'), el: U('s352'),
    mt: U('s353'), fa: U('s354'), alt: U('s355') },
  { id: 'HD-06', a: 'HD', g: U('s232'), n: U('s356'), q: 1, m: 6, c1: [25, 50], c2: [8, 15], cf: 'e',
    pu: U('s357'), ma: U('s358'), pr: U('s359'),
    di: U('s360'), lo: U('s283'), pi: U('s361'), el: U('s362'),
    mt: U('s363'), fa: U('s364'), alt: U('s365') },
  { id: 'HD-07', a: 'HD', g: U('s232'), n: U('s366'), q: 1, m: 6, c1: [15, 30], c2: [3, 6], cf: 'e',
    pu: U('s367'), ma: U('s368'), pr: U('s369'),
    di: U('s370'), lo: U('s283'), pi: U('s371'), el: U('s372'),
    mt: U('s373'), fa: U('s374'), alt: U('s375') },
  { id: 'HD-08', a: 'HD', g: U('s232'), n: U('s376'), q: 1, m: 18, c1: [20, 40], c2: [4, 8], cf: 'c',
    pu: U('s377'), ma: U('s378'), pr: 'SMT.', di: U('s379'), lo: U('s283'),
    pi: U('s380'), el: U('s381'), mt: U('s382'), fa: U('s383'), alt: U('s384') },

  { id: 'EAR-01', a: 'EAR', g: U('s234'), n: U('s385'), q: 1, m: 16, c1: [12, 25], c2: [3, 6], cf: 'c', mo: 'ears', mv: U('s386'),
    pu: U('s387'), ma: U('s388'),
    pr: U('s389'), di: U('s390'), lo: U('s391'),
    pi: U('s392'), el: U('s393'), mt: U('s394'),
    fa: U('s395'), alt: U('s396') },
  { id: 'EAR-02', a: 'EAR', g: U('s234'), n: U('s397'), q: 1, m: 16, c1: [12, 25], c2: [3, 6], cf: 'c', mo: 'ears', mv: U('s398'),
    pu: U('s399'), ma: U('s399'), pr: U('s399'), di: U('s399'), lo: U('s399'), pi: U('s399'), el: U('s393'), mt: U('s399'), fa: U('s399'), alt: '—' },

  { id: 'NK-01', a: 'NK', g: U('s400'), n: U('s401'), q: 1, m: 70, c1: [30, 60], c2: [12, 20], cf: 'e', mo: 'head_yaw', mv: U('s402'),
    pu: U('s403'), ma: U('s404'), pr: U('s405'), di: U('s406'),
    lo: U('s407'), pi: U('s408'), el: U('s409'),
    mt: U('s410'), fa: U('s411'), alt: U('s412') },
  { id: 'NK-02', a: 'NK', g: U('s400'), n: U('s413'), q: 1, m: 70, c1: [30, 60], c2: [12, 20], cf: 'e', mo: 'head_tilt', mv: U('s414'),
    pu: U('s415'), ma: U('s416'), pr: U('s416'), di: U('s417'), lo: U('s418'), pi: U('s416'), el: U('s416'),
    mt: U('s416'), fa: U('s419'), alt: U('s420') },
  { id: 'NK-03', a: 'NK', g: U('s400'), n: U('s421'), q: 1, m: 48, c1: [25, 45], c2: [10, 16], cf: 'e', mo: 'head_tilt', mv: U('s422'),
    pu: U('s423'), ma: U('s424'), pr: U('s425'), di: U('s426'), lo: U('s427'), pi: U('s416'), el: U('s416'),
    mt: U('s428'), fa: U('s429'), alt: U('s430') },
  { id: 'NK-04', a: 'NK', g: U('s400'), n: U('s431'), q: 1, m: 55, c1: [30, 70], c2: [5, 9], cf: 'e',
    pu: U('s432'), ma: U('s433'), pr: U('s434'),
    di: U('s435'), lo: U('s436'), pi: U('s437'), el: U('s438'),
    mt: U('s439'), fa: U('s440'), alt: U('s441') },
  { id: 'NK-05', a: 'NK', g: U('s400'), n: U('s442'), q: 1, m: 8, c1: [5, 10], c2: [0.5, 1], cf: 'e',
    pu: U('s443'), ma: U('s444'), pr: U('s445'), di: U('s446'), lo: U('s447'),
    pi: U('s448'), el: U('s283'), mt: U('s449'), fa: U('s450'), alt: '—' },

  { id: 'CH-01', a: 'CH', g: U('s238'), n: U('s451'), q: 1, m: 360, c1: [120, 250], c2: [8, 15], cf: 'e',
    pu: U('s452'), ma: U('s453'), pr: U('s454'),
    di: U('s455'), lo: U('s456'), pi: U('s457'), el: U('s458'),
    mt: U('s459'), fa: U('s460'), alt: U('s461') },
  { id: 'CH-02', a: 'CH', g: U('s238'), n: U('s462'), q: 1, m: 130, c1: [60, 120], c2: [6, 12], cf: 'e',
    pu: U('s463'), ma: 'Al 6061-T6.', pr: U('s464'), di: U('s465'), lo: U('s466'),
    pi: U('s467'), el: U('s283'), mt: U('s468'), fa: U('s469'), alt: U('s470') },
  { id: 'CH-03', a: 'CH', g: U('s238'), n: U('s471'), q: 1, m: 45, c1: [15, 30], c2: [1, 2], cf: 'c',
    pu: U('s472'), ma: U('s473'), pr: U('s445'), di: U('s474'), lo: U('s475'),
    pi: U('s476'), el: U('s283'), mt: U('s477'), fa: U('s478'), alt: '—' },
  { id: 'CH-04', a: 'CH', g: U('s238'), n: U('s479'), q: 1, m: 25, c1: [10, 20], c2: [1, 3], cf: 'c',
    pu: U('s480'), ma: U('s481'), pr: U('s445'), di: U('s482'), lo: U('s283'), pi: U('s483'), el: U('s484'),
    mt: U('s485'), fa: U('s486'), alt: '—' },
  { id: 'CH-05', a: 'CH', g: U('s238'), n: U('s487'), q: 1, m: 8, c1: [5, 10], c2: [0.5, 1], cf: 'e',
    pu: U('s488'), ma: U('s489'), pr: U('s445'), di: U('s490'), lo: U('s491'), pi: U('s492'), el: U('s283'), mt: U('s449'), fa: U('s493'), alt: '—' },

  { id: 'LG-01', a: 'LG', g: U('s494'), n: U('s495'), q: 4, m: 110, c1: [40, 90], c2: [18, 35], cf: 'e', mo: 'walk', mv: U('s496'),
    pu: U('s497'), ma: U('s498'), pr: U('s499'), di: U('s500'),
    lo: U('s501'), pi: U('s502'), el: U('s503'),
    mt: U('s504'), fa: U('s505'), alt: U('s506') },
  { id: 'LG-02', a: 'LG', g: U('s494'), n: U('s507'), q: 4, m: 165, c1: [60, 140], c2: [25, 45], cf: 'e', mo: 'walk', mv: U('s508'),
    pu: U('s509'), ma: U('s510'), pr: U('s511'), di: U('s512'),
    lo: U('s513'), pi: U('s514'), el: U('s515'),
    mt: U('s516'), fa: U('s517'), alt: U('s518') },
  { id: 'LG-03', a: 'LG', g: U('s494'), n: U('s519'), q: 4, m: 165, c1: [60, 140], c2: [25, 45], cf: 'e', mo: 'walk', mv: U('s520'),
    pu: U('s521'), ma: U('s522'), pr: U('s523'), di: U('s524'),
    lo: U('s525'), pi: U('s526'), el: U('s515'),
    mt: U('s527'), fa: U('s528'), alt: U('s529') },
  { id: 'LG-04', a: 'LG', g: U('s494'), n: U('s530'), q: 4, m: 40, c1: [15, 30], c2: [2, 4], cf: 'e',
    pu: U('s531'), ma: U('s532'), pr: U('s533'), di: U('s534'), lo: U('s535'),
    pi: U('s293'), el: U('s283'), mt: U('s283'), fa: U('s536'), alt: '—' },
  { id: 'LG-05', a: 'LG', g: U('s494'), n: U('s537'), q: 4, m: 38, c1: [15, 30], c2: [2, 4], cf: 'e',
    pu: U('s538'), ma: U('s539'), pr: U('s533'), di: U('s540'), lo: U('s541'),
    pi: U('s293'), el: U('s542'), mt: U('s283'), fa: U('s543'), alt: '—' },
  { id: 'LG-06', a: 'LG', g: U('s494'), n: U('s544'), q: 4, m: 28, c1: [8, 15], c2: [1.5, 3], cf: 'c',
    pu: U('s545'), ma: U('s546'), pr: U('s547'),
    di: U('s548'), lo: U('s549'), pi: U('s550'), el: U('s551'),
    mt: U('s552'), fa: U('s553'), alt: U('s554') },

  { id: 'TL-01', a: 'TL', g: U('s229'), n: U('s555'), q: 1, m: 55, c1: [25, 50], c2: [6, 12], cf: 'c', mo: 'tail', mv: U('s556'),
    pu: U('s557'), ma: U('s558'), pr: U('s559'), di: U('s560'),
    lo: U('s561'), pi: U('s562'), el: U('s563'),
    mt: U('s564'), fa: U('s565'), alt: U('s566') },
  { id: 'TL-02', a: 'TL', g: U('s229'), n: U('s567'), q: 1, m: 30, c1: [15, 30], c2: [2, 4], cf: 'c',
    pu: U('s568'), ma: U('s569'), pr: U('s570'),
    di: U('s571'), lo: U('s572'), pi: U('s573'), el: U('s283'), mt: U('s574'),
    fa: U('s575'), alt: U('s576') },
  { id: 'TL-03', a: 'TL', g: U('s229'), n: U('s577'), q: 1, m: 2, c1: [3, 8], c2: [0.3, 0.8], cf: 'c',
    pu: U('s578'), ma: U('s579'), pr: U('s580'), di: U('s581'), lo: U('s582'),
    pi: U('s583'), el: U('s283'), mt: U('s584'), fa: U('s585'), alt: U('s586') },

  { id: 'SN-01', a: 'SN', g: U('s243'), n: U('s587'), q: 1, m: 35, c1: [20, 45], c2: [4, 9], cf: 'c', mo: 'touch',
    pu: U('s588'), ma: U('s589'),
    pr: U('s590'), di: U('s591'), lo: U('s592'), pi: U('s593'),
    el: U('s594'), mt: U('s595'), fa: U('s596'), alt: U('s597') },
  { id: 'SN-02', a: 'SN', g: U('s243'), n: U('s598'), q: 1, m: 6, c1: [10, 25], c2: [3, 6], cf: 'e',
    pu: U('s599'), ma: U('s600'), pr: U('s580'), di: U('s601'), lo: U('s283'),
    pi: U('s602'), el: 'I2C.', mt: U('s603'), fa: U('s604'), alt: U('s605') },
  { id: 'SN-03', a: 'SN', g: U('s243'), n: U('s606'), q: 1, m: 6, c1: [8, 16], c2: [2, 4], cf: 'e',
    pu: U('s607'), ma: U('s608'), pr: U('s580'), di: U('s609'), lo: U('s283'), pi: U('s610'), el: U('s611'),
    mt: U('s612'), fa: U('s613'), alt: '—' },
  { id: 'SN-04', a: 'SN', g: U('s243'), n: U('s614'), q: 1, m: 2, c1: [5, 15], c2: [1.5, 4], cf: 'e',
    pu: U('s615'), ma: U('s616'), pr: 'SMT.', di: U('s617'), lo: U('s618'), pi: U('s619'), el: U('s620'),
    mt: U('s283'), fa: U('s621'), alt: '—' },
  { id: 'SN-05', a: 'SN', g: U('s243'), n: U('s622'), q: 1, opt: true, m: 20, c1: [60, 150], c2: [15, 35], cf: 'c',
    pu: U('s623'), ma: U('s624'), pr: U('s425'), di: U('s625'), lo: U('s283'), pi: U('s626'), el: 'USB/MIPI.',
    mt: '—', fa: U('s627'), alt: U('s628') },

  { id: 'EL-01', a: 'EL', g: U('s629'), n: U('s630'), q: 1, m: 55, c1: [120, 250], c2: [60, 110], cf: 'e',
    pu: U('s631'), ma: U('s632'), pr: U('s633'), di: U('s634'),
    lo: U('s635'), pi: U('s636'), el: U('s637'), mt: U('s638'), fa: U('s639'), alt: U('s640') },
  { id: 'EL-02', a: 'EL', g: U('s641'), n: U('s642'), q: 1, m: 70, c1: [80, 160], c2: [25, 45], cf: 'e',
    pu: U('s643'), ma: U('s644'), pr: 'SMT.', di: U('s645'), lo: U('s646'),
    pi: U('s647'), el: U('s648'), mt: U('s649'), fa: U('s650'), alt: U('s651') },
  { id: 'EL-03', a: 'EL', g: U('s641'), n: U('s652'), q: 1, m: 30, c1: [25, 50], c2: [6, 10], cf: 'e',
    pu: U('s653'), ma: U('s654'), pr: 'SMT.', di: U('s655'), lo: U('s656'),
    pi: U('s657'), el: U('s658'), mt: '—', fa: U('s659'), alt: '—' },
  { id: 'EL-04', a: 'EL', g: U('s629'), n: U('s660'), q: 1, m: 35, c1: [10, 20], c2: [2, 4], cf: 'e',
    pu: U('s661'), ma: U('s662'), pr: U('s580'), di: U('s663'), lo: U('s283'),
    pi: U('s664'), el: U('s665'), mt: U('s666'), fa: U('s667'), alt: U('s668') },
  { id: 'EL-05', a: 'EL', g: U('s641'), n: U('s669'), q: 1, m: 6, c1: [10, 25], c2: [2, 5], cf: 'c',
    pu: U('s670'), ma: U('s671'), pr: 'SMT.', di: U('s672'), lo: U('s283'),
    pi: U('s673'), el: U('s674'), mt: '—', fa: U('s675'), alt: '—' },
  { id: 'EL-06', a: 'EL', g: U('s641'), n: U('s676'), q: 1, m: 90, c1: [40, 80], c2: [8, 15], cf: 'c',
    pu: U('s677'), ma: U('s678'), pr: U('s679'), di: '—', lo: U('s680'),
    pi: '—', el: U('s681'), mt: U('s682'), fa: U('s683'), alt: '—' },
  { id: 'EL-07', a: 'EL', g: U('s641'), n: U('s684'), q: 1, m: 6, c1: [5, 12], c2: [1, 3], cf: 'c', mo: 'estop',
    pu: U('s685'), ma: U('s686'), pr: U('s687'), di: U('s688'),
    lo: U('s689'), pi: U('s690'), el: U('s691'), mt: U('s692'), fa: U('s693'), alt: '—' },
  { id: 'EL-08', a: 'EL', g: U('s641'), n: U('s694'), q: 1, m: 6, c1: [5, 12], c2: [1, 2], cf: 'c',
    pu: U('s695'), ma: U('s696'), pr: U('s697'), di: U('s698'),
    lo: U('s283'), pi: U('s699'), el: U('s700'), mt: '—', fa: U('s701'), alt: '—' },

  { id: 'AU-01', a: 'AU', g: U('s247'), n: U('s702'), q: 1, m: 25, c1: [8, 20], c2: [2, 4], cf: 'e',
    pu: U('s703'), ma: U('s704'), pr: U('s425'), di: U('s705'), lo: U('s283'),
    pi: U('s706'), el: U('s707'), mt: '—', fa: U('s708'), alt: '—' },
  { id: 'AU-02', a: 'AU', g: U('s247'), n: U('s709'), q: 1, m: 20, c1: [8, 20], c2: [2, 4], cf: 'c', mo: 'touch',
    pu: U('s710'), ma: U('s711'), pr: U('s425'), di: U('s712'),
    lo: U('s283'), pi: U('s713'), el: U('s714'), mt: '—', fa: U('s715'), alt: U('s716') },

  { id: 'PW-01', a: 'PW', g: U('s717'), n: U('s718'), q: 1, m: 430, c1: [60, 110], c2: [25, 40], cf: 'e',
    pu: U('s719'), ma: U('s720'), pr: U('s721'), di: U('s722'),
    lo: U('s723'), pi: U('s724'), el: U('s725'), mt: U('s726'), fa: U('s727'), alt: U('s728') },
  { id: 'PW-02', a: 'PW', g: U('s717'), n: U('s729'), q: 1, m: 25, c1: [20, 40], c2: [5, 10], cf: 'e',
    pu: U('s730'), ma: U('s731'), pr: 'SMT.', di: U('s732'), lo: U('s283'),
    pi: U('s733'), el: U('s734'), mt: U('s735'), fa: U('s736'), alt: '—' },
  { id: 'PW-03', a: 'PW', g: U('s737'), n: U('s738'), q: 1, m: 6, c1: [5, 15], c2: [1, 3], cf: 'c',
    pu: U('s739'), ma: U('s740'), pr: U('s580'), di: U('s741'), lo: U('s742'),
    pi: U('s743'), el: U('s744'), mt: U('s303'), fa: U('s745'), alt: U('s746') },
  { id: 'PW-04', a: 'PW', g: U('s737'), n: U('s747'), q: 1, m: 0, c1: [60, 120], c2: [12, 25], cf: 'c', mo: 'dock',
    pu: U('s748'), ma: U('s749'), pr: U('s445'), di: U('s750'),
    lo: U('s751'), pi: U('s752'), el: U('s753'), mt: U('s754'), fa: U('s755'), alt: U('s756') },

  { id: 'TH-01', a: 'TH', g: U('s251'), n: U('s757'), q: 1, m: 20, c1: [10, 25], c2: [2, 5], cf: 'c',
    pu: U('s758'), ma: U('s759'), pr: U('s580'), di: U('s760'), lo: U('s761'),
    pi: U('s762'), el: U('s763'), mt: U('s764'), fa: U('s765'), alt: U('s766') },
  { id: 'TH-02', a: 'TH', g: U('s251'), n: U('s767'), q: 1, m: 4, c1: [5, 10], c2: [1, 2], cf: 'e',
    pu: U('s768'), ma: U('s769'), pr: U('s580'), di: '—', lo: U('s283'), pi: U('s770'),
    el: U('s771'), mt: '—', fa: U('s772'), alt: '—' },
  { id: 'TH-03', a: 'TH', g: U('s251'), n: U('s773'), q: 1, m: 10, c1: [5, 15], c2: [1, 3], cf: 'c',
    pu: U('s774'), ma: U('s775'), pr: U('s776'), di: U('s777'), lo: U('s283'),
    pi: U('s778'), el: U('s283'), mt: '—', fa: U('s779'), alt: '—' }
];

const EXV = {
  'HD-01': [-40, 0, 0], 'HD-02': [70, 0, -25], 'HD-03': [70, 0, 25], 'HD-04': [110, 0, 0], 'HD-05': [85, 50, 0], 'HD-06': [100, 40, 0], 'HD-07': [0, 70, 0], 'HD-08': [-100, 0, 0],
  'EAR-01': [0, 60, 0], 'EAR-02': [0, 60, 0], 'NK-01': [0, -80, 0], 'NK-02': [0, 0, 90], 'NK-03': [0, 70, 0], 'NK-04': [0, 0, -90], 'NK-05': [40, 50, 0],
  'CH-03': [0, -210, 0], 'CH-04': [0, 100, 0], 'CH-05': [0, 115, 0], 'PW-01': [0, -150, 0], 'PW-02': [-60, -180, 0], 'PW-03': [0, -250, 0], 'TH-03': [0, -95, 0],
  'EL-01': [0, 130, 0], 'EL-04': [0, 195, 0], 'EL-03': [-40, 165, 0], 'EL-05': [-40, 200, 60], 'EL-06': [0, 245, 0], 'EL-07': [0, 140, 0], 'EL-08': [0, 140, 50],
  'SN-02': [100, 0, 0], 'SN-03': [60, -170, 0], 'SN-04': [0, 90, 100], 'AU-01': [120, 0, 0], 'AU-02': [60, -130, 0], 'TL-01': [-60, 70, 0], 'TH-02': [0, 190, 0]
};

const DEMOS = [
  { k: 'idle', n: U('s780') }, { k: 'head_yaw', n: U('s781') }, { k: 'head_tilt', n: U('s782') }, { k: 'eyes', n: U('s783') }, { k: 'blink', n: U('s784') },
  { k: 'ears', n: U('s234') }, { k: 'tail', n: U('s229') }, { k: 'walk', n: U('s785') }, { k: 'turn', n: U('s786') }, { k: 'sit', n: U('s787') }, { k: 'stand', n: U('s788') },
  { k: 'lie', n: U('s789') }, { k: 'greet', n: U('s790') }, { k: 'follow', n: U('s791') }, { k: 'touch', n: U('s792') }, { k: 'dock', n: U('s793') },
  { k: 'stretch', n: U('s794') }, { k: 'paw', n: U('s795') }, { k: 'manual', n: U('s796') }
];
const EXPRS = [['auto', U('s72')], ['neutral', U('s73')], ['curious', U('s74')], ['sleepy', U('s75')], ['happy', U('s76')], ['surprise', U('s77')], ['contact', U('s78')], ['track', U('s79')]];

const DEF = { yaw: 0, pitch: 0, roll: 0, gx: 0, gy: 0, lid: 0, earL: 5, earR: 5, tailUp: 20, tailSide: 0, tailWave: 5, tailFreq: 0.35, tailCurl: 25, tailWrap: 0, bodyH: 175, bodyP: 0, walk: 0, turn: 0, ffx: 0, frx: 0, fly: 0, purr: 0 };
const ROOTK = ['rootX', 'rootZ', 'heading', 'rootY', 'humanX', 'humanZ'];
const DOF = { yaw: [5, 90], pitch: [5, 70], roll: [5, 60], gx: [12, 6], gy: [12, 6], lid: [16, 7], earL: [9, 260], earR: [9, 260], tailUp: [3, 90], tailSide: [3, 90], tailWave: [2.5, 40], tailFreq: [2, 1.5], tailCurl: [3, 100], tailWrap: [2.5, 80], bodyH: [3, 90], bodyP: [3, 35], walk: [3, 1.4], turn: [3, 1.4], ffx: [3, 150], frx: [3, 150], fly: [5, 2.5], purr: [4, 3], rootX: [2.2, 75], rootZ: [2.2, 75], heading: [2.5, 45], rootY: [4, 40], humanX: [1.6, 600], humanZ: [1.6, 600] };
const LIE = { bodyH: 64, bodyP: 0, ffx: 120, frx: 60 };
const SIT = { bodyH: 145, bodyP: 28, ffx: -4, frx: 95, pitch: -22 };

function K(t, o) { return [t, o]; }
const SCRIPTS = {
  idle: { dur: 12, loop: true, keys: [K(0, { expr: 'neutral' }), K(1.5, { gx: 0.5, gy: 0.1, earR: 18 }), K(3, { gx: -0.3, earR: 5, earL: 15, yaw: 8 }), K(5, { gx: 0, gy: -0.2, earL: 5, yaw: 0, tailWave: 9 }), K(7, { gx: 0.2, gy: 0.2, roll: 6 }), K(9, { roll: 0, gx: 0, gy: 0, tailWave: 5 }), K(10.5, { earL: -8, earR: 12 }), K(11.5, { earL: 5, earR: 5 })] },
  head_yaw: { dur: 9, loop: true, keys: [K(0, { expr: 'neutral' }), K(0.5, { yaw: 55, gx: 0.5 }), K(3.5, { yaw: -55, gx: -0.5 }), K(6.5, { yaw: 0, gx: 0 })] },
  head_tilt: { dur: 11, loop: true, keys: [K(0, { expr: 'curious' }), K(0.5, { roll: 22, earL: 18, earR: -5 }), K(2.8, { roll: -22, earL: -5, earR: 18 }), K(5, { roll: 0, pitch: 30, earL: 10, earR: 10, gy: 0.4 }), K(7.3, { pitch: -25, gy: -0.4 }), K(9.5, { pitch: 0, gy: 0, expr: 'neutral' })] },
  eyes: { dur: 26, loop: true, keys: [K(0, { expr: 'neutral' }), K(1.5, { gx: 0.9 }), K(3, { gx: -0.9 }), K(4.5, { gx: 0, gy: 0.8 }), K(6, { gy: -0.8 }), K(7.5, { gy: 0, expr: 'curious', roll: 12 }), K(10, { expr: 'happy', roll: 0 }), K(12.5, { expr: 'surprise', earL: 22, earR: 22 }), K(14.5, { expr: 'sleepy', earL: -20, earR: -20 }), K(17, { expr: 'contact', earL: 10, earR: 10 }), K(20.5, { expr: 'track' }), K(25.5, { expr: 'neutral' })] },
  blink: { dur: 9, loop: true, keys: [K(0, { expr: 'neutral', lid: 0 }), K(4, { lid: 1, slow: 1 }), K(5.6, { lid: 0 }), K(6.6, { expr: 'happy' }), K(8.4, { expr: 'neutral' })] },
  ears: { dur: 15, loop: true, keys: [K(0, { expr: 'neutral' }), K(0.5, { earL: 25, earR: 25 }), K(2.5, { earL: -30, earR: -30, expr: 'sleepy' }), K(4.5, { earL: 25, earR: -25, expr: 'curious' }), K(6.5, { earL: -25, earR: 25 }), K(8.5, { earL: 25, earR: -10, yaw: -35, gx: -0.6, expr: 'neutral' }), K(10.5, { earL: -45, earR: -45, yaw: 0, gx: 0, expr: 'surprise' }), K(12.5, { earL: -15, earR: -15, expr: 'sleepy' }), K(14, { earL: 5, earR: 5, expr: 'neutral' })] },
  tail: { dur: 18, loop: true, keys: [K(0, { tailUp: -10, tailWave: 3, tailCurl: 10, tailFreq: 0.3 }), K(3, { tailUp: 20, tailWave: 12, tailFreq: 0.4 }), K(6, { tailUp: 70, tailCurl: 75, tailWave: 4, expr: 'curious' }), K(9, { tailUp: 80, tailCurl: 20, tailWave: 3, tailFreq: 3, expr: 'happy' }), K(11.5, { tailUp: 35, tailCurl: 30, tailWave: 30, tailFreq: 1.4, expr: 'neutral' }), K(14, { tailUp: -15, tailWrap: 85, tailWave: 2, tailFreq: 0.3, tailCurl: 0 }), K(17, { tailUp: 20, tailWrap: 0, tailCurl: 25, tailWave: 5 })] },
  walk: { dur: 25, loop: true, resetRoot: true, keys: [K(0, { bodyH: 170, expr: 'neutral', tailUp: 35, tailWave: 8 }), K(0.6, { walk: 1, rootX: 420 }), K(6.6, { walk: 0.6, heading: 180 }), K(11.2, { walk: 1, rootX: 0 }), K(17.2, { walk: 0.6, heading: 360 }), K(22, { walk: 0 })] },
  turn: { dur: 12, loop: true, keys: [K(0, { bodyH: 170 }), K(0.5, { turn: 1, heading: 90, yaw: 25, gx: 0.5 }), K(3.4, { turn: 0, yaw: 0, gx: 0 }), K(5.5, { turn: -1, heading: 0, yaw: -25, gx: -0.5 }), K(8.4, { turn: 0, yaw: 0, gx: 0 })] },
  sit: { dur: 7, loop: false, keys: [K(0, Object.assign({ tailUp: -25, tailWrap: 45, tailCurl: 5, expr: 'neutral' }, SIT))] },
  stand: { dur: 8, loop: false, keys: [K(0, Object.assign({ expr: 'sleepy', earL: -10, earR: -10, pitch: 0 }, LIE)), K(3, { bodyH: 175, bodyP: 0, ffx: 0, frx: 0, expr: 'neutral', earL: 10, earR: 10, tailUp: 30, tailWrap: 0 })] },
  lie: { dur: 8, loop: false, keys: [K(0, Object.assign({ tailUp: -25, tailWrap: 60, tailCurl: 0, tailWave: 2 }, LIE)), K(4, { expr: 'sleepy', earL: -15, earR: -15, pitch: -6 })] },
  greet: { dur: 16, loop: false, resetRoot: true, human: true, keys: [K(0, { humanX: 1500, humanZ: 300 }), K(0.3, { humanX: 800, humanZ: 260 }), K(2.5, { yaw: -15, pitch: 22, gy: 0.5, earL: 25, earR: 25, expr: 'surprise', tailUp: 80, tailCurl: 30, tailWave: 3, tailFreq: 3 }), K(4, { expr: 'happy', walk: 1, rootX: 300, rootZ: 100, heading: -18 }), K(9, { walk: 0, yaw: 0, pitch: 28 }), K(9.5, Object.assign({ expr: 'contact', tailUp: 70 }, SIT, { pitch: 5 })), K(12, { roll: 15 }), K(14, { roll: 0, expr: 'happy' })] },
  follow: { dur: 24, loop: true, resetRoot: true, human: true, keys: [K(0, { humanX: 700, humanZ: 0, bodyH: 170, expr: 'contact', tailUp: 60 }), K(1, { humanX: 1300, humanZ: 400 }), K(2, { walk: 1, heading: -20, rootX: 650, rootZ: 230 }), K(10, { walk: 0.6, heading: -110, humanX: 1000, humanZ: 1100 }), K(12, { walk: 1, rootX: 800, rootZ: 750 }), K(17, { walk: 0.6, heading: 0 }), K(19, { walk: 0, expr: 'happy' }), K(21, { humanX: 700, humanZ: 0 }), K(21.5, { walk: 1, rootX: 0, rootZ: 0, heading: 180 }), K(23.8, { walk: 0 })] },
  touch: { dur: 22, loop: true, keys: [K(0, { touch: 'forehead' }), K(5.5, { touch: 'back' }), K(11, { touch: 'earL' }), K(16.5, { touch: 'chin' })] },
  dock: { dur: 27, loop: false, resetRoot: true, dock: true, keys: [K(0, { bodyH: 170, expr: 'neutral' }), K(0.5, { walk: 1, rootX: 250 }), K(4.2, { walk: 0.6, heading: 180 }), K(8.6, { walk: 1, rootX: -330, gy: -0.3 }), K(13.2, { rootY: 12 }), K(17, { walk: 0.4 }), K(17.6, { walk: 0, gy: 0 }), K(18.2, Object.assign({ tailUp: -20, tailWrap: 50, tailCurl: 0 }, LIE)), K(21.5, { expr: 'sleepy', earL: -12, earR: -12, charge: 1 })] },
  stretch: { dur: 9, loop: false, keys: [K(0, { bodyH: 150, bodyP: -16, ffx: 105, frx: -15, pitch: 12, expr: 'sleepy', tailUp: 70, tailCurl: 10, earL: -10, earR: -10 }), K(4, { lid: 0.7 }), K(5.5, { lid: 0, bodyH: 175, bodyP: 0, ffx: 0, frx: 0, pitch: 0, expr: 'neutral', earL: 5, earR: 5, tailUp: 25 })] },
  paw: { dur: 10, loop: true, keys: [K(0, { bodyP: -4, pitch: -18, gy: -0.6, expr: 'curious', earL: 22, earR: 22, tailWave: 20, tailFreq: 1.2 }), K(1.2, { fly: 1 }), K(2.2, { fly: 0.3 }), K(3, { fly: 1 }), K(4, { fly: 0 }), K(5.5, { fly: 1, expr: 'happy' }), K(6.5, { fly: 0.2 }), K(7.5, { fly: 0, bodyP: 0, pitch: 0, gy: 0, expr: 'neutral', tailWave: 5 })] }
};
const TOUCHR = {
  forehead: { msg: U('s797'), keys: [K(0, { pitch: 8, lid: 0, earL: -8, earR: -8 }), K(0.6, { lid: 1, slow: 1 }), K(2.2, { lid: 0, expr: 'happy' }), K(4.5, { expr: 'neutral', pitch: 0, earL: 5, earR: 5 })] },
  top: { msg: U('s798'), keys: [K(0, { pitch: 12, lid: 0.55, earL: -18, earR: -18 }), K(3.5, { pitch: 0, lid: 0, earL: 5, earR: 5 })] },
  back: { msg: U('s799'), keys: [K(0, { bodyH: 160, purr: 1, lid: 0.5, earL: -10, earR: -10, tailUp: 50, tailWave: 14, tailFreq: 0.6 }), K(4.5, { bodyH: 175, purr: 0, lid: 0, earL: 5, earR: 5, tailUp: 20, tailWave: 5, tailFreq: 0.35 })] },
  earL: { msg: U('s800'), keys: [K(0, { earL: -45, yaw: 10 }), K(0.5, { earL: 20 }), K(1, { earL: -25 }), K(2.2, { earL: 5, yaw: 0 })] },
  earR: { msg: U('s801'), keys: [K(0, { earR: -45, yaw: -10 }), K(0.5, { earR: 20 }), K(1, { earR: -25 }), K(2.2, { earR: 5, yaw: 0 })] },
  chin: { msg: U('s802'), keys: [K(0, { pitch: 28, lid: 0.6, purr: 1, gy: 0.3 }), K(4, { pitch: 0, lid: 0, purr: 0, gy: 0 })] },
  cheekL: { msg: U('s803'), keys: [K(0, { roll: -18, yaw: -15, lid: 0.4 }), K(3.5, { roll: 0, yaw: 0, lid: 0 })] },
  cheekR: { msg: U('s804'), keys: [K(0, { roll: 18, yaw: 15, lid: 0.4 }), K(3.5, { roll: 0, yaw: 0, lid: 0 })] },
  sideL: { msg: U('s805'), keys: [K(0, { yaw: -45, gx: -0.7, earL: 22, earR: 22 }), K(3, { yaw: 0, gx: 0, earL: 5, earR: 5 })] },
  sideR: { msg: U('s806'), keys: [K(0, { yaw: 45, gx: 0.7, earL: 22, earR: 22 }), K(3, { yaw: 0, gx: 0, earL: 5, earR: 5 })] },
  paw: { msg: U('s807'), keys: [K(0, { expr: 'surprise', pitch: -20, gy: -0.7 }), K(2.5, { expr: 'neutral', pitch: 0, gy: 0 })] },
  tail: { msg: U('s808'), keys: [K(0, { tailWave: 30, tailFreq: 2.2, yaw: 50, gx: 0.8, expr: 'surprise' }), K(2.5, { tailWave: 5, tailFreq: 0.35, yaw: 0, gx: 0, expr: 'neutral' })] }
};

const MAN = [['yaw', U('s809'), -60, 60, 1, '°'], ['pitch', U('s810'), -30, 35, 1, '°'], ['roll', U('s811'), -25, 25, 1, '°'], ['gx', U('s812'), -1, 1, 0.05, ''], ['gy', U('s813'), -1, 1, 0.05, ''], ['lid', U('s814'), 0, 1, 0.05, ''],
  ['earL', U('s815'), -45, 25, 1, '°'], ['earR', U('s816'), -45, 25, 1, '°'], ['tailUp', U('s817'), -30, 80, 1, '°'], ['tailWave', U('s818'), 0, 35, 1, '°'], ['tailWrap', U('s819'), -90, 90, 1, '°'], ['bodyH', U('s820'), 64, 180, 1, U('s821')]];

const MODES = [
  ['A', U('s822'), U('s823')],
  ['B', U('s824'), U('s825')],
  ['C', U('s826'), U('s827')],
  ['D', U('s828'), U('s829')],
  ['E', U('s830'), U('s831')],
  ['F', U('s832'), U('s833')],
  ['G', U('s834'), U('s835')]
];

const MATS = [
  { k: 'fur', n: U('s836'), fam: U('s837'), use: 'EXT-01, EXT-03, EXT-04', tact: U('s838'), flex: U('s839'), dur: U('s840'), clean: U('s841'), mfg: U('s842'), cost: U('s843'), pros: U('s844'), cons: U('s845') },
  { k: 'foam', n: U('s846'), fam: U('s847'), use: 'EXT-02', tact: U('s848'), flex: U('s849'), dur: U('s850'), clean: U('s851'), mfg: U('s852'), cost: U('s853'), pros: U('s854'), cons: U('s855') },
  { k: 'pa', n: 'PA6-GF30 / PA12 (SLS)', fam: U('s856'), use: 'CH-01, HD-01, TL-02, CH-03', tact: U('s857'), flex: U('s858'), dur: U('s859'), clean: '—', mfg: U('s860'), cost: U('s861'), pros: U('s862'), cons: U('s863') },
  { k: 'al', n: U('s864'), fam: U('s865'), use: 'CH-02, NK-04, LG-04, LG-05', tact: '—', flex: U('s866'), dur: U('s867'), clean: '—', mfg: U('s868'), cost: U('s869'), pros: U('s870'), cons: U('s871') },
  { k: 'sil', n: U('s872'), fam: U('s873'), use: 'LG-06, EXT-05, NK-05, CH-05', tact: U('s874'), flex: U('s849'), dur: U('s875'), clean: U('s876'), mfg: U('s877'), cost: U('s853'), pros: U('s878'), cons: U('s879') },
  { k: 'tpu', n: 'TPU 85–95A', fam: U('s880'), use: U('s881'), tact: U('s882'), flex: U('s883'), dur: U('s884'), clean: '—', mfg: U('s885'), cost: U('s853'), pros: U('s886'), cons: U('s887') },
  { k: 'cord', n: U('s888'), fam: U('s889'), use: 'TL-03', tact: '—', flex: U('s890'), dur: U('s891'), clean: '—', mfg: U('s892'), cost: U('s893'), pros: U('s894'), cons: U('s895') },
  { k: 'optic', n: 'PMMA / PC', fam: U('s896'), use: 'HD-04', tact: U('s897'), flex: U('s866'), dur: U('s898'), clean: U('s899'), mfg: U('s900'), cost: U('s853'), pros: U('s901'), cons: U('s902') },
  { k: 'cell', n: 'Li-ion 18650', fam: U('s903'), use: 'PW-01', tact: '—', flex: '—', dur: U('s904'), clean: '—', mfg: U('s905'), cost: U('s869'), pros: U('s906'), cons: U('s907') },
  { k: 'heater', n: U('s908'), fam: U('s909'), use: 'TH-01', tact: U('s910'), flex: U('s911'), dur: U('s912'), clean: '—', mfg: U('s913'), cost: U('s853'), pros: U('s914'), cons: U('s915') }
];

const TRADEOFFS = [
  { k: U('s916'), v: U('s917') },
  { k: U('s918'), v: U('s919') },
  { k: U('s920'), v: U('s921') },
  { k: U('s922'), v: U('s923') },
  { k: U('s924'), v: U('s925') },
  { k: U('s926'), v: U('s927') }
];
const COVER = [
  U('s928'),
  U('s929'),
  U('s930'),
  U('s931'),
  U('s932'),
  U('s933')
];

const FEAS = [
  { n: U('s934'), c: '#2a9d5c', items: [U('s935'), U('s936'), U('s937'), U('s938'), U('s939')] },
  { n: U('s940'), c: '#e0a030', items: [U('s941'), U('s942'), U('s943'), U('s944'), U('s945')] },
  { n: U('s946'), c: '#c0392b', items: [U('s947'), U('s948'), U('s949'), U('s950'), U('s951')] },
  { n: U('s952'), c: '#1f3b5c', items: [U('s953'), U('s954'), U('s955'), U('s956'), U('s957')] },
  { n: U('s958'), c: '#7a5aa8', items: [U('s959'), U('s960'), U('s961'), U('s962'), U('s963')] },
  { n: U('s964'), c: '#56606f', items: [U('s965'), U('s966'), U('s967'), U('s968'), U('s969')] }
];
const DOFROWS = [
  { k: U('s970'), a: U('s971'), b: U('s971') },
  { k: U('s786'), a: U('s972'), b: U('s973') },
  { k: U('s974'), a: U('s975'), b: U('s976') },
  { k: U('s977'), a: U('s971'), b: U('s971') },
  { k: U('s978'), a: U('s979'), b: U('s980') },
  { k: U('s981'), a: U('s982'), b: U('s983') },
  { k: U('s984'), a: '≈ −70…−140 €', b: U('s985') }
];
const TORQUE = [
  { t: U('s986') },
  { t: U('s987') },
  { t: U('s988') },
  { t: U('s989') },
  { t: U('s990') }
];
const SIMNEEDS = [
  { t: U('s991') },
  { t: U('s992') },
  { t: U('s993') },
  { t: U('s994') },
  { t: U('s995') }
];
const POW = [
  { n: U('s996'), i: 1.5, t: 30, p: 120, a: U('s997') },
  { n: U('s998'), i: 0.5, t: 3, p: 15, a: U('s999') },
  { n: U('s1000'), i: 3, t: 7, p: 12, a: U('s1001') },
  { n: U('s1002'), i: 0.3, t: 0.6, p: 0.8, a: U('s1003') },
  { n: U('s247'), i: 0.1, t: 0.8, p: 4, a: U('s1004') },
  { n: U('s243'), i: 0.6, t: 1.5, p: 2, a: U('s1005') },
  { n: U('s251'), i: 0, t: 3, p: 6, a: U('s1006') }
];
const THERMAL = [
  { t: U('s1007') },
  { t: U('s1008') },
  { t: U('s1009') },
  { t: U('s1010') },
  { t: U('s1011') }
];
const DIMROWS = [
  { n: U('s1012'), t: U('s1013'), m: U('s1014'), s: U('s1015'), cls: 'st-ok' },
  { n: U('s1016'), t: U('s1017'), m: U('s1018'), s: U('s1015'), cls: 'st-ok' },
  { n: U('s1019'), t: U('s1020'), m: U('s1021'), s: U('s1022'), cls: 'st-tight' },
  { n: U('s1023'), t: U('s1024'), m: U('s1025'), s: U('s1026'), cls: 'st-tight' },
  { n: U('s1027'), t: U('s1028'), m: U('s1029'), s: U('s1015'), cls: 'st-ok' },
  { n: U('s1030'), t: U('s1024'), m: U('s1031'), s: U('s1032'), cls: 'st-tight' },
  { n: U('s1033'), t: U('s1024'), m: U('s1034'), s: '—', cls: 'st-ok' }
];
const PACK = [
  { z: U('s1035'), c: U('s1036'), s: U('s1037'), cls: 'st-bad', r: U('s1038') },
  { z: U('s1039'), c: U('s1040'), s: U('s1041'), cls: 'st-tight', r: U('s1042') },
  { z: U('s1043'), c: U('s1044'), s: U('s1041'), cls: 'st-tight', r: U('s1045') },
  { z: U('s1046'), c: U('s1047'), s: U('s1041'), cls: 'st-tight', r: U('s1048') },
  { z: U('s1049'), c: U('s1050'), s: U('s1051'), cls: 'st-ok', r: U('s1052') },
  { z: U('s1053'), c: U('s1054'), s: U('s1055'), cls: 'st-bad', r: U('s1056') },
  { z: U('s1057'), c: U('s1058'), s: U('s1051'), cls: 'st-ok', r: U('s1059') }
];

const AILOCAL = [
  { n: U('s1060'), d: U('s1061') },
  { n: U('s1062'), d: U('s1063') },
  { n: U('s1064'), d: U('s1065') },
  { n: U('s1066'), d: U('s1067') },
  { n: U('s1068'), d: U('s1069') },
  { n: U('s1070'), d: U('s1071') }
];
const AICLOUD = [
  { n: U('s1072'), d: U('s1073') },
  { n: U('s1074'), d: U('s1075') },
  { n: U('s1076'), d: U('s1077') }
];
const AIFLOWS = [
  { a: U('s1060'), b: U('s1078'), d: U('s1079') },
  { a: U('s1060'), b: U('s1062'), d: U('s1080') },
  { a: U('s1081'), b: U('s1082'), d: U('s1083') },
  { a: U('s1072'), b: U('s1084'), d: U('s1085') },
  { a: U('s1086'), b: U('s1087'), d: U('s1088') },
  { a: U('s1078'), b: U('s1068'), d: U('s1089') },
  { a: U('s1062'), b: U('s956'), d: U('s1090') },
  { a: U('s1091'), b: U('s1092'), d: U('s1093') }
];
const RISKS = [
  { r: U('s1094'), m: U('s1095'), ids: 'LG-03, NK-04, EXT-04, HD-05', res: U('s1096') },
  { r: U('s1097'), m: U('s1098'), ids: 'SN-03, SN-04, PW-01', res: U('s1099') },
  { r: U('s1100'), m: U('s1101'), ids: 'EL-05, EL-02', res: U('s1102') },
  { r: U('s1103'), m: U('s1104'), ids: 'EXT-*, EAR-*, TL-02', res: U('s1105') },
  { r: U('s1106'), m: U('s1107'), ids: 'PW-01, PW-02, TH-03', res: U('s1108') },
  { r: U('s1109'), m: U('s1110'), ids: 'PW-03, PW-04', res: U('s1111') },
  { r: U('s1112'), m: U('s1113'), ids: 'EL-04, TL-03, EXT-04', res: U('s1114') },
  { r: U('s1115'), m: U('s1116'), ids: 'LG-01…03, EL-02', res: U('s1102') },
  { r: U('s1117'), m: U('s1118'), ids: 'EL-05', res: U('s1111') },
  { r: U('s1119'), m: U('s1120'), ids: 'EL-01, EL-05', res: U('s1111') }
];
const PRIVACY = [
  { t: U('s1121') },
  { t: U('s1122') },
  { t: U('s1123') },
  { t: U('s1124') },
  { t: U('s1125') },
  { t: U('s1126') }
];
const HWSAFE = [
  { t: U('s1127') },
  { t: U('s1128') },
  { t: U('s1129') },
  { t: U('s1130') }
];
const DFM = [
  { k: U('s1131'), s: U('s849'), cls: 'st-bad', c: U('s1132') },
  { k: U('s1133'), s: U('s1099'), cls: 'st-tight', c: U('s1134') },
  { k: U('s1135'), s: U('s1136'), cls: 'st-ok', c: U('s1137') },
  { k: U('s1138'), s: U('s1136'), cls: 'st-ok', c: U('s1139') },
  { k: U('s1140'), s: U('s1099'), cls: 'st-tight', c: U('s1141') },
  { k: U('s1142'), s: U('s181'), cls: 'st-bad', c: U('s1143') },
  { k: U('s1144'), s: U('s181'), cls: 'st-bad', c: U('s1145') },
  { k: U('s119'), s: U('s1136'), cls: 'st-ok', c: U('s1146') },
  { k: U('s1147'), s: U('s181'), cls: 'st-bad', c: U('s1148') },
  { k: U('s1149'), s: U('s1099'), cls: 'st-tight', c: U('s1150') },
  { k: U('s1151'), s: U('s1152'), cls: 'st-tight', c: U('s1153') }
];
const ASSEMBLY = [
  { t: U('s1154') },
  { t: U('s1155') },
  { t: U('s1156') },
  { t: U('s1157') },
  { t: U('s1158') },
  { t: U('s1159') },
  { t: U('s1160') },
  { t: U('s1161') }
];
const SYSTEMS = [
  { n: U('s1162'), items: [{ t: U('s1163') }, { t: U('s1164') }, { t: U('s1165') }] },
  { n: U('s1166'), items: [{ t: U('s1167') }, { t: U('s1168') }, { t: U('s1169') }, { t: U('s1170') }] },
  { n: U('s1171'), items: [{ t: U('s1172') }, { t: U('s1173') }, { t: U('s1174') }] },
  { n: U('s229'), items: [{ t: U('s1175') }, { t: U('s1176') }, { t: U('s1177') }] },
  { n: U('s251'), items: [{ t: U('s1178') }, { t: U('s1179') }, { t: U('s1180') }] },
  { n: U('s1181'), items: [{ t: U('s1182') }, { t: U('s1183') }, { t: U('s1184') }] }
];
const LIDROWS = [
  { n: U('s1185'), e: U('s1186'), c: U('s1187'), p: '≈ 4–8 €', r: U('s1188') },
  { n: U('s1189'), e: U('s1190'), c: U('s1191'), p: '≈ 8–15 €', r: U('s1192') },
  { n: U('s1193'), e: U('s1194'), c: U('s1195'), p: '0 €', r: U('s1196') }
];
const TOUCHROWS = [
  { z: U('s221'), s: U('s1197'), r: U('s1198') }, { z: U('s222'), s: 'SN-01', r: U('s1199') },
  { z: U('s1200'), s: 'SN-01', r: U('s1201') }, { z: U('s224'), s: 'SN-01', r: U('s1202') },
  { z: U('s225'), s: U('s1203'), r: U('s1204') }, { z: U('s1205'), s: 'SN-01', r: U('s1206') },
  { z: U('s234'), s: U('s1207'), r: U('s1208') }, { z: U('s1209'), s: U('s1210'), r: U('s1211') }
];


return { D2R, GEO, LEGS, SCHEMES, FAM, NCOL, ZONEC, ZONEN, CFN, ASM, COMPS, EXV, DEMOS, EXPRS, DEF, ROOTK, DOF, LIE, SIT, K, SCRIPTS, TOUCHR, MAN, MODES, MATS, TRADEOFFS, COVER, FEAS, DOFROWS, TORQUE, SIMNEEDS, POW, THERMAL, DIMROWS, PACK, AILOCAL, AICLOUD, AIFLOWS, RISKS, PRIVACY, HWSAFE, DFM, ASSEMBLY, SYSTEMS, LIDROWS, TOUCHROWS };
}
function loadData() { var d = __data(); D2R = d.D2R; GEO = d.GEO; LEGS = d.LEGS; SCHEMES = d.SCHEMES; FAM = d.FAM; NCOL = d.NCOL; ZONEC = d.ZONEC; ZONEN = d.ZONEN; CFN = d.CFN; ASM = d.ASM; COMPS = d.COMPS; EXV = d.EXV; DEMOS = d.DEMOS; EXPRS = d.EXPRS; DEF = d.DEF; ROOTK = d.ROOTK; DOF = d.DOF; LIE = d.LIE; SIT = d.SIT; K = d.K; SCRIPTS = d.SCRIPTS; TOUCHR = d.TOUCHR; MAN = d.MAN; MODES = d.MODES; MATS = d.MATS; TRADEOFFS = d.TRADEOFFS; COVER = d.COVER; FEAS = d.FEAS; DOFROWS = d.DOFROWS; TORQUE = d.TORQUE; SIMNEEDS = d.SIMNEEDS; POW = d.POW; THERMAL = d.THERMAL; DIMROWS = d.DIMROWS; PACK = d.PACK; AILOCAL = d.AILOCAL; AICLOUD = d.AICLOUD; AIFLOWS = d.AIFLOWS; RISKS = d.RISKS; PRIVACY = d.PRIVACY; HWSAFE = d.HWSAFE; DFM = d.DFM; ASSEMBLY = d.ASSEMBLY; SYSTEMS = d.SYSTEMS; LIDROWS = d.LIDROWS; TOUCHROWS = d.TOUCHROWS; }
loadData();

class Component extends DCLogic {
  constructor(...a) {
    super(...a);
    const man = {}; MAN.forEach(r => { man[r[0]] = DEF[r[0]]; });
    this.state = { mode: 'A', scheme: 'cream', sel: null, expanded: { HD: true, LG: true }, isolate: false, selOp: 1, demo: 'idle', playing: true, speed: 1, follow: true,
      extOv: 'auto', explode: 0.7, exSub: 'all', showHuman: false, showConf: false, showAxes: false, showContact: true, showDock: false, touchMode: false, mechLids: true,
      micOff: false, camOff: false, estop: false, man: man, live: { t: 0, dur: 12, joints: [], contacts: [], neck: [0, 0, 0], bH: 175, bP: 0, purr: false, charge: false },
      tab: 'bom', bomMode: 'proto', touchMsg: '', exportText: '', exportName: '', exportNote: '', shot: '', focusLeg: 'FL', expr: 'auto', loaded: false, err: '' };
    this._buildData();
    this._dict = DICT();
    this.state.lang = LANG;
    this._applyDocLang();
    this._canvasRef = (el) => { if (el) this._canvas = el; };
    this._mk();
  }

  _applyDocLang() {
    try { document.documentElement.lang = LANG; document.title = U('__title'); } catch (e) {}
  }

  _setLang(l) {
    if (LANGS.indexOf(l) < 0 || l === LANG) return;
    LANG = l;
    try { localStorage.setItem('softcat-lang', l); } catch (e) {}
    try { var u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u.toString()); } catch (e) {}
    loadData();
    this._buildData();
    this._dict = DICT();
    this._applyDocLang();
    this.setState({ lang: l, touchMsg: '', exportName: '', exportText: '', shot: '' });
  }

  _buildData() {
    this.CI = {};
    this.LIST = [];
    COMPS.forEach(c => {
      if (c.a === 'LG') {
        this.CI[c.id] = c;
        LEGS.forEach(L => { const x = Object.assign({}, c, { id: c.id + '.' + L.k, base: c.id, leg: L.k, n: c.n + ' — ' + L.n.toLowerCase(), q: 1 }); this.CI[x.id] = x; this.LIST.push(x); });
      } else { this.CI[c.id] = c; this.LIST.push(c); }
    });
    let mass = 0; const byA = {};
    COMPS.forEach(c => { if (c.opt) return; const g = (c.m || 0) * (c.q || 1); mass += g; byA[c.a] = (byA[c.a] || 0) + g; });
    this.MASS = mass; this.MASSA = byA;
    const tot = (k) => { let lo = 0, hi = 0; COMPS.forEach(c => { if (c.opt) return; lo += c[k][0] * c.q; hi += c[k][1] * c.q; }); return [lo, hi]; };
    this.BOMT = { proto: tot('c1'), prod: tot('c2') };
    this.CNT = { v: 0, e: 0, c: 0 }; this.LIST.forEach(c => { this.CNT[c.cf]++; });
  }

  _mk() {
    const S = (k) => (v) => this.setState({ [k]: v });
    this.H = {};
    MAN.forEach(r => { this.H[r[0]] = (e) => this._setManual(r[0], parseFloat(e.target.value)); });
  }

  componentDidMount() {
    this._alive = true;
    let tries = 0;
    const wait = () => {
      if (!this._alive) return;
      const T = window.THREE;
      const cv = this._canvas || document.querySelector('canvas[data-sc3d]');
      if (T && T.OrbitControls && cv) { this._canvas = cv; try { this._init(); this.setState({ loaded: true }); } catch (err) { this.setState({ err: U('s1212') + err.message }); } return; }
      if (++tries > 200) { this.setState({ err: U('s1213') }); return; }
      setTimeout(wait, 50);
    };
    wait();
  }

  componentWillUnmount() {
    this._alive = false;
    if (this._raf) cancelAnimationFrame(this._raf);
    if (this._ro) this._ro.disconnect();
    if (this.renderer) this.renderer.dispose();
  }

  componentDidUpdate() { if (this.scene) this._applyVisual(); }

  /* ---------------- 3D setup ---------------- */
  _init() {
    const T = window.THREE;
    const cv = this._canvas;
    const r = new T.WebGLRenderer({ canvas: cv, antialias: true, preserveDrawingBuffer: true });
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    r.shadowMap.enabled = true; r.shadowMap.type = T.PCFSoftShadowMap;
    r.outputEncoding = T.sRGBEncoding;
    this.renderer = r;
    const sc = new T.Scene(); sc.background = new T.Color('#e9ecef'); this.scene = sc;
    const cam = new T.PerspectiveCamera(35, 1, 5, 40000); this.camera = cam;
    const ctr = new T.OrbitControls(cam, cv); ctr.enableDamping = true; ctr.dampingFactor = 0.08; ctr.minDistance = 250; ctr.maxDistance = 8000; ctr.maxPolarAngle = Math.PI * 0.495;
    this.controls = ctr;
    sc.add(new T.HemisphereLight(0xffffff, 0xd8d2c8, 0.75));
    const dl = new T.DirectionalLight(0xffffff, 0.85); dl.position.set(700, 1400, 600); dl.castShadow = true;
    dl.shadow.mapSize.set(2048, 2048); const sca = dl.shadow.camera; sca.left = -1200; sca.right = 1200; sca.top = 1200; sca.bottom = -1200; sca.near = 100; sca.far = 4000; dl.shadow.bias = -0.0005;
    sc.add(dl); this.dl = dl; sc.add(dl.target);
    const fl = new T.DirectionalLight(0xffffff, 0.35); fl.position.set(-800, 500, -600); sc.add(fl);
    const floor = new T.Mesh(new T.PlaneGeometry(20000, 20000), new T.ShadowMaterial({ opacity: 0.14 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; sc.add(floor);
    const grid = new T.GridHelper(6000, 60, 0xc4c9d0, 0xd6dade); grid.position.y = 0.5; sc.add(grid);

    this.meshes = []; this.helpers = []; this.fx = []; this.eyes = []; this.groupsEx = [];
    this._furTex = this._makeFurTex();
    this._buildCat();
    this._buildWorld();
    this._buildIndex();

    this.P = Object.assign({}, DEF, { rootX: 0, rootZ: 0, heading: 0, rootY: 0, humanX: 700, humanZ: 420 });
    this.V = {}; Object.keys(this.P).forEach(k => { this.V[k] = 0; });
    this.T = Object.assign({}, this.P);
    this.t = 0; this.gait = 0; this.blinkT = 0; this.nextBlink = 2; this.exCur = 0; this._prevRoot = new T.Vector3();
    this._setDemo('idle', true);
    this._view('iso');

    const resize = () => { const p = cv.parentElement; const w = p.clientWidth, h = p.clientHeight; if (!w || !h) return; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
    this._ro = new ResizeObserver(resize); this._ro.observe(cv.parentElement); resize();

    let down = null;
    cv.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; cv.style.cursor = 'grabbing'; });
    cv.addEventListener('pointerup', (e) => { cv.style.cursor = 'grab'; if (!down) return; const d = Math.hypot(e.clientX - down.x, e.clientY - down.y); down = null; if (d < 5 && e.button === 0) this._pick(e); });

    this._applyVisual();
    this._last = performance.now(); this._uiT = 0;
    const loop = (now) => {
      if (!this._alive) return;
      const dt = Math.min(0.05, (now - this._last) / 1000); this._last = now;
      this._frame(dt);
      this._raf = requestAnimationFrame(loop);
    };
    this._raf = requestAnimationFrame(loop);
  }

  _makeFurTex() {
    const T = window.THREE; const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d');
    g.fillStyle = '#f2f2f2'; g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 5000; i++) { const x = Math.random() * 256, y = Math.random() * 256, l = 3 + Math.random() * 6, a = -0.4 + Math.random() * 0.8; const v = 200 + Math.floor(Math.random() * 55); g.strokeStyle = 'rgb(' + v + ',' + v + ',' + v + ')'; g.lineWidth = 1; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.sin(a) * l, y + Math.cos(a) * l); g.stroke(); }
    const t = new T.CanvasTexture(c); t.wrapS = t.wrapT = T.RepeatWrapping; t.repeat.set(5, 3); return t;
  }

  _sup(rx, ry, rz, e, ws, hs) {
    const T = window.THREE; const g = new T.SphereGeometry(1, ws || 48, hs || 32); const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) { const f = (v) => Math.sign(v) * Math.pow(Math.abs(v), e); p.setXYZ(i, f(p.getX(i)) * rx, f(p.getY(i)) * ry, f(p.getZ(i)) * rz); }
    g.computeVertexNormals(); return g;
  }
  _ell(rx, ry, rz, seg) { const g = new window.THREE.SphereGeometry(1, seg || 28, Math.max(12, (seg || 28) * 0.6 | 0)); g.scale(rx, ry, rz); return g; }
  _box(x, y, z) { return new window.THREE.BoxGeometry(x, y, z); }
  _cyl(r, h, axis, r2, seg) { const g = new window.THREE.CylinderGeometry(r2 == null ? r : r2, r, h, seg || 24); if (axis === 'x') g.rotateZ(Math.PI / 2); if (axis === 'z') g.rotateX(Math.PI / 2); return g; }

  _m(geo, parent, id, fam, o) {
    const T = window.THREE; o = o || {};
    const layer = o.layer || 'int';
    const col = o.col || NCOL[fam] || '#888888';
    const mat = new T.MeshStandardMaterial({ color: col, roughness: o.r != null ? o.r : (fam === 'al' ? 0.35 : fam === 'act' ? 0.45 : fam === 'fur' ? 0.97 : fam === 'optic' ? 0.05 : 0.6), metalness: o.mt != null ? o.mt : (fam === 'al' || fam === 'steel' ? 0.6 : fam === 'act' ? 0.4 : 0), map: o.map || null, side: o.ds ? T.DoubleSide : T.FrontSide });
    const m = new T.Mesh(geo, mat);
    if (o.p) m.position.set(o.p[0], o.p[1], o.p[2]);
    if (o.rot) m.rotation.set(o.rot[0], o.rot[1], o.rot[2]);
    m.castShadow = true; m.receiveShadow = true;
    const base = id.split('.')[0];
    const ex = o.ex || EXV[base] || null;
    m.userData = { id: id, fam: fam, layer: layer, ck: o.ck || null, col: col, base: m.position.clone(), ex: ex ? new T.Vector3(ex[0], ex[1], ex[2]) : null, zone: o.zone || null, sensor: !!o.sensor, bop: o.op != null ? o.op : 1, lid: !!o.lid, emi: o.emi || null };
    parent.add(m); this.meshes.push(m); return m;
  }
  _axes(g) { const a = new window.THREE.AxesHelper(38); a.userData = { layer: 'helper' }; a.visible = false; g.add(a); this.helpers.push(a); }

  _buildCat() {
    const T = window.THREE; const F = this._furTex;
    const root = new T.Group(); this.scene.add(root); this.catRoot = root;
    const body = new T.Group(); body.position.y = GEO.bodyH; root.add(body); this.body = body;
    const fur = (ck) => ({ layer: 'ext', ck: ck, map: F, col: '#ffffff' });
    // Exterior torso
    this._m(this._sup(185, 62, 75, 0.8), body, 'EXT-01', 'fur', fur('body'));
    this._m(this._sup(172, 51, 64, 0.8), body, 'EXT-02', 'foam', { layer: 'foam', col: NCOL.foam });
    // Chassis
    this._m(this._box(300, 14, 56), body, 'CH-01', 'pa', { p: [0, 42, 0] });
    this._m(this._box(300, 5, 100), body, 'CH-01', 'pa', { p: [0, -44, 0] });
    this._m(this._box(8, 80, 110), body, 'CH-01', 'pa', { p: [110, -4, 0], ex: [60, 0, 0] });
    this._m(this._box(8, 80, 110), body, 'CH-01', 'pa', { p: [-105, -4, 0], ex: [-60, 0, 0] });
    this._m(this._box(40, 26, 120), body, 'CH-02', 'al', { p: [130, -30, 0], ex: [0, -30, 0] });
    this._m(this._box(40, 26, 120), body, 'CH-02', 'al', { p: [-125, -30, 0], ex: [0, -30, 0] });
    this._m(this._box(160, 3, 84), body, 'CH-03', 'pa', { p: [0, -50, 0] });
    this._m(this._box(240, 6, 6), body, 'CH-04', 'pa', { p: [0, 30, -40] });
    this._m(this._box(240, 6, 6), body, 'CH-04', 'pa', { p: [0, 30, 40] });
    [[-10, -28], [-10, 28], [70, -28], [70, 28]].forEach(q => this._m(this._cyl(4, 6), body, 'CH-05', 'sil', { p: [q[0], 7, q[1]] }));
    // Power
    this._m(this._box(136, 24, 80), body, 'PW-01', 'cell', { p: [0, -30, 0] });
    this._m(this._box(50, 6, 60), body, 'PW-02', 'pcb', { p: [-95, -36, 0] });
    this._m(this._cyl(6, 4), body, 'PW-03', 'steel', { p: [40, -61, -22], layer: 'face', col: '#c9a54a', mt: 0.8, r: 0.3 });
    this._m(this._cyl(6, 4), body, 'PW-03', 'steel', { p: [40, -61, 22], layer: 'face', col: '#c9a54a', mt: 0.8, r: 0.3 });
    this._m(this._box(140, 2, 84), body, 'TH-03', 'al', { p: [0, -16, 0] });
    // Electronics
    this._m(this._box(90, 10, 66), body, 'EL-01', 'pcb', { p: [30, 14, 0] });
    this._m(this._box(80, 10, 56), body, 'EL-04', 'al', { p: [30, 25, 0] });
    this._m(this._cyl(15, 10), body, 'EL-04', 'pa', { p: [-30, 24, 0] });
    this._m(this._box(6, 46, 70), body, 'EL-02', 'pcb', { p: [94, 0, 0], ex: [90, 70, 0] });
    this._m(this._box(6, 46, 70), body, 'EL-02', 'pcb', { p: [-90, 4, 0], ex: [-90, 70, 0] });
    this._m(this._box(46, 5, 46), body, 'EL-03', 'pcb', { p: [-45, 12, 0] });
    this._m(this._box(24, 4, 24), body, 'EL-05', 'pcb', { p: [-45, 20, 32], col: '#7a2a1d' });
    this._m(this._cyl(3, 240, 'x'), body, 'EL-06', 'tpu', { p: [0, 34, -22] });
    this._m(this._cyl(3, 240, 'x'), body, 'EL-06', 'tpu', { p: [0, 34, 22] });
    const nh = this._m(this._cyl(3.5, 60), body, 'EL-06', 'tpu', { p: [140, 40, 0] }); nh.rotation.z = -0.7;
    this._m(this._cyl(11, 6), body, 'EL-07', 'sil', { p: [128, 62, 0], layer: 'face', col: '#b4442c', r: 0.7 });
    this._m(this._box(16, 5, 10), body, 'EL-08', 'pa', { p: [116, 61, 26], layer: 'face', col: '#2a2f37' });
    // Sensors body
    this._m(this._box(6, 8, 12), body, 'SN-02', 'pcb', { p: [176, -22, -24], layer: 'face', col: '#1b1e24', sensor: true });
    this._m(this._box(6, 8, 12), body, 'SN-02', 'pcb', { p: [176, -22, 24], layer: 'face', col: '#1b1e24', sensor: true });
    this._m(this._box(10, 4, 10), body, 'SN-03', 'pcb', { p: [150, -56, -30], layer: 'face', col: '#1b1e24', sensor: true });
    this._m(this._box(10, 4, 10), body, 'SN-03', 'pcb', { p: [150, -56, 30], layer: 'face', col: '#1b1e24', sensor: true });
    this._m(this._box(12, 3, 12), body, 'SN-04', 'pcb', { p: [-5, -8, 0], sensor: true });
    // Tactile body pads
    this._m(this._ell(125, 3, 44), body, 'SN-01', 'pcb', { p: [0, 57, 0], zone: 'back', sensor: true, col: '#7d8794', ex: [0, 150, 0] });
    this._m(this._ell(115, 32, 3), body, 'SN-01', 'pcb', { p: [0, 2, -70], zone: 'side', sensor: true, col: '#7d8794', ex: [0, 0, -140] });
    this._m(this._ell(115, 32, 3), body, 'SN-01', 'pcb', { p: [0, 2, 70], zone: 'side', sensor: true, col: '#7d8794', ex: [0, 0, 140] });
    // Audio
    this._m(this._cyl(17, 12, 'x'), body, 'AU-01', 'pa', { p: [160, -12, 0], col: '#30343b' });
    this._m(this._cyl(11, 8), body, 'AU-02', 'act', { p: [125, -36, 0] });
    // Heater
    this._m(this._box(200, 1.5, 80), body, 'TH-01', 'heater', { p: [0, 50, 0], ex: [0, 170, 0] });
    this._m(this._box(170, 50, 1.5), body, 'TH-01', 'heater', { p: [0, 6, -64], ex: [0, 0, -120] });
    this._m(this._box(170, 50, 1.5), body, 'TH-01', 'heater', { p: [0, 6, 64], ex: [0, 0, 120] });
    [[60, 52, 0], [-60, 52, 0], [0, 6, -66], [0, 6, 66]].forEach(q => this._m(new T.SphereGeometry(3.5, 10, 8), body, 'TH-02', 'pcb', { p: q, col: '#20262e', sensor: true }));
    // Tail actuator
    this._m(this._box(40, 30, 44), body, 'TL-01', 'act', { p: [-150, 18, 0] });
    this._m(this._cyl(9, 8, 'z'), body, 'TL-01', 'pa', { p: [-150, 18, -26], col: '#e7e1d2' });
    this._m(this._cyl(9, 8, 'z'), body, 'TL-01', 'pa', { p: [-150, 18, 26], col: '#e7e1d2' });
    // Conflict boxes
    this.conf = [];
    LEGS.forEach(L => { const c = new T.Mesh(this._box(56, 56, 44), new T.MeshBasicMaterial({ color: '#d0402a', transparent: true, opacity: 0.3, depthWrite: false })); c.position.set(L.x, GEO.hipY, L.side * 74); c.userData = { layer: 'conf' }; body.add(c); this.conf.push(c); });
    const nc = new T.Mesh(this._box(60, 50, 64), new T.MeshBasicMaterial({ color: '#e0a030', transparent: true, opacity: 0.28, depthWrite: false })); nc.position.set(170, 44, 0); nc.userData = { layer: 'conf' }; body.add(nc); this.conf.push(nc);

    this._buildNeckHead(body);
    this._buildLegs(body);
    this._buildTail(body);
  }

  _buildNeckHead(body) {
    const T = window.THREE; const F = this._furTex;
    const fur = (ck, extra) => Object.assign({ layer: 'ext', ck: ck, map: F, col: '#ffffff' }, extra || {});
    this._m(this._cyl(22, 28), body, 'NK-01', 'act', { p: [150, 16, 0] });
    const yawG = new T.Group(); yawG.position.set(150, 30, 0); body.add(yawG); this.neckYaw = yawG; this._axes(yawG);
    this._m(this._box(36, 16, 54), yawG, 'NK-04', 'al', { p: [10, 6, 0] });
    this._m(this._cyl(20, 26, 'z'), yawG, 'NK-02', 'act', { p: [20, 12, 0] });
    const pitG = new T.Group(); pitG.position.set(20, 12, 0); yawG.add(pitG); this.neckPitch = pitG; this._axes(pitG);
    this._m(this._ell(48, 52, 56), pitG, 'EXT-01', 'fur', fur('body', { p: [12, 6, 0] }));
    this._m(this._cyl(17, 22, 'x'), pitG, 'NK-03', 'act', { p: [8, 8, 0] });
    const rolG = new T.Group(); rolG.position.set(15, 8, 0); pitG.add(rolG); this.neckRoll = rolG; this._axes(rolG);
    [[22, 10, -18], [22, 10, 18], [22, 0, 0]].forEach(q => this._m(this._cyl(5, 6, 'x'), rolG, 'NK-05', 'sil', { p: q }));
    const head = new T.Group(); head.position.set(30, 12, 0); rolG.add(head); this.head = head; this.groupsEx.push({ g: head, v: [110, 55, 0] });
    // head fur
    this._m(this._sup(66, 60, 70, 0.92, 40, 28), head, 'EXT-03', 'fur', fur('body'));
    this._m(this._ell(26, 22, 26), head, 'EXT-03', 'fur', fur('body', { p: [34, -16, -38] }));
    this._m(this._ell(26, 22, 26), head, 'EXT-03', 'fur', fur('body', { p: [34, -16, 38] }));
    this._m(this._ell(18, 17, 26), head, 'EXT-03', 'fur', fur('muzzle', { p: [50, -17, 0] }));
    this._m(this._ell(5, 4.2, 7.5, 16), head, 'EXT-05', 'sil', { p: [67, -8, 0], layer: 'ext', ck: 'nose', r: 0.6 });
    [-5.5, 5.5].forEach(z => { const g = new T.TorusGeometry(5, 0.9, 6, 16, Math.PI); g.rotateX(Math.PI); g.rotateY(Math.PI / 2); this._m(g, head, 'EXT-03', 'fur', { layer: 'ext', ck: 'nose', p: [64.5, -15, z], r: 0.8 }); });
    // skull
    this._m(new T.SphereGeometry(52, 32, 20, Math.PI * 1.5, Math.PI), head, 'HD-01', 'pa', { ds: true });
    this._m(this._box(8, 70, 96), head, 'HD-01', 'pa', { p: [36, 4, 0], ex: [20, 0, 0] });
    this._m(this._box(4, 40, 50), head, 'HD-08', 'pcb', { p: [-46, -4, 0] });
    // eyes
    const R = GEO.head;
    const surf = (d) => { const n = d.clone().normalize(); const t = 1 / Math.sqrt(Math.pow(n.x / R[0], 2) + Math.pow(n.y / R[1], 2) + Math.pow(n.z / R[2], 2)); return n.multiplyScalar(t); };
    [-1, 1].forEach(side => {
      const id = side < 0 ? 'HD-02' : 'HD-03';
      const dir = new T.Vector3(1, 0.13, side * 0.43); const p = surf(dir);
      const eg = new T.Group(); eg.position.copy(p); eg.quaternion.setFromUnitVectors(new T.Vector3(1, 0, 0), dir.clone().normalize()); head.add(eg);
      this._m(this._cyl(20, 14, 'x'), eg, id, 'pcb', { p: [-8, 0, 0], col: '#2a2e36' });
      const cvs = document.createElement('canvas'); cvs.width = cvs.height = 256; const tex = new T.CanvasTexture(cvs); tex.encoding = T.sRGBEncoding;
      const dg = new T.CircleGeometry(17.5, 48); dg.rotateY(Math.PI / 2);
      const dm = this._m(dg, eg, id, 'disp', { p: [0.8, 0, 0], layer: 'face', col: '#ffffff', r: 0.4 });
      dm.material.map = tex; dm.material.emissive = new T.Color('#ffffff'); dm.material.emissiveMap = tex; dm.material.emissiveIntensity = 0.55; dm.userData.disp = true;
      const lens = new T.SphereGeometry(19, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2); lens.rotateZ(-Math.PI / 2); lens.scale(0.42, 1, 1);
      this._m(lens, eg, 'HD-04', 'optic', { p: [0.5, 0, 0], layer: 'face', op: 0.28, r: 0.05, mt: 0.1 });
      const rim = new T.TorusGeometry(19.5, 2.2, 10, 40); rim.rotateY(Math.PI / 2);
      this._m(rim, eg, 'HD-04', 'tpu', { p: [0.5, 0, 0], layer: 'face', ck: 'accent' });
      const lidG = new T.Group(); lidG.position.set(-1, 0, 0); eg.add(lidG);
      const lg = new T.SphereGeometry(21, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2); lg.rotateZ(-Math.PI / 2); lg.scale(0.6, 1, 1);
      this._m(lg, lidG, 'HD-05', 'fur', { layer: 'face', ck: 'accent', map: F, lid: true, ds: true });
      this._m(this._box(3, 3, 24), lidG, 'HD-05', 'steel', { p: [-2, 20, 0], lid: true });
      this.eyes.push({ side: side, cvs: cvs, ctx: cvs.getContext('2d'), tex: tex, lid: lidG, hash: '' });
    });
    this._m(this._box(16, 12, 22), head, 'HD-05', 'act', { p: [30, 42, 0], lid: true });
    this._m(this._cyl(1.5, 66, 'z'), head, 'HD-05', 'steel', { p: [44, 32, 0], lid: true });
    // camera + shutter
    const cdir = new T.Vector3(1, 0.4, 0); const cp = surf(cdir);
    this._m(this._cyl(5, 8, 'x'), head, 'HD-06', 'pcb', { p: [cp.x - 2, cp.y, 0], layer: 'face', col: '#0e1116', r: 0.15, sensor: true });
    this._m(this._box(10, 14, 18), head, 'HD-06', 'pcb', { p: [cp.x - 12, cp.y, 0], sensor: true });
    this.shutter = this._m(this._box(2, 13, 14), head, 'EL-08', 'pa', { p: [cp.x + 3, cp.y + 13, 0], layer: 'face', col: '#2a2f37' });
    this.camPos = new T.Vector3(cp.x + 2, cp.y, 0);
    // mics
    this.micPos = [[20, 54, -22], [20, 54, 22], [-30, 46, -30], [-30, 46, 30]];
    this.micPos.forEach(q => this._m(this._cyl(3, 2), head, 'HD-07', 'pcb', { p: q, col: '#c7ccd3', sensor: true }));
    // head tactile pads
    [['forehead', [56, 28, 0], [6, 14, 22], [90, 30, 0]], ['top', [2, 56, 0], [30, 3, 26], [0, 80, 0]], ['cheek', [36, -10, -54], [14, 14, 3], [0, 0, -70]], ['cheek', [36, -10, 54], [14, 14, 3], [0, 0, 70]], ['chin', [36, -46, 0], [18, 3, 16], [0, -80, 0]]].forEach(z => {
      this._m(this._ell(z[2][0], z[2][1], z[2][2], 18), head, 'SN-01', 'pcb', { p: z[1], zone: z[0], sensor: true, col: '#7d8794', ex: z[3] });
    });
    // ears
    this.ears = [];
    [-1, 1].forEach(side => {
      const id = side < 0 ? 'EAR-01' : 'EAR-02';
      const piv = new T.Group(); piv.position.set(6, 46, side * 33); piv.rotation.x = side * 0.3; head.add(piv); this._axes(piv);
      const sw = new T.Group(); piv.add(sw); const fl = new T.Group(); sw.add(fl);
      const eg = new T.ConeGeometry(25, 48, 28); eg.translate(0, 24, 0); eg.scale(0.42, 1, 1);
      this._m(eg, fl, id, 'fur', { layer: 'ext', ck: 'accent', map: F });
      const ig = new T.ConeGeometry(16, 34, 20); ig.translate(0, 17, 0); ig.scale(0.22, 1, 1);
      this._m(ig, fl, id, 'fur', { layer: 'ext', ck: 'inner', p: [6.5, 4, 0] });
      const cg = new T.ConeGeometry(18, 40, 3); cg.translate(0, 20, 0); cg.scale(0.12, 1, 1);
      this._m(cg, fl, id, 'tpu', { p: [0, 2, 0] });
      this._m(this._box(12, 22, 23), piv, id, 'act', { p: [0, -16, 0] });
      this.ears.push({ side: side, sw: sw, fl: fl });
    });
  }

  _buildLegs(body) {
    const T = window.THREE; const F = this._furTex;
    this.legs = {};
    LEGS.forEach(L => {
      const s = L.side, k = L.k;
      const furO = (ck, p) => ({ layer: 'ext', ck: ck, map: F, col: '#ffffff', p: p });
      this._m(this._cyl(19, 34, 'x'), body, 'LG-01.' + k, 'act', { p: [L.x + (L.front ? -32 : 32), GEO.hipY, s * 30], ex: [L.front ? -50 : 50, 0, -s * 20] });
      const hip = new T.Group(); hip.position.set(L.x, GEO.hipY, L.z); body.add(hip);
      const aa = new T.Group(); hip.add(aa); this._axes(aa); this.groupsEx.push({ g: aa, v: [0, -10, s * 95] });
      this._m(this._cyl(22, 26, 'z'), aa, 'LG-02.' + k, 'act', { p: [0, 0, s * 14], ex: [0, 0, s * 40] });
      this._m(this._cyl(21, 24, 'z'), aa, 'LG-03.' + k, 'act', { p: [0, 0, s * 40], ex: [0, 0, s * 80] });
      this._m(this._ell(44, 52, 34), aa, 'EXT-04', 'fur', furO('body', [0, -14, s * 30]));
      const fe = new T.Group(); aa.add(fe); this._axes(fe);
      const mk = this._m(this._box(4, 14, 3), fe, 'LG-02.' + k, 'steel', { p: [0, 15, s * 28], col: '#f0b429', ex: [0, 0, s * 40] }); mk.castShadow = false;
      this._m(this._box(20, 80, 16), fe, 'LG-04.' + k, 'al', { p: [0, -40, s * 27], ex: [0, 0, s * 20] });
      this._m(this._box(5, 82, 5), fe, 'LG-03.' + k, 'steel', { p: [-13, -40, s * 40], ex: [0, 0, s * 80] });
      this._m(this._ell(24, 52, 22), fe, 'EXT-04', 'fur', furO('body', [0, -40, s * 27]));
      const knee = new T.Group(); knee.position.set(0, -GEO.L1, 0); fe.add(knee); this._axes(knee);
      this._m(this._cyl(10, 22, 'z'), knee, 'LG-04.' + k, 'steel', { p: [0, 0, s * 27], ex: [0, 0, s * 20] });
      this._m(this._cyl(6, 85, null, 8), knee, 'LG-05.' + k, 'al', { p: [0, -42.5, s * 27], ex: [0, -50, s * 20] });
      this._m(this._ell(17, 50, 16), knee, 'EXT-04', 'fur', furO('body', [0, -44, s * 27]));
      const paw = new T.Group(); paw.position.set(0, -GEO.L2, 0); knee.add(paw);
      this._m(this._ell(25, 8, 21), paw, 'LG-06.' + k, 'sil', { p: [6, -8, s * 27], layer: 'face', ex: [0, -100, s * 20] });
      this._m(this._cyl(10, 2), paw, 'LG-06.' + k, 'pcb', { p: [6, -12.5, s * 27], sensor: true, ex: [0, -100, s * 20] });
      this._m(this._ell(24, 13, 21), paw, 'EXT-04', 'fur', furO('accent', [6, -1, s * 27]));
      this.legs[k] = { L: L, aa: aa, fe: fe, knee: knee, paw: paw, th1: 0, th2: 0, ab: 0, contact: true };
    });
  }

  _buildTail(body) {
    const T = window.THREE; const F = this._furTex;
    const base = new T.Group(); base.position.set(-178, 24, 0); body.add(base); this.tailBase = base; this._axes(base); this.groupsEx.push({ g: base, v: [-90, 20, 0] });
    this.tail = []; let parent = base;
    for (let i = 0; i < GEO.tailN; i++) {
      const g = new T.Group(); g.position.set(i === 0 ? 0 : -GEO.tailSeg, 0, 0); parent.add(g); parent = g;
      const r = 9 - i * 0.45;
      this._m(this._cyl(r, 7, 'x'), g, 'TL-02', 'pa', { p: [-11.5, 0, 0], col: '#d9d4c7' });
      this._m(this._cyl(2.2, GEO.tailSeg, 'x'), g, 'TL-02', 'steel', { p: [-11.5, 0, 0] });
      this._m(this._cyl(0.7, GEO.tailSeg, 'x', null, 6), g, 'TL-03', 'cord', { p: [-11.5, 0, r - 1.5] });
      this._m(this._cyl(0.7, GEO.tailSeg, 'x', null, 6), g, 'TL-03', 'cord', { p: [-11.5, 0, -(r - 1.5)] });
      this._m(this._cyl(0.7, GEO.tailSeg, 'x', null, 6), g, 'TL-03', 'cord', { p: [-11.5, r - 1.5, 0] });
      this._m(this._ell(18, r + 7, r + 7, 18), g, 'EXT-04', 'fur', { layer: 'ext', ck: i >= 7 ? 'accent' : 'body', map: F, col: '#ffffff', p: [-11.5, 0, 0] });
      this.tail.push(g);
    }
  }

  _buildWorld() {
    const T = window.THREE; const sc = this.scene;
    // Human
    const hu = new T.Group(); const hm = new T.MeshStandardMaterial({ color: '#a9b0ba', roughness: 0.8 });
    const add = (g, p) => { const m = new T.Mesh(g, hm); m.position.set(p[0], p[1], p[2]); m.castShadow = true; hu.add(m); };
    add(new T.CylinderGeometry(55, 45, 800, 16), [0, 1240, 0]); add(new T.SphereGeometry(105, 20, 16), [0, 1640, 0]);
    add(new T.CylinderGeometry(40, 32, 840, 12), [0, 420, -70]); add(new T.CylinderGeometry(40, 32, 840, 12), [0, 420, 70]);
    add(new T.CylinderGeometry(30, 24, 700, 12), [0, 1190, -175]); add(new T.CylinderGeometry(30, 24, 700, 12), [0, 1190, 175]);
    add(new T.BoxGeometry(260, 60, 110), [40, 30, -70]); add(new T.BoxGeometry(260, 60, 110), [40, 30, 70]);
    hu.userData = { layer: 'human' }; sc.add(hu); this.human = hu;
    const hb = new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(320, 1800, 500)), new T.LineBasicMaterial({ color: '#1f8a4c' })); hb.position.y = 900; hu.add(hb); hb.userData = { layer: 'fx' }; this.fx.push(hb);
    // Dock
    const dock = new T.Group(); dock.position.set(-370, 0, 0); sc.add(dock); this.dock = dock;
    this._m(this._box(400, 12, 230), dock, 'PW-04', 'pa', { p: [0, 6, 0], layer: 'dock', col: '#d4d8de' });
    const ramp = this._m(this._box(60, 6, 230), dock, 'PW-04', 'pa', { p: [226, 4, 0], layer: 'dock', col: '#c8cdd4' }); ramp.rotation.z = 0.12;
    this._m(this._box(22, 140, 230), dock, 'PW-04', 'pa', { p: [-210, 70, 0], layer: 'dock', col: '#d4d8de' });
    this._m(this._box(3, 22, 70), dock, 'PW-04', 'pcb', { p: [-198, 112, 0], layer: 'dock', col: '#20242c' });
    this._m(this._box(30, 3, 16), dock, 'PW-04', 'steel', { p: [0, 13.5, -22], layer: 'dock', col: '#c9a54a', mt: 0.8 });
    this._m(this._box(30, 3, 16), dock, 'PW-04', 'steel', { p: [0, 13.5, 22], layer: 'dock', col: '#c9a54a', mt: 0.8 });
    // FX: camera cone (attached to head), ToF, cliff, mics
    const fxm = (c, o) => new T.MeshBasicMaterial({ color: c, transparent: true, opacity: o, depthWrite: false, side: T.DoubleSide });
    const cone = (len, ang, c, o) => { const g = new T.ConeGeometry(len * Math.tan(ang * D2R), len, 36, 1, true); g.translate(0, -len / 2, 0); const m = new T.Mesh(g, fxm(c, o)); m.userData = { layer: 'fx' }; this.fx.push(m); return m; };
    const cc = cone(700, 32, '#2f6fd0', 0.1); cc.rotation.z = Math.PI / 2; cc.position.copy(this.camPos); this.head.add(cc); this.camCone = cc;
    [-24, 24].forEach(z => { const c = cone(420, 12, '#e07b2c', 0.14); c.rotation.z = Math.PI / 2; c.position.set(178, -22, z); this.body.add(c); });
    [-30, 30].forEach(z => { const c = cone(110, 14, '#9b5de5', 0.2); c.position.set(150, -58, z); this.body.add(c); });
    this.micPos.forEach(q => { const t = new T.Mesh(new T.TorusGeometry(9, 1.2, 6, 24), fxm('#7a5aa8', 0.7)); t.rotation.x = Math.PI / 2; t.position.set(q[0], q[1] + 4, q[2]); t.userData = { layer: 'fx' }; this.fx.push(t); this.head.add(t); });
    // tracking ball
    const ball = new T.Mesh(new T.SphereGeometry(32, 20, 14), new T.MeshStandardMaterial({ color: '#e9c46a', roughness: 0.5 })); ball.castShadow = true; ball.userData = { layer: 'ball' }; sc.add(ball); this.ball = ball;
    const bb = new T.LineSegments(new T.EdgesGeometry(new T.BoxGeometry(84, 84, 84)), new T.LineBasicMaterial({ color: '#c0392b' })); bb.userData = { layer: 'fx' }; ball.add(bb); this.fx.push(bb);
    // obstacle
    const ob = new T.Mesh(this._box(220, 130, 200), new T.MeshStandardMaterial({ color: '#cfd3d9', roughness: 0.8 })); ob.position.set(700, 65, 260); ob.castShadow = true; ob.userData = { layer: 'fx' }; sc.add(ob); this.fx.push(ob);
    const obe = new T.LineSegments(new T.EdgesGeometry(this._box(226, 136, 206)), new T.LineBasicMaterial({ color: '#e07b2c' })); obe.userData = { layer: 'fx' }; ob.add(obe); this.fx.push(obe);
    // nav path + grid
    const pts = [new T.Vector3(200, 3, 0), new T.Vector3(450, 3, -150), new T.Vector3(300, 3, -450), new T.Vector3(-150, 3, -380), new T.Vector3(-370, 3, -120), new T.Vector3(-370, 3, 0)];
    const curve = new T.CatmullRomCurve3(pts); const lg = new T.BufferGeometry().setFromPoints(curve.getPoints(80));
    const line = new T.Line(lg, new T.LineDashedMaterial({ color: '#1f6f8b', dashSize: 30, gapSize: 18 })); line.computeLineDistances(); line.userData = { layer: 'fx' }; sc.add(line); this.fx.push(line);
    const ng = new T.GridHelper(2400, 24, 0x2a9d8f, 0x2a9d8f); ng.material.transparent = true; ng.material.opacity = 0.25; ng.position.y = 1.5; ng.userData = { layer: 'fx' }; sc.add(ng); this.fx.push(ng);
    // contact markers
    this.contactM = LEGS.map(() => { const m = new T.Mesh(new T.RingGeometry(14, 22, 28), new T.MeshBasicMaterial({ color: '#1d8a4c', transparent: true, opacity: 0.85, depthWrite: false, side: T.DoubleSide })); m.rotation.x = -Math.PI / 2; m.userData = { layer: 'helper' }; sc.add(m); return m; });
  }

  _buildIndex() {
    this.byId = {}; this.meshes.forEach(m => { const id = m.userData.id; (this.byId[id] = this.byId[id] || []).push(m); });
  }

  /* ---------------- selection & visuals ---------------- */
  _selSet() {
    const s = this.state.sel; if (!s) return null;
    const ids = Object.keys(this.byId || {}); const out = new Set();
    const isAsm = ASM.some(a => a[0] === s);
    ids.forEach(id => {
      const base = id.split('.')[0]; const c = this.CI[base];
      if (id === s) out.add(id);
      else if (isAsm && c && c.a === s) out.add(id);
      else if (/^LG-(FL|FR|RL|RR)$/.test(s) && id.endsWith('.' + s.slice(3))) out.add(id);
      else if (s.indexOf('.') < 0 && base === s) out.add(id);
    });
    return out;
  }

  _subOf(id) {
    const ex = this.state.exSub; if (ex === 'all') return true;
    const base = id.split('.')[0]; const c = this.CI[base]; if (!c) return false;
    if (ex === 'HD') return c.a === 'HD' || c.a === 'EAR' || base === 'SN-01' && false || base === 'EL-08';
    if (ex === 'NK') return c.a === 'NK';
    if (ex === 'LEG') return id.endsWith('.FL');
    if (ex === 'TL') return c.a === 'TL';
    if (ex === 'PW') return c.a === 'PW' || base === 'CH-03' || base === 'TH-03';
    return true;
  }

  _applyVisual() {
    const T = window.THREE; const s = this.state; const M = s.mode; const sch = SCHEMES[s.scheme];
    const sel = this._selSet();
    const extSt = s.extOv !== 'auto' ? s.extOv : ({ A: 'solid', B: 'ghost', C: 'hide', D: 'hide', E: 'ghost', F: 'ghost', G: 'ghost' })[M];
    const showDock = s.showDock || s.demo === 'dock' || (M === 'D' && s.exSub === 'PW') || (s.sel === 'PW-04');
    const subOn = M === 'D' && s.exSub !== 'all';
    this.meshes.forEach(m => {
      const u = m.userData; const mat = m.material; let vis = true, op = 1;
      if (u.layer === 'ext') { if (extSt === 'hide') vis = false; else if (extSt === 'ghost') op = M === 'G' ? 0.3 : 0.14; }
      else if (u.layer === 'foam') { if (M === 'G') op = 0.35; else if (extSt === 'ghost' && M !== 'F') op = 0.06; else vis = false; }
      else if (u.layer === 'int') { if (M === 'A' && extSt === 'solid') vis = false; }
      else if (u.layer === 'dock') { vis = showDock; }
      if (u.lid && !s.mechLids) vis = false;
      if (u.id === 'EL-08' && m === this.shutter) vis = vis && (s.camOff || M !== 'A' || true);
      if (subOn && u.layer !== 'dock') { if (!this._subOf(u.id)) vis = false; else if (u.layer === 'ext' || u.layer === 'foam') vis = false; }
      if (M === 'F' && u.layer === 'int' && !u.sensor) op = Math.min(op, 0.25);
      let selected = false;
      if (sel) {
        selected = sel.has(u.id);
        if (s.isolate) { vis = selected; if (selected) op = s.selOp; }
        else if (selected) { vis = true; op = s.selOp; }
        else if (u.layer !== 'dock') op = Math.min(op, 0.22);
      }
      op *= u.bop;
      m.visible = vis;
      mat.transparent = op < 0.999; mat.opacity = op; mat.depthWrite = op >= 0.999;
      let col = u.col;
      if (u.ck) col = sch[u.ck];
      if (M === 'G' && u.layer !== 'dock' && FAM[u.fam]) col = FAM[u.fam].c;
      if (M === 'F' && u.zone) col = ZONEC[u.zone];
      if (u.disp) col = '#ffffff';
      mat.color.set(col);
      if (!u.disp) {
        if (selected) { mat.emissive.set('#2f6fd0'); mat.emissiveIntensity = 0.45; }
        else if (M === 'F' && u.sensor) { mat.emissive.set(u.zone ? ZONEC[u.zone] : '#e07b2c'); mat.emissiveIntensity = 0.35; }
        else if (this._flash && u.zone && this._flash.zone === u.zone) { mat.emissive.set('#ffffff'); mat.emissiveIntensity = 0.5; }
        else { mat.emissive.set('#000000'); mat.emissiveIntensity = 0; }
      }
      if (u.map !== undefined) {}
      if (M === 'G') { if (mat.map && !u.disp) { mat._m = mat.map; mat.map = null; mat.needsUpdate = true; } }
      else if (mat._m) { mat.map = mat._m; mat._m = null; mat.needsUpdate = true; }
    });
    const fxOn = M === 'F';
    this.fx.forEach(f => { f.visible = fxOn; });
    if (this.camCone) this.camCone.visible = fxOn && !s.camOff;
    this.helpers.forEach(h => { h.visible = s.showAxes || M === 'E' && s.showAxes; });
    this.conf.forEach(c => { c.visible = s.showConf && M !== 'A'; });
    const needHuman = s.showHuman || fxOn || ['greet', 'follow'].indexOf(s.demo) >= 0;
    this.human.visible = needHuman;
    this.ball.visible = fxOn || this._exprNow === 'track';
    this.dock.visible = showDock;
    if (this.shutter) { this.shutter.position.y = this.shutter.userData.base.y + (s.camOff ? -13 : 0); this.shutter.position.x = this.shutter.userData.base.x + (s.camOff ? 0 : -14); }
  }

  _pick(e) {
    const T = window.THREE; const cv = this._canvas; const rc = cv.getBoundingClientRect();
    const v = new T.Vector2(((e.clientX - rc.left) / rc.width) * 2 - 1, -((e.clientY - rc.top) / rc.height) * 2 + 1);
    const ray = new T.Raycaster(); ray.setFromCamera(v, this.camera);
    const cand = this.meshes.filter(m => { if (!m.visible) return false; let p = m.parent; while (p) { if (!p.visible) return false; p = p.parent; } return m.material.opacity > 0.05 || (this.state.touchMode && m.userData.layer === 'ext'); });
    const hits = ray.intersectObjects(cand, false);
    if (!hits.length) { if (!this.state.touchMode) this.setState({ sel: null, isolate: false }); return; }
    const h = hits[0]; const u = h.object.userData;
    if (this.state.touchMode) { const z = this._zoneOf(h); if (z) this._touch(z); return; }
    this.setState({ sel: u.id, isolate: false, selOp: 1 });
  }

  _zoneOf(h) {
    const id = h.object.userData.id; const base = id.split('.')[0];
    if (base === 'EAR-01') return 'earL'; if (base === 'EAR-02') return 'earR';
    if (base === 'TL-02' || base === 'TL-03') return 'tail';
    if (/^LG-/.test(base)) return 'paw';
    if (h.object.userData.zone) { const z = h.object.userData.zone; if (z === 'cheek' || z === 'side') { return z + (h.point.clone().sub(new window.THREE.Vector3()).z, (this.body.worldToLocal(h.point.clone()).z < 0 ? 'L' : 'R')); } return z; }
    let p = h.object; let inHead = false, inTail = false, inLeg = false;
    while (p) { if (p === this.head) inHead = true; if (p === this.tailBase) inTail = true; if (p.parent === this.body && this.legs && Object.values(this.legs).some(l => l.aa.parent === p)) inLeg = true; p = p.parent; }
    if (inTail) return 'tail';
    if (inLeg && h.object.userData.ck === 'accent') return 'paw';
    if (inLeg) return 'sideL'.slice(0, 4) + (this.body.worldToLocal(h.point.clone()).z < 0 ? 'L' : 'R');
    if (inHead) {
      const q = this.head.worldToLocal(h.point.clone());
      if (q.y < -22) return 'chin';
      if (q.y > 36) return 'top';
      if (Math.abs(q.z) > 30) return q.z < 0 ? 'cheekL' : 'cheekR';
      return 'forehead';
    }
    const b = this.body.worldToLocal(h.point.clone());
    if (b.y > 22) return 'back';
    return b.z < 0 ? 'sideL' : 'sideR';
  }

  _touch(z) {
    const r = TOUCHR[z]; if (!r || this.state.estop) return;
    const zoneKey = z.replace(/[LR]$/, '').replace('ear', 'ear');
    this._flash = { zone: zoneKey === 'earL' ? 'ear' : zoneKey, t: 1.2 };
    this._react = { keys: r.keys, t: 0, dur: Math.max.apply(null, r.keys.map(k => k[0])) + 1.5 };
    this.setState({ touchMsg: U('s1214') + (ZONEN[zoneKey] || ZONEN[z.replace(/[LR]$/, '')] || z) + '. ' + r.msg + U('s1215') });
  }

  /* ---------------- motion ---------------- */
  _script() {
    const d = this.state.demo;
    if (d === 'manual') return { dur: 1, loop: true, keys: [K(0, Object.assign({}, this.state.man))] };
    return SCRIPTS[d] || SCRIPTS.idle;
  }

  _setDemo(k, silent) {
    const sc = SCRIPTS[k];
    this.t = 0; this._react = null;
    if (sc && sc.resetRoot && this.P) { this.P.rootX = 0; this.P.rootZ = 0; this.P.heading = 0; this.P.rootY = 0; this.V.rootX = this.V.rootZ = this.V.heading = 0; this.T.rootX = 0; this.T.rootZ = 0; this.T.heading = 0; this.T.rootY = 0; }
    if (sc && sc.human && this.P) { const k0 = sc.keys[0][1]; if (k0.humanX != null) { this.P.humanX = this.T.humanX = k0.humanX; this.P.humanZ = this.T.humanZ = k0.humanZ; } }
    if (!silent) this.setState({ demo: k, playing: true, estop: false, touchMsg: '' });
  }

  _targets() {
    const sc = this._script(); const tg = Object.assign({}, DEF); let expr = 'neutral'; let slow = 0; let charge = 0;
    ROOTK.forEach(k => { tg[k] = this.T[k] != null ? this.T[k] : this.P[k]; });
    if (this.state.demo === 'manual') { Object.assign(tg, this.state.man); }
    let touchZ = null;
    sc.keys.forEach(kk => { if (kk[0] <= this.t + 1e-6) { const o = kk[1]; Object.keys(o).forEach(n => { if (n === 'expr') expr = o.expr; else if (n === 'slow') slow = o.slow; else if (n === 'charge') charge = o.charge; else if (n === 'touch') touchZ = { z: o.touch, t0: kk[0] }; else tg[n] = o[n]; }); } });
    if (touchZ) {
      const r = TOUCHR[touchZ.z]; const lt = this.t - touchZ.t0;
      r.keys.forEach(kk => { if (kk[0] <= lt) Object.keys(kk[1]).forEach(n => { if (n === 'expr') expr = kk[1].expr; else if (n === 'slow') slow = 1; else tg[n] = kk[1][n]; }); });
      if (this._lastTZ !== touchZ.z + touchZ.t0) { this._lastTZ = touchZ.z + touchZ.t0; this._flash = { zone: touchZ.z.replace(/[LR]$/, '') === 'ear' ? 'ear' : touchZ.z.replace(/[LR]$/, ''), t: 1.2 }; this.setState({ touchMsg: U('s1216') + r.msg }); }
    }
    if (this._react) {
      const rt = this._react.t;
      this._react.keys.forEach(kk => { if (kk[0] <= rt) Object.keys(kk[1]).forEach(n => { if (n === 'expr') expr = kk[1].expr; else if (n === 'slow') slow = 1; else tg[n] = kk[1][n]; }); });
    }
    if (this.state.estop) Object.assign(tg, LIE, { walk: 0, turn: 0, fly: 0, purr: 0, yaw: 0, pitch: -6, roll: 0, tailWave: 0, earL: -10, earR: -10, lid: 0.3 }), expr = 'sleepy';
    if (this.state.expr !== 'auto') expr = this.state.expr;
    return { tg: tg, expr: expr, slow: slow, charge: charge, sc: sc };
  }

  _frame(dt) {
    const s = this.state; const T = window.THREE;
    const sp = s.playing && !s.estop ? s.speed : (s.estop ? 1 : 0);
    const sdt = dt * sp;
    const sc = this._script();
    if (s.playing && !s.estop) {
      this.t += sdt;
      if (this.t > sc.dur) {
        if (sc.loop) { this.t = 0; const h = ((this.P.heading % 360) + 360) % 360; this.P.heading = h > 180 ? h - 360 : h; this.T.heading = this.P.heading; if (sc.resetRoot) this._setDemo(s.demo, true); }
        else this.t = sc.dur;
      }
    }
    if (this._react) { this._react.t += sdt || dt; if (this._react.t > this._react.dur) { this._react = null; } }
    if (this._flash) { this._flash.t -= dt; if (this._flash.t <= 0) { this._flash = null; this._applyVisual(); } }
    const R = this._targets(); this._exprNow = R.expr; this.T = Object.assign(this.T, R.tg);
    const eff = sdt > 0 ? sdt : (s.estop ? dt : 0);
    if (eff > 0) Object.keys(DOF).forEach(k => {
      const tgv = R.tg[k]; if (tgv == null) return;
      const w = DOF[k][0] * (k === 'lid' && R.slow ? 0.35 : 1); const vmax = DOF[k][1] * (k === 'lid' && R.slow ? 0.25 : 1) * (s.estop && (k === 'bodyH') ? 0.6 : 1);
      let x = this.P[k], v = this.V[k] || 0;
      let a = w * w * (tgv - x) - 2 * w * v; const amax = vmax * w * 1.6; a = Math.max(-amax, Math.min(amax, a));
      v += a * eff; v = Math.max(-vmax, Math.min(vmax, v)); x += v * eff;
      this.P[k] = x; this.V[k] = v;
    });
    // blink
    let blink = 0;
    if (eff > 0 && !s.estop) { this.nextBlink -= eff; if (this.nextBlink <= 0) { this.blinkT = 0.22; this.nextBlink = 2.5 + Math.random() * 3.5; } }
    if (this.blinkT > 0) { this.blinkT -= dt; blink = Math.sin(Math.max(0, this.blinkT) / 0.22 * Math.PI); }
    const P = this.P;
    let lid = Math.min(1, Math.max(P.lid, blink, R.expr === 'sleepy' ? 0.5 : 0));
    // gaze override for contact/track
    let gx = P.gx, gy = P.gy;
    const tnow = performance.now() / 1000;
    if (this.ball) this.ball.position.set(this.catRoot.position.x + Math.cos(this.P.heading * D2R) * 520 + Math.sin(tnow * 0.7) * 260 * Math.sin(this.P.heading * D2R), 200 + Math.sin(tnow * 1.3) * 90, this.catRoot.position.z - Math.sin(this.P.heading * D2R) * 520 + Math.sin(tnow * 0.7) * 260 * Math.cos(this.P.heading * D2R));
    if (R.expr === 'contact' || R.expr === 'track') {
      const tgt = R.expr === 'contact' ? (this.human.visible && ['greet', 'follow'].indexOf(s.demo) >= 0 ? this.human.position.clone().add(new T.Vector3(0, 1640, 0)) : this.camera.position.clone()) : this.ball.position.clone();
      this.head.updateWorldMatrix(true, false); const q = this.head.worldToLocal(tgt);
      gx = Math.max(-1, Math.min(1, Math.atan2(q.z, q.x) / 0.7)); gy = Math.max(-1, Math.min(1, Math.atan2(q.y, Math.hypot(q.x, q.z)) / 0.6));
    }
    // apply pose
    const root = this.catRoot;
    root.position.set(P.rootX, P.rootY, P.rootZ); root.rotation.y = P.heading * D2R;
    const gaitAmp = Math.max(0, Math.min(1, Math.max(Math.abs(P.walk), Math.abs(P.turn))));
    this.gait += eff * 0.85 * (gaitAmp > 0.02 ? 1 : 0);
    const ph = this.gait;
    const purrV = P.purr > 0.05 ? Math.sin(tnow * 160) * 0.5 * P.purr : 0;
    this.body.position.y = P.bodyH + purrV + Math.sin(ph * Math.PI * 4) * 2 * gaitAmp;
    this.body.rotation.z = P.bodyP * D2R; this.body.rotation.x = Math.sin(ph * Math.PI * 2) * 0.02 * gaitAmp;
    this.neckYaw.rotation.y = P.yaw * D2R; this.neckPitch.rotation.z = P.pitch * D2R; this.neckRoll.rotation.x = P.roll * D2R;
    // ears
    this.ears.forEach(e => { const d = e.side < 0 ? P.earL : P.earR; e.sw.rotation.y = e.side * Math.min(0, d) * D2R * 1.4; e.fl.rotation.x = e.side * Math.max(0, -d) * D2R * 0.9; e.fl.rotation.z = -Math.max(0, d) * D2R * 0.6; });
    // tail
    this.tailBase.rotation.z = -P.tailUp * D2R; this.tailBase.rotation.y = P.tailSide * D2R;
    const tw = (performance.now() / 1000);
    this.tail.forEach((g, i) => { if (i === 0) return; const f = i / 45; g.rotation.z = -P.tailCurl * D2R * f * 1; g.rotation.y = P.tailWrap * D2R * f + (P.tailWave * D2R / 5) * (0.4 + i / 9) * Math.sin(2 * Math.PI * P.tailFreq * tw * (s.playing ? 1 : 0) - i * 0.55); });
    // explode
    const exT = s.mode === 'D' ? s.explode : 0;
    if (Math.abs(this.exCur - exT) > 0.002) { this.exCur += (exT - this.exCur) * Math.min(1, dt * 6); this._placeExplode(); }
    // legs
    const p = P.bodyP * D2R, cp = Math.cos(p), spn = Math.sin(p);
    const contacts = [];
    LEGS.forEach(L => {
      const lg = this.legs[L.k];
      const lph = ((ph + L.ph) % 1 + 1) % 1; let dx = 0, lift = 0;
      const S = 70;
      const tsign = L.side * (P.turn || 0);
      const stride = S * Math.max(-1, Math.min(1, P.walk + tsign * 0.9));
      if (gaitAmp > 0.02) { if (lph < 0.75) { dx = stride / 2 - stride * (lph / 0.75); } else { const u = (lph - 0.75) / 0.25; dx = -stride / 2 + stride * (u * u * (3 - 2 * u)); lift = 28 * gaitAmp * Math.sin(Math.PI * u); } }
      let fx = L.x + dx + (L.front ? P.ffx : P.frx), fy = lift + GEO.paw;
      if (L.k === 'FR' && P.fly > 0.01) { fx += 45 * P.fly; fy += 70 * P.fly; }
      const hx = L.x * cp - GEO.hipY * spn, hy = P.bodyH + L.x * spn + GEO.hipY * cp;
      const vx = fx - hx, vy = fy - hy;
      const bx = vx * cp + vy * spn, by = -vx * spn + vy * cp;
      const L1 = GEO.L1, L2 = GEO.L2; let d = Math.hypot(bx, by); d = Math.max(Math.abs(L1 - L2) + 1, Math.min(L1 + L2 - 0.01, d));
      const ck = (L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2); const th2 = Math.PI - Math.acos(Math.max(-1, Math.min(1, ck)));
      const phi = Math.atan2(bx, -by); const al = Math.acos(Math.max(-1, Math.min(1, (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d))));
      const th1 = phi - al;
      const ab = L.side * 3 * D2R * gaitAmp * Math.sin(ph * Math.PI * 2) + (P.turn ? L.side * 4 * D2R * Math.abs(P.turn) : 0);
      lg.aa.rotation.x = ab; lg.fe.rotation.z = th1; lg.knee.rotation.z = th2; lg.paw.rotation.z = -(th1 + th2) - p;
      lg.th1 = th1; lg.th2 = th2; lg.ab = ab;
      lg.paw.updateWorldMatrix(true, false); const wp = new T.Vector3(); lg.paw.getWorldPosition(wp);
      const groundY = (P.rootY > 6 && s.demo === 'dock' && Math.abs(wp.x - this.dock.position.x) < 200) ? 12 : 0;
      const con = wp.y - GEO.paw < groundY + 3 + 3; lg.contact = con; contacts.push(con);
      const cm = this.contactM[LEGS.indexOf(L)]; cm.position.set(wp.x, groundY + 1, wp.z); cm.material.color.set(con ? '#1d8a4c' : '#e07b2c'); cm.visible = s.showContact && (s.mode === 'E' || s.mode === 'B' || s.mode === 'C' || gaitAmp > 0.05) && s.mode !== 'D';
    });
    // eyes
    this.eyes.forEach(e => this._drawEye(e, gx, gy, lid, R.expr));
    // mechanical lids
    this.eyes.forEach(e => { e.lid.rotation.z = (1 - (s.mechLids ? lid : 0)) * 118 * D2R; });
    // human
    if (this.human.visible) {
      if (['greet', 'follow'].indexOf(s.demo) >= 0) { this.human.position.set(P.humanX, 0, P.humanZ); this.human.rotation.y = Math.atan2(P.humanZ - P.rootZ, -(P.humanX - P.rootX)) - Math.PI / 2; }
      else if (s.mode === 'F') { this.human.position.set(root.position.x + 1150, 0, root.position.z - 420); this.human.rotation.y = 0; }
      else { this.human.position.set(root.position.x + 500, 0, root.position.z + 650); this.human.rotation.y = -0.5; }
    }
    // follow camera
    if (s.follow) { const d = root.position.clone().sub(this._prevRoot); if (d.lengthSq() > 0) { this.camera.position.add(d); this.controls.target.add(d); } }
    this._prevRoot.copy(root.position);
    this.dl.position.set(root.position.x + 700, 1400, root.position.z + 600); this.dl.target.position.copy(root.position);
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
    // UI throttle
    this._uiT += dt;
    if (this._uiT > 0.18) {
      this._uiT = 0;
      const fl = this.legs[s.focusLeg];
      const live = { t: this.t, dur: sc.dur, neck: [P.yaw, P.pitch, P.roll], bH: P.bodyH, bP: P.bodyP, purr: P.purr > 0.3, charge: R.charge > 0 && s.demo === 'dock',
        joints: [[U('s1217'), fl.ab / D2R, 'LG-01'], [U('s1218'), fl.th1 / D2R, 'LG-02'], [U('s1219'), fl.th2 / D2R, 'LG-03']], contacts: LEGS.map(L => this.legs[L.k].contact) };
      this.setState({ live: live });
    }
  }

  _placeExplode() {
    const f = this.exCur;
    this.meshes.forEach(m => { const u = m.userData; if (!u.ex) return; m.position.copy(u.base).addScaledVector(u.ex, f); });
    if (!this._gBase) this._gBase = this.groupsEx.map(x => x.g.position.clone());
    const sub = this.state.exSub;
    this.groupsEx.forEach((x, i) => { const k = sub === 'all' ? 1 : 0.35; x.g.position.copy(this._gBase[i]).add(new window.THREE.Vector3(x.v[0], x.v[1], x.v[2]).multiplyScalar(f * k)); });
    this.tail.forEach((g, i) => { if (i > 0) g.position.x = -GEO.tailSeg - 16 * f; });
  }

  _drawEye(e, gx, gy, lid, expr) {
    const s = this.state; const sch = SCHEMES[s.scheme];
    const digLid = s.mechLids ? 0 : lid;
    const asym = expr === 'curious' && e.side < 0 ? 0.3 : 0;
    const key = [gx.toFixed(2), gy.toFixed(2), digLid.toFixed(2), expr, s.scheme, asym, s.mechLids].join('|');
    if (key === e.hash) return; e.hash = key;
    const g = e.ctx; const W = 256;
    g.fillStyle = '#080a0f'; g.fillRect(0, 0, W, W);
    const cx = 128 - gx * 40 * -e.side * 0 - gx * 40, cy = 128 - gy * 36;
    if (expr === 'happy') {
      g.strokeStyle = sch.rim; g.lineWidth = 24; g.lineCap = 'round'; g.beginPath(); g.arc(128, 160, 70, Math.PI * 1.15, Math.PI * 1.85); g.stroke();
    } else {
      let ir = 88, pr = 46;
      if (expr === 'curious') pr = 60; if (expr === 'surprise') { ir = 72; pr = 22; } if (expr === 'contact') pr = 58; if (expr === 'sleepy') pr = 42; if (expr === 'track') pr = 50;
      const gr = g.createRadialGradient(cx, cy, pr * 0.5, cx, cy, ir); gr.addColorStop(0, '#2f4a66'); gr.addColorStop(0.75, '#1a2a3c'); gr.addColorStop(1, sch.rim);
      g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, ir, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#030406'; g.beginPath(); g.ellipse(cx, cy, pr * 0.92, pr, 0, 0, Math.PI * 2); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.95)'; g.beginPath(); g.arc(cx - 30, cy - 32, expr === 'contact' ? 19 : 15, 0, Math.PI * 2); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.7)'; g.beginPath(); g.arc(cx + 24, cy + 26, 7, 0, Math.PI * 2); g.fill();
      const top = Math.max(digLid, asym);
      if (top > 0.01) { const yb = -20 + 300 * top; g.fillStyle = sch.accent; g.beginPath(); g.moveTo(0, 0); g.lineTo(W, 0); g.lineTo(W, yb - 18); g.quadraticCurveTo(128, yb + 22, 0, yb - 18); g.closePath(); g.fill(); }
      if (expr === 'contact') { g.fillStyle = '#080a0f'; g.beginPath(); g.moveTo(0, W); g.lineTo(W, W); g.lineTo(W, 222); g.quadraticCurveTo(128, 196, 0, 222); g.closePath(); g.fill(); }
    }
    e.tex.needsUpdate = true;
  }

  _view(k) {
    if (!this.camera) return; const T = window.THREE; const c = this.catRoot.position.clone().add(new T.Vector3(0, 170, 0));
    const P = { front: [1150, 230, 0], side: [0, 230, 1150], top: [0, 1350, 1], rear: [-1150, 230, 0], iso: [820, 560, 820], reset: [820, 560, 820] }[k];
    const h = this.catRoot.rotation.y; const v = new T.Vector3(P[0], P[1], P[2]).applyAxisAngle(new T.Vector3(0, 1, 0), k === 'iso' || k === 'reset' ? 0 : h);
    this.camera.position.copy(c).add(v); this.controls.target.copy(c); this.controls.update();
  }

  _setManual(k, v) {
    if (this.state.demo !== 'manual') {
      const man = {}; MAN.forEach(r => { man[r[0]] = Math.round((this.P ? this.P[r[0]] : DEF[r[0]]) * 100) / 100; }); man[k] = v;
      this.t = 0; this._react = null; this.setState({ demo: 'manual', man: man, playing: true, estop: false });
    } else { this.setState({ man: Object.assign({}, this.state.man, { [k]: v }) }); }
  }

  /* ---------------- exports ---------------- */
  _download(name, data, mime) {
    try { const blob = data instanceof Blob ? data : new Blob([data], { type: mime }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = name; a.rel = 'noopener'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 4000); return true; } catch (err) { return false; }
  }
  _specJSON() {
    return JSON.stringify({ product: 'Soft Cat', version: 'concept-0.1', note: U('s1220'), massEstimate_g: this.MASS,
      components: this.LIST.map(c => ({ id: c.id, name: c.n, assembly: c.a, bomGroup: c.g, qtyPerUnit: c.base ? 1 : c.q, optional: !!c.opt, purpose: c.pu, material: c.ma, process: c.pr, dimensions: c.di, mass_g: c.m, loads: c.lo, principle: c.pi, electrical: c.el, maintenance: c.mt, failureModes: c.fa, costPrototypeEUR: c.c1, costProductionEUR: c.c2, confidence: CFN[c.cf], alternatives: c.alt, motion: c.mv || null })) }, null, 2);
  }
  _bomCSV() {
    const q = (s) => '"' + String(s == null ? '' : s).replace(/"/g, '""') + '"';
    const rows = [['ID', U('s1221'), U('s102'), U('s103'), U('s1222'), U('s1223'), U('s1224'), U('s1225'), U('s1226'), U('s1227'), U('s106'), U('s1228'), U('s107')].map(q).join(';')];
    COMPS.forEach(c => { const mp = (c.c1[0] + c.c1[1]) / 2 * c.q, ms = (c.c2[0] + c.c2[1]) / 2 * c.q; rows.push([c.id, c.g, c.n, c.q, c.c1[0], c.c1[1], c.c2[0], c.c2[1], mp.toFixed(1), ms.toFixed(1), CFN[c.cf], c.opt ? U('s1229') : '', c.alt].map(q).join(';')); });
    return '﻿' + rows.join('\n');
  }
  _md() {
    const f = (a) => a[0] + '–' + a[1] + ' €';
    let s = U('s1230');
    s += U('s1231') + DIMROWS.map(r => '| ' + [r.n, r.t, r.m, r.s].join(' | ') + ' |').join('\n') + '\n\n';
    s += U('s1232') + (this.MASS / 1000).toFixed(2) + U('s1233');
    s += U('s1234') + f(this.BOMT.proto) + U('s1235') + f(this.BOMT.prod) + '\n\n';
    s += U('s1236') + PACK.map(r => '- **' + r.z + '** — ' + r.s + '. ' + r.c + ' ' + r.r).join('\n') + '\n\n';
    s += U('s1237') + FEAS.map(g => '### ' + g.n + '\n' + g.items.map(i => '- ' + i).join('\n')).join('\n\n') + '\n\n';
    s += U('s1238') + RISKS.map(r => '- **' + r.r + '**: ' + r.m + ' (' + r.ids + ')').join('\n') + '\n\n';
    s += U('s1239') + COMPS.map(c => '| ' + [c.id, c.n + (c.opt ? U('s1240') : ''), c.q, f(c.c1), f(c.c2), CFN[c.cf]].join(' | ') + ' |').join('\n') + '\n';
    return s;
  }
  _exText(name, text, mime, note) { const ok = this._download(name, text, mime); this.setState({ exportName: name, exportText: text, shot: '', exportNote: ok ? U('s1241') : U('s1242') }); }

  renderVals() {
    const s = this.state; const L = s.live;
    const self = this;
    const modes = MODES.map(m => ({ n: m[1], d: m[2], cls: 'b' + (s.mode === m[0] ? ' on' : ''), pressed: s.mode === m[0] ? 'true' : 'false', pick: () => this.setState({ mode: m[0] }) }));
    const views = [['reset', U('s1243')], ['front', U('s1244')], ['side', U('s1245')], ['top', U('s1246')], ['rear', U('s1247')], ['iso', U('s1248')]].map(v => ({ n: v[1], pick: () => this._view(v[0]) }));
    const tg = (k, n, d) => ({ n: n, d: d, cls: 'b sm' + (s[k] ? ' on' : ''), pressed: s[k] ? 'true' : 'false', pick: () => this.setState({ [k]: !s[k] }) });
    const toggles = [tg('showHuman', U('s1249'), U('s1250')), tg('showConf', U('s1251'), U('s1252')), tg('showAxes', U('s1253'), U('s1254')), tg('showContact', U('s1255'), U('s1256')), tg('showDock', U('s747'), U('s1257')), tg('touchMode', U('s1258'), U('s1259')),
      { n: s.mechLids ? U('s1260') : U('s1261'), d: U('s1262'), cls: 'b sm', pressed: 'false', pick: () => this.setState({ mechLids: !s.mechLids }) }];
    // tree
    const tree = [];
    ASM.forEach(a => {
      const ex = !!s.expanded[a[0]];
      tree.push({ id: a[0], n: a[1], pad: 8, cls: 'tr asm' + (s.sel === a[0] ? ' on' : ''), arrow: ex ? '▾' : '▸', exp: ex ? 'true' : 'false', pick: () => this.setState({ sel: a[0], isolate: false, expanded: Object.assign({}, s.expanded, { [a[0]]: s.sel === a[0] ? !ex : true }) }) });
      if (!ex) return;
      if (a[0] === 'LG') {
        LEGS.forEach(Lg => {
          const lid = 'LG-' + Lg.k; const lex = !!s.expanded[lid];
          tree.push({ id: lid, n: Lg.n, pad: 20, cls: 'tr' + (s.sel === lid ? ' on' : ''), arrow: lex ? '▾' : '▸', exp: lex ? 'true' : 'false', pick: () => this.setState({ sel: lid, isolate: false, expanded: Object.assign({}, s.expanded, { [lid]: s.sel === lid ? !lex : true }) }) });
          if (lex) COMPS.filter(c => c.a === 'LG').forEach(c => { const id = c.id + '.' + Lg.k; tree.push({ id: c.id, n: c.n, pad: 34, cls: 'tr' + (s.sel === id ? ' on' : ''), arrow: '', exp: 'false', pick: () => this.setState({ sel: id, isolate: false, selOp: 1 }) }); });
        });
      } else COMPS.filter(c => c.a === a[0]).forEach(c => tree.push({ id: c.id, n: c.n + (c.opt ? U('s1240') : ''), pad: 20, cls: 'tr' + (s.sel === c.id ? ' on' : ''), arrow: '', exp: 'false', pick: () => this.setState({ sel: c.id, isolate: false, selOp: 1 }) }));
    });
    // selection
    let selName = '', selPath = '', selDesc = '', selFields = [], selCf = '', selCfCls = '', selQty = '', selMove = '', selMo = null;
    const sel = s.sel;
    if (sel) {
      const asm = ASM.find(a => a[0] === sel);
      const legM = /^LG-(FL|FR|RL|RR)$/.exec(sel);
      if (asm || legM) {
        const kids = asm ? COMPS.filter(c => c.a === sel) : COMPS.filter(c => c.a === 'LG');
        const legMul = asm && sel === 'LG' ? 1 : 1;
        selName = asm ? asm[1] : LEGS.find(l => l.k === legM[1]).n + U('s1263');
        selPath = asm ? U('s1264') : U('s1265');
        selDesc = asm ? asm[2] : U('s1266');
        const m = kids.reduce((t, c) => t + (c.opt ? 0 : c.m * (legM ? 1 : c.q)), 0);
        const p1 = kids.reduce((t, c) => t + (c.opt ? 0 : (c.c1[0] + c.c1[1]) / 2 * (legM ? 1 : c.q)), 0);
        const p2 = kids.reduce((t, c) => t + (c.opt ? 0 : (c.c2[0] + c.c2[1]) / 2 * (legM ? 1 : c.q)), 0);
        selFields = [{ k: U('s1267'), v: kids.map(c => c.id).join(', ') }, { k: U('s1268'), v: m + U('s1269') }, { k: U('s1270'), v: Math.round(p1) + ' €' }, { k: U('s1271'), v: Math.round(p2) + ' €' }];
        selCf = U('s1272'); selCfCls = 'bd cf-e'; selQty = kids.length + U('s1273');
      } else {
        const c = this.CI[sel] || this.CI[sel.split('.')[0]];
        if (c) {
          const a = ASM.find(x => x[0] === c.a);
          selName = c.n; selPath = 'Soft Cat › ' + a[1] + (c.leg ? ' › ' + LEGS.find(l => l.k === c.leg).n : '');
          selDesc = c.pu; selCf = CFN[c.cf]; selCfCls = 'bd cf-' + c.cf;
          selQty = c.base ? U('s1274') : U('s1275') + c.q + (c.opt ? U('s1276') : '');
          selMove = c.mv || ''; selMo = c.mo || null;
          selFields = [[U('s1277'), c.ma], [U('s1278'), c.pr], [U('s1279'), c.di], [U('s1053'), c.m ? c.m + U('s1269') + (c.id === 'PW-04' ? '' : '') : (c.id === 'PW-04' ? U('s1280') : '—')], [U('s1281'), c.lo], [U('s1282'), c.pi], [U('s1283'), c.el], [U('s1284'), c.mt], [U('s1285'), c.fa], [U('s1286'), c.c1[0] + '–' + c.c1[1] + U('s1287')], [U('s1288'), c.c2[0] + '–' + c.c2[1] + U('s1287')], [U('s107'), c.alt], [U('s1289'), c.g]].map(x => ({ k: x[0], v: x[1] }));
        } else { selName = sel; }
      }
    }
    const demos = DEMOS.map(d => ({ n: d.n, cls: 'b sm' + (s.demo === d.k ? ' on' : ''), pressed: s.demo === d.k ? 'true' : 'false', pick: () => this._setDemo(d.k) }));
    const speeds = [0.25, 0.5, 1, 1.5, 2].map(v => ({ n: '×' + String(v).replace('.', U('__dec')), cls: 'b sm' + (s.speed === v ? ' on' : ''), pick: () => this.setState({ speed: v }) }));
    const exSubs = [['all', U('s1290')], ['HD', U('s1291')], ['NK', U('s400')], ['LEG', U('s1292')], ['TL', U('s229')], ['PW', U('s249')]].map(x => ({ n: x[1], cls: 'b sm' + (s.exSub === x[0] ? ' on' : ''), pick: () => { this.setState({ exSub: x[0] }); this.exCur = -1; } }));
    const sliders = MAN.map(r => { const v = s.demo === 'manual' ? s.man[r[0]] : (this.P ? this.P[r[0]] : DEF[r[0]]); const vv = Math.round(v / r[4]) * r[4]; return { n: r[1], fid: 'sc-m-' + r[0], min: r[2], max: r[3], step: r[4], v: vv, vt: (r[4] < 1 ? vv.toFixed(2) : Math.round(vv)) + r[5], on: this.H[r[0]] }; });
    const legBtns = LEGS.map(Lg => ({ n: Lg.s, full: Lg.n, cls: 'b sm' + (s.focusLeg === Lg.k ? ' on' : ''), pick: () => this.setState({ focusLeg: Lg.k }) }));
    const joints = (L.joints || []).map(j => ({ n: j[0], v: (j[1] >= 0 ? '+' : '') + j[1].toFixed(1) + '°', a: j[2] + '.' + s.focusLeg }));
    const contacts = LEGS.map((Lg, i) => { const c = (L.contacts || [])[i]; return { n: Lg.s, t: c ? U('s1293') : U('s1294'), bg: c ? '#e1f0e4' : '#fbeed5', fg: c ? '#1d5a2c' : '#6e4304' }; });
    // BOM
    const key = s.bomMode === 'proto' ? 'c1' : 'c2';
    const groups = []; COMPS.forEach(c => { if (groups.indexOf(c.g) < 0) groups.push(c.g); });
    const bomRows = [];
    groups.forEach(g => {
      const items = COMPS.filter(c => c.g === g);
      const gt = items.reduce((t, c) => t + (c.opt ? 0 : (c[key][0] + c[key][1]) / 2 * c.q), 0);
      bomRows.push({ grp: true, item: false, n: g, tot: Math.round(gt) });
      items.forEach(c => { const mid = (c[key][0] + c[key][1]) / 2 * c.q; bomRows.push({ grp: false, item: true, id: c.id + (c.a === 'LG' ? ' ×4' : ''), n: c.n + (c.opt ? U('s1295') : ''), q: c.q, unit: c[key][0] + '–' + c[key][1], tot: c.opt ? '—' : mid.toFixed(mid < 10 ? 1 : 0), cf: CFN[c.cf], cfCls: 'bd cf-' + c.cf, alt: c.alt, note: c.id === 'PW-04' ? U('s1296') : (c.mv ? U('s1297') : ''), pick: () => this.setState({ sel: c.a === 'LG' ? c.id + '.FL' : c.id, isolate: false, selOp: 1 }) }); });
    });
    const bt = this.BOMT[s.bomMode]; const mid = (bt[0] + bt[1]) / 2;
    const massKg = this.MASS / 1000; const massOk = massKg <= 4.5;
    const massRows = ASM.map(a => ({ n: a[1], g: this.MASSA[a[0]] || 0, w: Math.round((this.MASSA[a[0]] || 0) / 2300 * 100) })).sort((x, y) => y.g - x.g);
    const powRows = POW.map(p => ({ n: p.n, i: p.i, t: p.t, p: p.p, a: p.a }));
    const sum = (k) => POW.reduce((t, p) => t + p[k], 0);
    const E = 69;
    const walkW = sum('t'), idleW = sum('i');
    const interW = POW.reduce((t, p, i) => t + (i === 0 ? 3 : p.t), 0);
    const mixW = 0.15 * walkW + 0.6 * interW + 0.25 * idleW;
    const fh = (w) => (E / w).toFixed(1).replace('.', U('__dec')) + U('s1298');
    const runRows = [
      { n: U('s1299'), w: walkW.toFixed(1) + U('s1300'), h: fh(walkW), a: U('s1301') },
      { n: U('s1302'), w: interW.toFixed(1) + U('s1300'), h: fh(interW), a: U('s1303') },
      { n: U('s1304'), w: mixW.toFixed(1) + U('s1300'), h: fh(mixW), a: U('s1305') },
      { n: U('s1306'), w: idleW.toFixed(1) + U('s1300'), h: fh(idleW), a: U('s1307') }
    ];
    const tabsDef = [['bom', U('s1308')], ['mat', U('s1309')], ['feas', U('s1310')], ['pow', U('s1311')], ['dim', U('s1312')], ['ai', U('s1313')], ['safe', U('s1314')], ['dfm', U('s1315')], ['sys', U('s1316')]];
    const tabs = tabsDef.map(t => ({ n: t[1], cls: 'b' + (s.tab === t[0] ? ' on' : ''), pressed: s.tab === t[0] ? 'true' : 'false', pick: () => this.setState({ tab: t[0] }) }));
    const mode = MODES.find(m => m[0] === s.mode);
    let legend = [];
    if (s.mode === 'G') legend = Object.keys(FAM).map(k => ({ n: FAM[k].n, c: FAM[k].c }));
    if (s.mode === 'F') legend = [{ n: U('s1317'), c: '#2f6fd0' }, { n: U('s1318'), c: '#e07b2c' }, { n: U('s1319'), c: '#9b5de5' }, { n: U('s1320'), c: '#7a5aa8' }, { n: U('s1321'), c: '#1f8a4c' }, { n: U('s1322'), c: '#c0392b' }, { n: U('s1323'), c: '#1f6f8b' }].concat(Object.keys(ZONEC).map(k => ({ n: U('s1324') + ZONEN[k], c: ZONEC[k] })));
    const dur = L.dur || 1;
    const fmt = (x) => x.toFixed(1).replace('.', U('__dec'));
    const demoNotes = { walk: U('s1325'), turn: U('s1326'), dock: U('s1327'), follow: U('s1328'), paw: U('s1329'), manual: U('s1330'), touch: U('s1331') };
    const langs = LANGS.map(code => ({ code: code, n: code.toUpperCase(), full: U('__lang_' + code), cls: 'b sm' + (s.lang === code ? ' on' : ''), pressed: s.lang === code ? 'true' : 'false', pick: () => this._setLang(code) }));
    return {
      L: this._dict, langs: langs,
      canvasRef: this._canvasRef,
      modes: modes, views: views, toggles: toggles,
      followCls: 'b sm' + (s.follow ? ' on' : ''), followP: s.follow ? 'true' : 'false', tFollow: () => this.setState({ follow: !s.follow }),
      scheme: s.scheme, schemes: Object.keys(SCHEMES).map(k => ({ k: k, n: SCHEMES[k].n })), onScheme: (e) => this.setState({ scheme: e.target.value }),
      micCls: 'b sm' + (s.micOff ? ' on' : ''), micP: s.micOff ? 'true' : 'false', micTxt: s.micOff ? U('s1332') : U('s1333'), tMic: () => this.setState({ micOff: !s.micOff }),
      camCls: 'b sm' + (s.camOff ? ' on' : ''), camP: s.camOff ? 'true' : 'false', camTxt: s.camOff ? U('s1334') : U('s1335'), tCam: () => this.setState({ camOff: !s.camOff }),
      estopCls: 'b sm red' + (s.estop ? ' on' : ''), estopP: s.estop ? 'true' : 'false', estopTxt: s.estop ? U('s1336') : U('s1337'), tEstop: () => this.setState({ estop: !s.estop, playing: true }), estop: s.estop,
      compCount: this.LIST.length, rootCls: 'tr asm' + (!s.sel ? ' on' : ''), pickRoot: () => this.setState({ sel: null, isolate: false }), tree: tree,
      modeName: mode[1], modeDesc: mode[2], showLegend: legend.length > 0, legend: legend, isSensor: s.mode === 'F',
      hasSel: !!sel, noSel: !sel, selId: sel || '', selName: selName, selPath: selPath, selDesc: selDesc, selFields: selFields, selCf: selCf, selCfCls: selCfCls, selQty: selQty,
      selMoveOn: !!selMove, selMove: selMove, selHasMotion: !!selMo, selMotionName: selMo ? (DEMOS.find(d => d.k === selMo) || { n: U('s1338') }).n : '',
      playSelMotion: () => { if (selMo === 'estop') this.setState({ estop: true }); else { this._setDemo(selMo); if (['walk', 'turn'].indexOf(selMo) >= 0) this.setState({ mode: 'E' }); } },
      isoCls: 'b sm' + (s.isolate ? ' on' : ''), isoP: s.isolate ? 'true' : 'false', tIso: () => this.setState({ isolate: !s.isolate }), clearSel: () => this.setState({ sel: null, isolate: false }),
      selOpVal: Math.round(s.selOp * 100), selOpPct: Math.round(s.selOp * 100), onSelOp: (e) => this.setState({ selOp: parseFloat(e.target.value) / 100 }),
      massTxt: (massKg).toFixed(2).replace('.', U('__dec')) + U('s1339'), massStatus: massOk ? U('s1340') : U('s1341'), massCls: massOk ? 'st-ok' : 'st-bad',
      bomProtoTxt: Math.round((this.BOMT.proto[0] + this.BOMT.proto[1]) / 2) + ' € (' + this.BOMT.proto[0] + '–' + this.BOMT.proto[1] + ')', bomProdTxt: Math.round((this.BOMT.prod[0] + this.BOMT.prod[1]) / 2) + ' € (' + Math.round(this.BOMT.prod[0]) + '–' + Math.round(this.BOMT.prod[1]) + ')',
      cntV: this.CNT.v, cntE: this.CNT.e, cntC: this.CNT.c,
      touchMsg: s.touchMsg, hasTouchMsg: !!s.touchMsg, touchHint: s.touchMode ? U('s1342') : U('s1343'),
      purring: !!L.purr, charging: !!L.charge,
      loadMsgOn: !s.loaded, loadMsg: s.err || U('s1344'),
      demos: demos, playTxt: s.playing ? U('s1345') : U('s1346'), tPlay: () => this.setState({ playing: !s.playing }), speeds: speeds,
      timeTxt: fmt(Math.min(L.t || 0, dur)) + ' / ' + fmt(dur) + U('s1347'), progVal: Math.round(Math.min(1, (L.t || 0) / dur) * 1000), onScrub: (e) => { this.t = parseFloat(e.target.value) / 1000 * dur; },
      extOv: s.extOv, onExtOv: (e) => this.setState({ extOv: e.target.value }), exprSel: s.expr, exprs: EXPRS.map(x => ({ k: x[0], n: x[1] })), onExpr: (e) => this.setState({ expr: e.target.value }),
      demoNote: demoNotes[s.demo] || U('s1348'),
      isExploded: s.mode === 'D', exSubs: exSubs, explodePct: Math.round(s.explode * 100), onExplode: (e) => this.setState({ explode: parseFloat(e.target.value) / 100 }),
      sliders: sliders, legBtns: legBtns, joints: joints, contacts: contacts,
      nYaw: Math.round(L.neck ? L.neck[0] : 0), nPitch: Math.round(L.neck ? L.neck[1] : 0), nRoll: Math.round(L.neck ? L.neck[2] : 0), bH: Math.round(L.bH || 0), bP: Math.round(L.bP || 0),
      exGLB: () => {
        if (!this.scene || !window.THREE.GLTFExporter) { this.setState({ exportName: 'GLB', exportText: '', shot: '', exportNote: U('s1349') }); return; }
        const ex = new window.THREE.GLTFExporter();
        try { ex.parse(this.catRoot, (res) => { const ok = this._download('soft-cat.glb', new Blob([res], { type: 'model/gltf-binary' })); this.setState({ exportName: 'soft-cat.glb', exportText: '', shot: '', exportNote: ok ? U('s1350') : U('s1351') }); }, { binary: true, onlyVisible: true }); }
        catch (err) { this.setState({ exportName: 'GLB', exportText: '', shot: '', exportNote: U('s1352') + err.message }); }
      },
      exJSON: () => this._exText('soft-cat-specs.json', this._specJSON(), 'application/json'),
      exCSV: () => this._exText('soft-cat-bom.csv', this._bomCSV(), 'text/csv;charset=utf-8'),
      exMD: () => this._exText('soft-cat-summary.md', this._md(), 'text/markdown;charset=utf-8'),
      exPNG: () => { if (!this.renderer) return; this.renderer.render(this.scene, this.camera); const url = this._canvas.toDataURL('image/png'); let ok = false; try { const a = document.createElement('a'); a.href = url; a.download = 'soft-cat-' + s.mode + '.png'; a.click(); ok = true; } catch (err) {} this.setState({ exportName: 'soft-cat-' + s.mode + '.png', exportText: '', shot: url, exportNote: ok ? U('s1353') : U('s1354') }); },
      hasExport: !!s.exportName, exportName: s.exportName, exportText: s.exportText, hasExportText: !!s.exportText, shot: s.shot, hasShot: !!s.shot, exportNote: s.exportNote,
      copyExport: () => { try { navigator.clipboard.writeText(s.exportText || ''); } catch (err) {} }, closeExport: () => this.setState({ exportName: '', exportText: '', shot: '' }),
      tabs: tabs, tabBom: s.tab === 'bom', tabMat: s.tab === 'mat', tabFeas: s.tab === 'feas', tabPow: s.tab === 'pow', tabDim: s.tab === 'dim', tabAI: s.tab === 'ai', tabSafe: s.tab === 'safe', tabDfm: s.tab === 'dfm', tabSys: s.tab === 'sys',
      bomProtoCls: 'b sm' + (s.bomMode === 'proto' ? ' on' : ''), bomProdCls: 'b sm' + (s.bomMode === 'prod' ? ' on' : ''), bomProto: () => this.setState({ bomMode: 'proto' }), bomProd: () => this.setState({ bomMode: 'prod' }),
      bomRows: bomRows, bomTotal: '≈ ' + Math.round(mid) + ' €', bomRange: Math.round(bt[0]) + '–' + Math.round(bt[1]) + ' €',
      mats: MATS.map(m => Object.assign({ c: FAM[m.k] ? FAM[m.k].c : '#999' }, m)), tradeoffs: TRADEOFFS, coverSteps: COVER.map(t => ({ t: t })),
      feas: FEAS.map(f => ({ n: f.n, c: f.c, items: f.items.map(t => ({ t: t })) })), dofRows: DOFROWS, torque: TORQUE, simNeeds: SIMNEEDS,
      powRows: powRows, runRows: runRows, thermal: THERMAL,
      dimRows: DIMROWS, packRows: PACK, massRows: massRows,
      aiLocal: AILOCAL, aiCloud: AICLOUD, aiFlows: AIFLOWS,
      risks: RISKS, privacy: PRIVACY, hwSafety: HWSAFE, dfm: DFM, assembly: ASSEMBLY,
      systems: SYSTEMS, lidRows: LIDROWS, touchRows: TOUCHROWS
    };
  }
}

DCBoot(Component);
