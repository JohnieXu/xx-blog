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
    "revision": "4a581650e1431161e61eea425fff7b54"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "0da119c8edc84a25c9670cb86bc516ee"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "2a2efad9309fb4448db759909431c0cb"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "fae56a9032bb51bf1b53829f718c0965"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "fca86ba9f60596317f89f70a1acb9f94"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "6f3d5265cd4be5ab78d8824f44280097"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "2023a7f7e5232811825b7f060d22392c"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "b1cdb6c57824efa29697748ae78a91f7"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "9176126b081b807c06ee33f21546a14a"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "f0a28301f92de469d29c91587b83dfb2"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "2e997f30c22ba29b10fa95d9bc09ad26"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "563580d7eadf8dddcd9089d3b8b421ae"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "05251713df2c5996624efe1fa729c6d6"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "003041669bc9950acb826c2919e7b953"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "e25b66dd9622faeaf1a6e1e11075cb93"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "7eac7bf0665dd6a0abe428c3fb40fba3"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "973f31efc2474072d742a41f1e9e3c54"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "79e480ba6b66326a67d28d1f1c5bd8ee"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "f3f720e91c9165af26e772bd6e0527f2"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "1b3825c1f0a9339d0bdff504716f2c6d"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "e98babd81f9c159ab000b5be12ec93c8"
  },
  {
    "url": "articles/index.html",
    "revision": "ba05cb5731202a33b6428de0cf7c3d36"
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
    "url": "assets/js/32.3f50e6be.js",
    "revision": "e76ae7058d127e3e7a5b6167ef29a248"
  },
  {
    "url": "assets/js/33.4b4b336c.js",
    "revision": "282eac312b3f8138ede78aa53f95833d"
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
    "url": "assets/js/app.6877c9d9.js",
    "revision": "59a72b6465438ac269bb60796627a31e"
  },
  {
    "url": "categories/index.html",
    "revision": "b8cb2409e712b99f39bccdb36a97bc9b"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "bd1d58744af68d39884dc3115b47d0d4"
  },
  {
    "url": "logo.png",
    "revision": "1834262abcd23fdc8e34a72bae0ccbce"
  },
  {
    "url": "tag/index.html",
    "revision": "6288feb0f542d22b2b8bb983ffe1b1ae"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d0d483d05564a8be697c01637a747f70"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "0b2e9880c5007e2b78d3b01141abf65d"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "603c11531d52e310fab87ee42cc71801"
  },
  {
    "url": "test/index.html",
    "revision": "0cb76316613962a98cd605730d2e80ce"
  },
  {
    "url": "timeline/index.html",
    "revision": "5d5742ee774ec119df4dad50c5c7f59c"
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
