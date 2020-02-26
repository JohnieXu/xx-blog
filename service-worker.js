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
    "revision": "b602a9d3603701fb0f1410cfed87b342"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "d342982228acda04101ec62d8e6f6b9b"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "830851a8fed6a0378ca963d597ae4554"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "849203d1a632aca3b92990cdb2c1e25a"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "ad2acfde912d8a031434167506df1027"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "c6f8b70974d78c299aaae5a788e2cada"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "14cb377141da59740f5e2ef366db3017"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "7fe85596bb1dd36c31b6dc21cac96057"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "82e29360d1425b7a0dc30bd0aecec3bf"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "5bfba6ebca24fadbeefa37309ab93c0b"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "3556f36a6f5f8755a411cbf6a2e35dc2"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "e34f59770cea8a0675b83a1a48fccb7c"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "ad58d95f9d7be37c9d5197533ad21c23"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "ad0600b71fbcb33994e539cdd58c2f07"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "14bb8d5d0cea06d556fb131fc135008d"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "a6c12db7e7b5044efe295e441d6b328a"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "430836120616fa209b584328f65bd213"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "32930451ae698e089fcabda71c60404e"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "5438ab2046e481c0118c4aba083dfdf2"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "e21ac1b4ba55c936a9df144ddba52639"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "17c22f93c76ba3397ea4dcdf41b8ec18"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "9067d76bafca3f1c6c2e4fb07ade5389"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "04d1ab79cd09de2450e617870603eca6"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "86fb5656c2816f2e545d1597311c90c1"
  },
  {
    "url": "articles/index.html",
    "revision": "3f4b18e6ba37b63a5d1cf482e546e384"
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
    "url": "assets/js/12.3df6c1dd.js",
    "revision": "05914d4c2f9ead02c73c89ca05e43f29"
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
    "url": "assets/js/15.a3463f9c.js",
    "revision": "21d3fae870a07cf82153ccdc3c8f6c3a"
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
    "url": "assets/js/24.7e3ad244.js",
    "revision": "0f75d0968fc193e3ad2143aa5cbb27e8"
  },
  {
    "url": "assets/js/25.a8dc5931.js",
    "revision": "0147e70682afd1416fd7eedd2512d414"
  },
  {
    "url": "assets/js/26.5f6b2ff4.js",
    "revision": "312bc24a03489aa9e50aa48c1401e70d"
  },
  {
    "url": "assets/js/27.c5831bf3.js",
    "revision": "2de6c2f9904cbd23ded7114cf7b2856c"
  },
  {
    "url": "assets/js/28.83836a52.js",
    "revision": "5a1916d7fa23bcf5b1b9e02c7ddd0694"
  },
  {
    "url": "assets/js/29.8560c1fb.js",
    "revision": "e63029a93d216ffd6f61b8817931b265"
  },
  {
    "url": "assets/js/3.5e08ee06.js",
    "revision": "8b08a1714b514bfc43643e5a013172a4"
  },
  {
    "url": "assets/js/30.131a07a6.js",
    "revision": "d87b05c017915b71c2b0344e4d3898fb"
  },
  {
    "url": "assets/js/31.81e9ce55.js",
    "revision": "83733fb427eafcd3026cf7bd4cc9a3cd"
  },
  {
    "url": "assets/js/32.a9ef7f50.js",
    "revision": "05a6919985cb433801bd640bdb50a506"
  },
  {
    "url": "assets/js/33.1a234747.js",
    "revision": "957baf3215f5c4145399e10235cd932e"
  },
  {
    "url": "assets/js/34.b4abd0f4.js",
    "revision": "e0633f88d0029975a93ef7cf6d7c5ea3"
  },
  {
    "url": "assets/js/35.27497047.js",
    "revision": "8dff06d423fb15fd27b3dd050ac40a16"
  },
  {
    "url": "assets/js/36.ee61f92d.js",
    "revision": "380a9acabe4aa3461e51127ff377047a"
  },
  {
    "url": "assets/js/37.765159e3.js",
    "revision": "7aa1764452c10d2dbb632662a65b2c2f"
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
    "url": "assets/js/9.fbeb8d64.js",
    "revision": "ebe3199ed0193a7011acbc311dbfba2b"
  },
  {
    "url": "assets/js/app.bfdd3a82.js",
    "revision": "54eb540f51d8f01c081641b308c762c9"
  },
  {
    "url": "categories/index.html",
    "revision": "b564f062ad5b5eb62a801e055dbec9f1"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "7cefd6d505bb55bb57293d3fb29c0ffc"
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
    "revision": "b7dea0bdf4a8428dfb529b0ac69fb677"
  },
  {
    "url": "tags/git/index.html",
    "revision": "67170a52ceec5a856a0662c7a0c1007d"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "83dba3ca7c53e3fd4c3327115f9a2b39"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "573aa5418f0269427043fdc09c8e9686"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "bd617d907e3db5282425560c1946924d"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "f627a3671457d431631771f5d63deb31"
  },
  {
    "url": "test/index.html",
    "revision": "b67bdd57c068d578b834e552a78bb375"
  },
  {
    "url": "timeline/index.html",
    "revision": "658aade28cfd793ef2770e53fb56f832"
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
