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
    "revision": "eb31b4b2518e459a981acae3a84dce31"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "cce4df0ef2ab995e9e97580f27374fcc"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "60948932b97664f6f05170fc4d292e6a"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "2b199b0007e87cd6ba54e211d3f096c0"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "2afe3e64aa7e4fa9ce9e508ad2ba163f"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "2cf16c25a7ecc3762441dedc7794ffc7"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "b9e9740bb92195aa42557d20a6d7c3e1"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "5c5d9ee2b4f910cb2114a8b161489586"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "c6d849e29edd1b7a3d9fb41fb1d5e860"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "d510a9d75f00448e141c0be233af3900"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "a71571b5b6c10461671d000d12e71669"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "1befe18e9d4e4448fc9dc53216d0d852"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "9655d45276fc8763c69a43e56227264a"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "c9c3fcf138d21431722e51ab04301d50"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "01549761101b5103fdc8cb451d68ea27"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "6d743d9adba14eeb332cf10b2777c612"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "24a643a183ffdd3ac8ee196c24cbeaf6"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "f4426167283edc8a7f85afe495001d57"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "e1f8128bca87d98dc95c58abe94ec3d4"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "67e917ef0cd11379fc9be1265c8fc2e1"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "fa7f28df2f274e88a5ca37a67e18a4da"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "19af06f87900918f8e5e1bf37a43a632"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "7941470f069c4292d7ccc271bf0291b6"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "4ff672319bb1b41d5e666ae16fd24c7d"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "061d8b35a9fd098a0fe99e9ef06ea81d"
  },
  {
    "url": "articles/index.html",
    "revision": "f4cb75cec10a727c702db7c716e3920d"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "89819a4cfaf57a3eb6c45a73fda252f3"
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
    "url": "assets/js/1.089a9807.js",
    "revision": "a3fec5a07d3f13fb11906d539647b576"
  },
  {
    "url": "assets/js/10.d66ea20f.js",
    "revision": "4a348a86675041fe7152ea81bf8eeb46"
  },
  {
    "url": "assets/js/11.3165da73.js",
    "revision": "e72dd7513832dec82c9391db57249902"
  },
  {
    "url": "assets/js/12.cd4a9549.js",
    "revision": "f8f815894ba68837e15987843462cd97"
  },
  {
    "url": "assets/js/13.407aae5d.js",
    "revision": "b6f63e17ed49154d4bf45b7b1de22349"
  },
  {
    "url": "assets/js/14.e32df4b9.js",
    "revision": "7a28832d803481586bf7f243a539165b"
  },
  {
    "url": "assets/js/15.6f5170b4.js",
    "revision": "889bf54e8f661c2d18bb44ce2066b47d"
  },
  {
    "url": "assets/js/16.9ad3d726.js",
    "revision": "6be62fe91c39ba1642c041c9d0a57371"
  },
  {
    "url": "assets/js/17.9e532be3.js",
    "revision": "f7faf72c47963a971d5f5eef1564acd3"
  },
  {
    "url": "assets/js/18.fb2039b3.js",
    "revision": "838b5d155e91239a47367d21c5b5a5a3"
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
    "url": "assets/js/21.2b5fad48.js",
    "revision": "5532ec35cfc8134c38f82922b0e6a60d"
  },
  {
    "url": "assets/js/22.8598131c.js",
    "revision": "dabb7dc42d4199c6e566d20a90116320"
  },
  {
    "url": "assets/js/23.baea7cce.js",
    "revision": "d88e6d323d705a7c7e96d8e278b91941"
  },
  {
    "url": "assets/js/24.ebcc9346.js",
    "revision": "8e3486a7c246d46c79701c1ed3beba99"
  },
  {
    "url": "assets/js/25.24f73587.js",
    "revision": "01d47c1e2cb0fece15160e6d92ce3276"
  },
  {
    "url": "assets/js/26.36b5e9d8.js",
    "revision": "e22c54db2bf704d48cf8d49577e978b4"
  },
  {
    "url": "assets/js/27.fa1568d1.js",
    "revision": "cb73c286ae242fe44c24cacb547ce033"
  },
  {
    "url": "assets/js/28.a771cf01.js",
    "revision": "7ccd0abd894f415ad2a33755f2f39bbf"
  },
  {
    "url": "assets/js/29.bf1f4b39.js",
    "revision": "4555d5b77f0ca59943a1828322510730"
  },
  {
    "url": "assets/js/3.893ca284.js",
    "revision": "fe3340e9fbd70a11326bc89978f9c955"
  },
  {
    "url": "assets/js/30.695772b5.js",
    "revision": "a339e1321185073aca02145feeb8c008"
  },
  {
    "url": "assets/js/31.be75d516.js",
    "revision": "a4d55cc4c69376b808e37a7aa3e667f1"
  },
  {
    "url": "assets/js/32.5f75fb23.js",
    "revision": "57f2d2b27f43e9c19f8a1f5331a707c6"
  },
  {
    "url": "assets/js/33.dcfbd350.js",
    "revision": "f2b0d62a642b207e485a9029f86322a4"
  },
  {
    "url": "assets/js/34.0dd3c28f.js",
    "revision": "61801d42b063d09910c5c2dff87c3d14"
  },
  {
    "url": "assets/js/35.1fe0a93f.js",
    "revision": "05504c37804d1d41ef72b1ab16c3676b"
  },
  {
    "url": "assets/js/36.75302863.js",
    "revision": "4a2fd3cf301b66a24b78c0e32d902fa0"
  },
  {
    "url": "assets/js/37.028bd7c0.js",
    "revision": "7c8ee1ffdae0e016d3aaa7bb7ce5a23e"
  },
  {
    "url": "assets/js/38.7540da3e.js",
    "revision": "2ef19b058de53afade7210b6d47f5bb2"
  },
  {
    "url": "assets/js/39.2413366c.js",
    "revision": "24310acf033462c0f28d62ae7fec5d5d"
  },
  {
    "url": "assets/js/4.ece452b5.js",
    "revision": "94ea75955b529d20e588c6b6d46b1fcb"
  },
  {
    "url": "assets/js/5.d891d5b9.js",
    "revision": "791dbac4e5fd47bec5e9658b439833b2"
  },
  {
    "url": "assets/js/6.bf72c337.js",
    "revision": "bcf7356df511c0de5101517c652b2a83"
  },
  {
    "url": "assets/js/7.33d83d27.js",
    "revision": "51e7f35c7b65d90a30e66ebf87a086b1"
  },
  {
    "url": "assets/js/8.33a9afc6.js",
    "revision": "588f4c33834e227d683663f2caf4f661"
  },
  {
    "url": "assets/js/9.17e25c78.js",
    "revision": "c3f00cad173f1c422114478fb403a22f"
  },
  {
    "url": "assets/js/app.149076b3.js",
    "revision": "656271e84237d46b8e26a4ab762a1af3"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "e996291d4784cf93fe6c86f7bb456c1d"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "cb7812187fbd669b7181421bbc399467"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "61ed89602d212c1d672cfd586042aa8b"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "5ac00a5eb5e2c47d68277c623e98e0b6"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "17258605d71804f1dd36e7104e324ff9"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "27d5cd183053407fcdd7869b04325dff"
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
    "revision": "4a4fb58aa9a63ef99044f28a1543cb41"
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
    "revision": "a36d3ab7dc394a395005e2febfacf4ef"
  },
  {
    "url": "tags/git/index.html",
    "revision": "048d11fefef43b9b01d6d4ef7e09135c"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "251cd984eb296f3001d340ed4be739fc"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "4cb5554dfb96ef1c0a7f07358dce0f47"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "77ba8818d1121c3554d24f279fd62f34"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "99784f91315852faf79cf1179e6f6b68"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "8eea3b9bb51626e872299a2f3e5b6625"
  },
  {
    "url": "test/index.html",
    "revision": "06fdda471bfca85d96d19b413b9ff221"
  },
  {
    "url": "timeline/index.html",
    "revision": "0eeec5b570583da28b528c8710b4547a"
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
