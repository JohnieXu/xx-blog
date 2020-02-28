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
    "revision": "2a0c521c57cfb5638be3c5b586ec6e15"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "9212b1d05ceddad50de275f3209d8be9"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "3b46d8a573b9035a9dc8fe581c623ba0"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "5709a4eb8ee8b756c57e3f7e3e527e1f"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "346a05e4f3abe37d5d6dd7af7e31b833"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "7eba5f71aaa4b5998e28ee52f3ef3d27"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "d97a5d130ecb06257508ebbdcdc599f4"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "ae22950c5a719d471fdfc24b755dda4c"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "7fd5033ebd3ea643a64bb1a13b4052e2"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "335cee5ee9d7da6994429cae30aaa0dc"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "d3afc5e98f0ce073d8559106eff0267c"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "3518e2e544695e477d088b66e03aa644"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "0de9f2df6ebf6482c9b39a500bee97d8"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "df88466adc77b443aaed1b7846b3e75d"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "d027eb56e7a3517fae39ac510ebe7209"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "f5804264a7f9389141ca475b1ec14e34"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "c8f749baeb11f1e3411b9847a3bd25a4"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "ea58e8be041b7687d151bcaf3baca091"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "736754e9ca76f03e7767b588e4e1d427"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "73b8f39e493751508878578a2ee9716f"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "2ebeaa9367a5a591039f554f40597f12"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "103832be2bee0789cb8e0e342426cc72"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "d7e071b661e9b9468c2d6a2c9173367d"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "b3895b2368e21b28b2df4ae670659e49"
  },
  {
    "url": "articles/index.html",
    "revision": "4dfb5bbe0d9f20fabe1ab92242ac4231"
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
    "url": "assets/js/11.6400a214.js",
    "revision": "bef2c843d820aa63931ed9ee25881a54"
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
    "url": "assets/js/14.032b8010.js",
    "revision": "cde9a5975fb97d19065e9dc35cd2d9c2"
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
    "url": "assets/js/24.54538813.js",
    "revision": "b4ddd834e3cc79d339f078dd15a6f0ef"
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
    "url": "assets/js/9.673d8099.js",
    "revision": "ed5c3b7645d9ecd3f9fb5dde42cff9a2"
  },
  {
    "url": "assets/js/app.dbcb3899.js",
    "revision": "b5a7f90a950e413c137f7f7da21cd6da"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "26ad1d3698277dabe5c939d613833cb9"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "38cfd7ab2657a4ec51ea87fa6199a7c7"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "abf2d990296b8b83fb48e31a08f857ad"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "32240963dedb50781ae2be91531808a1"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "7a447e9a4141d12102e60e12e8d2cfa0"
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
    "revision": "9c25d62fb38c85659d180f5ec73d5126"
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
    "revision": "2b246bced141566a0bce19c94666207c"
  },
  {
    "url": "tags/git/index.html",
    "revision": "87602531659f027928b1cccc68b7e412"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "c8658dbec6562770befe34e0c7d7f37c"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "3d7973cfae425c4e6f1fe06fc78c9712"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "381281a745b9a2f088129ad93ef41cae"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "e319cb9cb23c3c9c7e783a551ad061be"
  },
  {
    "url": "test/index.html",
    "revision": "c04e4382b2377b54dfb317b52826f8b2"
  },
  {
    "url": "timeline/index.html",
    "revision": "904f91b5802f7762b2feb6781999dc0c"
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
