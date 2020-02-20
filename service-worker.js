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
    "revision": "f37672e1b59b3091101245215741b16a"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "4d5f6c1f91596c977ad324b12d575af2"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "5fd9aa308362401d81e555fdeca1b1b5"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "186b21bc6f7b6fed32f0cb722e03ea26"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "3d7fc51719299e2116d2365b9d453da1"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "2fbbc95066518305995f0feb48222441"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "4d640fe796574c2f75e44fbc23f57427"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "b56027266d538b963eecbf6d3f25e64f"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "e6cb6cbe9d48c6ecb339c6d28fca4fd1"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "c11b47d1dd4c7b80c93068fcea599883"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "9a6ebc5a7369df7f812c853075a3ab66"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "d313e63a925ee675349423efb87c94b1"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "d1b08838999b27cd0328553e44804b32"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "d5865f29d57dcefd115bea127b78fe7c"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "f944e3ee915706df5e7e9740ea75049c"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "60d54ace40e2cacd8de6e6f8650a244a"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "110f51b515828b6e8a72f60fe6b1c117"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "c3670201664ab22d17ac8ee76a9f9e4c"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "a59c99fdd747ca0d4bc2f292fb658a0c"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "dab002eab733ad8d2bf9289ce5340408"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "32041431a3df056468721fd19e21555e"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "a6dfd97f38bf55c11a7590ea182dce30"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "22d74fa51db240fc2d8a7284cb0376a2"
  },
  {
    "url": "articles/index.html",
    "revision": "314507ee6d8dd62eedd33627927fd856"
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
    "url": "assets/js/13.ca683a7b.js",
    "revision": "80d04a20ef36ba696602c49b438bb867"
  },
  {
    "url": "assets/js/14.89cc89e6.js",
    "revision": "e7b78442402337dcb5ed55e1f8ed4e79"
  },
  {
    "url": "assets/js/15.8e4f4ec9.js",
    "revision": "318b2df361a2645550a0cffa88ed7ffd"
  },
  {
    "url": "assets/js/16.6956c852.js",
    "revision": "f2db1d30242afee275d63e5ca80a6e73"
  },
  {
    "url": "assets/js/17.ec152cfb.js",
    "revision": "40287a8f431e2782e79c594d94cb8064"
  },
  {
    "url": "assets/js/18.4b7b1ca2.js",
    "revision": "0ac82151f804e0dddf2c75da88fcae16"
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
    "url": "assets/js/25.3d638917.js",
    "revision": "9bac4185e2fe97eacdd4308af90ce00d"
  },
  {
    "url": "assets/js/26.07c27667.js",
    "revision": "facc33b9e42d512a8c99d3f21036a262"
  },
  {
    "url": "assets/js/27.092e5aac.js",
    "revision": "f316b954b06d0f9704cbaed4cee39403"
  },
  {
    "url": "assets/js/28.95e94774.js",
    "revision": "c24b6db2782ee48810a737703f7c15e2"
  },
  {
    "url": "assets/js/29.48983f55.js",
    "revision": "d760f9f83a6efedf75653d408eaee61e"
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
    "url": "assets/js/31.58d9b966.js",
    "revision": "8f37c7643b5912392a1b8bef8403dafa"
  },
  {
    "url": "assets/js/32.e4d4281b.js",
    "revision": "a89d8bf4bc27e8d8de5bd4114f0e1a18"
  },
  {
    "url": "assets/js/33.06e8f853.js",
    "revision": "9d4ccc155ef1305b21a01e594ca7a72a"
  },
  {
    "url": "assets/js/34.8fe6f5a7.js",
    "revision": "a7986216b628b29d841e1672a8b4be0e"
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
    "url": "assets/js/9.ea5ce567.js",
    "revision": "760ab9f0b1fdb3c1627d4aa035c7063a"
  },
  {
    "url": "assets/js/app.ed4f9694.js",
    "revision": "46759beeae6efc33c36889d248687d49"
  },
  {
    "url": "categories/index.html",
    "revision": "64027d9b1b59bbc77ffea3bf92f3cabf"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "3346bb61e37296ae138911ca189c1b38"
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
    "revision": "b8f037e61e856c1f7d97f968dca4bb09"
  },
  {
    "url": "tags/git/index.html",
    "revision": "0aa5fbfd9b298637a3df75f9794fafe4"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "7a8f27147602f8e3942490395ee39d0d"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "a6b7744b37de7657a96986baef51751a"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "bc389b502d7a1c9eace8b4db553f3c7a"
  },
  {
    "url": "test/index.html",
    "revision": "7454f59ec6eabc1d381f0ca5292c05f3"
  },
  {
    "url": "timeline/index.html",
    "revision": "92b36820e665294bb4d6aea6b7591162"
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
