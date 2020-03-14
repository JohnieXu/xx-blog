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
    "revision": "5d960cea39c730e0a26251fd10b8f368"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "554dc07bbbca6b6daf8e08abb77a1745"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "52e21ddb7bc76c07056f9d9cebcfa695"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "849d4109e058f9db55eb5cde8b1d2b1c"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "842072cfc440a914679ac0faaf65951d"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "6463cd10134eb20aee469d9ce8fb56ee"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "ad17217bf49d160290ad93ccc8835bd3"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "be9cf8c6d6043f9f743f015f6603492f"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "0b339488114da11747769b994e1811a6"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "1a5215b308d61ab30bb7e7ec03ed8af2"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "cde20b0af80559b75c8942c3f7ad9480"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "35bf92b11c2a80b15bc252099e445f3c"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "ccdf43b5016132895ddb75664e51e3f0"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "262099cd274410424abcb329d433c299"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "dc5532865feea735ce5f8a3c3f4182f1"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "c5d607a3e03d9707f36d5a8886f74ea5"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "4588a3142df351d1c80c9a0df1ba194f"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "2270e588af3643323c8a4230dbdf7e81"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "744168c45636d505ec6b24dfdd7151da"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "5cb17792be57c65b6d3ef8e050f798cd"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "e69f522444a009fc3c0b9d091f06486a"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "0f0361af3a831ae01e07632e5682a03d"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "9642ee794de462b3994597da6650590e"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "5bd6b63e402534ba15196d4e763a9763"
  },
  {
    "url": "articles/index.html",
    "revision": "2943b9cc1de1a8d17f48b6ace44a7b80"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "e0eae73ecddd24e3464180dcbf434860"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "6366551e1dba1cf5efee74692368b4e2"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "81180bba710dd51882374eaf68e1538b"
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
    "url": "assets/js/1.4caedbc5.js",
    "revision": "55643be070adb6d3a00a1b58bb4a1451"
  },
  {
    "url": "assets/js/10.f73a57ef.js",
    "revision": "4d4df32634eb55fa322d15289f92af41"
  },
  {
    "url": "assets/js/11.3165da73.js",
    "revision": "e72dd7513832dec82c9391db57249902"
  },
  {
    "url": "assets/js/12.a7585fd8.js",
    "revision": "debd37fb0b0f2cd6fbb7d613f909af5e"
  },
  {
    "url": "assets/js/13.16abeba6.js",
    "revision": "5477648b6e6c5b28c07f63e4ee6f2e54"
  },
  {
    "url": "assets/js/14.9e783175.js",
    "revision": "e2d558bb47127dad8f5557bf3f8f24c1"
  },
  {
    "url": "assets/js/15.e16b321d.js",
    "revision": "2a5290d8383c3454820bd9cba679d97c"
  },
  {
    "url": "assets/js/16.6446fba1.js",
    "revision": "95685a50830b0c6ea352848c32607db3"
  },
  {
    "url": "assets/js/17.18276f23.js",
    "revision": "85f760faa7a357c4d71d7bd4b92ece55"
  },
  {
    "url": "assets/js/18.0655b611.js",
    "revision": "38e16ab39c5e85d9dbd0774965cd6b8b"
  },
  {
    "url": "assets/js/19.81d81e5f.js",
    "revision": "a66daf105c418a5172df5420329fe3b3"
  },
  {
    "url": "assets/js/20.079d4479.js",
    "revision": "153ffefd367cfe99d1e7e2b43ae69483"
  },
  {
    "url": "assets/js/21.9d2878e5.js",
    "revision": "30afa62184eea8cc8393334b50c8dea7"
  },
  {
    "url": "assets/js/22.7f729023.js",
    "revision": "e798b4db13e7f36cb2cc1ad1369c2a00"
  },
  {
    "url": "assets/js/23.2276bf10.js",
    "revision": "0ea36b3111fa715b5b92a51a612ca345"
  },
  {
    "url": "assets/js/24.0eea8c5b.js",
    "revision": "b98051c8c1e2710664d08e380c0fa7b6"
  },
  {
    "url": "assets/js/25.57717670.js",
    "revision": "a17d81ef7cd8500f0b1c9f2fb7c705d5"
  },
  {
    "url": "assets/js/26.a20fffeb.js",
    "revision": "6b35650ebacfcfc40fd063f173e07d51"
  },
  {
    "url": "assets/js/27.af45e691.js",
    "revision": "bd7dd4ba73341371cfa8340914c03895"
  },
  {
    "url": "assets/js/28.2c6ff889.js",
    "revision": "5a294a59f297c09e96d4265b166ea8fd"
  },
  {
    "url": "assets/js/29.beb85f6b.js",
    "revision": "b11b5c1c26ad63703f2ce29793ed83bc"
  },
  {
    "url": "assets/js/3.736990cf.js",
    "revision": "fbb449ad6d1bee837ed79978d0d1e714"
  },
  {
    "url": "assets/js/30.9f851346.js",
    "revision": "3ee364575253689e5422bf2cd2db8b59"
  },
  {
    "url": "assets/js/31.1ce38c3b.js",
    "revision": "fdd98455702804d5a6855e48fb24ac6f"
  },
  {
    "url": "assets/js/32.ba45fcf3.js",
    "revision": "f36a731ffaf5adfe96a465f9f2b91c50"
  },
  {
    "url": "assets/js/33.199afcb7.js",
    "revision": "ccd289148b6948f666a8826a590ab644"
  },
  {
    "url": "assets/js/34.ea1269e9.js",
    "revision": "1e1b759d282c8361ae6a4de8599bc44c"
  },
  {
    "url": "assets/js/35.871664bb.js",
    "revision": "ac8bcab927e5928107c9ff55460d5e64"
  },
  {
    "url": "assets/js/36.3e9d4346.js",
    "revision": "4dbec6a88269605f921b2773703808de"
  },
  {
    "url": "assets/js/37.c3570a5e.js",
    "revision": "448bc18ef860ccf98dab17d6b3ffa7d1"
  },
  {
    "url": "assets/js/38.688db906.js",
    "revision": "840325f5d41bc264fe26bce9951c44e5"
  },
  {
    "url": "assets/js/39.5f7aaa72.js",
    "revision": "884c1735546c32beb8cb7c8ffddd3c5f"
  },
  {
    "url": "assets/js/4.662e2210.js",
    "revision": "76390050a78a4cf3f22fa774b0472c3d"
  },
  {
    "url": "assets/js/40.37c1f253.js",
    "revision": "2ba66e9e7dc35dcf21c99bc4c16ae07e"
  },
  {
    "url": "assets/js/5.01bccdda.js",
    "revision": "3b3a7c6aafd1f11a9b4c174cb117aaea"
  },
  {
    "url": "assets/js/6.1d3bd5f0.js",
    "revision": "c26601ca80731f31e277359240e10ab5"
  },
  {
    "url": "assets/js/7.a7128848.js",
    "revision": "2aa23b510a6464c64952970e59007c30"
  },
  {
    "url": "assets/js/8.87db1fdd.js",
    "revision": "2cd702b5478962fded1e03e85aafb467"
  },
  {
    "url": "assets/js/9.07b4ea94.js",
    "revision": "21a813ea781882e957e0d0b940f219a3"
  },
  {
    "url": "assets/js/app.2c0fbce2.js",
    "revision": "7c3a6628afcc786c9e05c64ff48cb420"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "988e07d02962ef033726206e10236168"
  },
  {
    "url": "categories/index.html",
    "revision": "1072bfa3de6abd57639b302153ca8f31"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "498f581d690380860c38e27c640db3ba"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "0ccba2aea6aefba1e50a5a143da0ec41"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "114ea7594cf1e2a9f239ccab26bc7c67"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "e8acc4581dafcacbec3ab57923d10d6d"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "c9b8c2d4a3135f21415f72dbde9fa393"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "db890ae4b2a2c8e9899e205b6c016c45"
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
    "revision": "c5a7ac1b419ef536f481211a39c35218"
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
    "revision": "05d1cddf11292160fc4f47a919202393"
  },
  {
    "url": "tags/git/index.html",
    "revision": "2cb9d273bf43e8eff10a90b5530be035"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "f1e5fd359c792616949b66e57bcf8934"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "ab149e57e15119dfe9e9f41675c38bb7"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "62170e6ddab558e5e3db425650e50c01"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "bfe2d67be1aab09fba54fd6047eb8954"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "4b2053ce5631b547ee2a3a5d6e298b1a"
  },
  {
    "url": "test/index.html",
    "revision": "66e741f6c0324f809b2d01b0a3996306"
  },
  {
    "url": "timeline/index.html",
    "revision": "ed6bea79eafea92d182c2b7ce96b535b"
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
