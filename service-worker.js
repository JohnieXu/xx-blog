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
    "revision": "23b511fd34657eee60ee3c4e6e1ced48"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "f9e36599c6d47c6ad1decc83592573e3"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "cde56f9389fb4d11cfd991157a858920"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "be38119188aae5cd445191fcd27a2f6b"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "56659631738cd1381a3af216e32bafb6"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "54f1620c85d261dcd1d901db14fbdf4c"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "3ee9dccf0df08e989f9e854d30b1caed"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "f80961bcaf653ce67139b4a27b2c8f2f"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "311190a8d6cd472d539aea653c5ad6bb"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "fbba558a28e8d94617214feaad32bf91"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "15ec08a87aa167fb1c16cc844cb173cf"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "357b62ad0a138eb64bb16f52f3f2f89e"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "6a9d21c9c4782203038c30d72a126e27"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "0665d7a6edb186854871a5525b991d69"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "8795809a089d85b17f666595bc093505"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "65d1c35f7e17537a43e128c9a46a4f66"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "e3785a082befc58304492b7b2e2b1113"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "85a46a4b40c339162df0ff74fa35f2fe"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "6295d094484be8ec328278a00686994d"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "c9c21ca0e8144887e1710f6b27c14727"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "f8185a50b556b96bd9587ec1e6e5635e"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "bf72489ff4363eb34e4c551525dd1ba9"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "64ddbcf5f3b59108cf55bd7ff743ac37"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "dac5e0047486573f7b963948833c502d"
  },
  {
    "url": "articles/GO/index.html",
    "revision": "ef28f34eacd5b7174736eded9f467b9b"
  },
  {
    "url": "articles/index.html",
    "revision": "f86c91b2a6178d8fcbc5f932c5a3f21c"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "381a574e0d00351ab18e71dc42c25596"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "f64b7513ccd45b9fb1bbfc82857088e7"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "1f4e99db7973ea977a9cbb8338a26b20"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "fc0c5eb0ef43d81c9a3c1f686de84ffc"
  },
  {
    "url": "assets/css/0.styles.807f460e.css",
    "revision": "8efba1b30b3bfb96fb777aa1df0c4055"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.978c265e.js",
    "revision": "a9c790632da50063d5a9f0af78b24718"
  },
  {
    "url": "assets/js/11.ee28c254.js",
    "revision": "74782454c9073748136b971002e4d32d"
  },
  {
    "url": "assets/js/12.4192ca36.js",
    "revision": "61bcfd8bcfabb248f5c45baa6713ddfe"
  },
  {
    "url": "assets/js/13.a118e77c.js",
    "revision": "1ba3ed3787bcee689dea25a422d269e0"
  },
  {
    "url": "assets/js/14.9c4437ee.js",
    "revision": "233d99e1adec5878dd0cbf6536d51b2f"
  },
  {
    "url": "assets/js/15.3b984b69.js",
    "revision": "773203e2e1304213236223662c3bb26c"
  },
  {
    "url": "assets/js/16.94aa0700.js",
    "revision": "c9576dfef87fb0512396190b45268097"
  },
  {
    "url": "assets/js/17.d9cc0c09.js",
    "revision": "aa6326171064201ffaf41528372e68a6"
  },
  {
    "url": "assets/js/18.461d35ec.js",
    "revision": "d59581095cf30b29fe3dd23704d44f7d"
  },
  {
    "url": "assets/js/19.2a469800.js",
    "revision": "9010ec566e70639f7f1a532b63138a93"
  },
  {
    "url": "assets/js/2.2cb59fca.js",
    "revision": "6a8c39664fd422cbbe19c1fd8db70638"
  },
  {
    "url": "assets/js/20.3ddeeb7a.js",
    "revision": "28a2602ac91c1eee1f0906005791fe36"
  },
  {
    "url": "assets/js/21.6f0a49cd.js",
    "revision": "1f9f8d87dbcd3cf0cccd8779a48d097a"
  },
  {
    "url": "assets/js/22.4cd19012.js",
    "revision": "494687b12cbffa7bb3e47f3b0d037162"
  },
  {
    "url": "assets/js/23.7f380a04.js",
    "revision": "d8c374fdd9b07a3982bfbe46682d78f8"
  },
  {
    "url": "assets/js/24.cad3ab1f.js",
    "revision": "2b5959e0ce6964bbc07946026cd0fa3b"
  },
  {
    "url": "assets/js/25.f41a19f6.js",
    "revision": "69e6d8dba9aadc1b376b7b713603d75a"
  },
  {
    "url": "assets/js/26.1ac94e2f.js",
    "revision": "9726ee24323688fec98ce9d94d9dcc73"
  },
  {
    "url": "assets/js/27.6d144240.js",
    "revision": "7ace158436217b115c1ad4effa89bb3f"
  },
  {
    "url": "assets/js/28.cfdf7141.js",
    "revision": "745582a6ec90ea64bb949f4314e48036"
  },
  {
    "url": "assets/js/29.1e7b321e.js",
    "revision": "d9a65ccf695cf17d05080ff005b11ac6"
  },
  {
    "url": "assets/js/3.140c7f63.js",
    "revision": "b6f78afe54637264ebde30e40e001152"
  },
  {
    "url": "assets/js/30.04e28cf3.js",
    "revision": "130a4e48165c8677bda2c4d17b5ffbe1"
  },
  {
    "url": "assets/js/31.72a638f5.js",
    "revision": "1d720077462c448c4be1b637bc32dff9"
  },
  {
    "url": "assets/js/32.336ef7f9.js",
    "revision": "99ffc71469582e3a9886b314d143de74"
  },
  {
    "url": "assets/js/33.b2704194.js",
    "revision": "056a16248e1448215fa79c4ce621c5a3"
  },
  {
    "url": "assets/js/34.011c9f94.js",
    "revision": "3415b23b1a3011d2c959542bd581bbe0"
  },
  {
    "url": "assets/js/35.50995d55.js",
    "revision": "5d4893203d9910b6f99ed0062a2c7d9b"
  },
  {
    "url": "assets/js/36.9a8b7d55.js",
    "revision": "262b43a76b8aa765136628a88b60a9fa"
  },
  {
    "url": "assets/js/37.d31fabba.js",
    "revision": "274730a4676ae4f82686d4c40d76e3ce"
  },
  {
    "url": "assets/js/4.7b32598d.js",
    "revision": "77c31ba64165cd52fc11fda476e9a5f8"
  },
  {
    "url": "assets/js/5.744e91b8.js",
    "revision": "a9f03de708406599d4cbd8c072755517"
  },
  {
    "url": "assets/js/6.e24cd353.js",
    "revision": "e9aa62314e5c74504b0f3ebe471098c6"
  },
  {
    "url": "assets/js/7.5f382474.js",
    "revision": "acaaa1c41db3a927cddc41333cce7191"
  },
  {
    "url": "assets/js/8.42e5a76c.js",
    "revision": "c0cfc9ddd8f7f2097da77588ea45a07e"
  },
  {
    "url": "assets/js/9.bda0558e.js",
    "revision": "b9219d3a1800f6dc97dd527116a88bf3"
  },
  {
    "url": "assets/js/app.c8b58882.js",
    "revision": "8513d50d0fe15b0bb416cc6a4bff5239"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
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
    "revision": "786fc70178eb8c46636c10a4a4b5d297"
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
    "url": "test/index.html",
    "revision": "66812e310d01edd88ca22d4072a19a38"
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
