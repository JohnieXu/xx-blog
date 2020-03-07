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
    "revision": "1f9dd32d0fc3b0010f4d388387ea5542"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "9486cce6eabf6f4af999f0d2c6b2da5e"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "a901c67f54fd8909a71af5237666309f"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "873ee8bc6d752b825cc46fdea631a5c5"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "4a302f05ac0268865aa14f7811de1f2b"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "cf8c9e4300f6dbcce3eede31a5ac1f4c"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "a0fef4f766360bc365365addb654023f"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "e3848bda47e77ca9cfc6902224c401b1"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "f960c859b626589c4f156140d7cbac6b"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "915688313d77fba61b6b492c6d454ff7"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "9abc8309112fc97eb872983d2e31f3ad"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "497a86cb7cedbdaf72e1f61937b2b36c"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "1758b7bbb31d1c0e2e1cadc4f2802964"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "3599ff883aa625952515af49260c05ff"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "fbc950faf75b196b71fc3d0a844770f6"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "701703ff23b94f07b2b69b7e2ffc4898"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "da35ac28e848836a0d34e44f54dfce85"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "74aeab1f146ed9808d8128d2d27a8a9d"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "6d0aec831159fe9e8698265f00380c37"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "7cdf9cd4aa769ed36a5c1b16f51e3913"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "52e1d537e3762251ef86ee7986edadb9"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "eb1aa47e4b96e59d0d6c34541dd43eae"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "bb0f0e20cfd48511e0ec63aa7af92e46"
  },
  {
    "url": "articles/index.html",
    "revision": "3c2536633da3e79aef35e9a313598454"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "76895a5e65a2fd5cb20983acac8ac3a9"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "6113328a6fa43789d697093323b61335"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "34a09831786e9b2bd0c8a7bbf29ce33b"
  },
  {
    "url": "assets/css/0.styles.7100df58.css",
    "revision": "d6a4bf30c9006b7f97a03e451f51e202"
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
    "url": "assets/js/12.c75ef851.js",
    "revision": "a608ce50b2dfa008bd97d18fabfec9e1"
  },
  {
    "url": "assets/js/13.db6d3f5b.js",
    "revision": "5b8c26aca65d69fd8b4e5be3d31074bc"
  },
  {
    "url": "assets/js/14.db61c49c.js",
    "revision": "c55c6fcc511cc75967cba35bec1d192e"
  },
  {
    "url": "assets/js/15.ff5101d9.js",
    "revision": "915abab7e53389d4fe933c5d3152746c"
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
    "url": "assets/js/23.cc819cfd.js",
    "revision": "81027f8a1a63fb33604bbd95f519467b"
  },
  {
    "url": "assets/js/24.93dddc08.js",
    "revision": "8b3a1c7c9ad33f7836bd060b4ca20185"
  },
  {
    "url": "assets/js/25.798133e1.js",
    "revision": "d4ce11a3570a730decc15109ecbd33e0"
  },
  {
    "url": "assets/js/26.d6bc45bf.js",
    "revision": "58375acfe1ef19f59b3304817ed0bc1b"
  },
  {
    "url": "assets/js/27.e00cd156.js",
    "revision": "435d2052a2b590dabd0dcbe188479653"
  },
  {
    "url": "assets/js/28.f7c66334.js",
    "revision": "3ca5e209f91cf199cb3c6bc9030119c2"
  },
  {
    "url": "assets/js/29.95018992.js",
    "revision": "405aecd6b4b81c23e80aae116700313f"
  },
  {
    "url": "assets/js/3.5e08ee06.js",
    "revision": "8b08a1714b514bfc43643e5a013172a4"
  },
  {
    "url": "assets/js/30.03c52e47.js",
    "revision": "ce43c4fca9062e24133b666977ae48e3"
  },
  {
    "url": "assets/js/31.68717fea.js",
    "revision": "926772c444979c44f511d0a746bf0648"
  },
  {
    "url": "assets/js/32.27c951ce.js",
    "revision": "db495c8dec63b16f8de213fb76edec23"
  },
  {
    "url": "assets/js/33.33efd3c5.js",
    "revision": "f7fa0549e4d8851cc01174ec35997d00"
  },
  {
    "url": "assets/js/34.207e73dc.js",
    "revision": "ec69b4d6e9fcc125b93fa3b0eafed57c"
  },
  {
    "url": "assets/js/35.cf43d0e4.js",
    "revision": "100620f9d2ee2d963226bb92fdf192b9"
  },
  {
    "url": "assets/js/36.2e01727f.js",
    "revision": "e75978d41956de9dcd2d89f70d18f83a"
  },
  {
    "url": "assets/js/37.ad4d9d23.js",
    "revision": "5a6e0f48e11cd26d5afc5ca7eae0c7ca"
  },
  {
    "url": "assets/js/38.dfa45e22.js",
    "revision": "f9965763cbacd45ebaabb6b4e40e212b"
  },
  {
    "url": "assets/js/39.5cca44c5.js",
    "revision": "712746f1b2f7a24b55b80bc861380ecb"
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
    "url": "assets/js/8.bbbd9612.js",
    "revision": "06fcbfce2fa8b1041f64fb59872d7797"
  },
  {
    "url": "assets/js/9.c504dd1e.js",
    "revision": "8ff8987de3f3b5072fd28d96380d6c0d"
  },
  {
    "url": "assets/js/app.1ed5d58c.js",
    "revision": "d0dcd95ccaada4d72a6436c06cf899ad"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "7be0745997df1c0148be8862f716c814"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "141440f8d6d707de13d7c26516775e68"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "6b81a203976318d8de2f4adafbade789"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "fd5b47aaf761180ed99729facd7c0d0c"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "0ae99f594e1c5acd36654e64f3e60445"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "34e06f34fbd808bd82e2ca615b2e18c7"
  },
  {
    "url": "home-bg.jpg",
    "revision": "987e1ea765f60015cad35bcd8e628003"
  },
  {
    "url": "home-bg2.jpg",
    "revision": "764bd226fa766c2fd531bcf24b8089e8"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "f5235eff3e0ef6f960bcc3cb4346a4ab"
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
    "revision": "7c9051dc4921fe3577d6c692f4832085"
  },
  {
    "url": "tags/git/index.html",
    "revision": "abaa6db8dccbf87cc8e91eb35c24a6fb"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "8f66ebde24b6b5b6afab7d19e135d931"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "122fed3f16ac0a88fee55a694fbcc9ff"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "832eeb2ff71716d13a014f4dde8d5870"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "43cbad229cdac83b2c312e343d74bce7"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "95760575aa3ad4baa25dcb150dd85628"
  },
  {
    "url": "test/index.html",
    "revision": "fd86393636b33f9d3edb3322f6e0586f"
  },
  {
    "url": "timeline/index.html",
    "revision": "c28b1616525cc76c4369f3ad8294cdc3"
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
