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
"version.json": "db47b94e59cc6fa1749e05cde018075e",
"main.dart.js": "e45cd9d6c94812f69f60980751ad804c",
".git/index": "ce2bc829dc97fa6369ae9107c8beb3f2",
".git/logs/HEAD": "a23b47321f9f446c5dfbd6cfa03b6f0c",
".git/logs/refs/remotes/origin/main": "9c29d48c017ca7ba0a816c499a8cb6ca",
".git/logs/refs/heads/main": "69cd494707b50a70c0e6f2413b1feb88",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/objects/ad/70705af505b731a5a984dd76806dc43644465b": "633ff99e7d54988975d3fd6fa0026972",
".git/objects/ad/2be4fa0d100ad0897fcdabe932b2f1ffffeb74": "2f8d945775165e281ad57979e41342ba",
".git/objects/d1/a13b3a25e686756a521bbb0a18a1038ff9c163": "49c9d290c5f4c72f5b7309a4571321ff",
".git/objects/7d/a42e70c1c067481a87b407d507200e0dcd5cf6": "d350cd9f4a4fe9d2bd2c4279da4985b8",
".git/objects/84/4577cf58ca049af9d6195c209b173e5504bb1d": "e1eb173fc593ff96c7c0c4fe99c17d2b",
".git/objects/19/d461df03eaa0d0a6f7a9455bd6bca1e6410f7f": "dfb70c1562343407c969f5fe6a6c39df",
".git/objects/19/3d70466be624c0cbc3f8d85382d08d53605e6e": "6ad3d1467f2eb456fd96dddb99d5b3e4",
".git/objects/19/dff46ea5cdd742d6b8a349ec08014def98211f": "955bb7783ce1c89a5108d636811b1ef8",
".git/objects/19/8c6afedcb749dafac0070a0a47049419dd3d6e": "41fc4f95cc97a28e8119b7f1df2a84ac",
".git/objects/42/7df583da12e7e48a08665c8ed1a1d4f9b55757": "88bb00ebe3198c9ecae912338f5775f9",
".git/objects/94/aa70555fbd93eb3318567fda9de3b03bf121b9": "292fecc6b6706cf32fa3451977780cfb",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/536262bb4b7c707a9a6a6768d982e3685bc0c3": "0806e43891b5c4e503e68dc1dc9e06b8",
".git/objects/e6/a75f86aa411f1babcb6040598882b30354dce9": "7ec371c8b49e7ab16139398f21abd880",
".git/objects/d8/7406319d1da513958da453270ada76e87eb133": "6b30ff1792218d9995ad6f0d177e4793",
".git/objects/d8/e851ba610b5159bfc24427fd57799a00f651e7": "afb06205228b7c7cc27002d305e96ac6",
".git/objects/fb/b29acceb6deb11e5f122d6e7e2e51a2d361488": "1050b078c3610aeec7c2da5b413ad06e",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/cf/9a98008e002dfac95ce797fe787291c7c77e56": "5bf91660908de7cbea01fbaed62abdff",
".git/objects/b8/321fedf1614ddc9dd264b14c8d96ce4da9e14f": "878a0dd9a3526bbeeb332aa43579cf91",
".git/objects/09/920472e7f7c538d7d03ee134004b74464728f5": "7440558ce878be82207f2a4f1903d4aa",
".git/objects/7f/d7df2f32f9b65305e187a5b55a101e480325eb": "059004e59fd41189c19fbaf0636ecf79",
".git/objects/03/7bdfc2108c788ae2592be6b6146062a2536ace": "30144006ae44182fc8c6d91f5713b34d",
".git/objects/07/cc3b4a614883e9dc8280c6c230de84bc2d3368": "68f06d966fab41a1ddd42ce6ca1a2e98",
".git/objects/b3/c249dcd61926806960cc4f6a8df0c9173416ac": "28ebc79c900abca322ef282d9518537d",
".git/objects/bc/0313394b70e94efaa2b866322e11adaab33e59": "d23773035dfbe5b2e4d97f886fc107f2",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/98/5054829dd76d43ec157aae92d0736593557c74": "9e655de41a9c4bff3a9a51543ecdb5e7",
".git/objects/ee/2193255ac86d65994da1e188f95d82f4ddd0ce": "40a45393173190ff934e97c0bab32a45",
".git/objects/6e/a5eb689075050b4176e47a93a058ddadfdbd04": "73304602d05ead7847bece2b6a7969ac",
".git/objects/6e/71be3b03bab9a11dfc5b7bdc3b4de22c590dd5": "9fcf2d5488029ab048fef9e673e54af3",
".git/objects/8c/eb0a185f3779174b5b76b2ef47684ba13611f1": "bb5959121fc149ac1d2c8a97acb3380d",
".git/objects/5c/194fd91b2854bd61bedae74792401161d52799": "c1e123965866e29cab8cbb1dabb255fe",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/2e/fcd7e426feb6d36829ac59af8f970b68c37bc9": "f3dd72f3228d1006ed0be1d97f1c2785",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/fc672ae121788bf5dccbaaf5aa058535622eee": "75fcf196604d3b1f5ce08b4a08c32718",
".git/objects/6d/9ec7daefb197c0a8f05a6cc0ae32c0da4acad4": "d1c800e8b1c9463cf8dfe823a9a21bba",
".git/objects/15/de4455b9ceaead9957d3e6f86eddec28160809": "806d9b4b26a4a34ebe51bedcc3ea2b9d",
".git/objects/b5/79613c1ebc54b0c21c1672af0f748a8102764d": "63ef6bc5ffc4ae85016f46c090d4cb33",
".git/objects/b5/7ad72386ab95f9cbb39f82fae3a805acdf221e": "f77d71393a342d568b6c7336075fd8c8",
".git/objects/14/dc9eab0dfb55f6cf4ca4d7740d221b66235264": "87cd4624050c88c11ab4d22fd347bba5",
".git/objects/65/76689bdfed8eebe3a771818b841361ffe93006": "121ea1931fe5ef229e8aef040235c28b",
".git/objects/ea/23bc06ce54d4a648c48588910b9567cc09f2e4": "d0363bd50e52b69311e63ff0c5d42a10",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/2a/6df29bec88e2d493fd2597a66d9a964d1e4138": "24da55bafb3bb62ded8f6fa9df8d10b3",
".git/objects/5f/f4f91d77c40d132ab2f68d4956a065cb213361": "77dac62422fa85f2225dd97ef60a17c1",
".git/objects/a9/4343c850fd5c2cf19b3c956af051e82462195a": "b0e382dd7f975d7b08d867cbf8edba4a",
".git/objects/cb/cfc660efc5b109e2fed37c423b41b54de19aac": "9e7a821750a4fb991d34d65d1f7d638a",
".git/objects/cb/8e7e64ea6ff963bfc58d025c7dd777f15f96dc": "83788043f7ede4334befdbabc8f03006",
".git/objects/18/a88aea78355c51b753b3596d33e1ef2f367274": "fbb0e023a924489dc7b8fcd6b3357db4",
".git/objects/61/112388d999d4ee08c18a2b36862d6f4eafe1d7": "25cfd7e79134b57785d41d84dc707e8e",
".git/objects/61/dd59f6bed1f0f6b3ef52e6cc8f4002a3cd32e6": "ea4adc7fcc8c01e387bb657340c24ed1",
".git/objects/e0/00f01f0d24d7fd3e75ecb525a3d9bc837e3ff3": "301bb89f2e01f25ea718bc18d62e9291",
".git/objects/a7/a7fd9e961e19ac70f911af3b317140471d9b63": "c48b9de743d26e84ba54226ad6c028d9",
".git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
".git/objects/4d/a3a100a489bb540966ae11cef2ef4b08490fee": "6b083b3faa296a6731b4dff560cdc898",
".git/objects/0d/6301727a723b460c4dbaf659697943bda6582b": "4bb196e91117ec7c5c803c235ed226e1",
".git/objects/0d/dd8fe7e74709ef76631278e62bcf319c178f81": "28941749ab505d60e2fb53b9678a310e",
".git/objects/c8/5fff7ea28495505c9e3dcda06c66664a9081af": "f8a6859b6667fa6682a7c1eff4b40195",
".git/objects/fa/2c347f69a72125aaa225ebeb25708da3cc9d6d": "4c0dc41eabfa3265e10cfc3439eb4c04",
".git/objects/fa/336f514786fda7573719d054e4175002ad95b9": "7986a37f37c7cc157f2b8e0e9b0da4a4",
".git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
".git/objects/80/0bae8189896551c1c2152ce97278e4ad1a8dbb": "05ac5ca971e0f1f09679b6601243b219",
".git/objects/81/f6a64004b2247b53259c8b0ee8de4435235674": "be719ad97738c1d7cee12ca6744084bc",
".git/objects/2d/92cabb96361c36c3c1016fdc86c278a3382e6a": "fd5ad9aa6d465e96f8f2b8bb5ed39a7a",
".git/objects/21/b04fb70a7df62fcdb70fa41247577a123ff41c": "95784b21334bdfaee63bbe5f40fcbd29",
".git/objects/21/9ad6ff916cc29bc5d4253c59a5609941d5effd": "cef4e42cc0293dc9b687d68ca5e3e45d",
".git/objects/f4/6c377ca503c8dd7b85e10b6e4af4e7d4d6e539": "13dac3fa85f594eb7a8f1c0b5af0a2a8",
".git/objects/f4/1aa6247affb2d2670ae881f1ac05abbbaf15ce": "a3a91b1561e0c822a8b0da224a4b0ea6",
".git/objects/56/84193b6c39a45501ebf17e32ecc9b250fdc2e3": "a31e8546f896c1e40df9d4e49a72ffe2",
".git/objects/34/4bbd37b6edfa0252bf5099304cb83455c439c1": "7fe17b83b0ebc86eddcd76c88f877c77",
".git/objects/bb/b55d09f61c997509c815728903b5567381871d": "79170fb603bb8910bce3d6c0c3230cd8",
".git/objects/bb/5169334696570eedabbc7e4d1e25f9917e27c4": "df532540859768f9726713647ca424b1",
".git/objects/8f/0b7ba40650dc8403cef89eb535492c1f231015": "b029b304c3d44c25da999f87f00272a8",
".git/objects/3f/d517e50dc6d5bdad90b32c3f8978619201547e": "c5859802ab47f44ac6e6de3dce067bf6",
".git/objects/75/abbc3abfbad321355452e0552c3ace51922d0b": "a07b73c48d0eead71011d9805535ff1e",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/37/0db68583b45b90d5322490f3b516887acfdb6b": "ec5d56b1be3f39e7ea919d2b89767e0b",
".git/objects/9a/223743c3fa19add95b0ce3776dbc466f91c6e9": "bc8559bf752559d55f3ffd31a9457013",
".git/objects/d9/43ac90954cc71b8562f7e4f672308c5bc60bb4": "21174632893e70876bfe880d2c828186",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/59/e14c312b0d381270eacc0b658500f8f4286de9": "871f83c13db5bd2c5f3b5c578445e89b",
".git/objects/31/874baa5fb453959afb9de6ce63f24b08fbdbac": "9c33e3bd807248606a34828a7d902855",
".git/objects/df/63abff30bf00c17ba17f7efd547f3083f6c81e": "9f11a6cfeee0a5d0fe60a77544cea445",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/69/36b169e0d6b48bfeddbc5add93d2b0ddf9068b": "6a7e34bce7fd7815671591ba7a5e76f6",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/d0/2831e7ccacb938346809281dd5d82d8aad49d3": "1ed566f6919a0bd0560bcf49f9df3693",
".git/objects/b2/7c0511bff0ab9e7e19351b82c0786b7fb36cfb": "7f36a3c9c1ba2385112aacbfd5a732b5",
".git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
".git/objects/57/d0ec050c083cdd8e7ae4f7e861329fa19c50b6": "de93254f05483e7d107f085d887c9b75",
".git/objects/57/6eb9afc524cefe7794b3be768ac9d956a63a79": "e445b6405cdcaf12113057009316ec1a",
".git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
".git/objects/a5/9114eab96e3eda6d47f002e9d5a1f45422b977": "226faa097ad33ed8dc7009317c5976ca",
".git/objects/a5/9ed4764cbc471dd1a6cc0f43e9cbf6b4c159db": "6404547655480c0d4164e7fc9db5a3d6",
".git/objects/6b/ec15886ebc3a925b461c328d056fa5d5e820aa": "e1ed931ce7bec90016c4727a89bbe8e2",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9c/918fe45f95f898efb5f30f613279fb5ae66565": "2e9fbcc6fe744f463c1f469a5072ab03",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/52/11472708913064a3e6de668dfb787cc068e15b": "dd71c975d33dfa197678a6f0e1468564",
".git/objects/e7/9bd831bec6592a53a20170a4d10f0571201d17": "d5b2db566a8f313d167e5b2aa1edb178",
".git/objects/f9/b69c14bdc7a5d1b233eb7f3f4ce5272025b5a2": "a35403a380a6ee7fc606b7cdf1505cc5",
".git/objects/93/c95cab15f5a1562a10cfd43325a5256b6ed146": "d3d68b0ebaf48dbb7687367963ac2613",
".git/objects/93/52421a971c9a30f67cf07a439aac5af6ad8297": "b87885e9ae220dfbb25403818fc12750",
".git/objects/93/b686e00b9c0068ddfb0cb4bb46765a2e51c301": "1e8e5136166b838d327d4ad6526e66fc",
".git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
".git/objects/fd/33875be83668034c90328149773e21eec83c96": "d4d187359fd80016d2c2a3d040dbbc5c",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/4f/546edb2e60fc9ef6006f55ee6e7eda5a8b68e6": "6d796ba26232ea30dc4c67f871c809d8",
".git/objects/4f/f80af080d0b26eb37ad94e2417ec7b6f3ae74a": "194259e30ae6ffa09264145ac64bb2b6",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8b0f5f1d3f3d9bc66af348a4cbc8d8768528b5": "a91976905837f17e11bae7e614262550",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/44/486d0a9d6554d076bc29c2b008e418cdcda7cd": "3d30b1d33ee354a3495efeb31404a899",
".git/objects/aa/86d672dbaa96a79632222ec19a1198fa3df111": "5ba2c0248b75e214005b2c4e6d7d17ef",
".git/objects/aa/c73d15d4e3c1edad2c11be9adff97c04b36738": "514ff9ec10ea95e50ad5b2289f87986b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e8/74cb3520389170c4010024c37e113b6013f4a4": "cb3645e3e3bed6f67dd3e534a4455f5e",
".git/objects/b4/120713bfcac0329a4e5d90424b832952a604e7": "21165b08a74b52d33db9cd0fa42dec14",
".git/objects/b4/c84770ebc52ebb03826b884f270e001a3dab95": "4159cb28f29533232f893cc655b61adc",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/96/762388d21e4029392e028e719d85b8f9c529d4": "3b13dce48b5e30c9e986e68f0aa02629",
".git/objects/b6/86d449295f346458d325878dcd8dc63a1ac6b6": "965ba64468e4544217b709d33a262f78",
".git/objects/b6/3da7416914982cf64c2b20fa976f49255226b1": "8f762c4fe65a9522a5fa243c8bc253f6",
".git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
".git/objects/c1/07ae4a309c5ca1bdeeb258483a2cf298960271": "544d769ebb57b3e5ad3f05c5754d40bf",
".git/objects/bd/25300e2125978a05bc477d37a714f00f6e1da9": "d92fbe06f27606c74a1ff1aa340993d2",
".git/objects/4c/225be0e074be32bb341b9f365afac214647e2f": "89a13a990b85ddbee4f1b3430e1a6bbc",
".git/objects/7b/9e1d1469d0c16415d2abb7e838cd236283e19d": "793500defed795add7c39da33a38e002",
".git/objects/7b/fb65487f73e271e0e5f59a97c64cab4b91c8f8": "f9b2798218337b5993b9c00fdd43e8f8",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/10/c4f0efe4052f96b433a76966bcba89a5706d80": "3404a90d2bdc929d34a6056fb4acfeed",
".git/objects/02/564ed9a923091aacbb075836559e054a9aeef0": "10d57cf3eca5d3f12e3e9682e5b4251f",
".git/objects/90/1199bd221440dfcdc183203d21d48dccc9eccf": "ac2754816c854f4669f519f4e355643b",
".git/objects/f6/ad42b234c6622018c1fddd5321135acf82a1cf": "a7e36a2a27fb22d7bcbf23932cb62bec",
".git/objects/f6/a7eb7060f71f39882015b4bf8c33ba3a9e70bf": "123da57b2c9ce02a9850cb32012d003f",
".git/objects/25/00695eb3a634985902ff2abfa6e096a1bae4c9": "e0a3cab1ab7a2e9b8bfdcd26fb97b9c7",
".git/objects/25/ccec822415993d4d8df0de3dd334634f16a3d9": "b2b0276358f2ac0601d2b76a8fabf283",
".git/objects/95/3294ea97a48b43bca77b9d520b9f0eafb50db5": "860db4c6c367dd5ec2541fdecd7b3dc8",
".git/objects/95/bb6a61f9175ace26e2ebf2735b571efdac30ed": "9e0ce897fc82e13262ac4ae58bfc7dbd",
".git/objects/fe/4c3200b426593683ce6764af49ba2cc2cf042c": "d57abeeb943a5e1d5d1df8491f4c4fe7",
".git/objects/0e/aa9ba4fe1b60e0d52e4de0a63a85b3b0a8eedb": "86371d1573d2ca572ed66cc71d1cfafb",
".git/objects/0e/853b2cb58c3522f42c2270c108ebaf0ea51903": "1a3ea50b9ee686ae2cc2958aa27200d8",
".git/objects/0e/a189bbf1b9c0ba688dbc678930bded8dccf8d6": "d714a01b1a56c6a4eca6c7686fe4b910",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/6c/8d743b4f18667fb1416deebe15ed33ea573b78": "a80b55044b9411d08c45f961715b4acd",
".git/objects/35/0d76674197a2edfcaf033c7f842715cddf96c5": "58974ffe0feb01c3a160905acece6f66",
".git/objects/a6/37c01ab1e7de543007bff4ad9aa07787fe0df9": "0f9cf9171a8e8e8a5845dd84ca5f30ab",
".git/objects/63/781f30e192816e303af0f05b0c9b96718526a4": "b76055393f07f68f87d6ebb9b368e779",
".git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
".git/objects/63/07b1497c1620dcad94dbfc16ec3302167373f3": "b6a15d964698179c0778365e0434979d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c7/0ce0b59be89eac3cd4a9d6ebdd3fd46a2f950b": "cede7dbf5767bd25e24454bacc72cdb9",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
".git/objects/1a/b4962624b2f01a2c2565ba524127ce957bb925": "c6bd184aa92a723b059f57541423a6ba",
".git/objects/1a/441062fa65c3f99d3da6794d453752bc78d553": "5557d775883ad9663ebce62ce44517c8",
".git/objects/1a/655a8c0e1a14087572ebbd52c65b02428c84ef": "d5409f591220672ebcb9371ab5c21ecd",
".git/objects/4b/784fadfa3f0c4367e10eda2cdd63b6ee8a4ce3": "ec5891878af0859c39568f880a9aa3bc",
".git/objects/6a/87e55a5ac21d7894a3566ba219915abec5554e": "ba4d2d33a76e8c6d9ec6eaafab022839",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/COMMIT_EDITMSG": "2652d0780369a5a59dfa34935c405bbd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "b5adf3d5f571525b349652d527460955",
".git/refs/remotes/origin/main": "99da357300fb034d0b1d810ff5b6d1af",
".git/refs/heads/main": "99da357300fb034d0b1d810ff5b6d1af",
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
"flutter_bootstrap.js": "d4327ed8e838b4ed2febdca3f6ff8022"};
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
