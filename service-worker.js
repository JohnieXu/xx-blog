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
    "revision": "1673e29a8a27317efd002831ba1e4491"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "501dc38958eb13d30d6121dd8deb469e"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "0179748a41544881deb6e258f8922c78"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "36d6ddba90aa20c5a60a87c8e81799df"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "88f00cb0a1f3331a3bb6fb3f055f8db6"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "80254df35b9ff6a6d74a6cbd93e62ead"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "380f6ce00d7e7418b1f026049ff4c994"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "4e46ade62f2b74ce8de2ebe61a97663d"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "bb2dc9e307e8db6f4e799cb081bc45c3"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "a4861d7e5a6195948b92050c52ac2048"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "092a6ff51505937b59dceb00d3b86b9d"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "c2b22635b1a332799c85ff35d0d4d9b6"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "766a664b90c14bd7e00c195d47500580"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "9ccd8a2e93cac87802d650ab3d52cb32"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "34a01bf1d8c2c500ea59a6d092af9e79"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "4a1c0cc1f6719fdf7accd152123af5d7"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "0c1b5427b1c3c2c6ac308ea82c6d1514"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "9b75aeb7a6b0b27cfc92d7b7dea1000b"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "f6c423105a813a74a30ed09b5993039d"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "f162aa78098a40a1ba912934e92e2352"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "7d47cbb638ffd081f7ea9ddc7fc572ff"
  },
  {
    "url": "articles/index.html",
    "revision": "3838511ced2e94e20b2618108ec52546"
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
    "url": "assets/js/app.76e9bca1.js",
    "revision": "a8e852328e964cba7065138893cf07d6"
  },
  {
    "url": "categories/index.html",
    "revision": "434c1073cd6de10c9fa477b1f7b50b74"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "81f85a879117fe5e3d560d0020def640"
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
    "revision": "0a0cbcc0d0ccf91fe0fe15963b72df0b"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d6e6309b581c0505afeb1d401827753b"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "9b043d584c8bd201c73244af6c247e12"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "d53aecf5ba24e27b17b00f4b9b27f788"
  },
  {
    "url": "test/index.html",
    "revision": "e2f4e63f15a0f12623e2e58ba14c87fe"
  },
  {
    "url": "timeline/index.html",
    "revision": "6c91820fd6acd946c66b1720af6782bd"
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
