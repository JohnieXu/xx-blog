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
    "revision": "9e3027ba954769426406a871de25e0cf"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "73625e321bff70bd44b5f5afc5567b51"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "c30bce5ba33867f0c38177a03e9f0026"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "b59f08cac7e9c0e98534a04acad01fd2"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "3970f6aad5c3b678b70458b57928a46e"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "ddaeecf2b386b8b90b21a69a406c8cd5"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "b4a1409069785b9922100dbf3780f08f"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "912b8d457e08885adb522b9e1873ee5b"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "82b11b3abcdb43aee77b527f6ef0aca2"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "675b2380d4ab7f1d2f4db613d7fddb7f"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "98b43229bf71feb2dfc89568ab07f3bd"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "e0d9750347cb238726c1c3f3f3cb82ee"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "5a9931aa5fec2279c8ad74d95367daf4"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "abfa954f25caec136792cace030d9217"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "9e726d1c6e39a20214277f6736d98425"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "df8fc1e91bacb7c6b0a5551dc4e238ed"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "dc8c1a09a104c7e4452b558aa9bc86fe"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "8a2e81a1f9abc2a36d371cf8a5c6ec43"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "2126185aeb7a74c47ee92e374a6c62d5"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "2f1cac165bab2f277a5a68d1d07ffe16"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "2ba262701cc73d7a2349a868562203e3"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "1dc2814f4351c21b66ac01bcd88b31d0"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "60190bd0ef972da7386df41dcac70855"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "2e1527ecdfb9fb12cd6c43bd7a56175c"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "bd85502de1bacb6d682fd93dc0bbf21b"
  },
  {
    "url": "articles/index.html",
    "revision": "4b98ca19e9e0ec1cc219151103bf1473"
  },
  {
    "url": "assets/css/0.styles.5937c30d.css",
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
    "url": "assets/js/1.cf573e58.js",
    "revision": "af3eaaf49e2b137f556c1ff6e3999296"
  },
  {
    "url": "assets/js/10.867a508b.js",
    "revision": "41b2a47bd0a57c954a733eb97e17a3ea"
  },
  {
    "url": "assets/js/11.6400a214.js",
    "revision": "bef2c843d820aa63931ed9ee25881a54"
  },
  {
    "url": "assets/js/12.061c66de.js",
    "revision": "ddc849102b7a6dcfb099b70b0e0cecf8"
  },
  {
    "url": "assets/js/13.edf88e99.js",
    "revision": "9313f45862963f75072f54da69a7d9c1"
  },
  {
    "url": "assets/js/14.ed3889ba.js",
    "revision": "fdcc248e8ff99490e7e62c1fd1ac1663"
  },
  {
    "url": "assets/js/15.d85f5e78.js",
    "revision": "f4f98014788ce901a3528fb62a8ad9e0"
  },
  {
    "url": "assets/js/16.9c7c78bf.js",
    "revision": "2a31c5b209ad04bd5d791e8456d7493f"
  },
  {
    "url": "assets/js/17.4d90765f.js",
    "revision": "3ce7384e3e175873a772f8912a89720c"
  },
  {
    "url": "assets/js/18.3afcf866.js",
    "revision": "d11dbc4a2033c737dc91e1094ecd9e92"
  },
  {
    "url": "assets/js/19.a8a2846e.js",
    "revision": "06b7e71d8e3efd28aef1d8e89213f8a4"
  },
  {
    "url": "assets/js/20.ec648bb4.js",
    "revision": "02868fb8906b7a84302433e6ff0dcebe"
  },
  {
    "url": "assets/js/21.d8e7c92d.js",
    "revision": "76bf53b2f612a135856edc496e99354f"
  },
  {
    "url": "assets/js/22.c4022a76.js",
    "revision": "d23f8454a42db7cefc70173fbbb74621"
  },
  {
    "url": "assets/js/23.c6047c9f.js",
    "revision": "467b75804777c0c360a8a7bf7e870fc9"
  },
  {
    "url": "assets/js/24.70c5cb3a.js",
    "revision": "db1de6fd69bcb5d22ecae09fb29b7a25"
  },
  {
    "url": "assets/js/25.d40e052d.js",
    "revision": "e05c4521c91788dd173c7d61e0bb179f"
  },
  {
    "url": "assets/js/26.594e3d87.js",
    "revision": "d732481e7ffeac305c105a285df635c5"
  },
  {
    "url": "assets/js/27.7367ea2e.js",
    "revision": "f9db448d7e66fcb2c181b60f31116244"
  },
  {
    "url": "assets/js/28.9cc6ac8d.js",
    "revision": "46816255be927c52e976a832e3d9648f"
  },
  {
    "url": "assets/js/29.d52d25ad.js",
    "revision": "68a5b0257aecb7d9f9c94f339900435d"
  },
  {
    "url": "assets/js/3.79975a6e.js",
    "revision": "bc1d133487786438424082b409bc50ba"
  },
  {
    "url": "assets/js/30.20d4f1d3.js",
    "revision": "a3603693c628eebedd44dd46bd0d3dff"
  },
  {
    "url": "assets/js/31.2a86eebb.js",
    "revision": "1592bf8cfd3e0729264a94b1ed9d823b"
  },
  {
    "url": "assets/js/32.ee00d9f0.js",
    "revision": "bbef17dd35928a95b8d04f3469564341"
  },
  {
    "url": "assets/js/33.29d8ab54.js",
    "revision": "9302fd20db669069ce96a6d2a972eaaf"
  },
  {
    "url": "assets/js/34.2ced302a.js",
    "revision": "244ab425928999da093d5105cd0f3293"
  },
  {
    "url": "assets/js/35.82712d72.js",
    "revision": "43472cba7a3d0e0872ead7bf0ac74c9f"
  },
  {
    "url": "assets/js/36.38a7f3da.js",
    "revision": "50a9b82893aba30936a4fa5526ca75ad"
  },
  {
    "url": "assets/js/37.973c6fa2.js",
    "revision": "4da27ca006f2b8d5f204aed6f9585148"
  },
  {
    "url": "assets/js/38.116f5f6d.js",
    "revision": "10d3c2f0fefe1c5903a46e039408e3d7"
  },
  {
    "url": "assets/js/4.75124156.js",
    "revision": "c7a3acc8f96510eba546543bbc5b2174"
  },
  {
    "url": "assets/js/5.2fcdae68.js",
    "revision": "abaf9cc371c1f263d986a7d6f91dcff0"
  },
  {
    "url": "assets/js/6.4749a51e.js",
    "revision": "b41f95c7d74138591f344d9a63a3226f"
  },
  {
    "url": "assets/js/7.4696740d.js",
    "revision": "a157487437f8028772d1cf2fdc2a6ab2"
  },
  {
    "url": "assets/js/8.c3beeb0a.js",
    "revision": "eaef82c3ffc0448915b4342bd47adf93"
  },
  {
    "url": "assets/js/9.5e066685.js",
    "revision": "1a0c0d9df58844e0b999f3fe2e730bca"
  },
  {
    "url": "assets/js/app.fb1086e9.js",
    "revision": "3e6c500cb4b8b020c08751ae3e6c3672"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "23566c8e8bf8fed7efc355ffd8f6a1be"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "fa8a9eb7d22e4f34ea602fba8b1acb8f"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "b50baf1c72880ee9e134dc9ce90425d2"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "97c959d274553db86bb5b2db051313a3"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "4f2c72c6dac2268f55715695823c50de"
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
    "revision": "5d9e06853bbc6bf502a1fcc56fed412b"
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
    "revision": "885837b03717033ccabe16a5375ad183"
  },
  {
    "url": "tags/git/index.html",
    "revision": "3343d4cdd12b2b14d620d5c9a7446af7"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "99dc4a01cd633f1b884826c9f976db3a"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "bde69dbe67caa9509776825d48b1c497"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "6f427ecd15f1412cdcc4db2287f91497"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "2e0c0f242c52543da98c8073be298d36"
  },
  {
    "url": "test/index.html",
    "revision": "6426eb25e1a2cc1172fc578984506f81"
  },
  {
    "url": "timeline/index.html",
    "revision": "37b76dc26d752de0a94c845f74f15f8c"
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
