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
    "revision": "1afa7227603f6d19c8ce0c3fca3d7b91"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "3678dda5a5eb42070d228bf4d2abc20b"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "cc953fa360ca2019ff6622e4dc59649d"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "d6da247e8c4b94baa2d20d0310de012f"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "ea03cd8362a203a2d35ecc7aa20ad291"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "72ce8e2151c6709686dbdcab82f4277b"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "787eef707cca16f3718f29b7da7f40ba"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "50b0db93c5fb98cd240e00c5d2d77256"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "dc7c7a3266a0c72040d5aeb8b75890ad"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "21cfe297a44fa0b97f940c0c71b596d8"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "75fb90dfc55b069754db8316f24a2214"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "7d399d2b7db713dfefc2a5d027d20952"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "b62c41cf0083bd422d0be258bca4a63f"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "bd1c273849de78110cecbf7bf25c0f0d"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "baf2979b539e21a060e081e4713ff640"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "ff3cda6ded455d44a28cbdd046da3716"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "8841376cbb398768dab64dcd298b1428"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "94d164b2930421083766b2c2ed7bf7eb"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "45a267b2d4d9c22be4cc7d98e1564db4"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "82ec7aa38ad95be84b5ed2f96f83e619"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "3fbb21844c38687726ad746882726ac1"
  },
  {
    "url": "articles/index.html",
    "revision": "61c1edea26dcbf45dfa3067dd855928f"
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
    "url": "assets/js/13.00352976.js",
    "revision": "08177ba21bc40e566d8702177435ef81"
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
    "url": "assets/js/17.8bf31638.js",
    "revision": "fd22b1729267eeb098a72ebf4577613c"
  },
  {
    "url": "assets/js/18.88377c28.js",
    "revision": "de765bcf71dfc58873b07b6aac2a85eb"
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
    "url": "assets/js/22.b8e67662.js",
    "revision": "a59e6c3f14935e3d59db611610b6d704"
  },
  {
    "url": "assets/js/23.0bb7979b.js",
    "revision": "f1f33b1c52cdab791d6ead5ec956290a"
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
    "url": "assets/js/26.599da831.js",
    "revision": "32859d5b63f505818f7c61ed5c39e414"
  },
  {
    "url": "assets/js/27.7ea6a120.js",
    "revision": "74290e5791e2e21efd0d06028f83141c"
  },
  {
    "url": "assets/js/28.cde153a2.js",
    "revision": "61e19860496baec5d2c058e56ee2ff4b"
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
    "url": "assets/js/31.4af4eaed.js",
    "revision": "534f343b1d2da236f610fe8583fc329f"
  },
  {
    "url": "assets/js/32.f0a22c78.js",
    "revision": "7576e5817b0c10d9bec8afa7e9c6d0d1"
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
    "url": "assets/js/app.4d5f2d29.js",
    "revision": "5eefda33efe867fd63d73d4d2a6806d6"
  },
  {
    "url": "categories/index.html",
    "revision": "cad31b8d31fb8e7f457d031d4da64774"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "b6e5bb45ab0165c97bee25819b7b3452"
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
    "revision": "408408429bc307ff61bb25723d0129bb"
  },
  {
    "url": "tags/git/index.html",
    "revision": "3be5a76c9bf1b5a5858bf847e4d3c168"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "54174db5ffb37d066abcbaef19e38306"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "693cbf0367e5329ed28d571658fd0dbf"
  },
  {
    "url": "test/index.html",
    "revision": "71dd7ac054bfb38520c2ee0b7677eee3"
  },
  {
    "url": "timeline/index.html",
    "revision": "bbd9f553388825063a599cc1339e972f"
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
