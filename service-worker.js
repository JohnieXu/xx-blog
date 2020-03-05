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
    "revision": "3ee4d8636cd7b1ddf58485674402ad89"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "f6458bbdd14c4bff953e386ddb1c8f8e"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "778c6c17df50e7bf64187cb3adb641e3"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "379584f6c777b236bd77f769e306cb79"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "691b307a3c630b840a45b46c69018aa5"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "c8281563441de1fd03045be7102152d3"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "825ae744888688c9f1947c6985df459b"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "92cfccc288aeb94a200c3e3260c99512"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "fa5bf5441ccfc2cfd14c3b84b0e7896f"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "ce9eef9fa13774c4e730bc3a4be47dc1"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "64035012ea3dcadd8475068790b36868"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "d23750bc24b27bdb60a47a9a5954ce8b"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "4ad1275c6556d0ec60d60ffda78e3d75"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "fe7d7e66bf51e73ee596c0ec1f05fe4e"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "f75b0fe674142d0ff5431d621120a7d9"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "833c3ff396deb7cd06c8a43a766e6526"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "538f34e3ab0229311bf64f301733489b"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "39256d24610be618ca670ca5cf949150"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "1df8e2508168c4b15ded703a10811161"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "bb6267781d61cda87b8951362db2c1bb"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "d6898ac0ce3df504ecac8dfc00198c4e"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "f49e9cb506c7a364e10ae172cb2a2607"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "11da37a5e93243e234d0a8e602cbf664"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "6faeb46ce51ecd797af87152c1dc0bfe"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "a75668739b70b5d89823b899ed9b1f2b"
  },
  {
    "url": "articles/index.html",
    "revision": "a7cd6543cba4a25ae80a10c82facfc30"
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
    "url": "assets/js/app.b7e0eb6a.js",
    "revision": "f34dd84d03227645bc8403dea676df9f"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "1e58539f0600bc9a9a2a718beaa0c734"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "c6e05a11d4262527b8fd3668884ab87a"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "be0f3a4624fed0ffa3ea445f2a300e67"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "f20df6d479b4ed28bef810a1fa05b7f7"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "db0fb364a1548006dde8b9f6d2d095f0"
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
    "revision": "8f9bf2d36c48bf922024719840841ab6"
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
    "revision": "8e3395f4262f607c80a5b8b84e661e51"
  },
  {
    "url": "tags/git/index.html",
    "revision": "4d44310eb634d2a652cb5d6155b446ed"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "29a7e47e8a306ebe50c12b1ba9c87abb"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "6d4880d1c036ace93d0428d948f30c4d"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "7d68e99a18cc53eae93aff2a91f3676b"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "2c7ca34be418bf359fde518f4fb247e0"
  },
  {
    "url": "test/index.html",
    "revision": "d24f074178307b10fec7d3f8f8424894"
  },
  {
    "url": "timeline/index.html",
    "revision": "3f64400a4bbd42ec0f8b9da44e673b60"
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
