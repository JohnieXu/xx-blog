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
    "revision": "641b9d1e5684d8aabfeb2642a771326c"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "de432fbf2ec3ec2ceb6cc0b2e54ad612"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "3e5033c37cb41bd9df090c751bd367e0"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "52dc74319107db25996b61e964a8e597"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "70ec882ed4982f9e7ee9d7caafea781e"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "050c991fd2d71190333022e3a2df16c6"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "127a4610f6c250c63a06354206af1125"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "cd6edd6a89f31c9c3632b13c3b6fda9b"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "72f236ed4179059cc484cdcc605e586a"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "0b3aa2fb3721253ae718e9499a1b2fbf"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "e8addec676a80b646fbe8334de574abf"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "673755a10e89fd262ab13f03f7def8e1"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "536468caaf833ec4b826178d8bcae399"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "1c013c9da2bd7bcb493aaf6f72e19125"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "43df4c8aa46ee75d7027f620e7181d95"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "f0f313f1809122e7f030b581667baefe"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "c2edfee866163c6256dde551a87d9395"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "3f50aeef0933fd0f64355c7f11934345"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "98d537a5f27fd681a57bc929ba124fb0"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "19fa6bf6bb68c8e0b1549937fd5851dc"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "b012c55bd70bd8cac95a5e18ebc34a43"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "17432d22e8d52f3c88de137839de87b1"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "ed79a9fb2ad091a52a1052b8702f05a0"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "a062f105267efdfce7bd2d9284a38687"
  },
  {
    "url": "articles/index.html",
    "revision": "a54e5263f1069b281ce87feeddbd940e"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "05eb149b7168ad0648edc9ddfd5bd48f"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "d68b1db935ed49abb410c2985ec3147f"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "89e0e428bcd9f77b3126444e5e75f1d2"
  },
  {
    "url": "assets/css/0.styles.47b9a09f.css",
    "revision": "1cce00e7f898aa335a73fc02a860aa4b"
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
    "url": "assets/js/1.4caedbc5.js",
    "revision": "55643be070adb6d3a00a1b58bb4a1451"
  },
  {
    "url": "assets/js/10.f73a57ef.js",
    "revision": "4d4df32634eb55fa322d15289f92af41"
  },
  {
    "url": "assets/js/11.3165da73.js",
    "revision": "e72dd7513832dec82c9391db57249902"
  },
  {
    "url": "assets/js/12.a7585fd8.js",
    "revision": "debd37fb0b0f2cd6fbb7d613f909af5e"
  },
  {
    "url": "assets/js/13.ff59eba2.js",
    "revision": "c634b1ce7ee7c4e998c342ca944a571d"
  },
  {
    "url": "assets/js/14.9e783175.js",
    "revision": "e2d558bb47127dad8f5557bf3f8f24c1"
  },
  {
    "url": "assets/js/15.4ecd62a5.js",
    "revision": "3b1f9b2ed2662d25ab6c923cbde8e398"
  },
  {
    "url": "assets/js/16.6446fba1.js",
    "revision": "95685a50830b0c6ea352848c32607db3"
  },
  {
    "url": "assets/js/17.18276f23.js",
    "revision": "85f760faa7a357c4d71d7bd4b92ece55"
  },
  {
    "url": "assets/js/18.2bbd5b56.js",
    "revision": "7864f2c45e1cb1b9c052a18b6d08ce80"
  },
  {
    "url": "assets/js/19.dbf9d8ed.js",
    "revision": "ba0b564aa6ff16d1de9100eeb33339cd"
  },
  {
    "url": "assets/js/20.9e19416e.js",
    "revision": "e559d9b3666f9a5b421949d4e61f8b69"
  },
  {
    "url": "assets/js/21.76fd2d31.js",
    "revision": "71edb068f7e3d16cffe0eda778522fb6"
  },
  {
    "url": "assets/js/22.4b9780f7.js",
    "revision": "fbdf33a6bb4b0daee9d2dbc51e14e168"
  },
  {
    "url": "assets/js/23.2276bf10.js",
    "revision": "0ea36b3111fa715b5b92a51a612ca345"
  },
  {
    "url": "assets/js/24.0eea8c5b.js",
    "revision": "b98051c8c1e2710664d08e380c0fa7b6"
  },
  {
    "url": "assets/js/25.7abf6fed.js",
    "revision": "bf5e87a30772dd14e836647e279a35b6"
  },
  {
    "url": "assets/js/26.9d287f36.js",
    "revision": "9b399a194da4330281adb1e44f527bf8"
  },
  {
    "url": "assets/js/27.a947e563.js",
    "revision": "75f0cc8d6d224c2035fe52712e93ddda"
  },
  {
    "url": "assets/js/28.2c6ff889.js",
    "revision": "5a294a59f297c09e96d4265b166ea8fd"
  },
  {
    "url": "assets/js/29.00bf53e2.js",
    "revision": "3d712851952b2a67816a54dcf84e167b"
  },
  {
    "url": "assets/js/3.736990cf.js",
    "revision": "fbb449ad6d1bee837ed79978d0d1e714"
  },
  {
    "url": "assets/js/30.f0e2e217.js",
    "revision": "828f398487b18bcbfacb353e2578bdaf"
  },
  {
    "url": "assets/js/31.0aff1af6.js",
    "revision": "ae40f1ee83ca72a1298074b57f05555a"
  },
  {
    "url": "assets/js/32.5c8ba44d.js",
    "revision": "e1530f7c4b77e3c924742ee2184dc6b2"
  },
  {
    "url": "assets/js/33.199afcb7.js",
    "revision": "ccd289148b6948f666a8826a590ab644"
  },
  {
    "url": "assets/js/34.905c4ad1.js",
    "revision": "19d76edd214a5a3778bc8bf3e4ad9008"
  },
  {
    "url": "assets/js/35.f44a32a7.js",
    "revision": "8b99895aa698be08a51413c53903f313"
  },
  {
    "url": "assets/js/36.3e9d4346.js",
    "revision": "4dbec6a88269605f921b2773703808de"
  },
  {
    "url": "assets/js/37.4bed1e9d.js",
    "revision": "f0d5ae0fbec9e3936129a5a18474c71e"
  },
  {
    "url": "assets/js/38.97f396fc.js",
    "revision": "bcae68c2958a6dfb9ec2c752c7aa2e60"
  },
  {
    "url": "assets/js/39.8ec9275b.js",
    "revision": "afa893529a59f31cce48552c0098c51a"
  },
  {
    "url": "assets/js/4.662e2210.js",
    "revision": "76390050a78a4cf3f22fa774b0472c3d"
  },
  {
    "url": "assets/js/40.37c1f253.js",
    "revision": "2ba66e9e7dc35dcf21c99bc4c16ae07e"
  },
  {
    "url": "assets/js/5.01bccdda.js",
    "revision": "3b3a7c6aafd1f11a9b4c174cb117aaea"
  },
  {
    "url": "assets/js/6.1d3bd5f0.js",
    "revision": "c26601ca80731f31e277359240e10ab5"
  },
  {
    "url": "assets/js/7.4c986b15.js",
    "revision": "e1ecfa9b7d2cf7da0a540e3b2cdafa0f"
  },
  {
    "url": "assets/js/8.87db1fdd.js",
    "revision": "2cd702b5478962fded1e03e85aafb467"
  },
  {
    "url": "assets/js/9.07b4ea94.js",
    "revision": "21a813ea781882e957e0d0b940f219a3"
  },
  {
    "url": "assets/js/app.981e91c2.js",
    "revision": "f8642ea8a796973c9601074017fa204d"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "b0ced1f3ef77c5c457851039a5d1be5d"
  },
  {
    "url": "categories/index.html",
    "revision": "397c9df10ad199a6ef726833153b4f9d"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "f1e6578e8e8f07610ef77861dac72fbc"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "c83c48750f83f5747c53bc3b7301c272"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "c50a980a53ef5ca445e5e87eee0d7061"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "466206191473923687dc1d451da38dec"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "3dd658452f0a86c80ad2b77942a90017"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "839c1655e809ad9882681e8183ba6c50"
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
    "revision": "7b416217e11f4c2eb712b956c8dbb47e"
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
    "revision": "13e6ab08693baa1d04af50e7e28e3d61"
  },
  {
    "url": "tags/git/index.html",
    "revision": "75a0c99191834df92d99a9dea1edf7cf"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "954ddf4d3369846eefe0b0a0d107da95"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "252ca6b228343451443b487e0c04b19b"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "e3e2ebe7571253b797da622db561ca6c"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "4e1bf77267494ecb419f899fbdf7d7de"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "eaebe24103b92f6a30ae657a6b39319d"
  },
  {
    "url": "test/index.html",
    "revision": "25cb55de693b0433d0d2edae6eda76f5"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb02f0c77502aaae3cf37866d90f5882"
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
