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
    "revision": "1e38c45174d5bbd3e66da85b136b4d23"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "c371d5d6486d866bf2e252b62e981521"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "d69859d30d6fc3e89d8e74bb6f082f22"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "2a5871fb0d6010c3a086285097ee9256"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "718f7ba5f1acfb87a4e66f756ffab779"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "cad106d3d8468a6d45dadd45808f3fab"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "4dbf673a1327ec0e1ef32cdeee341749"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "dd5955b03185491cd5b04f72aae8e5e0"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "726e54908f56532528ff00671c71e544"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "d7a72eda05444d77d3094c535498fd43"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "60370f7caf48c67bd8b0432d3ef7d40d"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "4a83dc62817160053b0ad192fc386810"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "b43359177b12cb6b03bd5311b8c5bb2f"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "b514c711eb5859b8beed23d965a750b4"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "4ceaf75b0bc934e984573b5b71ad2aae"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "89909e167d016c3d7519e3f2185d7b30"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "add84c63fd491473feda864b294631a4"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "5c4c99b847080440bd774b3dfe7c2fc4"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "34371bdc2f14ca2ccbd14d52414105bc"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "0a0cf09d38a69a21fff39588824ab5f8"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "58c7895f0ad344e5f744becbb8efcd9c"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "7b2580e5d3899787de0c2e40c3588df3"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "b7a3fbcc8110149bc0ffdde47b308065"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "eeb7683b8421a18b2f84f902cfecdf67"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "19d91e1536e5afd7189cfa14913dad0b"
  },
  {
    "url": "articles/index.html",
    "revision": "5332e0ae7e3f02db5bd97b3a665bcbf1"
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
    "url": "assets/js/13.407aae5d.js",
    "revision": "b6f63e17ed49154d4bf45b7b1de22349"
  },
  {
    "url": "assets/js/14.e32df4b9.js",
    "revision": "7a28832d803481586bf7f243a539165b"
  },
  {
    "url": "assets/js/15.e8d4a6fd.js",
    "revision": "9e4eec4250c7a9ef97abc1233120e7a5"
  },
  {
    "url": "assets/js/16.9ad3d726.js",
    "revision": "6be62fe91c39ba1642c041c9d0a57371"
  },
  {
    "url": "assets/js/17.9e532be3.js",
    "revision": "f7faf72c47963a971d5f5eef1564acd3"
  },
  {
    "url": "assets/js/18.fb2039b3.js",
    "revision": "838b5d155e91239a47367d21c5b5a5a3"
  },
  {
    "url": "assets/js/19.dbf9d8ed.js",
    "revision": "ba0b564aa6ff16d1de9100eeb33339cd"
  },
  {
    "url": "assets/js/20.b06e513f.js",
    "revision": "f64c3293fdc4cf17a2c40b787166bf0b"
  },
  {
    "url": "assets/js/21.2b5fad48.js",
    "revision": "5532ec35cfc8134c38f82922b0e6a60d"
  },
  {
    "url": "assets/js/22.8598131c.js",
    "revision": "dabb7dc42d4199c6e566d20a90116320"
  },
  {
    "url": "assets/js/23.7b074d40.js",
    "revision": "9ac1b3fe72a2bcd9e32cc4c5e0a61493"
  },
  {
    "url": "assets/js/24.ebcc9346.js",
    "revision": "8e3486a7c246d46c79701c1ed3beba99"
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
    "url": "assets/js/27.6964649c.js",
    "revision": "fb26c72862f2a70b365d1b8dc1b526d4"
  },
  {
    "url": "assets/js/28.8413696f.js",
    "revision": "c2a3f59bb47d44df96d65ef0cc00c9e6"
  },
  {
    "url": "assets/js/29.ebdda9a8.js",
    "revision": "e2f42a971cdf4f35f18b3671c2c1434b"
  },
  {
    "url": "assets/js/3.893ca284.js",
    "revision": "fe3340e9fbd70a11326bc89978f9c955"
  },
  {
    "url": "assets/js/30.adfd2589.js",
    "revision": "71386161e6e4d6d36fff66ddd83ce7e1"
  },
  {
    "url": "assets/js/31.a90d51a1.js",
    "revision": "ed230cad0d1006ed9ae7e660172bf457"
  },
  {
    "url": "assets/js/32.3f29b76b.js",
    "revision": "371cb578e728d706f5bf8d3b50d38c31"
  },
  {
    "url": "assets/js/33.8e73e730.js",
    "revision": "eec00d50d87a8cb6484a0e73e030c7e1"
  },
  {
    "url": "assets/js/34.b6484f7a.js",
    "revision": "20b54d2dd002dffdb4386e76bbdedae0"
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
    "url": "assets/js/37.7e6176bf.js",
    "revision": "4f378352d9e48ca9f0e419e1fbfe9ceb"
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
    "url": "assets/js/app.ec749cce.js",
    "revision": "53ad180bb2ab9b9e6b7b6ba19c3bc600"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "92c6b1e1e05b34d8a5edbca3ee1f7faa"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "95aacfcef4597373776e11e92a49abdc"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "274008dd6e29d2a533430906b442f57c"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "e5cf7eabff94cd02f3e28f1fafe95d65"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "a52ed59a356adc85dcb08bdef986d34a"
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
    "revision": "4a28851e563a2cf8e7439b221bf0c0c7"
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
    "revision": "977b6177f88ecad1c6b66ff7ada50f19"
  },
  {
    "url": "tags/git/index.html",
    "revision": "fb042f9a8f78b3d6b3722c2a90e7f1c7"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "d8dcd25304a81ce471a8fe011ad55553"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "a99950739e6760959e27725576bbb1e8"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "9ca044486f1806ef1445b76ae69d6d62"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "b4f81709bfdc887a37b657087164ed11"
  },
  {
    "url": "test/index.html",
    "revision": "cd6563dd376b041ecda353b12880bb5e"
  },
  {
    "url": "timeline/index.html",
    "revision": "ae9b97c643624753706cec1cbca01a3f"
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
