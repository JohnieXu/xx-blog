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
    "revision": "b43db7ba08c061169f3f04a08bfc204e"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "4636b1dfc063cd07cdc1905f94fcdaba"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "a95ca5ad0402a8fd8a8ca7a319bfa89a"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "8539764d06a77089e0fa7f4eec636061"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "8744a7de982157adbdadb05ab4cdd535"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "4f7137ab5b0e047fe7bab6f57159b7d1"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "6c2fd0aab9a077f737d8909df584d4ab"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "7eefc0ae8eef5bf8355f7695a9b7e2e9"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "6a20b678bd794e145bceb7e0f7ad23f8"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "6529bb0abcf1f291b034d20539d283c5"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "193878d188bea33dcd993412526f1a61"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "f40b2c2e4439512b052307c2660ec164"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "861691eb67ce5f4e61321becfd793f1f"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "2fd58dded5caf582e0646cd787c24445"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "a2e950c0e57d337063ddfb7210244644"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "6086e5371e9d1a83519b2b54768d1313"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "4fde6c381476624a127eb1e544e7205a"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "f735fb5e47f03dc0bd6a044a0a583eb8"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "2f5fc46005f38ccdf1608da58881e6c6"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "3e0117b99070330be2bf60d5d8929a3c"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "fe8fe530c21e65651da8c7f69e2f313e"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "f6d428eaebb74ff7ab8f440412c139c8"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "806d9ec7bf44bdb205a34217e488794c"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "19e5c47ca7beb27698a3bd67fe026591"
  },
  {
    "url": "articles/index.html",
    "revision": "38880638c897bb4202f1bf12a1795e1c"
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
    "url": "assets/js/24.4a72be37.js",
    "revision": "a2b944d4fd0d40c20d0f34fabae537ba"
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
    "url": "assets/js/34.b0d5d678.js",
    "revision": "5bfa75b895c83273acb80867ca880665"
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
    "url": "assets/js/9.ce3acf0a.js",
    "revision": "aca4eebd98d96e3757dae0ddf842833e"
  },
  {
    "url": "assets/js/app.d498fdf5.js",
    "revision": "5f4ff043e76e48f7eaf595395155e1aa"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "5a37512b4aabaec2376b0bd2347c0e22"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "66f58fbeb72c0b936287d4ff8cc576be"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "f9397ff3e780475bf38fe49f87f0045a"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "16c1f7d1cd318054e244a3be6679e8f8"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "610774daa0e2ae0db670560a01574da5"
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
    "revision": "7c528c1beee4c9cc91acf636f5af7169"
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
    "revision": "8c878bba886922942a688796e175cbec"
  },
  {
    "url": "tags/git/index.html",
    "revision": "96af5f5654d49d5878c001c6b25c919d"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "2c9c5ddb42e60912cab618f856a210e7"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "393160d2d2e1d4a20a798fbee98414c7"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "e19e64c45c8008811f77b696b26bf994"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "d32cf640e40d1904cde9a905d5647234"
  },
  {
    "url": "test/index.html",
    "revision": "024e026734e346b991d568e9fff5e8c9"
  },
  {
    "url": "timeline/index.html",
    "revision": "c8a2395f8dc5f4fab5c229c44625fd75"
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
