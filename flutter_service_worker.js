'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"ads.txt": "68a895859dd9b185dc905884655b0ac9",
"assets/AssetManifest.bin": "b07933719cda0ee023e7aca016e11edc",
"assets/AssetManifest.bin.json": "e0d68db6916fb55966f0a4dbd994c1c6",
"assets/AssetManifest.json": "303d819843a38c2a5868bb4cd448fbb7",
"assets/assets/cards/svg_playing_cards/backs/abstract.svg": "7aef3cd91549b534cf865eb16154bac0",
"assets/assets/cards/svg_playing_cards/backs/abstract_clouds.svg": "66f37eb4cc51b24976342bcf8416d74a",
"assets/assets/cards/svg_playing_cards/backs/abstract_scene.svg": "6dfc42d93519168bf3653de303c072a5",
"assets/assets/cards/svg_playing_cards/backs/astronaut.svg": "2b51f388256c164d20bf4033cde3ecda",
"assets/assets/cards/svg_playing_cards/backs/blue.svg": "c9ef5c6f05bee1cb985e6f74391f1c5e",
"assets/assets/cards/svg_playing_cards/backs/blue2.svg": "8783f9b103a9ee1af8c377cd11ddb911",
"assets/assets/cards/svg_playing_cards/backs/cars.svg": "2b4ba85919bf5ca8fd70cc2c2af17168",
"assets/assets/cards/svg_playing_cards/backs/castle.svg": "b6aa663a72290b273c49fad24f692ea0",
"assets/assets/cards/svg_playing_cards/backs/fish.svg": "3559d675cfb87b418c90ac2c9289dd83",
"assets/assets/cards/svg_playing_cards/backs/frog.svg": "45235b6104ada5702a7ff799298bbca9",
"assets/assets/cards/svg_playing_cards/backs/red.svg": "805a52dfc840845e9c49819554951b8c",
"assets/assets/cards/svg_playing_cards/backs/red2.svg": "89689667d82c3d5c7a6be12fce78c516",
"assets/assets/cards/svg_playing_cards/fronts/clubs_10.svg": "63c123628e346da8fd3e12c50d56215e",
"assets/assets/cards/svg_playing_cards/fronts/clubs_2.svg": "51b0f2ff8a33682451f14c6b59112df9",
"assets/assets/cards/svg_playing_cards/fronts/clubs_3.svg": "abe0cb931d69bc82198197b3c2ecc08b",
"assets/assets/cards/svg_playing_cards/fronts/clubs_4.svg": "0ad8733c364ee0664fd1e9e1e693b037",
"assets/assets/cards/svg_playing_cards/fronts/clubs_5.svg": "641e104f8ce62871c4484bbfc939f67a",
"assets/assets/cards/svg_playing_cards/fronts/clubs_6.svg": "1139210d2589d88a63828edcdf445985",
"assets/assets/cards/svg_playing_cards/fronts/clubs_7.svg": "fb6be877b974db1fd2c6bbdc39811690",
"assets/assets/cards/svg_playing_cards/fronts/clubs_8.svg": "97659d97b9339663ec68defe110ce22c",
"assets/assets/cards/svg_playing_cards/fronts/clubs_9.svg": "f5fcfd5c5a8f397c9cc74fa0fa6b3f64",
"assets/assets/cards/svg_playing_cards/fronts/clubs_ace.svg": "37c3e21333711cd7ba4c4ccd11a7ce1e",
"assets/assets/cards/svg_playing_cards/fronts/clubs_jack.svg": "6371b30d7a5c0f5bf3afced27f59f0e3",
"assets/assets/cards/svg_playing_cards/fronts/clubs_king.svg": "68a579dd83deeef1af32fe967c0373f4",
"assets/assets/cards/svg_playing_cards/fronts/clubs_queen.svg": "670c1bdb2b80170595c2fa07d5a4e54e",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_10.svg": "88d3373d49cf4069e18895e5e0a9c9f8",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_2.svg": "d46a60252978c408dc7f2662e69d6759",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_3.svg": "edf9e37bb5cf4756a3506274991a9b1f",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_4.svg": "7539103bbc096ed038d8bc9915c57894",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_5.svg": "4077a33ee05d0660284b23051cb15cf3",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_6.svg": "2e55b958eb691be2d33ad79318345cd4",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_7.svg": "77d18472c1a9947e27ddb1e977543e7a",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_8.svg": "afc9ed33ea124163ddc96b95f364d1ee",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_9.svg": "eb04b5662b06637a14fabe7e91ed1412",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_ace.svg": "af4997bbfacd77fd17c72e336e2bd21a",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_jack.svg": "a4d92f8356ec4c5fa7af059e863ea5f2",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_king.svg": "d92782d95c63846ce3bba19809a789f2",
"assets/assets/cards/svg_playing_cards/fronts/diamonds_queen.svg": "cfe0e6f2bad81e7321de2af8fa059f47",
"assets/assets/cards/svg_playing_cards/fronts/hearts_10.svg": "0ad26a2a76f970fa4e3692fddf4d5ec8",
"assets/assets/cards/svg_playing_cards/fronts/hearts_2.svg": "c9e8d06493f1cf57f65e55ea933d048f",
"assets/assets/cards/svg_playing_cards/fronts/hearts_3.svg": "78835ac42b3076ab368386a61b100401",
"assets/assets/cards/svg_playing_cards/fronts/hearts_4.svg": "923cbc6abf1a4d7ab0d864599f912e53",
"assets/assets/cards/svg_playing_cards/fronts/hearts_5.svg": "bb9e5f2a8cd6c070a24ce92f2d8c2a4a",
"assets/assets/cards/svg_playing_cards/fronts/hearts_6.svg": "7a7430a743cd46f8872e4cb76f0d89d1",
"assets/assets/cards/svg_playing_cards/fronts/hearts_7.svg": "a0d33165bbdb1c5e5b361d76042f092a",
"assets/assets/cards/svg_playing_cards/fronts/hearts_8.svg": "e79db437da618f7c310e9ffdf5ac858a",
"assets/assets/cards/svg_playing_cards/fronts/hearts_9.svg": "f67ae7f665621b4b5996d4861798d9d3",
"assets/assets/cards/svg_playing_cards/fronts/hearts_ace.svg": "4c6be90db958ab3fb4a126bebfa626c9",
"assets/assets/cards/svg_playing_cards/fronts/hearts_jack.svg": "7c534e8e26de758851c335ae97a1d817",
"assets/assets/cards/svg_playing_cards/fronts/hearts_king.svg": "b813a74496a3db0b47fa2cc6b990cb21",
"assets/assets/cards/svg_playing_cards/fronts/hearts_queen.svg": "152e74e9bc66b49a426a1dcf4685b3b3",
"assets/assets/cards/svg_playing_cards/fronts/joker_black.svg": "930f513e831122a92477610599a4a500",
"assets/assets/cards/svg_playing_cards/fronts/joker_red.svg": "b585003ee865c7ff17148a7449e082eb",
"assets/assets/cards/svg_playing_cards/fronts/spades_10.svg": "4ef7b3c91077aa723af57cf052fff604",
"assets/assets/cards/svg_playing_cards/fronts/spades_2.svg": "1b2ab80980514e2115b69466d79e5cdd",
"assets/assets/cards/svg_playing_cards/fronts/spades_3.svg": "5b70631cff3c2e47a43ec4d31afc1c10",
"assets/assets/cards/svg_playing_cards/fronts/spades_4.svg": "4d9da56e9eecfb207823a4b50910f88d",
"assets/assets/cards/svg_playing_cards/fronts/spades_5.svg": "909fd5c3a563ab84db388192e186675f",
"assets/assets/cards/svg_playing_cards/fronts/spades_6.svg": "e33747a97af3fa5f8479da4b62012c48",
"assets/assets/cards/svg_playing_cards/fronts/spades_7.svg": "443ffcb07f557f966f0a6ca8e3186790",
"assets/assets/cards/svg_playing_cards/fronts/spades_8.svg": "7bb884ba94555d582f1358dac32dd3ba",
"assets/assets/cards/svg_playing_cards/fronts/spades_9.svg": "b42c8a3d1209cde0d7912e581306df26",
"assets/assets/cards/svg_playing_cards/fronts/spades_ace.svg": "b0965a8a7112208e52074526151749c9",
"assets/assets/cards/svg_playing_cards/fronts/spades_jack.svg": "bee4a513b2555ca0e5ba96f7611594fe",
"assets/assets/cards/svg_playing_cards/fronts/spades_king.svg": "90667434c94f2adacc9aa7537bc86977",
"assets/assets/cards/svg_playing_cards/fronts/spades_queen.svg": "405d618ba6d60ac811b0f7f09b2fd052",
"assets/assets/cards/svg_playing_cards/other/blank_card.svg": "4e634488ea4784f75823c768287e482f",
"assets/assets/cards/svg_playing_cards/other/clubs_8_alt.svg": "2ca3bbcbd24432453d8fbe70c4f815fe",
"assets/assets/cards/svg_playing_cards/other/clubs_ace_large_pip.svg": "97917fd8f4e8f09e27340b8ef0612606",
"assets/assets/cards/svg_playing_cards/other/diamonds_8_alt.svg": "adfd6e512e0a3c75880434b0de4261d5",
"assets/assets/cards/svg_playing_cards/other/diamonds_ace_large_pip.svg": "d3bdd28cee4a00eadad937502d442c25",
"assets/assets/cards/svg_playing_cards/other/hearts_8_alt.svg": "ebbc286a20c25728ddf09a35c2914d5b",
"assets/assets/cards/svg_playing_cards/other/hearts_ace_large_pip.svg": "33f1f203319e76e59f404be5a6d01d62",
"assets/assets/cards/svg_playing_cards/other/spades_8_alt.svg": "ddb5918778494c51d1f4b3e785ab968d",
"assets/assets/cards/svg_playing_cards/other/spades_ace_large_pip.svg": "5f9114d817275c9586507afa2f89c2db",
"assets/assets/cards/svg_playing_cards/other/spades_ace_no_phrase.svg": "0330d4770ec8a1b75705b51ae4643b7b",
"assets/assets/cards/svg_playing_cards/other/spades_ace_simple.svg": "ab2d6d8b004dfae0f7c53b81a5627b74",
"assets/assets/fonts/ABeeZee-Italic.ttf": "96da8c2e48ece448d2613b3ebd7a5e41",
"assets/assets/fonts/ABeeZee-Regular.ttf": "eca822a292850c10e1d8489fe36f3e1b",
"assets/assets/fonts/BebasNeue-Regular.ttf": "b2b293064f557c41411aac04d6f6710d",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato-BlackItalic.ttf": "047217f671c9e0849c97d43e26543046",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/assets/fonts/Lato-Italic.ttf": "5d22f337a040ae2857e36e7c5800369b",
"assets/assets/fonts/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato-LightItalic.ttf": "2404a6da847c878edbc8280745365cba",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/assets/fonts/Lato-ThinItalic.ttf": "2b26bc77c3f9432c9d4ca4911520294d",
"assets/assets/icons/app/app_icon_05.png": "b12450e4da434dd6d50ab53d2930eaf4",
"assets/assets/icons/app/app_icon_10.svg": "d797a24d0b3c9471827b538d9cbc30f5",
"assets/assets/icons/app/app_icon_10_1024x1166.png": "b98e52ce713d955b4bbf505f4250e075",
"assets/assets/icons/app/app_icon_10_2048x2332.png": "09b58dd1370d8db8f7ca4e9dedd26f41",
"assets/assets/icons/app/app_icon_11.svg": "b6a403ae973feed78acd3f91fb8cf6a9",
"assets/assets/icons/app/app_icon_11_2000x2277.png": "41802179510eb06c9713c3459e5b14ee",
"assets/assets/icons/emojis/drinks/beer.png": "b254340ffb921aa9e7e4339d1a031c8b",
"assets/assets/icons/game/icon_circle.svg": "0ff2a9fa60ea7ae06bd0ef5a91a9c771",
"assets/assets/icons/game/icon_crossed.svg": "b7041eec5d73ca4bd89431a80492688b",
"assets/assets/icons/game/marker_group_current_player_crossed.svg": "4d1d8d0ebb1436be9beb283e264a56ca",
"assets/assets/icons/game/marker_player_single_crossed.svg": "8920d4568051575efb5064d0c801dd96",
"assets/assets/icons/game/meeple.png": "43a21651da75055af6d16b5743e1fd2a",
"assets/assets/icons/game/player_current_in_group.svg": "c51f48843bbed71dc92f76a9de62d3b0",
"assets/assets/icons/game/player_current_in_group_fill.svg": "3fc7b9833e04846611f9b970f82ba2f1",
"assets/assets/icons/game/player_current_in_group_stroke.svg": "dc6da18008575f7d6411f64ae6c3f3ae",
"assets/assets/icons/game/player_multi.svg": "e42e6fe3b88237e3a449e693b33e4177",
"assets/assets/icons/game/player_multi_white.svg": "9a5bdd685cc883b1e86c809ccb348750",
"assets/assets/icons/game/player_single.svg": "967415de0140a27017fae5acf4426d45",
"assets/assets/icons/game/player_single_2.svg": "6656d7c7cfa79a209fae63da2519fd33",
"assets/assets/icons/game/player_single_2_fill.svg": "62d19770a3925b6198e13379b6f74566",
"assets/assets/icons/game/player_single_2_stroke.svg": "6a54dd7aae2a5920049ce85cd2a1d06c",
"assets/assets/instructions/game_screen_layout_description.svg": "a6d57f2fde2b509e9ed08601f6813864",
"assets/assets/instructions/game_screen_layout_description_with_text.png": "3f186ffbe06ef8ba855d9cb19a9286a3",
"assets/assets/instructions/game_screen_layout_description_with_text.svg": "7692a03cd5f4b4842dd224223cb03b80",
"assets/assets/other/players_around_table.png": "3a0be97f21c6f77eaa39c9c8f0a57dc5",
"assets/assets/other/players_group.png": "f7f35fc5df6036fa6bbf64fc4406b14c",
"assets/assets/other/players_group.svg": "2ae6b2a51824bf1dc0669216cefb7f1d",
"assets/FontManifest.json": "f9533c24ba49a3ced48622716a09f512",
"assets/fonts/MaterialIcons-Regular.otf": "2c82bbe5fcf9da4842952041d8d97f1f",
"assets/NOTICES": "0532b605a4fedbf3e1c782a89d23049b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "099ece9c149d7a450a24bd5905e5094c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b6edf5e2ad0631b4457fdba78dc00403",
"/": "b6edf5e2ad0631b4457fdba78dc00403",
"main.dart.js": "8dc6a0efcc012edea335fa8f67be0c6d",
"manifest.json": "06921824189cec6098c5d7016532df47",
"version.json": "85cc9e789a03766542af2e6d7bc15235"};
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
