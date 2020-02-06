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
    "revision": "9c7590327093e72127bb26560824488f"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "09d47864bc186404515dc71657db55e2"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "74650049161e63ae21c03a8d6b1ff713"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "72754f5780fc6b17c846c9504fca0b06"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "ab6f8de54bf34d49b48756bfbd26b0e6"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "bbc5d56f997dd172e2d5fbe46513bbe6"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "4f97b119bc4a499b3bb7483181ecd139"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "807d3008cde2cce861cc54f0c4c85bd9"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "657db86ddc140fd80a406a00bdb7cc02"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "2fdea87b8f842a120a5488ad379e3877"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "a3298d32d03f1ff6ba0ace4f7799a500"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "e891c9e9967c07d766bee4356d1726f2"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "6a6dddfc38297e31d5fb76ee7400077a"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "43e2f08056d88e25246d473844f4ebe4"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "2e9f443fadb99e762bee314ca37a38a3"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "e84c038fec2d66fedc467ebf4f78dc66"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "d7c77da5d994a0d076f34d430ff97a7e"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "3b2f943c85e03db23aac064391190e4e"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "8f456f022f5feaa6390bcee18d2fbc15"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "c254b555f58c6d1ef031df2d8f6901da"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "8c80ec281734ba195ec11a661fa28e23"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "690522bb194c2188a8a1f39df3fa544e"
  },
  {
    "url": "articles/index.html",
    "revision": "b8b9a807db6cc911a59b3b5641146cbd"
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
    "url": "assets/js/1.8f60633c.js",
    "revision": "598157f6851ea72557a5687bf3764320"
  },
  {
    "url": "assets/js/10.4b366999.js",
    "revision": "0efc7b89fbd34c1586535783d2c07651"
  },
  {
    "url": "assets/js/11.a2aa91bd.js",
    "revision": "f70b40246e3d6c078f1dd45a7458ba14"
  },
  {
    "url": "assets/js/12.a0b5018a.js",
    "revision": "4dcd3b6ca935f85643b28e2d72c8c98c"
  },
  {
    "url": "assets/js/13.7300fa9c.js",
    "revision": "1fa80742f843fdfa68891822d08cf759"
  },
  {
    "url": "assets/js/14.569c9169.js",
    "revision": "1be503ee231006e0c0501e92536bf89f"
  },
  {
    "url": "assets/js/15.562dd869.js",
    "revision": "744197f000946df727e678fd4c8b9086"
  },
  {
    "url": "assets/js/16.aa251319.js",
    "revision": "59c5f4d9b5fc83f05e931260ee331bfc"
  },
  {
    "url": "assets/js/17.73cd44e3.js",
    "revision": "43d5e66ab609612bc03f6cca8e4dd4df"
  },
  {
    "url": "assets/js/18.d7c981f4.js",
    "revision": "f1b21b686cb2e2f15d3eb048e00875f8"
  },
  {
    "url": "assets/js/19.2ae5a45b.js",
    "revision": "8943ffa19477120d5181477c4aaeea3d"
  },
  {
    "url": "assets/js/20.c067af88.js",
    "revision": "d1ddc338d87bb7f58d77e76243f1a092"
  },
  {
    "url": "assets/js/21.70ecec91.js",
    "revision": "291d079fa618d3718e4ef766178629c0"
  },
  {
    "url": "assets/js/22.8edb4e61.js",
    "revision": "f129f9a6c140bf1d6fdd28e07aa8b05d"
  },
  {
    "url": "assets/js/23.508c8def.js",
    "revision": "f057a3f93c362a4dd6b0c19108f4dc61"
  },
  {
    "url": "assets/js/24.e68e4cec.js",
    "revision": "a3063558e9afe812342413a1ed4a3f38"
  },
  {
    "url": "assets/js/25.7250f361.js",
    "revision": "792ed337cd1f617b35ebbdfff4b865f4"
  },
  {
    "url": "assets/js/26.8d22ecf7.js",
    "revision": "6b640a972168884fe6bcdf5986ba7c93"
  },
  {
    "url": "assets/js/27.a6cb38e7.js",
    "revision": "f60d567ca03bd9c217b78f67bd1d468a"
  },
  {
    "url": "assets/js/28.516c60b2.js",
    "revision": "f79e46ab62dfe16fd57fefb71e424586"
  },
  {
    "url": "assets/js/29.fadbdda8.js",
    "revision": "c55cf5114a7e7ebaa55da26ee0ef3ccb"
  },
  {
    "url": "assets/js/3.1761b2a4.js",
    "revision": "afcd107e74161a77c4f12a02e6c42404"
  },
  {
    "url": "assets/js/30.b16c9c25.js",
    "revision": "268bf17018add1e5fc822b8eb0d85cb8"
  },
  {
    "url": "assets/js/31.3959ffdb.js",
    "revision": "1c63247825d29b9e8df32550981b8d17"
  },
  {
    "url": "assets/js/32.23456bf8.js",
    "revision": "8c44e8b225c99c651bf520f53c869e5e"
  },
  {
    "url": "assets/js/33.2010013b.js",
    "revision": "2fed914e716a6c8786d3e65d2be428a1"
  },
  {
    "url": "assets/js/34.33ac3cd2.js",
    "revision": "10f70e91c97d63d0c303c8ab037f50cd"
  },
  {
    "url": "assets/js/35.aba9590b.js",
    "revision": "004a96ce445b3a4e4ac3b1d91ef61eb5"
  },
  {
    "url": "assets/js/4.daeac44d.js",
    "revision": "0e832bcb3b9c9a89c2c8e4f9461b1691"
  },
  {
    "url": "assets/js/5.6dd2b7f0.js",
    "revision": "30ae42bd8e9a8254b0a23d57a53cb95d"
  },
  {
    "url": "assets/js/6.1898e69b.js",
    "revision": "f3b3e5b8708a7c8c3e7c10bcb73f5969"
  },
  {
    "url": "assets/js/7.bb9c621a.js",
    "revision": "832234aab3d07b007db6989f045199ab"
  },
  {
    "url": "assets/js/8.9b5800b6.js",
    "revision": "85e6b8668dfec2435812ddc4cd0831c4"
  },
  {
    "url": "assets/js/9.dc8e7ae9.js",
    "revision": "5be6b485b65b59c686a593540f3a6583"
  },
  {
    "url": "assets/js/app.3afef32b.js",
    "revision": "96cf673a544350fa1db11c4ca5742c53"
  },
  {
    "url": "categories/index.html",
    "revision": "b4cf406a46aed8c4c0b94908689d098f"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "7d2f2a2ac81ee5c516cb9371581a2021"
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
    "revision": "4718f9d53c536ff74a5e21300236e0a9"
  },
  {
    "url": "tags/git/index.html",
    "revision": "e572a28fba0aa51f92977e20e8690a21"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "a6fe840bda5d0c98b9cfce8e574b407c"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "62d0a8715120f63718506feb47d1070a"
  },
  {
    "url": "test/index.html",
    "revision": "a34fc3b1dfe3cc9bae474c408a840999"
  },
  {
    "url": "timeline/index.html",
    "revision": "7f7ab343fddc1f4181ca7d282043e789"
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
