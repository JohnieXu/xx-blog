/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2b6226eb0a10e46c86962ff13b09406f"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "47319e58bad6953ede46c77493734e05"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "17b0493a603bccd1840702a2806f2dbc"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "7bfb54b269cd435ed6a553fa5ceaaac0"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "0109d707e2453bc7b66ebbbb652ace3e"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "96cb3e0183085fd31e2c1fe3080fe2b0"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "e258501fc6c8a7caeb4d3c8eb86ff89b"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "59475c98220d3d44d43657a1149771c7"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "44563a4788ea410a29166a28c940cb5d"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "b947ed08efcff665564b65172cfe8eaf"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "e4ca3f02f228a49b2a69db8493c47c62"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "4afc68834d46fc4c3af4a8056d4b281d"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "85c7217d761a82f62f614b10ebdd344c"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "333198476e746e99152e0c5e48038128"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "18e353e7b2936177ac62d43263a13c00"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "f650d3ffec9431cf82bfc1e92ff0c9ef"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "ba2956032eaef9b59137faa7277b4a58"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "440b0c8f4c3725c31b6a43b8da9c2e71"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "7faaa1e31e6226c2c5efe4477bef001a"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "058a21576e241a4a0fa5fd65373b5b98"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "7d0f45d520e974af8c4b445d1c96ee6e"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "8a6196f33e2b86e19c087363f1eedd70"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "2a6be00ba73c260dd086b48df6ae810e"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "07ebdbd353a2eb2f79bfe635e5fa4c0f"
  },
  {
    "url": "articles/index.html",
    "revision": "0f047075b438748a1429f46e023174e6"
  },
  {
    "url": "assets/css/0.styles.7d50cc48.css",
    "revision": "486c3ce079e93af3b9349b2ebacec116"
  },
  {
    "url": "assets/img/00a39db2-760f-43d5-bc9f-a472c4450710.bf9f8f08.png",
    "revision": "bf9f8f08c40d687fea0452ea2f0599a2"
  },
  {
    "url": "assets/img/1521f01a-6f01-4d7e-83df-29c9682bcc57.0a426361.png",
    "revision": "0a426361b4020a6198eb3a7a9dd6367e"
  },
  {
    "url": "assets/img/3208bfb8-d96d-4e3f-bdd0-aa6d2687235d.4063c41c.png",
    "revision": "4063c41c4b9d4d4d3500e16191a8882f"
  },
  {
    "url": "assets/img/39633bfe-48f6-4b37-96b2-af9d834259e8.4b10ba69.png",
    "revision": "4b10ba6905864c015caea8574fac12d7"
  },
  {
    "url": "assets/img/3cf41362-5479-4926-afa5-eb867f07fddc.a8a9ffba.png",
    "revision": "a8a9ffba3848ae0acbaa978ffaae708c"
  },
  {
    "url": "assets/img/4787d6dc-f780-4742-a971-f42f98d578b2.c40843fb.jpg",
    "revision": "c40843fbe8de103b0b2ca4253324dfa4"
  },
  {
    "url": "assets/img/5d72eaa2-15e1-41bd-b3d1-9ab54341d1f8.a9d5b209.png",
    "revision": "a9d5b209936ff86be8d7e697fd761cda"
  },
  {
    "url": "assets/img/7dd6b400-44bb-4d92-9d1f-e040c0a4a16c.d3faa999.png",
    "revision": "d3faa9991d39f04bd8f76171d571c8b0"
  },
  {
    "url": "assets/img/7fa5ccf5-1baf-492d-927e-eeeaf0de642f.75dd3310.png",
    "revision": "75dd3310add2f774901e53bdc3adef6a"
  },
  {
    "url": "assets/img/83b03bac-1783-42ca-aba7-35ec8952d325.327c824b.png",
    "revision": "327c824ba04df1566fd78559a35dbe43"
  },
  {
    "url": "assets/img/852cd383-a782-414c-9933-149d19db4198.6f622c11.png",
    "revision": "6f622c114611371b66f59062028cf931"
  },
  {
    "url": "assets/img/9516091f-4193-41fc-b668-a8bd5e511ffe.e4841337.png",
    "revision": "e484133749c7a553b5a2a947468b6cfb"
  },
  {
    "url": "assets/img/ac0c7e0f-57c4-4553-aaaf-f1fbe751faa0.5965d930.png",
    "revision": "5965d930814cfca4716fb9a68baf72a8"
  },
  {
    "url": "assets/img/d73b8d36-4e55-4028-b0e5-b5023d4465a9.f0fab94d.png",
    "revision": "f0fab94db8ee98d70c5e2056c01b7f81"
  },
  {
    "url": "assets/img/e482005b-506e-4b2a-ba92-05fcfaf29c91.f9618b69.png",
    "revision": "f9618b692c22ae5d3fd1e355a42939fe"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.cf573e58.js",
    "revision": "af3eaaf49e2b137f556c1ff6e3999296"
  },
  {
    "url": "assets/js/10.85dc6922.js",
    "revision": "fe7a51530dd404cf7d7864d028aea6da"
  },
  {
    "url": "assets/js/11.6400a214.js",
    "revision": "bef2c843d820aa63931ed9ee25881a54"
  },
  {
    "url": "assets/js/12.30d44544.js",
    "revision": "4a9eab48ec880a8320be3c4cf63c5691"
  },
  {
    "url": "assets/js/13.af8bdc91.js",
    "revision": "d0b6395f1b959323efd5b455a9f26c01"
  },
  {
    "url": "assets/js/14.0982f7ec.js",
    "revision": "fd781014c4e506f00243e4bd8ebb5550"
  },
  {
    "url": "assets/js/15.bf5f5394.js",
    "revision": "1f87f63c024971c1033688106c88b293"
  },
  {
    "url": "assets/js/16.301226db.js",
    "revision": "04a3f6f119761d99205edf4ea97d0aff"
  },
  {
    "url": "assets/js/17.4c02db96.js",
    "revision": "0b2bb69f7e713f396382b85021e2e0b5"
  },
  {
    "url": "assets/js/18.46b8f77c.js",
    "revision": "10d54dce444b9574f2d57038a9b6db3d"
  },
  {
    "url": "assets/js/19.4bb6f335.js",
    "revision": "8bb6237707f694f36821652a943b7181"
  },
  {
    "url": "assets/js/20.d078ed13.js",
    "revision": "be48d629af65a7533ab65467aab6a6bf"
  },
  {
    "url": "assets/js/21.f1a25911.js",
    "revision": "af38328a356ddfd40f70bb89c712fb94"
  },
  {
    "url": "assets/js/22.d65d5317.js",
    "revision": "7697c4706c9e62942b9ac67e7500c55d"
  },
  {
    "url": "assets/js/23.22856cac.js",
    "revision": "fbaa1b7fe07a9baeb89fbcfae37ffb60"
  },
  {
    "url": "assets/js/24.dd4b3dc6.js",
    "revision": "583e0c6199adf61c6ea74fee0e714fc2"
  },
  {
    "url": "assets/js/25.b08971c1.js",
    "revision": "df30d1638e4e8daee2ad7fb8df5bac4d"
  },
  {
    "url": "assets/js/26.587d9b2a.js",
    "revision": "03eb0a2aeea3b768e701bc91d17bcd35"
  },
  {
    "url": "assets/js/27.c7c51af3.js",
    "revision": "106cfb87a3681707e68bae4299494e2d"
  },
  {
    "url": "assets/js/28.fa0288c9.js",
    "revision": "43bc9b09fafa090f8b4bbcc490e3208c"
  },
  {
    "url": "assets/js/29.7e0c89af.js",
    "revision": "84e3a9cad3567632d648207e1ea105a2"
  },
  {
    "url": "assets/js/3.79975a6e.js",
    "revision": "bc1d133487786438424082b409bc50ba"
  },
  {
    "url": "assets/js/30.1a2a71b5.js",
    "revision": "f2fc2b46c67eb635c6c8bfce85a31e2a"
  },
  {
    "url": "assets/js/31.e1645bd4.js",
    "revision": "09743bb25b0b51030e64ec0dc5f0f275"
  },
  {
    "url": "assets/js/32.5328e1fc.js",
    "revision": "2f6ee540a0a17d6f158416cbf4bbb329"
  },
  {
    "url": "assets/js/33.1e23cbe5.js",
    "revision": "c9f21c7594b7cdbd62b88ae70accce4d"
  },
  {
    "url": "assets/js/34.209f54c7.js",
    "revision": "bde50402a460f4fd6cec3ab0affd9477"
  },
  {
    "url": "assets/js/35.135ccd49.js",
    "revision": "7fff84deabe5565904dc8e79dafc45cd"
  },
  {
    "url": "assets/js/36.80de2328.js",
    "revision": "21b41e775b9c5d48a682958795c150a6"
  },
  {
    "url": "assets/js/37.765159e3.js",
    "revision": "7aa1764452c10d2dbb632662a65b2c2f"
  },
  {
    "url": "assets/js/4.bf7c8eff.js",
    "revision": "81d6d8a86c6214b57b6a2c257a503390"
  },
  {
    "url": "assets/js/5.d50d9a72.js",
    "revision": "805fedfb2aafe9596b28cefc08fd2b67"
  },
  {
    "url": "assets/js/6.c29b65a2.js",
    "revision": "e42656a3827ce15b05ca9a4f11ce2c1a"
  },
  {
    "url": "assets/js/7.ade1e44c.js",
    "revision": "da5491f5f79efb03cb2efff9cc53a668"
  },
  {
    "url": "assets/js/8.dc401732.js",
    "revision": "21f601f67a246201a24029950d25c98d"
  },
  {
    "url": "assets/js/9.ecf9b90a.js",
    "revision": "f032b6892e2badbf09373ce2cbbe7cae"
  },
  {
    "url": "assets/js/app.794448dd.js",
    "revision": "1329c445e35fd6c3fb9177420d6e12c7"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "8d96be8c3c8128fd00a1e0d3df18d1fc"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "1e9eb9e6709d207d69ae2c37e6aa9a59"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "ae85a1b90bbeff2fd10c18c8ca47f7a0"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "eacad9b0ef7a134354f6eccd41cf6b87"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "0abf2b6570e1c4477fe3acf63155a5ec"
  },
  {
    "url": "home-bg.png",
    "revision": "987e1ea765f60015cad35bcd8e628003"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "054b40b822e9fa559cb585ecd2ebb6dd"
  },
  {
    "url": "logo_144.png",
    "revision": "63426e72ebbd94dfd46869add9fb752f"
  },
  {
    "url": "logo_168.png",
    "revision": "2e727412d7c2c5cb9e48027d7ea41fb7"
  },
  {
    "url": "logo_192.png",
    "revision": "ccd7a6c03b2cf500ec607e5265e8a74a"
  },
  {
    "url": "logo_48.png",
    "revision": "90bb18dde10ea73accb3d7bcbc6fab2d"
  },
  {
    "url": "logo_72.png",
    "revision": "8501d96e4c61b5b5cadd534171cde307"
  },
  {
    "url": "logo_96.png",
    "revision": "76fcfe0d738ee1a49c28bca1465bffe4"
  },
  {
    "url": "logo.png",
    "revision": "1834262abcd23fdc8e34a72bae0ccbce"
  },
  {
    "url": "tag/index.html",
    "revision": "475c9da347277d3316efec7e8353e074"
  },
  {
    "url": "tags/git/index.html",
    "revision": "773d942e5a878c6f8557b2eb39918155"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "91349e8b6f37b2952d766116eaf7f57c"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "6960b093a69807905f74a09f0208e658"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "a44798dc02a4f137d0111b067b84d097"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "e2ce438599f28465ac902250e230a725"
  },
  {
    "url": "test/index.html",
    "revision": "87966677ad525b379d4a4d2b27ac1750"
  },
  {
    "url": "timeline/index.html",
    "revision": "8e3e6e6e625a6a710e3e8dbdcc48ac6f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
