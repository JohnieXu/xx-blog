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
    "revision": "3a06796d695ec3dad5dee3e437d324d7"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "421fb6f5a60dad84d33ba5a84261bedd"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "7c67a5840336a352739bc1bfd5f3b52c"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "03f835f2534761c2937b2d5e004eeb06"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "4900a5e64d2366f64b6f40e12d8e5bcc"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "7d668510ad359179d45023b5b168321d"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "50ac2a956901e284a3074491ebaa4bb2"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "027ef9ae7215eaa597c69026d9e1522d"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "42d43f26180f11aeb6749197ebd2730f"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "129689ef1274f973f8193f5000148e0b"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "c6c361170849a60e18775f7d3c097447"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "e436d2b62b0a2ebfd684df7389fb277d"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "e8434ae8831d8e14987c9109753d837c"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "ec1b00e1c31cbc16187da0430ae71289"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "373c9f2318c3e5f8e2024dd5d44c12c2"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "c5de8a5974c844ec7588115a237ec415"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "7e07a145be0328e537e107b1cd9a51a8"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "16d74dbd1281867c6bee29b736cc8a54"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "24e96962350ba61f948c5d5188e061e0"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "32ac622b72342d9f532fbc34e27549e2"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "1882e56c52037f856f88c0620491486f"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "b3c4bdb1e4a1d8e21763ff7d46981f3c"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "c91c59b52fc354b824d60a4a695376fc"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "9ff3b39d3fbc91b2cbd9cf55e2f4aa12"
  },
  {
    "url": "articles/index.html",
    "revision": "0796c54d19faf77120ce05e84c34c9ae"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "8707d785d1e7a392bd0a7e16362d5ed1"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "2d33116dd561f00ff5ae4512d078b3e4"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "881049be852054e7478b5ed969bcb756"
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
    "url": "assets/js/13.1b1e2406.js",
    "revision": "8b37115506657fcf761da1e71997cc4a"
  },
  {
    "url": "assets/js/14.9e783175.js",
    "revision": "e2d558bb47127dad8f5557bf3f8f24c1"
  },
  {
    "url": "assets/js/15.2a216c37.js",
    "revision": "90183c3d257530917b1d00ae2e215688"
  },
  {
    "url": "assets/js/16.6446fba1.js",
    "revision": "95685a50830b0c6ea352848c32607db3"
  },
  {
    "url": "assets/js/17.298d4467.js",
    "revision": "9685fd00e5586cd4b66576da56c2c553"
  },
  {
    "url": "assets/js/18.2bbd5b56.js",
    "revision": "7864f2c45e1cb1b9c052a18b6d08ce80"
  },
  {
    "url": "assets/js/19.8490504b.js",
    "revision": "2979d2afe7003ba192b8700aa561ccb7"
  },
  {
    "url": "assets/js/20.3566121c.js",
    "revision": "5d796761a582ecda6dfd97e7d07bd824"
  },
  {
    "url": "assets/js/21.9d2878e5.js",
    "revision": "30afa62184eea8cc8393334b50c8dea7"
  },
  {
    "url": "assets/js/22.7f729023.js",
    "revision": "e798b4db13e7f36cb2cc1ad1369c2a00"
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
    "url": "assets/js/27.af45e691.js",
    "revision": "bd7dd4ba73341371cfa8340914c03895"
  },
  {
    "url": "assets/js/28.2c6ff889.js",
    "revision": "5a294a59f297c09e96d4265b166ea8fd"
  },
  {
    "url": "assets/js/29.db126666.js",
    "revision": "63e0f4eff1b1479933ad8ccd822bd39a"
  },
  {
    "url": "assets/js/3.736990cf.js",
    "revision": "fbb449ad6d1bee837ed79978d0d1e714"
  },
  {
    "url": "assets/js/30.9f851346.js",
    "revision": "3ee364575253689e5422bf2cd2db8b59"
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
    "url": "assets/js/34.695815aa.js",
    "revision": "f716f41b33c61c842457d3f84e043b14"
  },
  {
    "url": "assets/js/35.595369d8.js",
    "revision": "f5dcc4947895e1bca4ad67e7628a0038"
  },
  {
    "url": "assets/js/36.04bfea0f.js",
    "revision": "2bbc1a74c10db428cfce760d71507f53"
  },
  {
    "url": "assets/js/37.220d010f.js",
    "revision": "38652d4247b90016f5c5227f7eedc75f"
  },
  {
    "url": "assets/js/38.0e3b774c.js",
    "revision": "95161407eb1b57db4e59a63d4ae5aee6"
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
    "url": "assets/js/7.7c38dbf8.js",
    "revision": "cb512cc81a82c504195e690161ebb3d6"
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
    "url": "assets/js/app.834dfb25.js",
    "revision": "4c0bfb813066c7bdd82b60d5d7dc1447"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "8f66032b4f5a97353156355a973e5ec0"
  },
  {
    "url": "categories/index.html",
    "revision": "7afbf75bb161f5d0affacff34675391a"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "810a2849b968263c718d066bdd97aae4"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "3bd725152c04c56da66cb70d9fde5ec9"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "19bf96febe626b41f48854352d7837ea"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "2d29b9d330a45b0d973cb83fbea15ba6"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "a13c60bcbc2ed79177c2cdb65a0a6a0f"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "0f39a427b2d4030e14dcb23ebdcdfd3c"
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
    "revision": "c985517b8f8f02fd280b84b69f13b1c0"
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
    "revision": "d5e31ac3fb446897d625f46e28ee8c5c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "f45802ecf1a182fb300f011241979c35"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "30ed23ae31cd401ba3f894edaebb7994"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "6be6e983454be39672a94787323af391"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "7c693adcd0c5aa3c00edaedea29ecefb"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "b48ca852c12f9aa7757cddba8b8afafa"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "13ba5243c2be884102b6479e073f73bb"
  },
  {
    "url": "test/index.html",
    "revision": "64d1027e4ece71b1ad5aec20776c16b0"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a2196fc8394404b4e774e63cc26d6a8"
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
