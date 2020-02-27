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
    "revision": "375a1eafbceb76072533d033c5bbf4ae"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "b828957a0f97f8177c2ee20d98ed2049"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "038e574a59e6f82a97851ca7e492cd87"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "452620b84bde8b0f5b49c045bda059e2"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "79dbb0460d5245f3e0f7fcb84eb0487b"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "e63ea5ea968f3724545b6b198aafc598"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "b936a57e29d700d04a4090509e6f3857"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "0e8e2a887b6b32e5c12b3048e91ab66a"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "a6453ebbbbefcfd5f4d61b91f4532be2"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "345036cfcd28bb25213c9bb0ea6038ac"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "b59b8a7e513b557425ba0ad65a79556e"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "a3aa0edb7f8fa2c4cdfc2995d8fb434a"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "255423549aaf3feb0b78b0445654393c"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "fbf8820f5215cbb83d3c3165d68eaf61"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "6b03629b891713da4469296993b34921"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "cf70136f8a8b1040731d1300262b39b3"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "745fa95370aacb7d7e970c35e0acf0a6"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "64150a63f84c4383a750185823fc8423"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "145d25d33f7781e3f434a920b8d183c3"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "eacdf7a1eecc08928c75d655b5880ea3"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "7adc5b4eb78a37c90a8b499da17801a6"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "228b086518450fec154c3a22abcdecd2"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "183c952abecfe6aabcf96920cbfade19"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "b3a6bf35f842186516dbbb551972ec74"
  },
  {
    "url": "articles/index.html",
    "revision": "cd84e63db3e63c8feca3892b45e5114b"
  },
  {
    "url": "assets/css/0.styles.02d32df4.css",
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
    "url": "assets/js/1.5178b8f7.js",
    "revision": "b1d5eedb6341d17cf7b55b6fb88df720"
  },
  {
    "url": "assets/js/10.cc79e04e.js",
    "revision": "de79a0ff3b040af130c058d3cfda0e91"
  },
  {
    "url": "assets/js/11.6400a214.js",
    "revision": "bef2c843d820aa63931ed9ee25881a54"
  },
  {
    "url": "assets/js/12.3df6c1dd.js",
    "revision": "05914d4c2f9ead02c73c89ca05e43f29"
  },
  {
    "url": "assets/js/13.e53cdadf.js",
    "revision": "5923a800033821ba0cb74e1121a688bb"
  },
  {
    "url": "assets/js/14.032b8010.js",
    "revision": "cde9a5975fb97d19065e9dc35cd2d9c2"
  },
  {
    "url": "assets/js/15.a3463f9c.js",
    "revision": "21d3fae870a07cf82153ccdc3c8f6c3a"
  },
  {
    "url": "assets/js/16.f2b572f4.js",
    "revision": "02d2e2e0ab5766b3094302bbccbd45a0"
  },
  {
    "url": "assets/js/17.737068ad.js",
    "revision": "17b2c063643faa5876056681d8daa88a"
  },
  {
    "url": "assets/js/18.2b7ec660.js",
    "revision": "b6e7644d2c9e7076a1bc9289e86d8688"
  },
  {
    "url": "assets/js/19.ca18b141.js",
    "revision": "ecce6ed68af155d7ca4a807bb9f8bb84"
  },
  {
    "url": "assets/js/20.29df114e.js",
    "revision": "e8d1b503060b21eb20076dd44f9cd721"
  },
  {
    "url": "assets/js/21.79530c04.js",
    "revision": "1342da25a766bc8953eef8cff46d1d14"
  },
  {
    "url": "assets/js/22.848c3949.js",
    "revision": "20c6596915f32d06db57d8bb2eaa71b0"
  },
  {
    "url": "assets/js/23.e23ead89.js",
    "revision": "4d5f449d46bae81643fb9a0231626c97"
  },
  {
    "url": "assets/js/24.7e3ad244.js",
    "revision": "0f75d0968fc193e3ad2143aa5cbb27e8"
  },
  {
    "url": "assets/js/25.a8dc5931.js",
    "revision": "0147e70682afd1416fd7eedd2512d414"
  },
  {
    "url": "assets/js/26.5f6b2ff4.js",
    "revision": "312bc24a03489aa9e50aa48c1401e70d"
  },
  {
    "url": "assets/js/27.c5831bf3.js",
    "revision": "2de6c2f9904cbd23ded7114cf7b2856c"
  },
  {
    "url": "assets/js/28.83836a52.js",
    "revision": "5a1916d7fa23bcf5b1b9e02c7ddd0694"
  },
  {
    "url": "assets/js/29.8560c1fb.js",
    "revision": "e63029a93d216ffd6f61b8817931b265"
  },
  {
    "url": "assets/js/3.5e08ee06.js",
    "revision": "8b08a1714b514bfc43643e5a013172a4"
  },
  {
    "url": "assets/js/30.131a07a6.js",
    "revision": "d87b05c017915b71c2b0344e4d3898fb"
  },
  {
    "url": "assets/js/31.81e9ce55.js",
    "revision": "83733fb427eafcd3026cf7bd4cc9a3cd"
  },
  {
    "url": "assets/js/32.a9ef7f50.js",
    "revision": "05a6919985cb433801bd640bdb50a506"
  },
  {
    "url": "assets/js/33.1a234747.js",
    "revision": "957baf3215f5c4145399e10235cd932e"
  },
  {
    "url": "assets/js/34.b4abd0f4.js",
    "revision": "e0633f88d0029975a93ef7cf6d7c5ea3"
  },
  {
    "url": "assets/js/35.27497047.js",
    "revision": "8dff06d423fb15fd27b3dd050ac40a16"
  },
  {
    "url": "assets/js/36.ee61f92d.js",
    "revision": "380a9acabe4aa3461e51127ff377047a"
  },
  {
    "url": "assets/js/37.765159e3.js",
    "revision": "7aa1764452c10d2dbb632662a65b2c2f"
  },
  {
    "url": "assets/js/4.edd4f908.js",
    "revision": "fe6ad36e70f24023654bc8a9888ecddb"
  },
  {
    "url": "assets/js/5.eb184287.js",
    "revision": "6ac4f0c9775dc6067a5f505a478a188e"
  },
  {
    "url": "assets/js/6.282207d5.js",
    "revision": "ac50db9ebd12844363823e866360c5d7"
  },
  {
    "url": "assets/js/7.5801717f.js",
    "revision": "f4bb41255a2b7aa9baa0c31023a07794"
  },
  {
    "url": "assets/js/8.4fa2e3c3.js",
    "revision": "4a8d1e6468639f19ffdf6388f6e02792"
  },
  {
    "url": "assets/js/9.673d8099.js",
    "revision": "ed5c3b7645d9ecd3f9fb5dde42cff9a2"
  },
  {
    "url": "assets/js/app.9f0df26d.js",
    "revision": "441e5145d6df8073edd08077b7886c8f"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "609fbf6a8fd7424f6f75b3b5d414d46f"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "478bd48ff36b64e37a5643a5c2ed19f1"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "278bc2de25a2081c92a1678b8d4ad630"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "24a0b4894bd6c6f1642924dd4478d1f5"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "4ec25e698abd34e5631860d1c6a99cdc"
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
    "revision": "d05a01b4e7d0e434da4a003bea32da9e"
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
    "revision": "00bce941c06c633fd2e926f214592f81"
  },
  {
    "url": "tags/git/index.html",
    "revision": "fec5a8ffd1dcde59ab3348b62d9153e3"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "15adb5d800e7a6b22f0ab54b7b1eb3e8"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "d6569241d85af6660bb49a60dfac6087"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "79cc2147bde749021ec825d02eaa52bc"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "5bf69cfe4d78c1855a04bdf3f254c5b4"
  },
  {
    "url": "test/index.html",
    "revision": "effdc0e54494405bc11df8dfc8f3a7b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "98c82e5398aecba9a0450ed40fabdaae"
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
