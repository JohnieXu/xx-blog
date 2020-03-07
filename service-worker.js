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
    "revision": "1f39cc40bddf94619122fa7456c9d6aa"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "fc1189fccc0f5e3fbe65819044483931"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "edd059e5f8606731f14cf863a2db20f5"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "4f34d6ae326cb3fc2855b678f44d8071"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "86bb47c31fecc0f8324229093aa8807e"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "f70da096fe11203cba04b7eb1987d963"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "9c9de13b464247fef702df7dba55e7e7"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "160421f90223c49730f418e00993c8f2"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "4fdf532ae3755ef40bc4bdfcbdd564d4"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "a8405ec831afaaf7875e66ee8be17b70"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "2fa7a89719b9cbd7f986dc07cbe535af"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "9474e7fbd0be1a2682d1f70037fa4cc0"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "7f0367f72b8a0dc209d456f1a9030e32"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "0f3ef77a8e67da970baf686401b240c1"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "998054d1ad6c5fe32174946557a2313b"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "4d5b6f2796722313f3c76e15a71d6079"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "ecf457610eeb38cff38dd2c8d2ecf190"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "ea24b77538fb7886b062866e70ed8e00"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "ed2533feebe4fdc2c91bcc46aafa690a"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "f8949a7d8dd4b4d22d4ef297dc4d5c81"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "ac9703a87f96c03d81cf88c4f1c6c166"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "0f8f41d22a4865da5f579708b27c0143"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "e3525b70b083aefcbf3562e3c5e06063"
  },
  {
    "url": "articles/index.html",
    "revision": "adf7b78ed7d2e8b3d8400646053138a5"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "5ed3cdf3490141010693ca4e7b111fc9"
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
    "url": "assets/js/12.3df6c1dd.js",
    "revision": "05914d4c2f9ead02c73c89ca05e43f29"
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
    "url": "assets/js/17.e75fd3ba.js",
    "revision": "dc17c43cb599da09a30ed1874d5665d4"
  },
  {
    "url": "assets/js/18.404c68c3.js",
    "revision": "be0059226f280e3b548a4028db3a4a49"
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
    "url": "assets/js/34.8fe6f5a7.js",
    "revision": "a7986216b628b29d841e1672a8b4be0e"
  },
  {
    "url": "assets/js/35.2b4eb1b6.js",
    "revision": "83c41da4b2f83503d4f8fe0d8d5ab159"
  },
  {
    "url": "assets/js/36.6eae31d9.js",
    "revision": "857561b4d3d971f6ea485e0c6939bca5"
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
    "url": "assets/js/8.bbbd9612.js",
    "revision": "06fcbfce2fa8b1041f64fb59872d7797"
  },
  {
    "url": "assets/js/9.c504dd1e.js",
    "revision": "8ff8987de3f3b5072fd28d96380d6c0d"
  },
  {
    "url": "assets/js/app.d8cf80ef.js",
    "revision": "fa127c70aca960e3923032f96bb82c80"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "c86b1399d49e707b00154e94037d0069"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "ba027763b1bdbe2d6de76c7017bac89e"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "b921672a4e93d29a5569639994f968f4"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "78412aaed616fac9ebc185d7c9308384"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "d0b07a8f38f430b8802e578af6f2bdd5"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "661c21d03bda41082076bfadb13068fe"
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
    "revision": "e4bc68527362ad889d0bfe08b5ed44a1"
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
    "revision": "3023aa9a193dad6d13b7dbc08ae55e18"
  },
  {
    "url": "tags/git/index.html",
    "revision": "5e066a71cbc0dbd5bf47b2e5542e3acb"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "26c90caf8c7d5b6dda0587cb4a87aaac"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "d20ceb2d39a7836e5310ec26b41d568a"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "b3a814876b77830549711ff98be5aeaf"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "fb062826a2fa3dbd730f4816744964c4"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "f070ace73c7a9663a4c3dbf70bff2c8c"
  },
  {
    "url": "test/index.html",
    "revision": "ff7d1ba64c47c05ba3a8b8aee325d63a"
  },
  {
    "url": "timeline/index.html",
    "revision": "12bd5bb15be5d4f473380a07f3d1a35d"
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
