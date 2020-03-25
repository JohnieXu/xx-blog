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
    "revision": "af7495e84298940b8dc26d5bef1271e5"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "3f6a2b078c5050fc1286c750725e21a6"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "499003465d5678cc30ed51a5cb826893"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "8d437bca53b632ca0f21e6fae9dbf7da"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "2ed0cda1abf5c11f8a721287b0d45cfc"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "e590e504b0d2576faf00221ea4230c47"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "711d41a15c74c97ead6cbe42efe58c05"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "96c133a0ab51afa137114084d410529c"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "cc1d831d1114969be5ea9f456d826006"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "00579f57c83c47b477231d1b84327daf"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "376d6357c777517fbc5c423d2ab4bc5b"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "a64c6b4cd4455b571afd15b383ac7ed7"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "450f7ff22a5fa862408ea33927d1077f"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "128ef237796747e653ed0cf6437d1ba0"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "69d13f83f0e61fe5882ece557af402c9"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "f05b4a6309b1599ece28971ca0771bc0"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "ee6a7914d712fffa7bacbd42a48edc0e"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "0150964bb17f23f587e444ec7a371b7b"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "11889992ed6804d66c18e15c75fb6ef0"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "c1ce2e67ec216fad19a7a0d3894941ae"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "666306e2897f99212bbd082263bd7170"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "9fb1733d9b0d3217691e2bdaefe8f2b6"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "f088d0a0000f43a2fb6fcf2c870d7dc6"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "bac2381f0125e902fdfe589fe7121bb6"
  },
  {
    "url": "articles/GO/index.html",
    "revision": "0ab0c579a4e04697e4b12c06f3b96e46"
  },
  {
    "url": "articles/index.html",
    "revision": "4446360cdd44ab0a4d92d9ff7bafa39c"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "ad8f9d614cf2ba2b1341132771a37b0d"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "e90071e4812612dc54b0d73fb032de84"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "537e017b402e3675ab3f65267f457115"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "5fffa5c03aaf41e5610744532ecf621f"
  },
  {
    "url": "assets/css/0.styles.7100df58.css",
    "revision": "d6a4bf30c9006b7f97a03e451f51e202"
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
    "url": "assets/js/11.3ebe4c15.js",
    "revision": "5b1669a0a89f0b25ab6cb9e06f4e9129"
  },
  {
    "url": "assets/js/12.106cb2a2.js",
    "revision": "76ba6bf1ce2a1b5bb0c4309f1ff8a36b"
  },
  {
    "url": "assets/js/13.db6d3f5b.js",
    "revision": "5b8c26aca65d69fd8b4e5be3d31074bc"
  },
  {
    "url": "assets/js/14.db61c49c.js",
    "revision": "c55c6fcc511cc75967cba35bec1d192e"
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
    "url": "assets/js/23.cc819cfd.js",
    "revision": "81027f8a1a63fb33604bbd95f519467b"
  },
  {
    "url": "assets/js/24.93dddc08.js",
    "revision": "8b3a1c7c9ad33f7836bd060b4ca20185"
  },
  {
    "url": "assets/js/25.798133e1.js",
    "revision": "d4ce11a3570a730decc15109ecbd33e0"
  },
  {
    "url": "assets/js/26.d6bc45bf.js",
    "revision": "58375acfe1ef19f59b3304817ed0bc1b"
  },
  {
    "url": "assets/js/27.e00cd156.js",
    "revision": "435d2052a2b590dabd0dcbe188479653"
  },
  {
    "url": "assets/js/28.f7c66334.js",
    "revision": "3ca5e209f91cf199cb3c6bc9030119c2"
  },
  {
    "url": "assets/js/29.95018992.js",
    "revision": "405aecd6b4b81c23e80aae116700313f"
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
    "url": "assets/js/31.68717fea.js",
    "revision": "926772c444979c44f511d0a746bf0648"
  },
  {
    "url": "assets/js/32.27c951ce.js",
    "revision": "db495c8dec63b16f8de213fb76edec23"
  },
  {
    "url": "assets/js/33.33efd3c5.js",
    "revision": "f7fa0549e4d8851cc01174ec35997d00"
  },
  {
    "url": "assets/js/34.e4a167c8.js",
    "revision": "ccb095a8a14ace869235ce962c8d8ead"
  },
  {
    "url": "assets/js/35.d0b3e567.js",
    "revision": "968ff3e4f183a6aa329fe8d68bc2f840"
  },
  {
    "url": "assets/js/36.c8d0c2b7.js",
    "revision": "eb64f7c130e5d0434b61086558f5e4ae"
  },
  {
    "url": "assets/js/37.d43683e0.js",
    "revision": "37b063b9f812025d54344c231efbc8dc"
  },
  {
    "url": "assets/js/38.f9042aaf.js",
    "revision": "08725c6227bfdec0401d28c4b54e446a"
  },
  {
    "url": "assets/js/39.20ca2539.js",
    "revision": "55cb24a3d4118d5b482223817536841e"
  },
  {
    "url": "assets/js/4.edd4f908.js",
    "revision": "fe6ad36e70f24023654bc8a9888ecddb"
  },
  {
    "url": "assets/js/40.15234d78.js",
    "revision": "673956251004a47763f92fbe405d4232"
  },
  {
    "url": "assets/js/41.bd599781.js",
    "revision": "e37549058e0f550a1e02344ef2d0dea7"
  },
  {
    "url": "assets/js/42.c372aeb9.js",
    "revision": "2ae894ef5b6bb37d7446c01fa2815c78"
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
    "url": "assets/js/8.bbbd9612.js",
    "revision": "06fcbfce2fa8b1041f64fb59872d7797"
  },
  {
    "url": "assets/js/9.c504dd1e.js",
    "revision": "8ff8987de3f3b5072fd28d96380d6c0d"
  },
  {
    "url": "assets/js/app.cae88f54.js",
    "revision": "78f8600eb739f64bc804ec996fd41d28"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "b0dfe46d3508d2f0bbd47e10c868577c"
  },
  {
    "url": "categories/index.html",
    "revision": "6504410cfa09320ef348adbc47393ad7"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "860a0e8f91199bd468588e3faa4c4f6c"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "4b3466cdc9df881a36a87a5496199362"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "a24dda9bd60e5188b4600f7cf9261e03"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "5acc4e327e23ac262e46dbdbecb5eeef"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "2ae4dd17f165b74bbe1bfcd2ecd3051c"
  },
  {
    "url": "home-bg.jpg",
    "revision": "987e1ea765f60015cad35bcd8e628003"
  },
  {
    "url": "home-bg2.jpg",
    "revision": "764bd226fa766c2fd531bcf24b8089e8"
  },
  {
    "url": "home-bg3.jpg",
    "revision": "2fc5b6ddd301cb381530ba4fbe76a233"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "91a1a56385cd4c324b31db188af079b0"
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
    "revision": "ab7071e597f7e818549042f35ca1563e"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2626168f7514be64e64b570e40f5ffa6"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "dfa7c686e5a3e47b3b32118190000699"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "6338f12b90b7e77aa2de234a71d85fac"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "7aa9c650e8b2a7a2e33c977fddc38797"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "f49e9c3e52a816bab15f5f9a6aa28ad2"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "d618b30a711f0942703c9c5aad7b29f0"
  },
  {
    "url": "test/index.html",
    "revision": "3d1602fbb9964984d1fff61cd52173e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "6c6ebf3dbb25d1567dbfd8df7ef56009"
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
