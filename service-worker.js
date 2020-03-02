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
    "revision": "e28a6f0fba8b3e052241e6deb8fc1003"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "9d8495eaffa694b627dac9ee6cace296"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "57dfc99a11af8df1d1946e469054ca3f"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "1159c54475c0e7d7c7330b52443ef747"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "2b31c82b2c733c79c0cc2d3c9b1b18a1"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "9c58fcbfe50e20263f4ee8295a6fc9f4"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "3bc8fb3b33f5f0da857495e7d6a250f5"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "50f7bcb5c0dcbf033f9dda1b91e0bc1b"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "04c86665ee80455a025da53bd7800d59"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "ca6eb671d50f82fe7c878c412ee4e16c"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "38690b8f5875f2cfb652c4d0234c0c13"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "c8672b29cd382b69868c1fa0ec476f2f"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "a03c994d7f50decc4b34e54fb1ece3bd"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "d3ac084e85ef784fbf75b71e25cc6eb2"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "800c7c416f0f373965c28838eae74f69"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "b533263f3579355d056c425a1abbb6ad"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "589a155ab6305e8fd2c71456196590ac"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "ff631e7889f43886d5ad699af57a3c9a"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "41b9634fcdd0b874e869baff5416465f"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "efec2bfc6e94eed049b89d814ac683ea"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "7d5df2098dcac7596276a3a083465009"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "88a49092b128f271d310e2c49c4cd876"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "f53ddbcae1d87e65b20ca648564c0432"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "67d0cb32a9728347cf68d7df714364cb"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "e8f8045f06cef8b54c4883f72def645d"
  },
  {
    "url": "articles/index.html",
    "revision": "3b08c432b3972f9e9580cee8fbe88370"
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
    "url": "assets/js/14.12257567.js",
    "revision": "5de5f1956fd12a4481d73bdaf0bde98f"
  },
  {
    "url": "assets/js/15.8e4f4ec9.js",
    "revision": "318b2df361a2645550a0cffa88ed7ffd"
  },
  {
    "url": "assets/js/16.e0fdc705.js",
    "revision": "826dace70b76020b690706a1a1cb72ab"
  },
  {
    "url": "assets/js/17.4d90765f.js",
    "revision": "3ce7384e3e175873a772f8912a89720c"
  },
  {
    "url": "assets/js/18.92aca61a.js",
    "revision": "d60b5ea0a3cca0e42a953dacff208211"
  },
  {
    "url": "assets/js/19.48f53a8d.js",
    "revision": "dc50d80015b3fdc205c0e574b6644da5"
  },
  {
    "url": "assets/js/20.49a220d5.js",
    "revision": "2e5216a3c1d8f768b3a577a49efe48f7"
  },
  {
    "url": "assets/js/21.b3c64ef0.js",
    "revision": "54aedaad3cf4eb1a595b8ca81538cc20"
  },
  {
    "url": "assets/js/22.39b3cdec.js",
    "revision": "f20a912a41045adbddc2a8619d8f8da7"
  },
  {
    "url": "assets/js/23.2bb47531.js",
    "revision": "2864e684497a4e6c86926cc3dbdc45d5"
  },
  {
    "url": "assets/js/24.45729d1a.js",
    "revision": "32d9612c74416bb41ca0c66d34628875"
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
    "url": "assets/js/27.2a3d4418.js",
    "revision": "0d0291467b1c4e2d13546582c53bc5d3"
  },
  {
    "url": "assets/js/28.68ecdc9e.js",
    "revision": "1618552042dc92dde72f89902670796e"
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
    "url": "assets/js/30.e3eac01a.js",
    "revision": "6ddb26d7268ac314ea3ba6430ed8b754"
  },
  {
    "url": "assets/js/31.e31aa464.js",
    "revision": "617f0aee949343d983192f9b4cb7cc5d"
  },
  {
    "url": "assets/js/32.ee00d9f0.js",
    "revision": "bbef17dd35928a95b8d04f3469564341"
  },
  {
    "url": "assets/js/33.5f1030d0.js",
    "revision": "5babd46a4c8b93908b66482bea994da2"
  },
  {
    "url": "assets/js/34.10fc92c5.js",
    "revision": "1559bbda359cfeebdd979c2fe0f22e20"
  },
  {
    "url": "assets/js/35.5d1ff1a7.js",
    "revision": "19d880ebab9bd598b028668295d8e252"
  },
  {
    "url": "assets/js/36.d4c89231.js",
    "revision": "e26a1614aa853e8b163fc1b0459bcb33"
  },
  {
    "url": "assets/js/37.3b80953e.js",
    "revision": "59d4fb69069b2f439cf5e699e951e49e"
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
    "url": "assets/js/9.29fc179f.js",
    "revision": "790434366b08b5837965f3e0d7b54475"
  },
  {
    "url": "assets/js/app.fcd9cf51.js",
    "revision": "d727c9aceeadba1a24b9582b2929520f"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "bc6c3401decd66f3f67318639b2cbc1b"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "422908ee9dfc2b34479ac02283ba15b3"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "5ec2e423005a7484540afc797c8c840f"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "fa79a3906ed1ecb2a1911b6bd7481416"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "a2369a2b600952d539ffa9d44d4bebbb"
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
    "revision": "f3b73cdb60ac5eba94b27606e687dcbc"
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
    "revision": "857672e5f38d77ef7fc2846d7cee49e6"
  },
  {
    "url": "tags/git/index.html",
    "revision": "fd0e0237afbac9cce45cd32d2d105d29"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "f7d335f2c679f50645a8c55093f1cadb"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "b15d287c65ec18bd2ea83c2bd0360c65"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "da5e2a1cd2675f1598dc3321165fda05"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "f0691fd1ac6877ddfd2d7ac26ada4820"
  },
  {
    "url": "test/index.html",
    "revision": "77a77e46d252fbd0e255ea82b5870e39"
  },
  {
    "url": "timeline/index.html",
    "revision": "de7f502103d56c4fac376b04d06ad879"
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
