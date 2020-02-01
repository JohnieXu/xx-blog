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
    "revision": "08393d39b548f4602f0b5043a5653ea8"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "e7fd1adc5dc1422c33b624edb904a101"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "f083fc686d10525ea5eba869fe431e4e"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "258bfb5fe97001e1c52b8bd1d9eaf22c"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "ab2ee8d59991e32ed9a158c7d1d89dc7"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "31dd40fd7f6bc1016675e62e72e81680"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "a6d444517c670b323a7982f12a107992"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "400fd4ba6c1afa252b4e121016927716"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "d36167943d52a50e264c0b8bfc6f2e0e"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "8c34fc1be7f168f5ce70a2d093569bea"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "eac9c344f530dc15883ea0faf911dbcd"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "9e8aff0c668aac1c2108c20a9cc93b3c"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "f0ea652956f99354ba51023dec488c0a"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "85886bf05e6e7a5783d8004adc55efa9"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "1b9ce6df0e6c9039ee1b88d16a2f891e"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "599c535c80232de4f84e14458069fef9"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "f043e0f8be645a0c2cc76bf200f8ea08"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "454d859a73decbc5ddb97205c5b29ccd"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "e58dedf358a2fdf5e098f7fa38726909"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "083d824c64adca3cddb3e19d7461299b"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "5d265a2f6daf39a10e0912cb45ba2197"
  },
  {
    "url": "articles/index.html",
    "revision": "a390248fdaab5e685901232549d02cb7"
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
    "url": "assets/js/17.2a344e78.js",
    "revision": "f28cfb9514dd63c6683c7c78cf9f93a7"
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
    "url": "assets/js/20.d2800322.js",
    "revision": "ab6da45fba43920e1b3bc05d6ebc112c"
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
    "url": "assets/js/23.59a36cc0.js",
    "revision": "ecddf90e9b6c5cdb4cc5bdb8963a5ab6"
  },
  {
    "url": "assets/js/24.8937e0f3.js",
    "revision": "6628f9af74e8db79ed185dfced8b3283"
  },
  {
    "url": "assets/js/25.fc98ecc3.js",
    "revision": "2d70c2654b558c8ecf705d627cd1332a"
  },
  {
    "url": "assets/js/26.4b6f6c3e.js",
    "revision": "584a98716671b7a2f8e28eb28b10badb"
  },
  {
    "url": "assets/js/27.7ea6a120.js",
    "revision": "74290e5791e2e21efd0d06028f83141c"
  },
  {
    "url": "assets/js/28.f6c4740f.js",
    "revision": "0b8227d07ac3d673fa0b9e167e895ea7"
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
    "url": "assets/js/app.8d089a44.js",
    "revision": "e167d4c279059eaa13e22921c51eac9d"
  },
  {
    "url": "categories/index.html",
    "revision": "b6d5ce7cdb0c6123864bd1b2e119f1f2"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "86dc7f61e330658ef374f44c5d21dbad"
  },
  {
    "url": "tag/index.html",
    "revision": "4958f292dfa54e7925c798f5049e8a86"
  },
  {
    "url": "tags/git/index.html",
    "revision": "03d491e6aaeb6d4a95aaa8e640fc6d4a"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "03b7462a9a8461c7ddd1627b49c7e147"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "4b9706efa689da681cff516be82017ff"
  },
  {
    "url": "test/index.html",
    "revision": "c864bf22908b04da43951c5ddd799e6a"
  },
  {
    "url": "timeline/index.html",
    "revision": "03c1bae25c32fd084d5c5f2fb38c4739"
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
