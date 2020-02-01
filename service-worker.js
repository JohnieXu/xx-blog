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
    "revision": "00ac796acb06ced3c75f94c870e9de6d"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "eafa7cd15c1c6bc5ab7ccf53b783754f"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "8d437e5bfab71001f5e80f3fa6ece828"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "daefbc982ed7676164b0ed79a991e1f8"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "e5fab2374185c5f43915edece0feae7c"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "386403b397bc52830e93e284efb959dc"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "03872c7ecfcc6d640e6a758d66b5adc5"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "177e0141a069268f67e7c3249538430d"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "3b0728543228c86bb290e22128eb1ddc"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "d153ac445e7944d2c23e0b85fa55ade1"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "c8cdd45a7dcffd0fbb5ec06d23bf7604"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "127a3a8ce6f7a9ff093f35a0f9b8f37a"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "f0d50201bd8773287c1ca3f222b522cd"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "9b609cc0b34dacfa186129aad65e504e"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "83d0fa638e82579c07657020d31337dd"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "cd1bd3f26b88b7105c7f4335c3120cee"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "c23576c45dd1a9e2cdea6cbbc3d0d878"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "0abba497a6858583fc5bf98483db4b16"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "9dbd125b73be738f622e5f2988f4c5cd"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "700fe37893e893bbf2ecfb1fe7922b2c"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "026bea80d6cb1b390acde91f6bfa5652"
  },
  {
    "url": "articles/index.html",
    "revision": "34fcadfd4d0c2a5b003dde831c609727"
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
    "url": "assets/js/16.4067dcac.js",
    "revision": "cd19d946bf3d5e6c247e0bd669814a6d"
  },
  {
    "url": "assets/js/17.a2dfccb3.js",
    "revision": "3a666361a52ba7fe48a87d440abed18c"
  },
  {
    "url": "assets/js/18.240c48f8.js",
    "revision": "3734901c2d5112163cac180bd58d4296"
  },
  {
    "url": "assets/js/19.0ddb345c.js",
    "revision": "f38d38eb46e72a8081a6d5dbdfa73bfa"
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
    "url": "assets/js/26.84d38184.js",
    "revision": "619612bd0fc62d01c286b3dc89578549"
  },
  {
    "url": "assets/js/27.4548493e.js",
    "revision": "6a139db693be91e5c76632fb1461f388"
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
    "url": "assets/js/app.02eec477.js",
    "revision": "022bc56d8e071a352af51aa089e8ec3b"
  },
  {
    "url": "categories/index.html",
    "revision": "8767e788e6796f9b3b1d3ee55e0e1d10"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "bacf9a59353a76e0f236e28184ebe997"
  },
  {
    "url": "logo.png",
    "revision": "1834262abcd23fdc8e34a72bae0ccbce"
  },
  {
    "url": "tag/index.html",
    "revision": "e7396c7e37166c1940ccda21f02ac424"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a116447e35cd85f8a19cee9125e9169a"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "a09b0b1b8598b099c1ed54c662d23cc3"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "43fa0cfedbea4b356880b4788d1b0477"
  },
  {
    "url": "test/index.html",
    "revision": "d05195c5bf0af967cd15151faeb525e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "152f67ec68cef73533d3b296ab793928"
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
