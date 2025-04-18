'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.wasm": "a2021418f5cb63318cbe273e2e75f877",
"canvaskit/canvaskit.wasm": "1febcf3fdbbfb632728ab3902c386b44",
"canvaskit/canvaskit.js.symbols": "b7494490812ea0b4c2cbb3969019be96",
"canvaskit/chromium/canvaskit.wasm": "407d7dd73b05e38e5cafa7b789e22feb",
"canvaskit/chromium/canvaskit.js.symbols": "9961e966e98a802d73942d48b15b86e7",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/skwasm.js": "ede049bc1ed3a36d9fff776ee552e414",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.js.symbols": "6c749208f75e81d9628fa894d73bfbdc",
"favicon.png": "91fddba48021ee783153e91c0eaea36c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"version.json": "2e9fde8ca9fa4c80bd01569d131b6215",
"main.dart.js": "84e4b45a2df0bf83a32640c685efff5e",
"manifest.json": "5982f1554d4e67f0a9aaafb431923ee9",
"index.html": "859c872c4ab9b58fe269d89d92f7413e",
"/": "859c872c4ab9b58fe269d89d92f7413e",
"flutter.js": "f89db28227ec48576c4247890b4446f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/AssetManifest.json": "9d1d8c69b2d9d6284a06763d0337d6f9",
"assets/fonts/MaterialIcons-Regular.otf": "58ab1a3bc6a7df7086e26f0efeab8c10",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "84ff995d614954a91feff420c13720dd",
"assets/assets/lottie/Animation%2520-%25201717925173894.json": "8b5e888d3209f2881bb338d046e22bde",
"assets/assets/lottie/Animation%2520-%25201717925567220.json": "6b8166a3c031dc0331835cb933b0c796",
"assets/assets/lottie/Animation%2520-%25201717925435223.json": "bff289e95197afc51bb9083b33cb58a1",
"assets/assets/lottie/Animation%2520-%25201723067929256.json": "ed2cff79577b5e2c316bb05c71d17ba9",
"assets/assets/lottie/Animation%2520-%25201717925360116.json": "083307f7b178cd6be1db896b4beaf1c2",
"assets/assets/lottie/Animation%2520-%25201717925305403.json": "5f8a6834f5f797dbf6be2828a75c360b",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/svg/Frame%2520(3).svg": "b6bd710db7c989f5d23ae8e9fb9b957c",
"assets/assets/svg/Clip%2520path%2520group%2520(5).svg": "9a4f0e02998d1330335cb78e1c21932b",
"assets/assets/svg/Frame%2520(10).svg": "9eb3604d61f02807b51ce5f13bcdbd5b",
"assets/assets/svg/notificationbulb.svg": "ff13b33818cc0a89d010024da8b07113",
"assets/assets/svg/Group%25201000000997.svg": "0ffdc8caff95e542148a79648d2922a7",
"assets/assets/svg/Group%25201000000995.svg": "0db4fbddba529ded00f7afa4213f9a8b",
"assets/assets/svg/transaction.svg": "aff1a23242fe13bb68cd878988d86b04",
"assets/assets/svg/Signin%2520fingerprint%2520icon%2520(1).svg": "7de76830e0d80c8510015d9a4c7ff447",
"assets/assets/svg/tickets.svg": "055833de691c3a128cfc9c6df911b65d",
"assets/assets/svg/Frame%2520(16).svg": "d23b12b5272cd61526438bc0316f1f06",
"assets/assets/svg/Onboarding%25202%2520image.svg": "3ddb1a953fa10c915af82521cacfd2f9",
"assets/assets/svg/Group%25201000000994.svg": "c053d82591ff0ebbb286fab51e428948",
"assets/assets/svg/send.svg": "82929c5eeaca1cd478e8af0b3ca9eaa9",
"assets/assets/svg/notificationfailed.svg": "a49aa67b86dec19fb07b58a8067b923d",
"assets/assets/svg/Group%25201000000829.svg": "9583d883223a1f0769071572ade3d835",
"assets/assets/svg/Clip%2520path%2520group%2520(7).svg": "5d30afb3a114e70075ad90f6d65f7d19",
"assets/assets/svg/Frame%2520(6).svg": "1d83cd0bafcaa61470f4fe17a0ef80fb",
"assets/assets/svg/qrcode-viewfinder-svgrepo-com.svg": "147acaa232b3a2b251fa9cb05639e5b0",
"assets/assets/svg/Frame%2520(17).svg": "7178006077378af37d467ea04d0e9764",
"assets/assets/svg/Frame%2520(18).svg": "3e4ff6eb71ef0cd472ce06bd0fd4280d",
"assets/assets/svg/bundles.svg": "6f86d9e1f4eb0a5a0de5df1ef9e3258e",
"assets/assets/svg/expense.svg": "0b985e36ceb889a15ea5b15272132ed1",
"assets/assets/svg/Group%25201000000996.svg": "04a7c2c9ccb37d210ff67fd3c216dcc9",
"assets/assets/svg/Onboarding%25201%2520image.svg": "713621be8f81c62374580c4590f60d21",
"assets/assets/svg/usdc-usd-coin-svgrepo-com.svg": "bd40ec51d1f6e51366cf673066ca0a53",
"assets/assets/svg/pin.svg": "5a8a09e3a35a197a520a6bc4e561c009",
"assets/assets/svg/Clip%2520path%2520group%2520(4).svg": "170077bd86ea817ce8d2ce89d9be2a47",
"assets/assets/svg/Frame%2520(8).svg": "0e2197cef5fc25692a54632aee26b1b5",
"assets/assets/svg/onlinepayments.svg": "43b0182641a14b3f0cdafe0749b6df2d",
"assets/assets/svg/message.svg": "8a481daac89db10a591cdcfa7db86b9b",
"assets/assets/svg/Frame%2520(23).svg": "288327afa76c38f10544d1c576ca7b0b",
"assets/assets/svg/home.svg": "6911cc6bd10dbee74e9b970ec87194b7",
"assets/assets/svg/Roven%2520logo.svg": "f8bca2fa042406752a0a31eba7ee030b",
"assets/assets/svg/Group%25201000000829%2520(1).svg": "9583d883223a1f0769071572ade3d835",
"assets/assets/svg/Frame%2520(20).svg": "be0069276abe78184713bbefae5b2a7f",
"assets/assets/svg/receipt.svg": "c02f9cf1fba561d201cf3dca52766e67",
"assets/assets/svg/Clip%2520path%2520group%2520(2).svg": "f92aefd3c31bd13ae7c1a12c295fb9d9",
"assets/assets/svg/more.svg": "096a6f1aa556da9bc6eb17f2fff60ff2",
"assets/assets/svg/google.svg": "15769d39e0654c731835ee15df46de94",
"assets/assets/svg/foods.svg": "0aa66dff4a512df6c508dba41b7db879",
"assets/assets/svg/fuel.svg": "677c0b600ea4f22d37de603001b02708",
"assets/assets/svg/transport.svg": "e824eab8e0658a2bb8f63b976ded98e1",
"assets/assets/svg/notifications.svg": "fef349204058318eb8f1a62e9a489088",
"assets/assets/svg/Clip%2520path%2520group%2520(1).svg": "7c9bb85d718fdec2fa72490f35ce2e0e",
"assets/assets/svg/phamarcy.svg": "166b63d269d494d3550baab74c14ea1f",
"assets/assets/svg/logo.svg": "2b9dc825261172bc1e6821cf49311c4a",
"assets/assets/svg/Clip%2520path%2520group%2520(3).svg": "29864d8e9e479debde7796e370ad5ba6",
"assets/assets/svg/Frame%2520(7).svg": "44e4e845805ab20c024031fd488fd802",
"assets/assets/svg/usdc-usd-coin-svgrepo-com%2520(2).svg": "6fd0747b27fb255b2c0198f48316ffa7",
"assets/assets/svg/Frame%2520(4).svg": "594ede5494663738757df0e97d1ed4a6",
"assets/assets/svg/Frame%2520(14).svg": "2b4cafe9ee0fe9ed1c42d5e32272ce28",
"assets/assets/svg/Frame%2520(5).svg": "b8df36acac22dc48bd278c527519c21b",
"assets/assets/svg/contactless.svg": "5a19431b76835bb5b8e99c196e1eddb6",
"assets/assets/svg/Frame%2520(9).svg": "d3f31b9476f7166bbddccd4b5dd2fe01",
"assets/assets/svg/internet.svg": "0c489aec683e45650420243fd56ee1b6",
"assets/assets/svg/usdc-usd-coin-svgrepo-com%2520(1).svg": "6fd0747b27fb255b2c0198f48316ffa7",
"assets/assets/svg/hotel.svg": "6cde9e6817ec348fcbd21eca76b36e05",
"assets/assets/svg/income.svg": "766d9f154e3031170fd1514e5c9e0f45",
"assets/assets/svg/deposit.svg": "2893f89d3f5dd642a5a4504bdb72a9d8",
"assets/assets/svg/atm.svg": "5209f4d64f88da519c33658d2dd777a4",
"assets/assets/svg/Signin%2520fingerprint%2520icon.svg": "7de76830e0d80c8510015d9a4c7ff447",
"assets/assets/svg/Frame%2520(11).svg": "2dc18cb27ec008ed316738c0ac08c53b",
"assets/assets/svg/pie.svg": "d90ddafcd85ae9b712b42936e37019c5",
"assets/assets/svg/Frame%2520(21).svg": "3e657deacd84500089893ed90fdf6dca",
"assets/assets/svg/exchange.svg": "ed190385756f17a6452b4b9c173c0213",
"assets/assets/svg/nocard.svg": "dd7699dd5edfa06ab1be1ef0a6f4da1b",
"assets/assets/svg/Frame%2520(19).svg": "d21d9bed01b197dbcbccaf296f90943b",
"assets/assets/svg/Frame%2520(1).svg": "f77ba800345e985fa4c33fbba8c50d58",
"assets/assets/svg/bitcoin-btc-crypto-svgrepo-com.svg": "18797803b45c4eb33a9381c31abd893f",
"assets/assets/svg/forex.svg": "80318a1c6a8c70b0d53c17abb36194c2",
"assets/assets/svg/Frame%2520(12).svg": "2cab6ace44a3560e87c07211bcb9fc6e",
"assets/assets/svg/flight.svg": "7775e44548e4fc1bf0943caba7069b13",
"assets/assets/svg/Frame%25201000001006.svg": "d03e6cc8334f728e10806191f666c1f1",
"assets/assets/svg/Frame%2520(22).svg": "2766a5dd8318487eceb11498dee6254f",
"assets/assets/svg/electricity.svg": "3e6376addd9b9a2c933cc2d6e45f5ba0",
"assets/assets/svg/Group%25201000000993.svg": "232b69b1b65bc29557111fe783650ed6",
"assets/assets/svg/ecommerce.svg": "d4f08c519881544cfb35950c5a628112",
"assets/assets/svg/onboarding%25203%2520image.svg": "15f34bcdfada92fa7326e9cd01899e6d",
"assets/assets/svg/Frame%2520(2).svg": "1d403ee6dc7611bd05775eacd1536cce",
"assets/assets/svg/Clip%2520path%2520group.svg": "c258c68abbe51af2cc3b0694d53568de",
"assets/assets/svg/Frame%2520(15).svg": "61e471338fee3304c54fcd6f124b30a8",
"assets/assets/svg/Frame%2520(13).svg": "b67ee82b35c535659549444986753313",
"assets/assets/svg/Clip%2520path%2520group%2520(6).svg": "608248766f3bc6e0e4986f553c002485",
"assets/assets/images/comet.png": "e0b6f85f11c9f192c9da80d3ea65cf93",
"assets/FontManifest.json": "6b4e3aafd085dcfb3e513e3e5da97755",
"assets/NOTICES": "4cf66d07ffe2393307e9e53e46fd93d4",
"assets/AssetManifest.bin.json": "c8691899ebc332c2b0ddbefa25a2cdad",
"flutter_bootstrap.js": "b4c269b4429c5b22e5b63e65add8e526"};
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
