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
    "revision": "e378deeec2be33d218c7bd7b00b6831a"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "29d644cac1701529644de9a238c06d0e"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "a23bb648c10f662774a3cf32c9794a0f"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "f8fb37037532b701bb54518804823c28"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "98921d4007078499d48cd7475b86af4c"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "54d3e6bdf3f1f2ac5c7cb42dd14efac5"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "83509b5f770faa3d6d0f2fca6dd6b083"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "be6f0a103fa95c66deb5df643e33e17f"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "8ee5428e2be24fdf0dfc46a9e0c84bb0"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "d91ee5e4ae72cfd789b3e196c50bada5"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "09c5d3d4d9f4c59bb396adb658d9150c"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "9dbde7aed7c318bb45dba9a722b19093"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "0def5cc9425318fe483e795b010d84f6"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "608766a29c6386542cea0a8f23fcc829"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "7551d1f51ab2f0cbef8393d4358bfb8f"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "4330a6637c42951cf26cfc3e6dd1ca72"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "65e88e796bd485d22fa4da904dde0126"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "264dfdc9f331a4726c0d4a630113ff5e"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "af4a9caae845ecb8210ca11544dc3ae7"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "6a173adf4f1ebb719c78e921ae9cf09b"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "86e6c97ac56de41bfed557a37a835faa"
  },
  {
    "url": "articles/index.html",
    "revision": "0021d80b440d95c21c518df76c749f44"
  },
  {
    "url": "assets/css/0.styles.7d50cc48.css",
    "revision": "486c3ce079e93af3b9349b2ebacec116"
  },
  {
    "url": "assets/img/1521f01a-6f01-4d7e-83df-29c9682bcc57.0a426361.png",
    "revision": "0a426361b4020a6198eb3a7a9dd6367e"
  },
  {
    "url": "assets/img/39633bfe-48f6-4b37-96b2-af9d834259e8.4b10ba69.png",
    "revision": "4b10ba6905864c015caea8574fac12d7"
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
    "url": "assets/img/7fa5ccf5-1baf-492d-927e-eeeaf0de642f.75dd3310.png",
    "revision": "75dd3310add2f774901e53bdc3adef6a"
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
    "url": "assets/js/10.48d02362.js",
    "revision": "304239a2ce7551bd501c4d6a96941df4"
  },
  {
    "url": "assets/js/11.3ec92075.js",
    "revision": "6a8d142d9dcd0c7771519261fa5528b5"
  },
  {
    "url": "assets/js/12.36f9bdcd.js",
    "revision": "e33bdd56d9af0e78601a326985f2bda8"
  },
  {
    "url": "assets/js/13.2cf478fd.js",
    "revision": "a3286f56df9caca11bd6c58753bb2258"
  },
  {
    "url": "assets/js/14.fe43b85a.js",
    "revision": "f6481858c0e6382105935007f486b1f9"
  },
  {
    "url": "assets/js/15.a9b87f3d.js",
    "revision": "f8797752f682d70dbc24d836d68b106b"
  },
  {
    "url": "assets/js/16.31207f81.js",
    "revision": "05ad37d249d555a1f9344ef53749960a"
  },
  {
    "url": "assets/js/17.2b409898.js",
    "revision": "36a773c73f1565d501b1edce8d6d03e7"
  },
  {
    "url": "assets/js/18.e702749a.js",
    "revision": "7f85b18a4175f6312aca9fd2af40655a"
  },
  {
    "url": "assets/js/19.d3afd25a.js",
    "revision": "6a9288242c838acfc1ed26de8ac70552"
  },
  {
    "url": "assets/js/20.ed983853.js",
    "revision": "6c532622f013f6d503b86f4ce63a3958"
  },
  {
    "url": "assets/js/21.447bb1d7.js",
    "revision": "5f4b6563e1670ee7c364f994ef0a3374"
  },
  {
    "url": "assets/js/22.edcf90c4.js",
    "revision": "78dee6e43cf831639408f84ef9125389"
  },
  {
    "url": "assets/js/23.af5b4c2c.js",
    "revision": "82fcbaba20bdf05e1c40b5a9eb62e2ca"
  },
  {
    "url": "assets/js/24.8937e0f3.js",
    "revision": "6628f9af74e8db79ed185dfced8b3283"
  },
  {
    "url": "assets/js/25.cbd5bfed.js",
    "revision": "e25265c739e40b74e52f92be875abe48"
  },
  {
    "url": "assets/js/26.4b6f6c3e.js",
    "revision": "584a98716671b7a2f8e28eb28b10badb"
  },
  {
    "url": "assets/js/27.ed02bf02.js",
    "revision": "582080c52898244696c0daf8a6c20801"
  },
  {
    "url": "assets/js/28.4c774361.js",
    "revision": "61127d08a9171e54e11cefb481b620d9"
  },
  {
    "url": "assets/js/29.7e1b1e94.js",
    "revision": "da9e68cc986a29e0cd7ed7c97a324556"
  },
  {
    "url": "assets/js/3.dc709042.js",
    "revision": "b89ba31f9b49c8683e0bf96baca87841"
  },
  {
    "url": "assets/js/30.a2cf15ca.js",
    "revision": "36653a5eaebd4010a88cecc552d68b01"
  },
  {
    "url": "assets/js/31.4af4eaed.js",
    "revision": "534f343b1d2da236f610fe8583fc329f"
  },
  {
    "url": "assets/js/32.f0a22c78.js",
    "revision": "7576e5817b0c10d9bec8afa7e9c6d0d1"
  },
  {
    "url": "assets/js/33.b8e38b03.js",
    "revision": "cbdff19f9bfd82eb79e00dd63a0c8939"
  },
  {
    "url": "assets/js/34.f5591efb.js",
    "revision": "d579847fd90f6e95c21cf3145a6f35ff"
  },
  {
    "url": "assets/js/4.e3f990a9.js",
    "revision": "6ff20cef7a3fcdd49d48940be0c443d3"
  },
  {
    "url": "assets/js/5.ffa215ad.js",
    "revision": "c6a205914c9abc125084ad57f5012bd1"
  },
  {
    "url": "assets/js/6.cf3700d0.js",
    "revision": "6905ff1c55ad943ad065f66e25528d72"
  },
  {
    "url": "assets/js/7.e5544ee6.js",
    "revision": "5522e282d5bb824327c65e51b6418230"
  },
  {
    "url": "assets/js/8.743e1d41.js",
    "revision": "87f2d9776389a684dc731c267bb4ccf9"
  },
  {
    "url": "assets/js/9.b47b3e2c.js",
    "revision": "6c90e9fef71e2a82dd35871775005882"
  },
  {
    "url": "assets/js/app.69ecf223.js",
    "revision": "5689ebeda1497ab34b1e4016490aac46"
  },
  {
    "url": "categories/index.html",
    "revision": "0c12c85996d245f4be14a820523ad92d"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "ef08cbd98f92792dbaa4724debb4c08d"
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
    "revision": "05d6d19627ee7b5e29f84d8fdac6e6f4"
  },
  {
    "url": "tags/git/index.html",
    "revision": "04fb150c6a5c0325361f1406c6c43dce"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "3acef6e345eec18f7a836f34f95306f6"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "d9a64c4214035c6d63f194ea129134fa"
  },
  {
    "url": "test/index.html",
    "revision": "6efcd484d7c31f598d6b2768247d76c3"
  },
  {
    "url": "timeline/index.html",
    "revision": "d25787d8aebb834d0284d3b73c8bc2c8"
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
