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
    "revision": "c1e5aad2c0cf07d74abf431636a76c46"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "79563e3d5ad8efcdf36ceae3e6db9894"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "87ff7cb2debce69d51e4734326a68910"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "69b745635311557da2f5409585bd804f"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "f3f0a0cd77c3f8027e554977e44bcf43"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "b972ab7f13b3b09b62f68dc525cf159e"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "fbb1f3394a46d501b88529147497b17b"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "34ddef5fa64887ec048893be1b040f2a"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "548f06b481e0ab1b73e8157b7a4ee14d"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "7eb292f82900e6d041a45c6f279a243a"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "820f480f55e7d065dcfa7f129e40fcb6"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "8b5fe4d75ef821e2a10d320683efe072"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "ccbc1954690f19892db17e89370ae598"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "a637413fd14461d8094f8dabb695f740"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "c647ef34a0a6203e0c78acc7febec15c"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "da3c54b89d726329fd2fc30b0d6f5589"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "33f2fa7c4941d6ff30c44969d9dbf365"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "cee3b9b19bb9560d0f4e6b67d8338c69"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "7215b5975f4882a2426a7396f0692d9e"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "7fb350f205c194fd8e68addd7d70e03d"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "f051b7a51f923abe6460732bc7b56dca"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "914fff36f85823c330d5188edd983515"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "1aa95f523582517970277dc0905061be"
  },
  {
    "url": "articles/index.html",
    "revision": "c240b07a98821aa380917838442bc979"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "8c24e3df2d34e281a282ffe5c721e519"
  },
  {
    "url": "assets/css/0.styles.47b9a09f.css",
    "revision": "1cce00e7f898aa335a73fc02a860aa4b"
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
    "url": "assets/js/1.089a9807.js",
    "revision": "a3fec5a07d3f13fb11906d539647b576"
  },
  {
    "url": "assets/js/10.5c4c41be.js",
    "revision": "68b323f1cce728801ea35b15b6702d49"
  },
  {
    "url": "assets/js/11.3165da73.js",
    "revision": "e72dd7513832dec82c9391db57249902"
  },
  {
    "url": "assets/js/12.606fbf04.js",
    "revision": "15e28aabb2ab46fdc403ccdded9aaf26"
  },
  {
    "url": "assets/js/13.36e065b1.js",
    "revision": "95350695e3565d3c7d65c8dc77519065"
  },
  {
    "url": "assets/js/14.874d0420.js",
    "revision": "88333dfff9b9d4bd18d361535c60b66d"
  },
  {
    "url": "assets/js/15.f4248af1.js",
    "revision": "e277fb92572ac9e14056771ca6ac86bf"
  },
  {
    "url": "assets/js/16.fc81f209.js",
    "revision": "7c68ca97395c5295e67b14dc9784e0fc"
  },
  {
    "url": "assets/js/17.6c303424.js",
    "revision": "569c476b6325034496de0c9eaff1ac96"
  },
  {
    "url": "assets/js/18.b47c5583.js",
    "revision": "ff4bc1da36ddd97867606d73690407e5"
  },
  {
    "url": "assets/js/19.676a9541.js",
    "revision": "be776f6e07c2a002096d9cedffdb66f1"
  },
  {
    "url": "assets/js/20.935c6705.js",
    "revision": "99dd0f854b8883aa8558f5f26c83a705"
  },
  {
    "url": "assets/js/21.eb8ac0c7.js",
    "revision": "77a68ea99be0a3b83067dfc02f1ee055"
  },
  {
    "url": "assets/js/22.4121a29b.js",
    "revision": "1d71851a1788326d8b7b5d04fe9871e9"
  },
  {
    "url": "assets/js/23.06ce02fd.js",
    "revision": "5bc8b0b35b2355bc778f3e133370d7ad"
  },
  {
    "url": "assets/js/24.625c5734.js",
    "revision": "9917968ce20fb35325849a18695d48bf"
  },
  {
    "url": "assets/js/25.440682c8.js",
    "revision": "26c0940efc39809e9c3554bd0e657c30"
  },
  {
    "url": "assets/js/26.1044b4f4.js",
    "revision": "7415616afb7dce011d229d88473a62dc"
  },
  {
    "url": "assets/js/27.f56b1992.js",
    "revision": "4560d2196d3a0e448468f92defcd0cb4"
  },
  {
    "url": "assets/js/28.2a5fc34b.js",
    "revision": "a7a4381000705779f1b27010e47c18a5"
  },
  {
    "url": "assets/js/29.a787bad4.js",
    "revision": "d6c01eb7e3a42d079c161d806286b1e6"
  },
  {
    "url": "assets/js/3.893ca284.js",
    "revision": "fe3340e9fbd70a11326bc89978f9c955"
  },
  {
    "url": "assets/js/30.f4a04e4e.js",
    "revision": "ee3c2212699a139100728437143b34ad"
  },
  {
    "url": "assets/js/31.80040ac4.js",
    "revision": "9edaac2996922a571aab9413ca763562"
  },
  {
    "url": "assets/js/32.67f3f950.js",
    "revision": "869736a621b87898869634eef081c56e"
  },
  {
    "url": "assets/js/33.038e48e7.js",
    "revision": "73c001b83172419a128cc6c662ae5b37"
  },
  {
    "url": "assets/js/34.40c451ac.js",
    "revision": "f455fc12bf2cf2b2100539702a104f65"
  },
  {
    "url": "assets/js/35.e5d5bc40.js",
    "revision": "448886c7049fb8e2db89b23093624c35"
  },
  {
    "url": "assets/js/36.de3c7ca5.js",
    "revision": "57fb5fa4c7c2d643ddec1565428177e6"
  },
  {
    "url": "assets/js/37.bb2f1131.js",
    "revision": "67ed4c712e424aac7fb1cd7175a6bfd8"
  },
  {
    "url": "assets/js/4.ece452b5.js",
    "revision": "94ea75955b529d20e588c6b6d46b1fcb"
  },
  {
    "url": "assets/js/5.56c4dd16.js",
    "revision": "5073fb312bfc48dc305a7ae548d048d6"
  },
  {
    "url": "assets/js/6.2cb84bd8.js",
    "revision": "c5284959bd35f8ffc82935aa04942205"
  },
  {
    "url": "assets/js/7.89d98a92.js",
    "revision": "d46b9128801b99bb0544e89766b112c2"
  },
  {
    "url": "assets/js/8.5c658f7c.js",
    "revision": "c653d8316249d616910cdfd6523be7bc"
  },
  {
    "url": "assets/js/9.c08c0316.js",
    "revision": "b1befd52f1360d21425a296ce936b355"
  },
  {
    "url": "assets/js/app.f6cf8763.js",
    "revision": "40df079b83fc450e7f03dc566dc1fecf"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "c7802296e4ae2038e5d67b7134149623"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "757fde84a1026902d9be70f7b61b6887"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "dc70258cc719158e9c819f424575002d"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "3b07001eec368dd8ef7d41e22ba25f39"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "062b6f801917ca92212010353c9cdae8"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "78c0a4ce7253a4f801ab54a32500ac6f"
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
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "3e5456304b2d3adc26a4eb47f77d62bd"
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
    "revision": "540114f1da22dd91df12ae7321036333"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c62a2b8e5adbea2f830c39c5487655e7"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "8adea815bca662daa39f82de52643a11"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "a0855644dd537b00f2bb0a86fb2aac48"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "1bf8729082336a2d0f486dde30acacf9"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "657656cf30228f09506da62f740ae1a3"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "7a5dda8a0f6466e3b7cab31dedeffc59"
  },
  {
    "url": "test/index.html",
    "revision": "2d8326b662174d825492d52d91efa667"
  },
  {
    "url": "timeline/index.html",
    "revision": "a00431cfbcbf63a54ecd594acad09f76"
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
