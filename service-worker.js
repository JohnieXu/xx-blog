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
    "revision": "c3970f2b888d91336275258a415c493c"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "8a4250476bacf995466dcb38ca587b1f"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "81e9ab6fbb5ed6a77266b317a881c8da"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "a8e9049501ee566adc6ae55011944e38"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "6cfb1950d9f69ddd8459510645df72b4"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "2c2dca51058eccbaf3bce1bec391303c"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "d9b014d58396093f1b3a8cb17cd8ef0b"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "9b48da6496e2ba98afb537ba76dc68f6"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "765b6d172f123f841821f68479552583"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "b15787a4c78049ec9b97dc72e95aa253"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "0b43c2608eed3caefed1954209b2a88c"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "7262895f735dd953401598eeb39031c4"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "020c524cb442bc262e5c4837ffc7caf8"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "98c4693e3ef3576ef668b54a05f24b85"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "df06dc1bc75c447192a8b02508e4c24e"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "c91c2abe917b1c5e597d23cab795ad14"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "233d73fcd05aef4be95e00d5caaff9dc"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "3e97dfab6ea37ac34928d4ef87f7cb93"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "fca6eb6b8a513590fe96af087a811c2d"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "83d435ece325811d792ceced6104f7d6"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "5a91eabf39559c253f9b42a1ea18e8a7"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "9714a61a8c523b477f49635871d6cb68"
  },
  {
    "url": "articles/index.html",
    "revision": "bca5ffc117fe7f2e7b1145c28e534317"
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
    "url": "assets/img/7dd6b400-44bb-4d92-9d1f-e040c0a4a16c.d3faa999.png",
    "revision": "d3faa9991d39f04bd8f76171d571c8b0"
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
    "url": "assets/js/10.4b366999.js",
    "revision": "0efc7b89fbd34c1586535783d2c07651"
  },
  {
    "url": "assets/js/11.dc005a7c.js",
    "revision": "3969b023a05905ad63b09c7bb13d6648"
  },
  {
    "url": "assets/js/12.6de1ad20.js",
    "revision": "ec6b784e885c990ed327e0bfca90897d"
  },
  {
    "url": "assets/js/13.1d01b91a.js",
    "revision": "b7053b48bff58ee276d9b8b3c50b6149"
  },
  {
    "url": "assets/js/14.aa87096a.js",
    "revision": "9118a1b4afdd2f3d6b9024b404667d83"
  },
  {
    "url": "assets/js/15.6939ce27.js",
    "revision": "730e6c751aa17dd5d96cd5bf6994f012"
  },
  {
    "url": "assets/js/16.e92745ff.js",
    "revision": "44e3d0b640e3724fa951db5d0f3eb5c2"
  },
  {
    "url": "assets/js/17.5637a502.js",
    "revision": "29dacf53a42dfa9f5b456ee00e4585a5"
  },
  {
    "url": "assets/js/18.16a24e5e.js",
    "revision": "888386cd0e53c0a29b1d548ebc953bf7"
  },
  {
    "url": "assets/js/19.ee567e41.js",
    "revision": "1afb4ea89b70210f36114222113e232f"
  },
  {
    "url": "assets/js/20.6561fa68.js",
    "revision": "c8a0114be5253385a6fa95da6be2552d"
  },
  {
    "url": "assets/js/21.65450aa7.js",
    "revision": "40944d53dcefd6a740b4463e626a3699"
  },
  {
    "url": "assets/js/22.30bc43b5.js",
    "revision": "bb7d6ce10342052548973b866b2aebee"
  },
  {
    "url": "assets/js/23.589dbb61.js",
    "revision": "74d830aa7bc59507fe28b14ff657a860"
  },
  {
    "url": "assets/js/24.e07c8761.js",
    "revision": "87cc55d572bf7aba95cac7d18002fb7d"
  },
  {
    "url": "assets/js/25.c2380a83.js",
    "revision": "bf42f1a57f1172574fa19c6c1846271e"
  },
  {
    "url": "assets/js/26.7f4a8476.js",
    "revision": "3491319a145bb990cb294d73d121c761"
  },
  {
    "url": "assets/js/27.3c63676a.js",
    "revision": "6fbb3dc28969605ab59101c2f7b35214"
  },
  {
    "url": "assets/js/28.18696094.js",
    "revision": "0ed0fcf7aeac873aa3958a8fb24069d2"
  },
  {
    "url": "assets/js/29.2878862d.js",
    "revision": "ec6b328b87769d6bfd1f1f96c2078a4b"
  },
  {
    "url": "assets/js/3.05953309.js",
    "revision": "4c85421a934f7704a1cdd7dfb46e95b0"
  },
  {
    "url": "assets/js/30.d8d02be3.js",
    "revision": "56676b2e7ef12e3a954cb5e418582a43"
  },
  {
    "url": "assets/js/31.7791573b.js",
    "revision": "3305705484f8d9fcbb4d8974901861ba"
  },
  {
    "url": "assets/js/32.b676ff21.js",
    "revision": "aca255bc8dcaae61c7497c75a43e0951"
  },
  {
    "url": "assets/js/33.6f24957e.js",
    "revision": "3ede7a08951be5924c4a8baabbf8f68b"
  },
  {
    "url": "assets/js/34.ac9a8277.js",
    "revision": "87eddb2b4a561c4e779df4d38d3bfb90"
  },
  {
    "url": "assets/js/35.aba9590b.js",
    "revision": "004a96ce445b3a4e4ac3b1d91ef61eb5"
  },
  {
    "url": "assets/js/4.9e6aa354.js",
    "revision": "554894b6dc7350ae9b9cf95ca661058f"
  },
  {
    "url": "assets/js/5.5761d7a4.js",
    "revision": "30ae42bd8e9a8254b0a23d57a53cb95d"
  },
  {
    "url": "assets/js/6.2f5c74a3.js",
    "revision": "54001a07648e1c0fa836f44e016e5a16"
  },
  {
    "url": "assets/js/7.5a82f6d1.js",
    "revision": "56c73e51c03815e83da5ac81830333b1"
  },
  {
    "url": "assets/js/8.7896f458.js",
    "revision": "f07e8d17e3dea8928a661a26266d54ba"
  },
  {
    "url": "assets/js/9.b47b3e2c.js",
    "revision": "6c90e9fef71e2a82dd35871775005882"
  },
  {
    "url": "assets/js/app.d49c469d.js",
    "revision": "3f3d352e6b583a2b8bf9efb519f8d754"
  },
  {
    "url": "categories/index.html",
    "revision": "2ab5a42806d9d171ff6d58036ac5a260"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "ec46d415dc0f47221277bd7711030c2d"
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
    "revision": "a7d3357bf497c1b4aa982df7d84ff3aa"
  },
  {
    "url": "tags/git/index.html",
    "revision": "699caa253b1e310f6e3936f6e16adbe8"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "0086a43eac3ab47c4387b8fbdadd9a98"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "587491b05f2a5ade3ad1d1b57b970921"
  },
  {
    "url": "test/index.html",
    "revision": "9a928c2b85c0ecc8e71d915fe8d7e700"
  },
  {
    "url": "timeline/index.html",
    "revision": "3944878c7d7724310485206a942254a1"
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
