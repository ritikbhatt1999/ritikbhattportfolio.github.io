'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0ffa4de61903434140563b2f8f91a1dd",
"version.json": "53d35d49a03c3a34037a95a64941a642",
"index.html": "7157a3d43091d0d7fbaa6e0cafe6c46c",
"/": "7157a3d43091d0d7fbaa6e0cafe6c46c",
"main.dart.js": "8dde2fcb7a24a69c5933dd111fb6656c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "d2fdd999c7b1275364d809101ec89e84",
"icons/Icon-192.png": "012e174d9673418d2ace648da1cca903",
"icons/Icon-maskable-192.png": "012e174d9673418d2ace648da1cca903",
"icons/Icon-maskable-512.png": "09e0a403d74c48dbf9605e139005e04a",
"icons/Icon-512.png": "09e0a403d74c48dbf9605e139005e04a",
"manifest.json": "b804b60cca78a95720c3c5cc24fad273",
"assets/NOTICES": "e52310f8334dbf0b953b724b9aed3df7",
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
"assets/fonts/MaterialIcons-Regular.otf": "089b8f08a8f24465f17239e987804c40",
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
