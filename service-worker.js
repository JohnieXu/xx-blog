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
    "revision": "bc649fbbf4727eb6dc37b3e688dbac1b"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "bcd26721531838d00aff57d390ca78c2"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "e9afc41a0a23d95627f56d898b0a7efc"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "7b01ac258e33df41bb44b7ce1a978641"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "73c13480241414acbb24fc62ac5a50e9"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "fc0a69f015d082124012fcf66876274d"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "879af0495f8b97d7b9ab2d2d558bec0d"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "7b9bc9a70358adf0ff059f20491df657"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "f449e07f7cc5bf137a5f9182a5e373d9"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "b9853cc91c8fd5d2fb0a7f75a5aafd53"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "1300d3d63ef3d3c6239b31a4535c4bd4"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "79e1c004fb572ff65d8f39ac5273e763"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "db0a20dcc03e82a4525343fb7242cd42"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "c5b1ff01bb50f98c3a4f3dc8743e92ee"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "a5c120638c3f1c6230142d359b654ce5"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "a1eb748201b5a40050b81ac2c661d70d"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "f3442d04a4594c0c923aba28dca807c3"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "05cf45e4171c8773f3ea921bbb462ccb"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "e7619b5ef993f4f30c25a02aad044749"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "52056a18dbc722c4cfd8f0d765dc74c9"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "cf0abe73b53a78ac6a3d82bd1e71a2c6"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "2d1f6532add39f3da35ed3c35332f857"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "33e3c7f9131dcc9699ee5f2b348c5feb"
  },
  {
    "url": "articles/index.html",
    "revision": "1bf28bf5f00ebdf807d1cb862f9faf6b"
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
    "url": "assets/js/1.8f60633c.js",
    "revision": "598157f6851ea72557a5687bf3764320"
  },
  {
    "url": "assets/js/10.867a508b.js",
    "revision": "41b2a47bd0a57c954a733eb97e17a3ea"
  },
  {
    "url": "assets/js/11.b4ef5254.js",
    "revision": "38c2077d90a4362e014430313b4f59c3"
  },
  {
    "url": "assets/js/12.b7f32a74.js",
    "revision": "0e1767088017411559bc1a69db0f8bdc"
  },
  {
    "url": "assets/js/13.b7aeff24.js",
    "revision": "10095969496a3d199b401090747d85e7"
  },
  {
    "url": "assets/js/14.c2893875.js",
    "revision": "dd2a02e4236f462dd0dc1a6b7c2defdf"
  },
  {
    "url": "assets/js/15.86266b3a.js",
    "revision": "4bfe367501055ea327f38ba35989dc43"
  },
  {
    "url": "assets/js/16.301226db.js",
    "revision": "04a3f6f119761d99205edf4ea97d0aff"
  },
  {
    "url": "assets/js/17.07751b4a.js",
    "revision": "a98adbb5655183e819ce2c453ec66c19"
  },
  {
    "url": "assets/js/18.9542be11.js",
    "revision": "9776cbf068c95b3262a08c6260c57185"
  },
  {
    "url": "assets/js/19.1d78a30c.js",
    "revision": "1e99480418b22b4c2f0f592624090cab"
  },
  {
    "url": "assets/js/20.8bebdd90.js",
    "revision": "37dc4c2df718cbc72f9485ce720df074"
  },
  {
    "url": "assets/js/21.7e62b33f.js",
    "revision": "6e96a0a6583a9f0cf52f3268e5b9c270"
  },
  {
    "url": "assets/js/22.39b3cdec.js",
    "revision": "f20a912a41045adbddc2a8619d8f8da7"
  },
  {
    "url": "assets/js/23.a283608e.js",
    "revision": "4d9a8bcbed7e1cc24b42cc0c7d089782"
  },
  {
    "url": "assets/js/24.97102947.js",
    "revision": "f81e06cccb4c3efe6a3e005733597c23"
  },
  {
    "url": "assets/js/25.31081587.js",
    "revision": "66ec9dbc8a8ae5ab67e07129f4e60f36"
  },
  {
    "url": "assets/js/26.5147a2bf.js",
    "revision": "53bc43559e337274d524d8b434e4f3d9"
  },
  {
    "url": "assets/js/27.8840c85a.js",
    "revision": "7263639cf6805f6a0838fb8692b40268"
  },
  {
    "url": "assets/js/28.3cba2860.js",
    "revision": "0a774fab6202899e8b016e214343417c"
  },
  {
    "url": "assets/js/29.6ccbb8f8.js",
    "revision": "c978343b4f16b4f72436254984357ecc"
  },
  {
    "url": "assets/js/3.87e7c734.js",
    "revision": "3ada70f1dcb3dba210248717af8c8182"
  },
  {
    "url": "assets/js/30.3516d02e.js",
    "revision": "4502a0822529efd10abf7f75da281f41"
  },
  {
    "url": "assets/js/31.5d0530d0.js",
    "revision": "7eb31e763712c7a37fad160486386fe6"
  },
  {
    "url": "assets/js/32.019adcf2.js",
    "revision": "6d4b34aebd728a7125473e4d61c132b8"
  },
  {
    "url": "assets/js/33.53ff274a.js",
    "revision": "f8667bb235346853ecb0dde36dafa0d0"
  },
  {
    "url": "assets/js/34.1b98dc06.js",
    "revision": "8a9b784eba1415c0b15f933506948e36"
  },
  {
    "url": "assets/js/35.d55a9420.js",
    "revision": "644f1024c3c5de774677bbb1b23d4b0f"
  },
  {
    "url": "assets/js/36.ca0e122b.js",
    "revision": "4518bc60c77c123b385efe6fab8a3a29"
  },
  {
    "url": "assets/js/4.021acd27.js",
    "revision": "095565b9d6cbff7af5025696d5e3bfbc"
  },
  {
    "url": "assets/js/5.c2ee24f5.js",
    "revision": "6ac4f0c9775dc6067a5f505a478a188e"
  },
  {
    "url": "assets/js/6.177d57bd.js",
    "revision": "4f398cacc70b55fef66bbef17a7d3831"
  },
  {
    "url": "assets/js/7.d164c3e8.js",
    "revision": "5c34d8ca2fd9d992ebbf08accd59022b"
  },
  {
    "url": "assets/js/8.315bb30f.js",
    "revision": "66fc791b40fe8d53cc137d5bacd6641b"
  },
  {
    "url": "assets/js/9.2ccbcbb8.js",
    "revision": "0289f7672f2752060dfa344ca1ad16f4"
  },
  {
    "url": "assets/js/app.099f4c6c.js",
    "revision": "c4b188f8685d095f8bacb281fb4ce667"
  },
  {
    "url": "categories/index.html",
    "revision": "8fb367c0b222500fb85d1ae7658cc0a3"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "c13ce7113c5ce72ebf7c481aadbfc008"
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
    "revision": "83a4517eac858b224ad9be24935ac64d"
  },
  {
    "url": "tags/git/index.html",
    "revision": "86c326e821b9ed13a8c5a1e55a529845"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "5d9c36caf47a80f3c2bd75c70c5e06f3"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "ff99be74a0b2c6aacaee51395a394c25"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "e1d1f9afe817af0f3e28ab98528e9bf8"
  },
  {
    "url": "test/index.html",
    "revision": "71b04211c676e92875cc63493e04e34c"
  },
  {
    "url": "timeline/index.html",
    "revision": "a4106cb341aef8ec584451af36a43d7f"
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
