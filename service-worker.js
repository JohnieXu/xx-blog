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
    "revision": "f22f8df3072d8959b04bd3a2dded3121"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "2499d5b48777227d33973abd8d551d5c"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "42a79e0f3614738aa4ab842a22875b11"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "c64ae18c391ef54f2f080ab3c2dc19da"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "6f3183fc79de16cf61aeea4b7de072f6"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "ad0ada2c2bd09df540dd6cf549b1b47c"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "f7073dce08eb73d380efdafec1a00b8c"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "91718073cc790eb3d5c5328c23941970"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "4e0f7cbdb82279f619241255b714ba20"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "61744a6d28ae81e3f2ad9ec1faa3e0e4"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "fa9ac919b4d479a82d07331ea4f7f1a2"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "5c055c2ac258c260c6950d6b9e476085"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "1cacbc48327813d9b94ee0cc966d210d"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "13ad2586b1b08c7e64798bc957f864bf"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "cbd88a90e6b08a094d071102f31c6dcd"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "da1b6dc394041105a6a04de5d65eb33b"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "9fdaa7f2ada66dea88b11d22fa1f11a1"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "05b2364fca44556962516bd566e1e5e8"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "de8be9f7d57c55089ac33528776707d8"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "8c39d73c3fb9b655c41dd0f8b0b9d88b"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "8c201faef62e0d86cecbedcd91b1104d"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "1d3062a96d6d373f533c7500113c069b"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "5169f0dd5e43f25a6f88a69155986f67"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "01d45fd7479e098fce7ae28a2c5f5cc9"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "0e9bbdbbe4ee6748fbfb1d4870e8374d"
  },
  {
    "url": "articles/index.html",
    "revision": "0b1b42532fd11a3b376c89ed3f644bde"
  },
  {
    "url": "assets/css/0.styles.156d7f63.css",
    "revision": "35b0435781bc136150c35ee0690d5e7d"
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
    "url": "assets/js/12.188ce218.js",
    "revision": "26d63b9a52ecb4c9abe7967f1c51d1e1"
  },
  {
    "url": "assets/js/13.3e4d032e.js",
    "revision": "6d2d259a0fa16d48fbe72ba15b48725b"
  },
  {
    "url": "assets/js/14.021b0e14.js",
    "revision": "2652a1aec71e1bbe67e5a5b6ff505738"
  },
  {
    "url": "assets/js/15.1e1688e6.js",
    "revision": "e00086b758bd648df80083d6f2447a0f"
  },
  {
    "url": "assets/js/16.9ad3d726.js",
    "revision": "6be62fe91c39ba1642c041c9d0a57371"
  },
  {
    "url": "assets/js/17.84490329.js",
    "revision": "7a77f1fb814b01cb62a446bc59181f07"
  },
  {
    "url": "assets/js/18.3b1284f9.js",
    "revision": "3816568fbeef34a28f8590007ccf1648"
  },
  {
    "url": "assets/js/19.736dc389.js",
    "revision": "b1d9f7f8beddbfbdaa41d629250fb660"
  },
  {
    "url": "assets/js/20.3db6c509.js",
    "revision": "4aaf7fd60fb4473796fde5d868addef5"
  },
  {
    "url": "assets/js/21.ead23de0.js",
    "revision": "d1678ffc3714b7f3f577557c5ebf6be1"
  },
  {
    "url": "assets/js/22.8284637d.js",
    "revision": "22889eb757e4790fcbbdfd60198e8e9f"
  },
  {
    "url": "assets/js/23.a3217a29.js",
    "revision": "0b554290d22bb6a24111ebf709398ce4"
  },
  {
    "url": "assets/js/24.c0e6a382.js",
    "revision": "4a03d3fc9d3a084089183d88ac3c2625"
  },
  {
    "url": "assets/js/25.9af269a5.js",
    "revision": "32288465def22581969ba780bb115521"
  },
  {
    "url": "assets/js/26.ae593929.js",
    "revision": "2502f53bae05208173a43e7d83a3add8"
  },
  {
    "url": "assets/js/27.ea688229.js",
    "revision": "0aa1748014a34271840bde32d8b92ae6"
  },
  {
    "url": "assets/js/28.8413696f.js",
    "revision": "c2a3f59bb47d44df96d65ef0cc00c9e6"
  },
  {
    "url": "assets/js/29.898e5501.js",
    "revision": "937c617a746b3b745f6c07b47ff21c13"
  },
  {
    "url": "assets/js/3.893ca284.js",
    "revision": "fe3340e9fbd70a11326bc89978f9c955"
  },
  {
    "url": "assets/js/30.0c0a674d.js",
    "revision": "c7fd952cdffcac63c492195a406631c5"
  },
  {
    "url": "assets/js/31.35ab332c.js",
    "revision": "d38c461b314723114a721cc9cd2d3a05"
  },
  {
    "url": "assets/js/32.5f75fb23.js",
    "revision": "57f2d2b27f43e9c19f8a1f5331a707c6"
  },
  {
    "url": "assets/js/33.0a0aba9a.js",
    "revision": "8688e5bb31de29614d3acbdca01bc25a"
  },
  {
    "url": "assets/js/34.3a2fdf4a.js",
    "revision": "c54d9031fa720727d72a930f2e7ebde3"
  },
  {
    "url": "assets/js/35.edf939fb.js",
    "revision": "9224e103db7dc119982265bc20a33824"
  },
  {
    "url": "assets/js/36.7d0a1824.js",
    "revision": "99ee6e5f5fbbe7eb9a93a8eaf992ff22"
  },
  {
    "url": "assets/js/37.42c76f22.js",
    "revision": "2dc2cce3a86972b7dc860502818e6c83"
  },
  {
    "url": "assets/js/38.4ad5cdcf.js",
    "revision": "40b330886d5e7eebc7e2a08a607d4887"
  },
  {
    "url": "assets/js/4.a3e5d9e5.js",
    "revision": "3e67bbf376855391fe70efbc3791855a"
  },
  {
    "url": "assets/js/5.d891d5b9.js",
    "revision": "791dbac4e5fd47bec5e9658b439833b2"
  },
  {
    "url": "assets/js/6.35c447f0.js",
    "revision": "21083f03551a91dfd1a21c25e7cbcbac"
  },
  {
    "url": "assets/js/7.33d83d27.js",
    "revision": "51e7f35c7b65d90a30e66ebf87a086b1"
  },
  {
    "url": "assets/js/8.3a96cf3b.js",
    "revision": "5986f0b16b3cf6dd5faf087856247367"
  },
  {
    "url": "assets/js/9.aa99e1c3.js",
    "revision": "814379924c95a24c3d5a198489919a54"
  },
  {
    "url": "assets/js/app.89b4d96b.js",
    "revision": "ced60b1d39d588ea5ff365a908014fd6"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "d09e2150d64d91abde88c17618aaed0c"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "39a50528a01a0e4930c674270ae15d19"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "c347646e63fbaab2abece161a823f2a0"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "669eb2fc16913b713b493b26e559d16b"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "e827d0e65be6c94e6049b3c93a8e5871"
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
    "revision": "56bef72d7d0acf276c44993b2f125407"
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
    "revision": "de26299da580351fd47d182a2920f029"
  },
  {
    "url": "tags/git/index.html",
    "revision": "6387cc4ff37583d19f627bd7ba50b205"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "3b3f496656eff0fd77a51a5fdc8d3e3d"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "33a6efa739c9412f77c37fb0303e2df5"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "16ce37c428e8f0a6cfae26e3000acf0c"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "0592f996cbad20f91d8a46ec0bebb0cb"
  },
  {
    "url": "test/index.html",
    "revision": "f5cb038c2e557a0d71e9a81251b1de1a"
  },
  {
    "url": "timeline/index.html",
    "revision": "32793223057f6eb8a7adf314dee520e9"
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
