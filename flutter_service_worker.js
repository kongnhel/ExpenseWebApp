'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "203e72b81d771dda40e2bccb293921df",
".git/config": "b91385dc0a83f87ec4839b2a81dfa7cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e9fc66791c140b9126f3e0932a6b86c7",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b1e9ddc603b7547b8efd85bd3a0bfb05",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "369325014c50aaa79b085f62e425229c",
".git/logs/refs/heads/gh-pages": "369325014c50aaa79b085f62e425229c",
".git/logs/refs/remotes/origin/gh-pages": "a59933cdf911757585b93ec81d909fb9",
".git/logs/refs/remotes/origin/HEAD": "eb9f708504d139d642ce91aef3b43e6a",
".git/objects/00/d8824c45dd7d311719a719566d602a09fab305": "27316159750c6e4ca437edfd22670af4",
".git/objects/02/78932bbd88e5b91d2cba4f135d12308b63b104": "d3769c2d43a703ca9d5750bf4b553873",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1e/42441d6ff7aa8f3f157d587547d240d7efa050": "14db3fcede5540476566f91765f44fa8",
".git/objects/21/18a6af1a7109828787cd12fdfa7d88d6e9ee1d": "e148ffeb1e7b1dafad13cb46196d8280",
".git/objects/27/5f44b755fbb800aad5851820ad036f351c12ec": "ba1dc3b1208fb8e28978adf5d2d4e7c2",
".git/objects/32/1e728f1363cbbb6f4a2eb72ec85921a6a315ca": "6eaa9be8a745eb42b0f1c7d96bad3f7a",
".git/objects/39/b3fa56d4823af4f9527ef756ab9af2c3afa16d": "25c34f658d86b9433c01b37f3fd23638",
".git/objects/43/88b2f4b1bf80843e25c6b8246efb1defb314a2": "f3cdadbd510b9a7eb122f8f3859def72",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/2a9802e48ced42cc3ef7034497c09e0e91d776": "032ed74a73b833a701541f43c841a1fb",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/20ba58cf6a9cca6bf90a3a997dc36babbacaf8": "61899f2433bf3a85c277e8c84d8c7cea",
".git/objects/58/64c9e4554f1c12caaccf9dfc68d624cf1000cf": "26c8307b11e794ec354ee6aa8f280eed",
".git/objects/5b/7841664269069e2a48d4df7a2cfe1170131c1f": "de7c1ed3cc23b161856920fc79617f14",
".git/objects/63/364835406cab0bedbbd9c3d87c61e01537ffc0": "0af01f3cce950b69ca2632dd9d53d0fc",
".git/objects/63/bfe8346e39b9b60854399f2bc82c8b3111c14d": "d83bd399d0ed5d5282308a14f4606c50",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a638ab4e2eb3e2a43a03c8352fb513bb3ae740": "a102fe4c628b8ad9cebd20af04c6d0ee",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/79/3a575c9a1daedf74e1c14f9f6e6cd6f65e67f4": "749e1633449ac3c8e94cf81dffade923",
".git/objects/82/c19f14a640662190e808cc33abfab9fcad7a7d": "6605c79330c198f3e4da0a51848ed1dd",
".git/objects/87/e18b13a1b79e5305f775bea87625e84afe3c82": "87dc9900d9b62513ae87d1aaace84f3a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/753b4e0b6e461f00b5682c3ba287af9adb12c0": "01eaac59351f6ad442ba06f61223a7de",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/f05af2df8da9e700f36ff23d6dffc916f436db": "98aa355f9d2110e005a5436a6928b3c7",
".git/objects/8f/8c2a58a526e5b980eba9afeea6e8343aafab7b": "5b71603e1c0cc8db432488a2fd8cbe19",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/f6de8bb8cc4027bd4b3c5e8a96dd5218bacc48": "ae2ffcb44a4f50a7a7f676d8cb31e82f",
".git/objects/95/c681b93a1c5a01335299e3b83366e4c6ecf5b1": "e7d26859d52fb372c8713d7e867c92c5",
".git/objects/95/feae5b06ebdfe5a1d3e5c127fbb447f71e87f7": "c36b4e6ea6ae6682ca74cfb405f12fd7",
".git/objects/98/2e52f94d60fec4fe4a01f0edd2474310e47cc2": "a1f03f267b2f1ddb492051e5e0bdcbd5",
".git/objects/98/8b7c431e31df61957c6ecee8e010975e210daf": "d12c773cd09ed0c13fb958e2f2f4a25b",
".git/objects/99/d9d3e31a65dfa2af1887278b104f3d2a15f5cf": "0c8eeef668520d1afffcf938d8caa162",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/b4/11798f4028b08fa54c1bdea830d83f67acccf8": "2ea75a0caf58e0b7860bbdebbaedd671",
".git/objects/b6/07c6c23b6e8dd0dc27571de4ff712e20fdb8d9": "21f2963a2dca306100400780548f7b1d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e492acc79b7a6d36bc1307918fcd2690a3a1c3": "b6e9558baf90cf0ba55835eaaeaee148",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/bacb229aaf709b9d98306f8951ff67d1291cf3": "6534b201ba085df3d2e8871688b405df",
".git/objects/ba/83987bd86da5563e5b94044e818ccdf47bc12b": "0d7eaf1120e1cce0de6d90a0002b6b7b",
".git/objects/c6/956b73f25f382f43621780c922a0e79bb597ce": "5302bb63ff45b53caeda2c2684322fe4",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/ec7c208aeb90aa613c84448478573389ff0d67": "c079d165332febcb77663aedab2264c2",
".git/objects/cd/bd704591bbe4a666ff8be30b70ec06fbf2cde0": "89eab8b86f30a6c35eba02dc9eb79b62",
".git/objects/d0/c9c5973ad4b4f84211e3e19597e4b9d2e96304": "666848594ca611dcbf3b7681bd1b178a",
".git/objects/d3/d5fe5f395ece726a5f55d685f6ea4532c5d8e8": "c1ef1f5477f28177c655ccf9d7339f7e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/42df16b052f3ca5f4cb5d7378bf8e9ba994018": "68a8ba75a63b2af9983404fef50e37f1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/5c7a5af9476fe5704758cb99aeb113deac8dc1": "47d4de97508890e950cc39ef9d92ae21",
".git/objects/f5/1bca004c0f897f4945b56c59084e27c711d024": "38cd29b4f9df1db74cc8a3346ce538cf",
".git/objects/fb/806d36c2bc23d24c6b5501a091451f57b4c982": "85235b59bf18d374af0cb8bfb4bdc7bb",
".git/objects/ff/0436f22e4b618d212fb2b24b17089bcd62412e": "bdc3c421ca940572ecd4163e83707874",
".git/objects/ff/fb2fc4980e21e08a88055a311e50eec6302b48": "1e13d3822fd41dd2003a28da4b9c4d4a",
".git/refs/heads/gh-pages": "feb1c21bd95b37c1540e1a8cdf83dcf6",
".git/refs/remotes/origin/gh-pages": "bede89a4b6d8504faa2f5bcf057b7b8b",
".git/refs/remotes/origin/HEAD": "b501512a260537c5e52df65d2a034251",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4b8c87b2dd1179731b458c654bb6d10e",
"assets/NOTICES": "225f51a54467104474bc11f12f62f41a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "84652f57c95aab33baa1f4bb5e9de862",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6c8e0f11e2daa6e4dd82da1c27e6a1be",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65318b5aec815ba8a8978c190426e1c9",
"/": "65318b5aec815ba8a8978c190426e1c9",
"main.dart.js": "1b7b4ad97637e4d603421c9ee02c4fc1",
"manifest.json": "a3e5e250c90b6c0876d8b401e44e95b9",
"version.json": "02ee95e50e4fbe7710f9bce821b8c285"};
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
