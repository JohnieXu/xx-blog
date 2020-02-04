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
    "revision": "8cfdc9e14b2b4c5f3d8f044a45f41282"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "ce2fad5de82de36fb6828f2fcc03e553"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "106a7e48ec5be52e1cf06285c0c69e28"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "ac70954a53450aad36fb55143f169dba"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "94091b0262ad185691d845bcae52e34d"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "39132c1fedf9e8f5279a488ffef8570f"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "ade332fb5b4a1e48e7077baf4bae1e1a"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "89ec0e85f608a2e88d101a8f6b6d8e66"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "340902dae55392d04427617e8b95df92"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "2047ebde8e5c2614ca03b63bf88b6bab"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "7a6af8bc7384a56b39ea3b7207851def"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "82187039e67da62be96109cd10c12254"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "75c62764d96456371c957cf58d91067f"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "8bde8fa83297393b7983debe3c1e6d04"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "dab9246e338856ef55c78361d12fac17"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "ed17724263c499c1c543058146e7ebc9"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "633d748c2635583d4c632767419a2849"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "d3503a39e9c979312eaa437d57068ebf"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "cdc5539f0c3cc18a5c3ffbc73bef2909"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "0aa5fb22617b5a64c4883fc50b0644f1"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "19d4fb9f253b34d3875db877c6c3ddf0"
  },
  {
    "url": "articles/index.html",
    "revision": "c9687ae93f6f9e26c5715e0bf179a5cc"
  },
  {
    "url": "assets/css/0.styles.02d32df4.css",
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
    "url": "assets/js/1.5178b8f7.js",
    "revision": "b1d5eedb6341d17cf7b55b6fb88df720"
  },
  {
    "url": "assets/js/10.48d02362.js",
    "revision": "304239a2ce7551bd501c4d6a96941df4"
  },
  {
    "url": "assets/js/11.03b9a738.js",
    "revision": "b599eabc1dac9fb78df5a5a8325be7f3"
  },
  {
    "url": "assets/js/12.6de1ad20.js",
    "revision": "ec6b784e885c990ed327e0bfca90897d"
  },
  {
    "url": "assets/js/13.fa08dbb6.js",
    "revision": "eb16be93bdf724c30455cd6618e062b9"
  },
  {
    "url": "assets/js/14.0475cc67.js",
    "revision": "927390643ee0cc10ac17f342bff4d3c1"
  },
  {
    "url": "assets/js/15.32058e49.js",
    "revision": "e1eb9a949c944def565146732722d296"
  },
  {
    "url": "assets/js/16.ab8801ca.js",
    "revision": "d1cdb27281150b2e94955a74fac48f30"
  },
  {
    "url": "assets/js/17.f017b0b0.js",
    "revision": "69e98fcb71c87a41abb940c50c899b88"
  },
  {
    "url": "assets/js/18.2033b8d6.js",
    "revision": "43541d01b624936a983e17e0db390f46"
  },
  {
    "url": "assets/js/19.30360adf.js",
    "revision": "58876d5660893baddc61bef312097f4f"
  },
  {
    "url": "assets/js/20.fe473405.js",
    "revision": "7a47bd881c77fa05430905654dbd6614"
  },
  {
    "url": "assets/js/21.03243d4a.js",
    "revision": "860ef04179a339fcb4fce6b3d0c44ead"
  },
  {
    "url": "assets/js/22.a1121168.js",
    "revision": "4e14876a40560da0500292db532f3d59"
  },
  {
    "url": "assets/js/23.f56bba34.js",
    "revision": "3e276e3d223015cad876da84542bce61"
  },
  {
    "url": "assets/js/24.d07c35c4.js",
    "revision": "5bb2feb2edb270e840b7668a3ed45034"
  },
  {
    "url": "assets/js/25.80e50225.js",
    "revision": "edce5c00c6c3c05f1ff5e266b1a53c89"
  },
  {
    "url": "assets/js/26.23532b72.js",
    "revision": "b6ec1a248edde1e91c53773258ea9b51"
  },
  {
    "url": "assets/js/27.0c4266eb.js",
    "revision": "1b5eb8fcc6fb11e57b2eb4d4e15ff85d"
  },
  {
    "url": "assets/js/28.1c22702d.js",
    "revision": "db2cf50c6d57f4e2cb718bf832e198e3"
  },
  {
    "url": "assets/js/29.42d83bce.js",
    "revision": "c6b16b3b748b25c97480dee381a23c8b"
  },
  {
    "url": "assets/js/3.e4a6e6a2.js",
    "revision": "1d776c44960bbfdda29eef88ee9dda7a"
  },
  {
    "url": "assets/js/30.0ead288a.js",
    "revision": "e5fb918bcfe361f599db367c475d9f86"
  },
  {
    "url": "assets/js/31.6a14677c.js",
    "revision": "9a275474ba9786ead223391993f3e0d5"
  },
  {
    "url": "assets/js/32.d6d21431.js",
    "revision": "c48e3b92475789a9ca19754ea680322d"
  },
  {
    "url": "assets/js/33.0a71944b.js",
    "revision": "e1052d0cabe67f9b5864a28bd75eb5f0"
  },
  {
    "url": "assets/js/34.f5591efb.js",
    "revision": "d579847fd90f6e95c21cf3145a6f35ff"
  },
  {
    "url": "assets/js/4.10b8fd3b.js",
    "revision": "0c357688d2285e0d87fe9c45b4e006b7"
  },
  {
    "url": "assets/js/5.26bce849.js",
    "revision": "a4f8508d0c013e0a936470f20e4895fd"
  },
  {
    "url": "assets/js/6.1898e69b.js",
    "revision": "f3b3e5b8708a7c8c3e7c10bcb73f5969"
  },
  {
    "url": "assets/js/7.441f4d0b.js",
    "revision": "c4539c5a4ec2200df5aacf6dc6bcab2e"
  },
  {
    "url": "assets/js/8.c4dc558d.js",
    "revision": "81c47824fe38862bf8c63caa090598b1"
  },
  {
    "url": "assets/js/9.a997d0db.js",
    "revision": "2f4fff5ed9de19acb42bd783fbec838e"
  },
  {
    "url": "assets/js/app.6acdca0f.js",
    "revision": "9df9fdc779f8ad19ab1e964a1538a2d2"
  },
  {
    "url": "categories/index.html",
    "revision": "5c115c537aaa134dace2b894ace95f42"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "1720709fb8b72bc7028f59cddc3d8725"
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
    "revision": "5e40d941602d494d23fd735c0ad1086e"
  },
  {
    "url": "tags/git/index.html",
    "revision": "e8bbcb100adea90d38144a38af891e14"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "c520f99e472c032cd7b3aafcd061c2d0"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "61d4e7978cb6d0445487d2563ef3eb03"
  },
  {
    "url": "test/index.html",
    "revision": "e54d3cc0803cbb0f39366bd3c0d07e59"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a66ab42d627ed4e1d2e47f6e7f2d640"
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
