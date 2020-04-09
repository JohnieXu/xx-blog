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
    "revision": "c3fe522bb510ef31e76c5af033602d0b"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "534bc35403e310e6eb1ba24c59a24321"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "8d61d506c22bf9f61803f0a4ec3e35ed"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "a3dc39dabc8392df0162f75f8a0f4178"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "0911eda42aa5467ffd4435a476eb347e"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "636061c2e08bac9d96bdc74536d02d65"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "a70e7b65498c0b0b584829fc5e25227d"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "a657d924b6b6a0258de82af08bc1cf67"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "8f16d9999cc3f4ca2b697c5d8c15d4b9"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "70f37b494a26f7dca74b19abc73907f0"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "b7a53e0eb1c4023823b0826bfa093e8b"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "8693b668d04c6dd160b5903d96891af2"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "164014f7d4bdc3303d0ad21d776d72cf"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "b3b1fbf3bdc3825e36706d9afbef613d"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "90e09ab216348adf025495e030740fb3"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "2ed53c7ca10ce8dbbe1967b727c051da"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "b5a54450bd2ed4d1bb4475cdff277911"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "6677bc124ee12939bb8b7e721da0928d"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "dd5df8294d304b335acf5c6983ea3114"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "3f9ae42b1df2d9c450da3a2d03d516d2"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "655592a7b927583843ade4ce2dc5493b"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "f6b73cc2c8e7e2feb94cd8a00a90793c"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "2cc1cc5e94cacecf116d9a1928b3278a"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "e494fb94558aadc9a3e59641f2ac8b0a"
  },
  {
    "url": "articles/GO/index.html",
    "revision": "5fd332cf51e46a003f1dce0522a5fd7e"
  },
  {
    "url": "articles/index.html",
    "revision": "903dee10ebceffa467f09f3d5d4c1107"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "4222a818bd3c549b1bb6e81e9e9154be"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "06e1e594613dc39fd29207abcde4e988"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "bafbbe788b6510519c26d72278cb32f5"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "81e32d1d4de78b1d6f724841bea42dd4"
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
    "url": "assets/js/4.c40aa717.js",
    "revision": "876adf6352286828ce7a76fb8c000abe"
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
    "url": "assets/js/app.6c24e9fc.js",
    "revision": "fe833eee0ad9c4c250304a0f1305fcaa"
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
    "revision": "00758f97a32e17b3ab46a72e5391eb87"
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
    "revision": "bb05ce95b3ec7dca04876db009e0efbf"
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
