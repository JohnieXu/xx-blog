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
    "revision": "5160ecb81462183bce1b13284ec51866"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "667f0bd3fb3f03df3180a105e98c352a"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "7960739e470dcfffb667fcd1794ca597"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "bfd6daf3577c2137380a60752ca5df00"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "f31c33ea16dce73f8dc2c50e80d658c5"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "2a666666d917c91179405d652602acbc"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "ff94f30946bf605602667bd2fad5e8ec"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "205e1aee8e4cd72e40c961ec86ba0359"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "9acc97cb7d09954ea27753adbdece8cb"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "9976b064626e4aa97dd252b0a914794b"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "c60c37fa20f54a915ace3ee411f275c4"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "8f173f9ff0cf0dfdec16ec59eb75bf85"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "8880acf642bc5405c2c0126c0a3592fa"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "b5fd3ba2e9f50452fc2ac71f2d9c4a3c"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "8d426db556826740dfdb1545986d5815"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "2780b414c53d741cb6090875a948b80f"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "176185281cba3bbe283c38f695929c10"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "1b9cc1a653d1c59ad1357b16be523ffd"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "c2ad997712a754dc588e9dec094a6ec0"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "213c99ecca6b74d71908a64272f5b77f"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "935913169ce9c86235f4f07a80e89e1b"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "71f9de60a4ae6fcbca526cea3a13aac7"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "73ddfa185216120939d8d890f55c71ef"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "ca6dd5dfae03fc89ab7f23794957e7dc"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "8e3c71dc1abb8fbf029d5694dbb3ffe4"
  },
  {
    "url": "articles/index.html",
    "revision": "59099092a888ede1264ecb6bf41755f1"
  },
  {
    "url": "assets/css/0.styles.5175eca1.css",
    "revision": "fed1b9ce0087c08f659e97e3d322f109"
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
    "url": "assets/js/11.6400a214.js",
    "revision": "bef2c843d820aa63931ed9ee25881a54"
  },
  {
    "url": "assets/js/12.6390b522.js",
    "revision": "f127bb3c70a7bf380556e870d7abbb28"
  },
  {
    "url": "assets/js/13.952627aa.js",
    "revision": "20d6c804c849e76440fcae61efbfae23"
  },
  {
    "url": "assets/js/14.80abcd9a.js",
    "revision": "7912f0e5630f9247880ea3cc6182a808"
  },
  {
    "url": "assets/js/15.80d18ded.js",
    "revision": "0a3417f200a499a153d5fb1e4f88f09e"
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
    "url": "assets/js/23.5d21dbea.js",
    "revision": "6d9f17c920e307a577f7a1a36f95c6b9"
  },
  {
    "url": "assets/js/24.54c3e450.js",
    "revision": "f5fa37c84753993d82617094aee0b4a7"
  },
  {
    "url": "assets/js/25.c38285e9.js",
    "revision": "e21c1d40f3eea4f037eb6c2567e897f5"
  },
  {
    "url": "assets/js/26.5051d7f2.js",
    "revision": "5147ae2c48d8c1ce0c8c1fcae2949c0f"
  },
  {
    "url": "assets/js/27.b62f3f29.js",
    "revision": "1c987b69cced7df459acb93fef0d1551"
  },
  {
    "url": "assets/js/28.36c7488c.js",
    "revision": "6d73cb7eb7e2c1fbb24542474b74f391"
  },
  {
    "url": "assets/js/29.d9b63768.js",
    "revision": "413779879d0c42362cbfdfa80afecf50"
  },
  {
    "url": "assets/js/3.5e08ee06.js",
    "revision": "8b08a1714b514bfc43643e5a013172a4"
  },
  {
    "url": "assets/js/30.25d9aeec.js",
    "revision": "498768f116c87ff4e80930601f852723"
  },
  {
    "url": "assets/js/31.9d0e686d.js",
    "revision": "c410b74507cb1dff72a6d41cf0ce0891"
  },
  {
    "url": "assets/js/32.a85f238a.js",
    "revision": "50e0a18ff967aeb9b9f71f3765fac7eb"
  },
  {
    "url": "assets/js/33.daec06ac.js",
    "revision": "7d73bad56bb80ec7f4d6130f463728b8"
  },
  {
    "url": "assets/js/34.0ee3792d.js",
    "revision": "53fc3bb65a7b8e525e1fa3817a9feb5f"
  },
  {
    "url": "assets/js/35.2f453f2a.js",
    "revision": "c8f511bdfb3123f90458f835169b1e38"
  },
  {
    "url": "assets/js/36.2e01727f.js",
    "revision": "e75978d41956de9dcd2d89f70d18f83a"
  },
  {
    "url": "assets/js/37.8c91257e.js",
    "revision": "2ebb1aa09abcc23c53999f687a9ea6b8"
  },
  {
    "url": "assets/js/38.116f5f6d.js",
    "revision": "10d3c2f0fefe1c5903a46e039408e3d7"
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
    "url": "assets/js/8.da3b749d.js",
    "revision": "7a6aa0390520c7ab4ebb31369a091e6c"
  },
  {
    "url": "assets/js/9.33a037fd.js",
    "revision": "739dc2a57e36956bbf6d2afbf94cef23"
  },
  {
    "url": "assets/js/app.99603a45.js",
    "revision": "cd9fbd96e690fb41e8f50eed5a42d6dc"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "a1839e79bdc536c5bb415ac8692d5cac"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "bdaa475066205665cdb86e5bd3b0921b"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "589d8b9b02e85e937776b72e311d8be2"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "4ebdcc4158b2bb89cdc14b38ea34b71f"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "6b0d37375da47cd56407c41cc2afe3ce"
  },
  {
    "url": "home-bg.png",
    "revision": "987e1ea765f60015cad35bcd8e628003"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "63313c42e9d0c3d99f98c9f0b06c1e18"
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
    "revision": "fae87a433060ff3182cf343ecb73f644"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d021e412b1b6d1d19a2b0b42c08eb665"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "103140bf7870f520233aa8e15d1ef891"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "cdbccdbf5ffa71dd73e5a07fb40a8118"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "34c6b82179b3a3c3bf9eeb40758923ed"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "de5a6724d971e84da130343c747eca7a"
  },
  {
    "url": "test/index.html",
    "revision": "b211936af283c7c08dc5b7fc31be2f63"
  },
  {
    "url": "timeline/index.html",
    "revision": "d39208520deb66ede85d2df5f6ded260"
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
