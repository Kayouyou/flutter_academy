'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e9f441da3b4380e899cf65a3851fc222",
"index.html": "2def841d8ba589a5261a7f89c29a11a1",
"/": "2def841d8ba589a5261a7f89c29a11a1",
"main.dart.js": "17d866c21e32d4d17c921ac06abeb8e5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ce49153d9e309c32e4a7c74469bb8b74",
".git/config": "d76ace00d742612ecf9794c6088e5a89",
".git/objects/95/d753297a36573b02a3c43b5f6bb6cc53622eec": "37d0aeced1cbc41d7338a83c3e94cd8e",
".git/objects/03/1a63fa50960ba2804d5ed12d540196cd045c87": "18f436a269960a1492f4476aeb1d1937",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/0667b565aa8d847970d9627b5a73537a3364d6": "9450e241ea8271735107083ac3cce8b7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/cb2cf1ad7df4e5029e5ca9d2e4338daa79f5ed": "470e8c701778ba2fd3f93d7585c00136",
".git/objects/02/af7383402b76eb62a2fe7df11952689b323e37": "db21fe270cf27db60d900e971cf292ce",
".git/objects/a3/bccc4cd261965ed4a4a59a42d37adaef8878ea": "cc24c735e16b739efd8a5268a13acaf7",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/a5/e813e73d56d12ceea942961947d77f82943b8c": "a17ed8b2a2af19482daf49c4d7647dee",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/11c1a6a58b51450ed859902fe2981874b53a47": "4fbe72ac3c84655465d3c98884d211d0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/56f58cd3993d3dfb0e0f33bef6bf80f87d7e74": "4157ef002d616044415235036a5c2d1a",
".git/objects/f2/ebab75578d1f46b8ddad1fa84e807556730b56": "d8542a406552c237832981c2496666af",
".git/objects/c8/06ed54875b83547310f0b37b64129ef96a79e0": "87419462b02945e44d7cd778cd296108",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/pack/pack-f8700d5bbf8de4622cbfec9cfd3d169cd2d92e2d.idx": "5c011752d18bdd9cd7fd60cf30144ff2",
".git/objects/pack/pack-f8700d5bbf8de4622cbfec9cfd3d169cd2d92e2d.pack": "8c7c86f2f39c745b9d356fb4594f09cf",
".git/objects/7d/71b16d2a8cd922b59f8f390750e659ead1a92a": "a8ff482a72e1d9071a3b9efc65ae6e42",
".git/objects/29/d3a6eea89c3cbf486c3786fbdf9204be2d812b": "0b75300c296091d49b3e371e2c8e4447",
".git/objects/42/7fa28b9c14943efe787c62ae9a843caf41b1b6": "0d8f11ca443df210615c7b9d3874cbd8",
".git/objects/89/4354469919180e41c276a8202b07b0e80038f4": "ead671a66ff3523b38a1a7cf683302d0",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/28/22896cf6924e300962a1cc628c5b1a2778fb60": "4ac4f4d34552ea751f92de1b500292dc",
".git/objects/7b/b7ebcfaf4177deb140746a31c77c4c3f31777e": "ddcde220f92ab196221f8c33c04325f9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/4c/535b7f23d1638ae1c2c1593a948b3d5341165f": "00e4c820f5d684281b60585b9d208636",
".git/objects/44/614ebddebfbe76f7fbba5a69c64134ed7c5909": "4764ca76579542f25bc35d76a25c3b17",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/783a28db8799c842e0e3357f9094dd9f8706d4": "fe56ec417124527721e95d7c2d9c8bd6",
".git/objects/07/ac1bc461ecb96969121cf2ca9b23e10067f43b": "d0ecae84ea9f5e2176941788740faa85",
".git/objects/6e/19d0bbcabeb40e9afa7c08bb4eeb856f3dc14f": "8d1eee9a5c577d016ed188ed815183e9",
".git/objects/5d/c72c552420b987976659f763855cf98106a252": "6a957f3e48560fc98759541ed59b8d1e",
".git/objects/65/31e1b639baa873f936cc6ed4d61c07f8d9b796": "7c6fa18489ac97a3c6292e9a9bab78af",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/7347f7ccb2d86658d5f96a8a6025a3fb1fafd0": "e65b7ee5e3c7d0c13291b03bf888dc7d",
".git/objects/97/e8d2985745f2bebf257d96e39af2dcc2807455": "daf3af61b3a733dbd115d26ba69a31d6",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/bf/10d987b60b5e483be782c8da276aed6db921f3": "0835b8a55ed53ed2ad468f079ad7bb67",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a7/9f51d2c41d9e747172f514f051b20573f269c5": "900b7fc0846fe749d4b2dc6c3b4a2b68",
".git/objects/b8/5078d9a41557858bfef289577e90aed221c05d": "6d5b0975fef7b783a1653b0b0784fe4f",
".git/objects/dd/ad9aaa2b0bcb286ba600546b82ae6500fafefb": "ab95e44f350e5034c45b78e03f745556",
".git/objects/d5/a3e5570bc051dd526ca8ccd3df165ffe00edc9": "78bd4f292f86c7eb3bfcf71e713b4591",
".git/objects/aa/a995b8d557ff6ae8523ced799f77e04c322095": "a123dc4ecd4a125ad199e8193e2008bd",
".git/objects/aa/472fbf8f6372b5b066e92437617c29fad61544": "c2d1bc1e3d7a17f0b91edab89a557210",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cd/cb62f237d434de72b0df47d9862f24899a78bb": "84e9355a6a0083e991744e1655892a5a",
".git/objects/e8/cd52e8fe81ab9c5011b1620bf641f5648522d3": "7ee6373606b138a1e80ab5dc8d81ac8f",
".git/objects/ff/e674959982eac47b46e09e77e1688811bb2ded": "e574de58a7e5749f6a8ad26f87738798",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/991fda6477ef3d41ed6434ee9ecede8723fb74": "65f71824f41ad9bf1cab97667c1bd7ea",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/459535bcd090900adaf8ee76a0968ce541e2c5": "b083eb939854a0c9b9996ee8f7f52b38",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/24a767b40c1b42e45ce1d5d56ca5a913d35a65": "f58fde340d55b460cf3f2968cdc0ba89",
".git/objects/25/db82a5ff5bc423fc27d6b9020d7996e9d92982": "649a8373aead6a50027a42d6d686d8cf",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a85f118749a245c21c652f05f40f97e",
".git/logs/refs/heads/gh-pages": "e41d465da9c7123b5942429d8af6dbc0",
".git/logs/refs/heads/main": "f327112b0f25e3d35d826f013348e405",
".git/logs/refs/remotes/origin/gh-pages": "53293329ba1a2adfd9c5b517666f175c",
".git/logs/refs/remotes/origin/HEAD": "315167ff436deb3ea2eca61b1eefa72f",
".git/logs/refs/remotes/origin/main": "55f8ecd1f5948574ca26956bfa8ccab5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "49cb8a6c70741c88d6cb20fa8e063eab",
".git/refs/heads/main": "c41c361c4722f80000c16927e3486f08",
".git/refs/remotes/origin/gh-pages": "87f05e2029f098debb6a5213d1644817",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "fc84930eef00cb9d03f0dd9f86904588",
".git/index": "d68a429eda64cdc8ed393052ce14ad15",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/FETCH_HEAD": "12da7191329f382d7ee6e7c7c4f87009",
"assets/AssetManifest.json": "162960fb2f37ea7db679338687e4eeae",
"assets/NOTICES": "65927a9256022709295bd07d61a17fc5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "bc98291d1fc1a3a34f1434be566d5b81",
"assets/fonts/MaterialIcons-Regular.otf": "52fc34a70b225832e47b13c384bc9b3e",
"assets/assets/images/instructor.png": "9be78df1d975f7cfd71cfc2ebdd5bdc3",
"assets/assets/images/course.png": "60b984271e604adaf866a218dc69e0ca",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
