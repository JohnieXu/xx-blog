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
    "revision": "6794c68d6b46c16482f58abeb6efba06"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "b56b001e17cd4897cf5ec53862250778"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "1a8c59a6651377bd84a7f5f1993e183c"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "37b86eb9faf91f67429664234003caa7"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "5c51c868fe5436e26c0bd55ce800e4f5"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "eb29505c686be63cd3fc1103f593b2b1"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "ddf854d5c0f05d6f176abca429b0f448"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "8d5fa60c1d468ceca5021a319eb3175d"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "5c1efc92303fcb60bf16b9868948b703"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "5e89f15cefba00edf8a2870a9bdfee30"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "883d61dac4abe048cc1f4844a6ebe4d1"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "8fcebc7ca877dd228fc70be1bf96f2b8"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "8cda89c0feda23a444f4713dfb1c295d"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "2724804c276b761ea7f82716becbe81b"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "58e0eb340c3e734245384a19377a5870"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "51b393a7d6c33edae4acee524f09d13b"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "2fcbd56163d629f10726c726f877e2ad"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "05ad31ded97d01f79008018d97e8b6bb"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "ff2902b2b766777c06ae0bbd4165e749"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "220ae5caf0e5fc4de619140aee2f281b"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "8ee1734d1a467de298000b7cffcf754b"
  },
  {
    "url": "articles/index.html",
    "revision": "7e8c7511c21b58316e6258a115a9efcb"
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
    "url": "assets/js/app.f7dc9806.js",
    "revision": "e71dedbc298ffbc3b436477d454516b2"
  },
  {
    "url": "categories/index.html",
    "revision": "b0aebae721b110961e0d3083771eb35a"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "75f0f93a7e2f05e0cace49cccbc34aaf"
  },
  {
    "url": "logo.png",
    "revision": "1834262abcd23fdc8e34a72bae0ccbce"
  },
  {
    "url": "tag/index.html",
    "revision": "33d8b00abfaf692ecf18ab0d23c3507a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2841207207601896778bfd8ecdb2c2d3"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "5fd7e1f0ff3f6308ce98d5014236c325"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "63f219b2a2dcb635463d4dcb62173b09"
  },
  {
    "url": "test/index.html",
    "revision": "d6e3f226267d208fde132580469f36aa"
  },
  {
    "url": "timeline/index.html",
    "revision": "2c11a8036328cfa92ab448f3dd1678fc"
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
