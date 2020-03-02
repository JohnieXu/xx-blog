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
    "revision": "3f745e7579b09af57bf0708e9697e43f"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "afc9069cce871c43719f0dc957a22345"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "e328b67aa6e1f253129e57aad2abbf17"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "236159870b1ff259e93fe67fed7bc7a5"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "1f539f27c2edf6c7bc97d01895ff04ef"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "ef14b5eff48dffab99e9a9e8a65d9759"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "f506048438b47aed3f4db58378bdae86"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "4130fb9c2fdd2e41c8ab88301a433717"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "fb7cb89d68e038f3429a994f5549e6dd"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "ca28b220b6521c56d164925377e4f6b6"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "44f82f8752995e316d41b21c93279393"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "6759b6e5d9c59004724f9ec7df884a07"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "c3bdce658b1c4ece4253d5ee54e0d307"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "305fbbd778867a12405afc19f7f68795"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "3854c130ec4e810b7119b853c6e45ab1"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "6141dc3739b85dfa0d804c160e3accde"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "e47c27bca72239bcfdd9edd7c7a2a3f6"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "b0b7159ba362d5298d00cca11e718715"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "71c0123c245be76ba4823fdc2a6cacab"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "82212a68e10b896c4eae59cc6887c60f"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "2add5c598c3f86ca60aa67ed5425973b"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "9e0be28a685fe77f67d335b5dd60f102"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "905111ad00d57b442fe3ef03a41f421f"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "f7cfc4518751904cede22f8c5044aab6"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "e9c6b9c56e4019cf348d4e9d1cdb0980"
  },
  {
    "url": "articles/index.html",
    "revision": "e01cc237f3e94c9bb18b52a6635e7f48"
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
    "url": "assets/js/33.a943c027.js",
    "revision": "2c326b71e8b109395431207d3101406a"
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
    "url": "assets/js/app.1d02cd2b.js",
    "revision": "e3457089464e7536e75a8824c1c3194d"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "1a9a54c42c6a50261a5d600d5fdbf401"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "2aa1b60d24b3a72e98d448d1045b3512"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "9f12e79733a70e417037b446bc444be1"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "ae05b3cc28bcb748daa087f2efb1b29d"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "571a0995eeb643c10c06002e3479265a"
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
    "revision": "074eb923a4cae474b3361b1658020bcf"
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
    "revision": "4dfe545f368d51091da3c4d0a5aa2122"
  },
  {
    "url": "tags/git/index.html",
    "revision": "c45b82327bad4c7109731a906d28cf10"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "80fa998842377147df8aa274fa96b17b"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "50cc03d2ae06e80e4aef30315e18f3cd"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "9d88b96a7b505c16887f30240bd139dd"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "24f884ca2e9965346cd0843302c71633"
  },
  {
    "url": "test/index.html",
    "revision": "35cdd6561da103850a56a24f28dd3193"
  },
  {
    "url": "timeline/index.html",
    "revision": "6be2223765dd9c76dbe546270a3641f9"
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
