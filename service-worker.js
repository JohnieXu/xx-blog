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
    "revision": "b8ed666efedc412979fa0778ba50df42"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "b92a3e20c0240852ae32f77021391b8c"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "9480563a3819145f704576834a53bd1a"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "41b188070fbdad91a4d7c3157cc9ae90"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "34541ff3d4b1fbea0afe214fd358f4a8"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "6689f87d759791b243a403acbbaec66a"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "ca83a570c0d0634b7de98720c050ec1a"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "fff9695a04b2ebcb84eef6147fc1a73e"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "8532e54d13cdb8c03f3a8414aeb734d2"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "3b06c094b9ab0ed167cfcebb4546c742"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "108d93405e452198f01e4ec1f78138ff"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "b74dccfd0a4eaa2abc06ca230f3b746d"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "6e2793fd0080ec0cb92257d2154fd3c4"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "10bda1c25361e0bcb09451dddf5e621d"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "21198f567e8c2c367fa12294d44ca7b1"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "9cf6f5c893254449af5cae995098ddce"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "c7168fa7e8084bf4e3aa1af43c135768"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "909a17298fd958c2c5ed333c1612ada5"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "eeead3ebf617e90d9de89814e8ded475"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "aa6516bc2aa71b06d260cec091716f3e"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "6fe1dd039c57823a1eeeef17df6646fe"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "5faa31417a231a1095970bdb22a1a001"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "f3501756af47ab683c1d7d3f8104e9d7"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "a83d5e83434d06a31f018a3e3db2b601"
  },
  {
    "url": "articles/index.html",
    "revision": "48e8a2e0de8836580eea46db10a22cb3"
  },
  {
    "url": "assets/css/0.styles.7d50cc48.css",
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
    "url": "assets/js/1.cf573e58.js",
    "revision": "af3eaaf49e2b137f556c1ff6e3999296"
  },
  {
    "url": "assets/js/10.85dc6922.js",
    "revision": "fe7a51530dd404cf7d7864d028aea6da"
  },
  {
    "url": "assets/js/11.6400a214.js",
    "revision": "bef2c843d820aa63931ed9ee25881a54"
  },
  {
    "url": "assets/js/12.30d44544.js",
    "revision": "4a9eab48ec880a8320be3c4cf63c5691"
  },
  {
    "url": "assets/js/13.17bf5d72.js",
    "revision": "5bddb243c644b4e86a4d1527c7d21948"
  },
  {
    "url": "assets/js/14.0982f7ec.js",
    "revision": "fd781014c4e506f00243e4bd8ebb5550"
  },
  {
    "url": "assets/js/15.8e4f4ec9.js",
    "revision": "318b2df361a2645550a0cffa88ed7ffd"
  },
  {
    "url": "assets/js/16.301226db.js",
    "revision": "04a3f6f119761d99205edf4ea97d0aff"
  },
  {
    "url": "assets/js/17.bf92a0a7.js",
    "revision": "eda839d560841fdeb76232250a8e06ab"
  },
  {
    "url": "assets/js/18.61f04663.js",
    "revision": "1819e4bad3ce98279468e842a256a33e"
  },
  {
    "url": "assets/js/19.919b6e49.js",
    "revision": "367c74edcca119d60cd88d3cc6a15bd6"
  },
  {
    "url": "assets/js/20.d078ed13.js",
    "revision": "be48d629af65a7533ab65467aab6a6bf"
  },
  {
    "url": "assets/js/21.34517d2b.js",
    "revision": "bf1bdb5e252d35ee53b3c4db4356f9ee"
  },
  {
    "url": "assets/js/22.d65d5317.js",
    "revision": "7697c4706c9e62942b9ac67e7500c55d"
  },
  {
    "url": "assets/js/23.22856cac.js",
    "revision": "fbaa1b7fe07a9baeb89fbcfae37ffb60"
  },
  {
    "url": "assets/js/24.dd4b3dc6.js",
    "revision": "583e0c6199adf61c6ea74fee0e714fc2"
  },
  {
    "url": "assets/js/25.b08971c1.js",
    "revision": "df30d1638e4e8daee2ad7fb8df5bac4d"
  },
  {
    "url": "assets/js/26.587d9b2a.js",
    "revision": "03eb0a2aeea3b768e701bc91d17bcd35"
  },
  {
    "url": "assets/js/27.c7c51af3.js",
    "revision": "106cfb87a3681707e68bae4299494e2d"
  },
  {
    "url": "assets/js/28.7422e9ed.js",
    "revision": "aca6ba762b8b0491ffc562adb27ad84c"
  },
  {
    "url": "assets/js/29.d1b2b55b.js",
    "revision": "bb37de5621466e1dc5badd79d909f6c8"
  },
  {
    "url": "assets/js/3.79975a6e.js",
    "revision": "bc1d133487786438424082b409bc50ba"
  },
  {
    "url": "assets/js/30.abc1048c.js",
    "revision": "7844b8cc14dfaae6495c7e89a3892d3a"
  },
  {
    "url": "assets/js/31.e1645bd4.js",
    "revision": "09743bb25b0b51030e64ec0dc5f0f275"
  },
  {
    "url": "assets/js/32.c900aedc.js",
    "revision": "ce6f3e99b70014263a63dde5a0cd7453"
  },
  {
    "url": "assets/js/33.6d423240.js",
    "revision": "002fd8b0613bba1493260d66de9a69c7"
  },
  {
    "url": "assets/js/34.fd489d3f.js",
    "revision": "f77251c69f728fd627511ca340f0e061"
  },
  {
    "url": "assets/js/35.135ccd49.js",
    "revision": "7fff84deabe5565904dc8e79dafc45cd"
  },
  {
    "url": "assets/js/36.80de2328.js",
    "revision": "21b41e775b9c5d48a682958795c150a6"
  },
  {
    "url": "assets/js/37.765159e3.js",
    "revision": "7aa1764452c10d2dbb632662a65b2c2f"
  },
  {
    "url": "assets/js/4.bf7c8eff.js",
    "revision": "81d6d8a86c6214b57b6a2c257a503390"
  },
  {
    "url": "assets/js/5.d50d9a72.js",
    "revision": "805fedfb2aafe9596b28cefc08fd2b67"
  },
  {
    "url": "assets/js/6.c29b65a2.js",
    "revision": "e42656a3827ce15b05ca9a4f11ce2c1a"
  },
  {
    "url": "assets/js/7.ade1e44c.js",
    "revision": "da5491f5f79efb03cb2efff9cc53a668"
  },
  {
    "url": "assets/js/8.b268d6cc.js",
    "revision": "df0671d34bd255932f323587ce2bfc76"
  },
  {
    "url": "assets/js/9.dbffc2d6.js",
    "revision": "354d7a4f39b4ea212c73a011b0d7cd76"
  },
  {
    "url": "assets/js/app.cb27d449.js",
    "revision": "24dc1083814c3d64300ac656ae3f2872"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "152956f763357acd4c67c9c05eb3c1b1"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "df38d41232f343b1e52fb2dc0e7217fe"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "8bba30343e0f62baf377bb3a3561826c"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "aa57fff4ce55aaf318ba43074d4044cd"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "507cfb854cdafba1b9b78a721ad24fc0"
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
    "revision": "ff878c40263b68856bfcd6c8d739a245"
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
    "revision": "72c0b37b530126fc249968167f379dd7"
  },
  {
    "url": "tags/git/index.html",
    "revision": "29d4b0a5804e549c6084b315117d94ef"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "da296a2de8e5648f81ad8b164ebb065b"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "ca2326cb887645672d84df94751a674d"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "4905f493241b24bd21d7e3d999dc4ca1"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "124223e25ba967e9a3a3bda4c9150867"
  },
  {
    "url": "test/index.html",
    "revision": "c0d4638ea23f7f3df3d2d2974cf621ed"
  },
  {
    "url": "timeline/index.html",
    "revision": "2aa4eb250f65aae36dc7c5cfbdef5236"
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
