'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/NOTICES": "f271a2ffe52c2178b3ca5e67bbf0f8d7",
"assets/AssetManifest.json": "3a1a25fc13ec0260a7852156dbee4d3d",
"assets/FontManifest.json": "11713463a3278663f446ba3377b96009",
"assets/fonts/MaterialIcons-Regular.otf": "f397627a86a4201f2315e9181d582801",
"assets/fonts/Corben/Corben-Bold.ttf": "8f9921f9c52d3c25fd354d6e01f7b024",
"assets/AssetManifest.bin": "f37b4f0c219a3862fa556e12e7a3ff68",
"assets/AssetManifest.bin.json": "d0bde7de81385fdbcaec298f93093821",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"version.json": "7c2f3f9b8a604b94b13dae4442195329",
"main.dart.js": "554c78f33d7ca7d8b60c471898e359bd",
"index.html": "2bf00834e5c1e5303cbc0d3536def453",
"/": "2bf00834e5c1e5303cbc0d3536def453",
"icons/logo192.png": "126c0243dccd836aeb1c02b9adbc9741",
"icons/favicon.ico": "dd384f0944fcaefbf776f6447e34b711",
"icons/logo512.png": "fa1ccff27006c3e960f44089a2084d2f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "57bdfe9aade79587ecc4374b3035fb8a",
".git/refs/tags/1": "07e577eaa2d67863922946ccaa8d89dc",
".git/refs/remotes/origin/main": "87aef1c08dda0dafaec68799b7cf1fa4",
".git/refs/heads/main": "87aef1c08dda0dafaec68799b7cf1fa4",
".git/config": "4712bd287de426c645f4bd8405a264ee",
".git/index": "1ce9eb8a7d8e86faba12ce493e4515bc",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/a5/eae4997110c7b585d1f75edd7be1bde3ed06b2": "12a251520c98f9d11ca0b4c31bbc5a72",
".git/objects/f6/fc91c925687caeef32d5340a33436d6a41a32c": "d4168f9fc15a4644d7255a5a73a6387d",
".git/objects/58/0504fb61fb7bd2e85029528f1d51d42d357fe9": "58879ef4988571abf063fb470c1a920e",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/a8/5acaa094ae916283a1038e4b0d177aff2946fa": "1cb6f3e0a1fa9dc95dbfac22a46e5ade",
".git/objects/3d/6cc923ab3eca04557f2cdc70610c47cafa6d87": "0a47c4b0c47f277157044303b0b53fee",
".git/objects/b5/6b75bcaa6bf8dd354a852823432e9b4fb76982": "f9dd1a498e63550de877e30d625dac1c",
".git/objects/49/fc85ef2f59b5c27aaedefb7bc7bd3a89205293": "5c65f6e431a5f420622652389a8034d3",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/a8a75b155a10a67d96429dccc6da170ad4d5a7": "7f031e5b897a5e6d32fa6a23e953f7d4",
".git/objects/cc/e5f375f2540be644351a72516953840fbbf000": "328f7ee5c9b3a8fddf997827a3f050c0",
".git/objects/30/8244acb88689e4b353bed684b9917d92c9eeb8": "e9016b0211d64d941c7af81838b1c549",
".git/objects/06/cec9b424fbf9ca9cfdc1fec90fbc400bfa667a": "a3563e8f67ea15b56ad0bb266ccce5d7",
".git/objects/e5/41977a297c12b3688c1c6e312b271d5356976a": "7ca43982ceadec0e883db5865fdc2e4a",
".git/objects/e5/7a9176d2e4d22aa99e66d4b25c8e3fa518d5cd": "7fc93d6730e64369487b63b1e6a3aa3e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/aa/33bf2f52f90371d1e51fd4e81c508174c451b6": "24adf377ea1b313592f1685dc505c25a",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/7a/e75f412f2e4935c6f3d9ff31af8a0ba969e93d": "5d9c33c661f5f67f420ccd68546fb171",
".git/objects/86/2951a5a91cf0cb587af9d1b14972fa1e24361a": "c57197c38d95ae739c5b9eda1e69f2d4",
".git/objects/63/8ac5dabe852c32be4096da93bc75661795f498": "7f600e174e0eb14b0aad1d1ece957838",
".git/objects/b3/8c2465ca4b16ea650f7d6a1131c590093cb604": "3215ae1770476d40ea41ce5a70021868",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/29/e35350f2418c34621d9e87869b99d158b83d24": "cd86bbed5b64213eea57bb8e33d4a488",
".git/objects/c0/5d4d3f10e515ea2211d104768d164b23d7a2e2": "5427c98672e35d9270f4688bb0313a19",
".git/objects/1e/57066d562f6bca4a181d3e7dbe96fb637d4d67": "9eae99cde7bf3a6f79b1e67d6143f315",
".git/objects/1e/daad48fce5e4d2ea0b0e030b8b81570224cccc": "c5a998f39944516c32c4ebe62160db0b",
".git/objects/cd/9a15e9aadfedcac3e966162b4bc1025310c091": "a2559fd6a1e2178f40ab3ffbd7ac1e49",
".git/objects/47/f401cdb431fc78519817db10b8dc0edf0ecbe5": "8a186092cede4293c919d16710b27a32",
".git/objects/59/ad8820cc4d361295c3beff783b059325b3c8d7": "983ff37fc76399834895aaa946232f2a",
".git/objects/c4/f8645e00bfcd7929c23c2beed7cdfd53e1e8e5": "dc64b469eeead39081b5a2ee620bd8fe",
".git/objects/66/2d88bf4590862d9b98d34aab9497c0e66048ac": "9a59e13f75bf343eae07381045610870",
".git/objects/ad/6b2c55792b8dca9b6a8ae038fe2d2ebf6762d1": "1c35772d0d5637701c812aaa139687a9",
".git/objects/9e/2a37154b8f7ea40c040d0d1debef5a43cf056e": "5c950a369bbb4391cc65569763da2c43",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/42/080b422df27dce427fe66eb16fe120adfe224d": "fa532c7bc6b7bf1cf8c16e91c50dc101",
".git/objects/9a/facd0f5de820ede09db90988ea63d75a8c8f32": "27260d1f86a19adf3d9771c471c1d050",
".git/objects/db/0489dc4f46d0c01f20ff97bea2d6eb1e06122c": "e6e496241e16b648d5bb2ff19b07c9ef",
".git/objects/bf/76851ad0280efe8b07a3072036761be1154653": "225569b6086cb8db2e932bc7e26324b3",
".git/objects/d3/e2888883deda15f7da69093576ade90067c791": "7941794435fba38cbdc1ccd62946bb65",
".git/objects/f2/c9e97c91d0ca32002d6eba53cf1981031047bb": "05d147ca28fabf58f251c18d62f64056",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/15/6b66d142238b00065f71bff6f462fe1a5bbcc7": "8bc3236d0432feea9e8bd0a77bfe0708",
".git/objects/15/406d3ab474671719eeacd55e99f92355b2e426": "8f94c439b7de83bbf096054698f6d16e",
".git/objects/c6/a54d51c249b03aac295858fe00d80f5f894c56": "9b32b34db1de5195eb04b5b83f153a2f",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/d2bf69eeb0a8277d4b80ff8489987920a37f2b": "b153cdebd8d208a7d09da0e86b46973a",
".git/objects/da/70c19437b39d49a908bb5307c1d08536c14ae8": "a882c52789b7d266fbf17939b7da6000",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/02/dbfd7e24976004e84e2586d8ad50c635f60006": "b96c1791d98266619dd8cb62e23ce08f",
".git/objects/02/5d3c35aa5023f5b024359bf94dd22cb1c6fde9": "6b411c240d6fd1c1b31f543d97eef0c4",
".git/objects/d8/c9d7651ea9c6135d17ab6f72f7cb9dbc573f7f": "7b3bf8ceb29f9385e8d9fc720f029bdc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/70/a971e9bb9d89334a7d93f753c6782223e9c40c": "a55680ea9b3c65187faf19b65ccc06dd",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/ac/2c56381f5558251ea60ec9ef45105bbf22f5bb": "99bb1d6bcf4527649b9759b9a194bed7",
".git/objects/0e/1ea9aee400d634276ab94f4ecdf78534825976": "aae2e0479d381b295bd21769913258de",
".git/objects/16/e34dc526d99dbdc4bdbd6676eb69dc0ba9eac9": "a8a312bbef48fb23d236d5dc4a5e5096",
".git/objects/0c/62dda3000c0cb84750b62e599e8335ffda5782": "0e9a3ece35ee827634a10e5fbe27a028",
".git/objects/0c/5a567cc21c660d728805d73607b05530c04148": "69bc67c9a69471dfed7dfde91ac5549b",
".git/objects/1f/d286fe2da7e0144ece8a2cd90c867217269a43": "0b810eb4a7e29568e9be9d2eabaa9813",
".git/objects/ee/8b28a7badab0224bc59a8afe248df941ed35d7": "9c166b35ca90afe00c050afdf5bb0217",
".git/objects/2b/74c17cfc97c7247cd790844457c8381a54a0b6": "1892623d15d84d741a0a75778fc5547b",
".git/objects/2b/ec1cd40a3c9bf6645fccb733fb26ecbda46398": "18e3dbc8e9cb208f7514abac36a51094",
".git/objects/32/63f13cd85452061a8568de39b7e303f159f7b8": "53878e3f52ecd639bfaff199cf77796b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/0f/4d78f89a9ef70b806024a20d5f8795a0846261": "01ec5517f5b14507499ee1465de949e9",
".git/objects/ed/2a8ac30e8e166ba9db3fda2ab5b11d91b8613d": "bb5fe9f3d69db395478c5b33d869b8c3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/9f6556cad4f1178f0d9a99aeb3f88f4850353c": "db64a419d298a708fd56403aa3da96eb",
".git/objects/13/043c9a3b4d3a60d56d4fc1c08fe190443c9ad4": "633c6c74e881278c53e6736ebe738420",
".git/objects/bc/5cd47dfdfb570afbd216fdfa7666604f95baa9": "b3f00f9035c1fd4ae794bea260d84331",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/e7/d0879b32e00a92428b1cb9383ced6e3973e6f6": "eb4e8c9c16907217c904db4abd5a84df",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "28efda6228a31e26dbcd2e702bbe4027",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/COMMIT_EDITMSG": "45a62d3d5d3e946250904697486591bc",
".git/logs/refs/remotes/origin/main": "24841aaf2ce5c92a3abca1d21c17d82b",
".git/logs/refs/heads/main": "817fb9395422383703188772c5576207",
".git/logs/HEAD": "f907c5ac8f0a2806c9310bdd73e1282e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "854520124c5b877d61aef9c77a406e97",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "90fc59ea4f6c6554827a9b5626f91ab7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1"};
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
