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
    "revision": "07e63632f125e5bf4d247db03c5a5f3e"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "5d7a4b75fc1654426af3d60e329a2b14"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "795e28bfc19cf627be4ac22fc1230c13"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "fbb3b70535f8bd7bc22b58b8fad40f0f"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "f04e2c46431c5609ac4b83d82ad12fd7"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "79a7c4b18398e218d850c3fd5be2f193"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "2e8393b8230d4634e15ac645b7a7b4c0"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "1c15bbda8328e8403416acb3b31fa760"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "9e9e7afac90b5ed9f8ff4b668faefc5a"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "540874418b6f43eed967a7519258c7c6"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "4018f168200ace871dc5b117f3e432fb"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "c12796c1a70125dc90c87f1394c9b83b"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "71039d38d35c7cbf42fb19d13a9c9849"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "8ff93dff2fd40f0dc5a457cdec1b977b"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "803fb6ae4bfbe474cd750b87727b596e"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "ac6c93ab315dc9adb4741f634461ece7"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "48301bf3f619bbeb023216325d114e35"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "7886b50329f535506903d1c0ddfb48da"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "46508f2fe92651d28c35f46ee7914793"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "513b0574af09039edd353b2835854e81"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "b63af9f70c12856a463aff5ac69f47b0"
  },
  {
    "url": "articles/index.html",
    "revision": "f864949f652fed664f09537fea5461e8"
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
    "url": "assets/js/12.e2fb5c1c.js",
    "revision": "d31fdfc5f71b55f20cecd18088f4fdda"
  },
  {
    "url": "assets/js/13.f337df60.js",
    "revision": "3e808e63001d2704ff791d39f1e24d25"
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
    "url": "assets/js/21.479301c7.js",
    "revision": "8bff1a0c57b13deb186b8046d877f290"
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
    "url": "assets/js/28.be9f6779.js",
    "revision": "872360dcc5cda7e6e25227e7b9ea0431"
  },
  {
    "url": "assets/js/29.136d65f3.js",
    "revision": "c7fe384d9dba41eea957d2d21cab18a4"
  },
  {
    "url": "assets/js/3.e4a6e6a2.js",
    "revision": "1d776c44960bbfdda29eef88ee9dda7a"
  },
  {
    "url": "assets/js/30.586be66d.js",
    "revision": "7d39b41e02af76a5245b2bd0efa6c548"
  },
  {
    "url": "assets/js/31.0e896e36.js",
    "revision": "216fe37c581781d65ce7268c76537625"
  },
  {
    "url": "assets/js/32.1a764764.js",
    "revision": "6a3975449e40507d0bfa8d504052863f"
  },
  {
    "url": "assets/js/33.979e55fc.js",
    "revision": "13e93f0478e5dc5f8d24b1565f7f4f42"
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
    "url": "assets/js/8.76e24040.js",
    "revision": "ed91a8f7feaf3510bc1d2fcb9e9580eb"
  },
  {
    "url": "assets/js/9.a997d0db.js",
    "revision": "2f4fff5ed9de19acb42bd783fbec838e"
  },
  {
    "url": "assets/js/app.72d49ffd.js",
    "revision": "911f05a9cae01161b382b6ece515f899"
  },
  {
    "url": "categories/index.html",
    "revision": "8f0cf815e0678e05b540c11c70d4a25c"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "eb881ad65aa552f2e20216414076a531"
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
    "revision": "f6bcdd04fb56b186d9b0818079012b69"
  },
  {
    "url": "tags/git/index.html",
    "revision": "fae43d54868bba8102a402a8409c5c1c"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "8774adf2a7c55c9f6d95b87319793f61"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "a8d4092dca09a99ffaaef2d36ea0096a"
  },
  {
    "url": "test/index.html",
    "revision": "9fc81f9b4f73cdc6956254e2ffca09b4"
  },
  {
    "url": "timeline/index.html",
    "revision": "7fca901c9912fa418edcf0777dcce75f"
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
