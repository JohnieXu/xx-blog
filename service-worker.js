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
    "revision": "abb3a923b4ddea98092199ffd8e47af1"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "45cd0ee3d1cbcb8463b1dc229e61fd76"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "0aa547222817b3d463a2791f51b8b28f"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "1246afa1520222facb95b0715ceca289"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "1ee764f37ff64c8398ca8326833759ec"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "5be9546e8d6461de5f5abb570dae31de"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "8105e062cb1731eaebc8859f24006f9c"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "2f6ff0904d0b4bbd0524342db41caed6"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "87daa166c30e3ca68c4d5a52f6fd65fd"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "d057359d7da9bb05c415d66f4b586bdc"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "f8b017fce5640b718476b4f110c8bd8e"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "2023a12ce50c156108cef0be29495462"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "8433e4580065dd6d8774d71f1b6dd7d6"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "51958d552e08dfb11381f67f851b51e3"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "84e74602c45d520753e50b9dd379a59a"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "a9cdfe115cbd9918d8653a58deaf8771"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "8f2a9675b1b517023ccb15a59ac49be5"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "5f85f138a8f2ce9b10bd2967894e1d70"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "d334e3897ce0d58c4df0e8780373a79e"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "60f503765923ebaad1e9b314d316fc6a"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "4637e1346fa6d24133d631f68dd69bc6"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "ac90ff9c7a1ba6b383ff61824ea8b12c"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "7ca6da2e19549154b3a61af63666956a"
  },
  {
    "url": "articles/index.html",
    "revision": "3cfeee504ab61ac50791f1cfe679c605"
  },
  {
    "url": "assets/css/0.styles.02d32df4.css",
    "revision": "486c3ce079e93af3b9349b2ebacec116"
  },
  {
    "url": "assets/img/00a39db2-760f-43d5-bc9f-a472c4450710.bf9f8f08.png",
    "revision": "bf9f8f08c40d687fea0452ea2f0599a2"
  },
  {
    "url": "assets/img/1521f01a-6f01-4d7e-83df-29c9682bcc57.0a426361.png",
    "revision": "0a426361b4020a6198eb3a7a9dd6367e"
  },
  {
    "url": "assets/img/3208bfb8-d96d-4e3f-bdd0-aa6d2687235d.4063c41c.png",
    "revision": "4063c41c4b9d4d4d3500e16191a8882f"
  },
  {
    "url": "assets/img/39633bfe-48f6-4b37-96b2-af9d834259e8.4b10ba69.png",
    "revision": "4b10ba6905864c015caea8574fac12d7"
  },
  {
    "url": "assets/img/3cf41362-5479-4926-afa5-eb867f07fddc.a8a9ffba.png",
    "revision": "a8a9ffba3848ae0acbaa978ffaae708c"
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
    "url": "assets/img/83b03bac-1783-42ca-aba7-35ec8952d325.327c824b.png",
    "revision": "327c824ba04df1566fd78559a35dbe43"
  },
  {
    "url": "assets/img/852cd383-a782-414c-9933-149d19db4198.6f622c11.png",
    "revision": "6f622c114611371b66f59062028cf931"
  },
  {
    "url": "assets/img/9516091f-4193-41fc-b668-a8bd5e511ffe.e4841337.png",
    "revision": "e484133749c7a553b5a2a947468b6cfb"
  },
  {
    "url": "assets/img/ac0c7e0f-57c4-4553-aaaf-f1fbe751faa0.5965d930.png",
    "revision": "5965d930814cfca4716fb9a68baf72a8"
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
    "url": "assets/js/10.cc79e04e.js",
    "revision": "de79a0ff3b040af130c058d3cfda0e91"
  },
  {
    "url": "assets/js/11.b4ef5254.js",
    "revision": "38c2077d90a4362e014430313b4f59c3"
  },
  {
    "url": "assets/js/12.5a700030.js",
    "revision": "008db7376ff2e32d3d8f1137ba449053"
  },
  {
    "url": "assets/js/13.e53cdadf.js",
    "revision": "5923a800033821ba0cb74e1121a688bb"
  },
  {
    "url": "assets/js/14.9f92ff6b.js",
    "revision": "d81ac1644699de0acf1e4aaf914a45c8"
  },
  {
    "url": "assets/js/15.ff5101d9.js",
    "revision": "915abab7e53389d4fe933c5d3152746c"
  },
  {
    "url": "assets/js/16.f2b572f4.js",
    "revision": "02d2e2e0ab5766b3094302bbccbd45a0"
  },
  {
    "url": "assets/js/17.737068ad.js",
    "revision": "17b2c063643faa5876056681d8daa88a"
  },
  {
    "url": "assets/js/18.2b7ec660.js",
    "revision": "b6e7644d2c9e7076a1bc9289e86d8688"
  },
  {
    "url": "assets/js/19.ca18b141.js",
    "revision": "ecce6ed68af155d7ca4a807bb9f8bb84"
  },
  {
    "url": "assets/js/20.29df114e.js",
    "revision": "e8d1b503060b21eb20076dd44f9cd721"
  },
  {
    "url": "assets/js/21.79530c04.js",
    "revision": "1342da25a766bc8953eef8cff46d1d14"
  },
  {
    "url": "assets/js/22.848c3949.js",
    "revision": "20c6596915f32d06db57d8bb2eaa71b0"
  },
  {
    "url": "assets/js/23.e23ead89.js",
    "revision": "4d5f449d46bae81643fb9a0231626c97"
  },
  {
    "url": "assets/js/24.1c586345.js",
    "revision": "ccb111da1aa1f8407facf7a8dd4b794c"
  },
  {
    "url": "assets/js/25.db2ec0ec.js",
    "revision": "1041cafa7f0dcfd26b402800f83dc0e1"
  },
  {
    "url": "assets/js/26.fea93292.js",
    "revision": "8e3f80ff74a5d9f00355ce488342469c"
  },
  {
    "url": "assets/js/27.196e4e81.js",
    "revision": "12335bab118c276367f6c9841a7f07a5"
  },
  {
    "url": "assets/js/28.a7a85401.js",
    "revision": "9814c737c4fd0bed64d7893ab484a70d"
  },
  {
    "url": "assets/js/29.a59aa5f5.js",
    "revision": "1f3d260828e820b5c966a09777700fac"
  },
  {
    "url": "assets/js/3.5e08ee06.js",
    "revision": "8b08a1714b514bfc43643e5a013172a4"
  },
  {
    "url": "assets/js/30.03c52e47.js",
    "revision": "ce43c4fca9062e24133b666977ae48e3"
  },
  {
    "url": "assets/js/31.732e7c8f.js",
    "revision": "552d0709dc25c04d4b1e28b6ba599ea9"
  },
  {
    "url": "assets/js/32.b838d681.js",
    "revision": "d7e2de2e0097cf4ed826c46186cc2886"
  },
  {
    "url": "assets/js/33.52ceb365.js",
    "revision": "0ff521f6d747d93d40dd949cab61598a"
  },
  {
    "url": "assets/js/34.d23e5b5f.js",
    "revision": "e6e344cf93055fd06d4677fda35b2a01"
  },
  {
    "url": "assets/js/35.7cf7d530.js",
    "revision": "7d1f5ba99a8c6142b96166706a486b7d"
  },
  {
    "url": "assets/js/36.ca0e122b.js",
    "revision": "4518bc60c77c123b385efe6fab8a3a29"
  },
  {
    "url": "assets/js/4.edd4f908.js",
    "revision": "fe6ad36e70f24023654bc8a9888ecddb"
  },
  {
    "url": "assets/js/5.eb184287.js",
    "revision": "6ac4f0c9775dc6067a5f505a478a188e"
  },
  {
    "url": "assets/js/6.282207d5.js",
    "revision": "ac50db9ebd12844363823e866360c5d7"
  },
  {
    "url": "assets/js/7.5801717f.js",
    "revision": "f4bb41255a2b7aa9baa0c31023a07794"
  },
  {
    "url": "assets/js/8.4fa2e3c3.js",
    "revision": "4a8d1e6468639f19ffdf6388f6e02792"
  },
  {
    "url": "assets/js/9.5185df19.js",
    "revision": "bd74aad55e89157bb3eba132e35a03c0"
  },
  {
    "url": "assets/js/app.f75ee131.js",
    "revision": "6fdc3456fa84ed86a116460208845aec"
  },
  {
    "url": "categories/index.html",
    "revision": "c729276d3e9229709cd8c559a0ebcd86"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "7d2ada72b4ff84fb2a0ddc382445e970"
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
    "revision": "ae0f31c7204cc0a11e1a2a0ed8452920"
  },
  {
    "url": "tags/git/index.html",
    "revision": "5051a5d3b5370cf7036f64f2f5e19d24"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "c7abd6edda12d7bf873f3e1abb38caaa"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "537d36ea28fbc906302835ca382b392d"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "f17d5549de37ed580edc994ce3f69d32"
  },
  {
    "url": "test/index.html",
    "revision": "f9e787ca51df5b2c1c0412d34236eb07"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa417c88acd2b62f00ec549256b4bbaa"
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
