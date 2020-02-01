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
    "revision": "7f95c30349c560c9d8d51a84f9ae6703"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "746f082e492e6c47ecdeccd0c28bfd92"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "aea60f2fb5f4b506db935fdd1abeb818"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "852bdf0115cdc85fc69d4bb746785134"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "6dae8fae0ba08bdcb1d19568be1023e2"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "b9930e573ad3c3ed062b839c28080f0a"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "837fca99ee257309929449475dd73569"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "53e56783950cee2e14ce0134edd969fa"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "be185d1a677852369b3282b800662e1f"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "9fc944a6d4f64aa6043a637143787a37"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "5d19b48adfd9880df719bec3db52930c"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "2639285891ed807ba1f56fc96616f5ef"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "28803037402f09fc15cbe2cf15eaeee8"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "da043e298c38ffffb7071869e33dbb0b"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "b9b9659e63028ea31edbd4a348ff1bf4"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "498d3cc8bf4adf12b5e43afac9864b57"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "a5c876bb698a205a1bea679366bdd990"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "806ad36d87278a86bbfa8eb1e8bb3ff3"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "49aae77038aefe313cbb2ad2dcd23ce4"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "3a5fb547e07ca3242f90ee2324090bcb"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "5972d0f58f95cb0aef25a18126f51b2d"
  },
  {
    "url": "articles/index.html",
    "revision": "f312a63731afef51a14eed2a28c7c828"
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
    "url": "assets/js/12.02c48626.js",
    "revision": "d3f6fd75e3412d219ed28cda9c948068"
  },
  {
    "url": "assets/js/13.b68f6580.js",
    "revision": "258dd0ec6360755615498642ea6aef71"
  },
  {
    "url": "assets/js/14.fe43b85a.js",
    "revision": "f6481858c0e6382105935007f486b1f9"
  },
  {
    "url": "assets/js/15.6715137c.js",
    "revision": "cbc65aa35800906682fab56cd53517a7"
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
    "url": "assets/js/18.88377c28.js",
    "revision": "de765bcf71dfc58873b07b6aac2a85eb"
  },
  {
    "url": "assets/js/19.0ddb345c.js",
    "revision": "f38d38eb46e72a8081a6d5dbdfa73bfa"
  },
  {
    "url": "assets/js/20.a71983c4.js",
    "revision": "5d963a32dd1c5c21e9122cdc1b556695"
  },
  {
    "url": "assets/js/21.014745b4.js",
    "revision": "2035abb063818d9f9c8c4f54dd2aeebf"
  },
  {
    "url": "assets/js/22.b8e67662.js",
    "revision": "a59e6c3f14935e3d59db611610b6d704"
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
    "url": "assets/js/27.a46b2045.js",
    "revision": "ffddc4a50deb30947d53d21a1f394280"
  },
  {
    "url": "assets/js/28.f2f78d87.js",
    "revision": "8c832bad2bb3c531df5a70643df60fd9"
  },
  {
    "url": "assets/js/29.0bca221a.js",
    "revision": "66340eb86940dec673e74e10b03fb4a1"
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
    "url": "assets/js/31.c458afd2.js",
    "revision": "1fb61490600fd79f445d3df8efcd5a1a"
  },
  {
    "url": "assets/js/32.3b32166e.js",
    "revision": "fa61a9da833e6785d4225156ade0f1fa"
  },
  {
    "url": "assets/js/33.ba9c1478.js",
    "revision": "e69ffa4e6ea7e65687d3a9ffaf1be9f4"
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
    "url": "assets/js/app.4814cd6f.js",
    "revision": "a65d2dafe59cfb6e3ee1f793a5254597"
  },
  {
    "url": "categories/index.html",
    "revision": "9056aa360ae9216001cf3242ceead965"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "f9d798e71733f1603f0c70d9f7ab929a"
  },
  {
    "url": "tag/index.html",
    "revision": "a65d1cefccb041e4b90ba11ae6532875"
  },
  {
    "url": "tags/git/index.html",
    "revision": "937d6cb1d94cd5c5d56749f078daf588"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "7d98b5f321f361b8f2b23796d0bbbd52"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "d9e03709646f145d7915771bc6ccabc7"
  },
  {
    "url": "test/index.html",
    "revision": "8bfd6c1d94e1590acd44fafc8f575b31"
  },
  {
    "url": "timeline/index.html",
    "revision": "696a556c8968bf7a80ed5d7e850b7bd1"
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
