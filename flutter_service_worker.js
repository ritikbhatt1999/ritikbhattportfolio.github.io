'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9d52a7d64e9cb2a8259a525852059a7f",
"version.json": "53d35d49a03c3a34037a95a64941a642",
"index.html": "498b28d729dc425cf113d73135bc798e",
"/": "498b28d729dc425cf113d73135bc798e",
"main.dart.js": "bb29b1e7070d1d59f5db2bc43c01a231",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "d2fdd999c7b1275364d809101ec89e84",
"icons/Icon-192.png": "012e174d9673418d2ace648da1cca903",
"icons/Icon-maskable-192.png": "012e174d9673418d2ace648da1cca903",
"icons/Icon-maskable-512.png": "09e0a403d74c48dbf9605e139005e04a",
"icons/Icon-512.png": "09e0a403d74c48dbf9605e139005e04a",
"manifest.json": "321c6d64a80c12785c9b833346d87bad",
".git/config": "ac0e63a368fa796f7b66b9ea70ce8a75",
".git/objects/0d/bcbf578ddc0198bb62831ef292d726890dc105": "eaf4df9739ee6e72957a97b796436cfb",
".git/objects/59/31a4d4339f4b0318623c95f04140e9cb23c12c": "348ac4b9b531b49d6770692b2fdbce48",
".git/objects/0c/ed70316bb070aa0dc6e48278568a17e936ce60": "a8b7155a4499c15397c0815b28dc378e",
".git/objects/0c/1b9d1a1550dfbf63865b43d24746affe3f62db": "324a80cd46767a76a41e3aedee175dd8",
".git/objects/3e/a90d14c1eebeea284b8e66e60e2c72ee276470": "17bcddf099f9abd53abad0e6ad2f7ac7",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/03/a77f1aa2dc344a3a635e3cb6f77f1fbc4c231a": "ff8dc2f7a6e8242c1a81a419a0942538",
".git/objects/32/f84fd8857f831852a79087c706f54183ba486c": "20f8abd726c1662a0e455e493d025213",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/56/54e9d985ac6278a8fd1a8cbbcb4ce331abbaeb": "26800a091d8d38a41ee07e91dcdfaacf",
".git/objects/51/d03ff32c31cddb53b1ebfbbdeefdc00f79dfb1": "e8b8267e56af84871753b19895ae9e7f",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/3d/bc62923d971159d1279e961d52672f36a9d3ac": "fc86e89ea78bd85d1808b8febdc271f3",
".git/objects/67/b01b361ddc0a7912c03fcd19078039ba12b121": "64137c4bd36baa8bcd8351440294b6f2",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/02ff6f838121ed63dcbd84032e241e346900b1": "94080829157205f449284cd5229b1a39",
".git/objects/33/f5514aa4982679174af50b208c508dfb7ae5a6": "d427b339b92018bfbd3458e7ddf175cb",
".git/objects/9c/fe990eb822f1fb77b6eeaf57f92b929d8de30b": "a070458891884764e4c9d5761027b94b",
".git/objects/9c/558425bc38cf711af05ef09fc379839629ed10": "d30221d80c68269c283f8354263ea87b",
".git/objects/a3/14e190638dea876b2f5e2f3a2db9be14a79027": "4b83da77acfb434da8579c7d24e595b7",
".git/objects/a3/59eeedb744e9b9da1d55803bbd1509b34f7292": "6029c396f01805842b56fb53c1dfc093",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/da/a65867efa77e1038344762b30cb77c4696ee30": "80cb2ae28c38a8d0a3b9a9073b79b1db",
".git/objects/a2/9196d44e38cddb250876b124263d4dae31f15e": "7ef27627d6cf1a3f45117cf7591657d7",
".git/objects/a5/490beecb12c875d2af819687c846bfd495c1f6": "4eb51ad90ff919f3cba4b8bb41c527a0",
".git/objects/d6/e5adf5c70ea7c95e48f91b67b05799db602240": "49bf3ee72a43300b2ae80a90d67d88ed",
".git/objects/d8/03d5ccc684c84a33b2a4d9ff2168473e3aa886": "5ccd0cae780be44c4649e65c5e872779",
".git/objects/e5/d7f1e938347a4ffefcb0164aa6ca9ef59fe53e": "5bbea34e4da914d3ccb25bc36c014299",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/1e62990b478d6fa3d90d89630186102c5ec560": "3b1a2cc0f13547cd2ddfc1298235fecc",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/7fcf94d8ac3379396e5e83bc1be2caa0a530b1": "73d1fbd3f1b2ea094a33ebde28c724f3",
".git/objects/4e/009faa372323fa497797bbcd6561bc33b71de6": "90325b47a82cdcaeab1c863b96b13783",
".git/objects/18/c35330a2297cc3cbae559dd6ea40e655d24fc4": "520489ba45201ce262ebe1292700ed63",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/89/8aa9093e57ca4a9acc2cc4811e7294e86f0c33": "b4766f5981ed51bfe4ef52bdd0316fd6",
".git/objects/89/a07b3ec74093da40a575c1ad90f2582994abfd": "8d2c5aff18600d6e782036372d1a619a",
".git/objects/8a/6c089b4d3081cde3d6676a5b4c74e07a627c66": "9a801b5f7c7dde829eb408d575d7b8ef",
".git/objects/86/94a4e463e312354411f78fca2acf3efd69ac96": "4b6328b4d45f5af8dcfd4f542c73290a",
".git/objects/72/e0ad388b4c8b7bcec3527252846cd961518746": "14ebef5d304a3b8effff9118757cccf0",
".git/objects/2a/7b43f1e1bef53474ac099c0bc28c9a9694df46": "1814c4f322edb573af3475f3734bd2c2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/90b6d45f5afb51367bdc23996e36a6ca1f3255": "68685e3d2a47ac61a2861c13495cf8a2",
".git/objects/38/d4bc5d935c29494b5e274e2727a6bef7d189e4": "662dc0eaaec607f2a8329d8142232eb6",
".git/objects/96/9124f69edb595b03958ad47d8e4f13619e1bac": "b200b3cd909a1d3183f4ebe84349ca05",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/53/4362f90dacd4792f57ad71b560e156e28f40c0": "c6bdf097fc333d1e31e3b17ce4b95bed",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/62864eeab23d5374949691d14285ba84d7ee36": "2d1a5e65dae3548c3d70b3b7fd78d622",
".git/objects/6d/40776a96adeb5973d70e04628f5322ae0c5263": "8a1bd6c4f7cd1ff847ea24c4adbe6781",
".git/objects/6c/5317609ca281f2c6dd0b7de70a967fd3ec0133": "eaab79b8afb8e5571a862113bcee8eba",
".git/objects/6c/272901d6f65898613374c38fe55745d0604fbb": "558c994213f0dff0713848cdac71fb0f",
".git/objects/0f/fb66351bda80fe387d4cfbbcb64dd2e9e2c3d0": "e7abd3275c50a2214f629ed87c183353",
".git/objects/0a/a9a08ad8a9551e9716b2af8cf498d5ce232d66": "e2ad1a56be0fca343d4658f32963cde3",
".git/objects/64/545baf799874652041c61a1ee1da494b256a9c": "69df69990d17a9049d5bcde7d5cde2ad",
".git/objects/90/2026dc29608589a55445f8cddade41e1fb3e49": "2114ef1f334bb298365a88e5122b0765",
".git/objects/bf/61a2b6d1d3907c815bc63cdbe1e8ae608f8129": "58565b24c75304270ea9af21528ee1c5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a7/93f8247041c7545b009cafd4070a68d19ba3d8": "fa30dc7d31372d5f2254dd76cabdec40",
".git/objects/b6/58ec902372fd68bdef89eac7206b43d549d183": "28ca2fb892bf1e6a2dd9677502d03992",
".git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "42dbb00e47ab6bdec4e0752c63cf8337",
".git/objects/b7/eb69f2a689916a58dc41f644cfcefce34297cf": "73bcbfa07839783e369d11f041291c8b",
".git/objects/db/9d1f5e780a3e4bc1e7c24a8afc6fb683d252c9": "0ab8f3c32565b521aee3250092497d12",
".git/objects/a8/3ef9a436af349e8660e5af4d5956f1ec620976": "104354226eb5f7ae28701298dbbcdb5c",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ea/c5517cd2da3c502970968a6b812b50adf39576": "25253f7aaafb28f6afcf3dfc1fbfe098",
".git/objects/cd/ca7adbbaff6e35ee16f8936b5b2af2f16a4ff9": "066fabb7e9aa9b62cab5e2cf30be1d70",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/e6/2ec3486dd447f843e5d3e120c4d66f0e039974": "7b50365a7b9b47d8b7ae7ad58e08626a",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e7/4abab4acf7d36f375316972b34a132d566d736": "7cd34e4d3f4006e82eb3f77e8ce04d15",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/72e7142049e86b40904c12c3a9f868fafd5e7c": "61161c7358d2c084155f03d98d4a6364",
".git/objects/83/6a2475e6d5722fb07326ab1954a15d01adab0a": "3c8b1665aed995e21edcabc9116b03a4",
".git/objects/1e/edc2fab978d261fece59980a5babe2ddfbfef4": "95bb99f4a69e9b3bddf577499945bc2f",
".git/objects/85/286093af1a7c92cbfa9fcae5433ff65f4c6fec": "149dc4bd0eaf9351ac411d619381bf35",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/82/b8b10b292c988502f6d85d3837d4bb11de04fb": "9490fb0f178037370e159b57eda52cac",
".git/objects/8e/687252d70998474f710dfe776bbff3e7d21273": "cbaeb82b7d0cc12a0d98a549456146d0",
".git/objects/22/49e823073b3e38bdf78e5df3501876b63f0634": "e43bfddfe51881b5d5ba0a09fdae7921",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1931f1b1e5caa3c85aac55551d2c0912",
".git/logs/refs/heads/main": "c6c7c28c96023d1f0eb14a091c683846",
".git/logs/refs/remotes/origin/main": "44a33892f88ed2dd045c2d1bafb64207",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1e9796e74da5b950d0b55b1f6adccc11",
".git/refs/remotes/origin/main": "1e9796e74da5b950d0b55b1f6adccc11",
".git/index": "b8a80727c676ed5c0b189778ea2256bf",
".git/COMMIT_EDITMSG": "4e77ebcc35aada27991adffaaf7233f8",
"assets/NOTICES": "48ebdd4a23368e987ea2d9c832c10105",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "bb4511e6974a545ff71dfaa950e5aa28",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/app_assets/images/damn.png": "39daf7ba135e672dafe81c74428b5696",
"assets/app_assets/images/portfolio.png": "d025416ae1e1741a2fc3563c8e039b16",
"assets/app_assets/images/profile.jpeg": "4d983a11b63afd9838372df56ca901b6",
"assets/app_assets/images/profile.jpg": "51c54d44b742764d5a5ed0c78ce1b605",
"assets/app_assets/images/dwdb.png": "6a934dfc4cb88a3e0c14dfb946cb6424",
"assets/app_assets/images/profile.png": "5a38bd8c3019c521528d544cb70e3048",
"assets/app_assets/images/attendence_management.png": "7bd14024adca8fdf89d16ca88091cd5a",
"assets/app_assets/icons/icon-design.svg": "a7b670ca766e02c561b2b5ca8e17ec41",
"assets/app_assets/icons/git.png": "964861c9b224efa8f63796e2c2b2bd65",
"assets/app_assets/icons/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/app_assets/icons/flutter.png": "7ad12a2c2ff3eb299522c9c70cfdc66e",
"assets/app_assets/icons/sql.png": "e4d536b1a07294afad43045def94294f",
"assets/app_assets/icons/github.png": "a29dc3691124638b000809a7696281d5",
"assets/app_assets/icons/firebase.png": "062e4711bcf73378286b69e77cd52ec8",
"assets/app_assets/icons/gmail.png": "039f9c1e623bd2937a5ef59a7faa30e3",
"assets/app_assets/icons/js.png": "d9de75e5bf3a7b0ef2a48321acc06e88",
"assets/app_assets/icons/figma.png": "ad89f319db0073eda2892624a51a4b2b",
"assets/app_assets/icons/html.jpeg": "2cc10863d8d029e491fdc5bd856926d0",
"assets/app_assets/icons/excel.png": "727de60754cedcf0e0e3c2e4819d0ad2",
"assets/app_assets/icons/bloc.png": "a29df297e867cef24b1f52cbb4cee72a",
"assets/app_assets/icons/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/app_assets/icons/react.png": "be3668f7ecbe460befcb22b9a8a87792",
"assets/app_assets/icons/xcode.jpeg": "ccbd3784c5807bf7cae4fe78fa5de54d",
"assets/app_assets/icons/postman.png": "595e6b03143e1b386930255a5cd22be3",
"assets/app_assets/icons/icon-dev.svg": "772f7e9763d8282ad7f28f19f28e2aec",
"assets/app_assets/icons/app_logo.png": "f9c4afe2e03eefae54ca4bbe87b8a0ae",
"assets/app_assets/icons/androidStudio.png": "b4b9d27dd85419a93a0a540e2d7a8138",
"assets/app_assets/icons/api.png": "f318ea2432a7a556854226adb2a541ea",
"assets/app_assets/icons/riverpod.png": "dedb613e3f33a885a89f4c7ab71b89eb",
"assets/app_assets/icons/getx.jpeg": "8b45f74808bad7269d07405dd8716c45",
"assets/app_assets/icons/dart.png": "c98564dd2693eb6952368ea2f96d34ba",
"assets/app_assets/icons/word.png": "d313b934754b66affdb564ca8c46b253",
"assets/app_assets/icons/icon-app.svg": "e1f2cf2a9ab0b7574fba3d4b3aacedc3",
"assets/app_assets/icons/icon-backend.svg": "b55f9408e6fa05e8079e6f60e5deccee",
"assets/app_assets/icons/anime.png": "08a03fd32889b7438a739e5be47db6cf",
"assets/app_assets/certification/sql_basic%2520certificate.jpg": "1b46daf7ee1102e6ceb02a77bc978e50",
"assets/app_assets/certification/python%2520certificate.jpg": "cb2173eba14b6beafec12272a60e4bdd",
"assets/app_assets/certification/sql_intermediate%2520certificate.jpg": "8c9c37675fd96ceabdbb46ac48b6aaff",
"assets/app_assets/certification/get_x%2520certificate.jpg": "33041236b0162a284e827997536cf1bd",
"assets/app_assets/certification/ui_ux%2520certificate.jpg": "43f677533b513ab1b5319196458f6d75",
"assets/AssetManifest.bin": "ac5c85370b38d034c6bff1490abac661",
"assets/fonts/MaterialIcons-Regular.otf": "9b3ae5a026146b0d6a8e0a38ad95b59b",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
