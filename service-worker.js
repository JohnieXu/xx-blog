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
    "revision": "2139d79a9e1a5b1a59845294a3948f7a"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "f6c79b01e9509b8c30f7ceb43a973b4c"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "74b2a3ee11e8329150a697b95902caaf"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "0f8ab8179317aac52cb58e7a863ed4a7"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "d5a71a823660529f7a79c81300e2b6e2"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "6ed88d6c4a1f9cd84734fe609013476b"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "e1c8d291153f972c4bb259a928f395aa"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "305d19f25e54dadce4f1886c20eda295"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "4f9182fd63c92d5beaebaf9ad3ab7015"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "69f9eab329d73a4a927f99ad3ca3324b"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "99ed318dcbb77d26651ac891ec1db3fa"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "b8c98cb943605310c0d745e9429c3b03"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "12bd119a2f622046a1b6ea1574c03cf9"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "380a71bebcb54e7badbc7a7c1a951845"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "3aaad9f32499cf03cbdc44cdb3a5c34b"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "0f542b08904a33f91f196ab91098d587"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "02b358e01726bf2f213c29a674a0ae36"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "8aa95065d36358a84c5f5ebbe5ddbd86"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "7c9abc71c4e444fbb095b05daff43bef"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "c5817d2926abd405b965668d4869393a"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "c9214fe891a98176dc43f9f4c556f26d"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "2681b5043ba29c43e1a1b7c57436766a"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "1dcbda9e965a4970b2456752475ce662"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "ccb6ad254fc4679de1e791f9ef9fdbfe"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "d9befc9a10462c6caf98d818c1f763e9"
  },
  {
    "url": "articles/index.html",
    "revision": "cd2b002c81661281a33224c87e213409"
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
    "url": "assets/js/15.6f5170b4.js",
    "revision": "889bf54e8f661c2d18bb44ce2066b47d"
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
    "url": "assets/js/18.3b1284f9.js",
    "revision": "3816568fbeef34a28f8590007ccf1648"
  },
  {
    "url": "assets/js/19.679f48fb.js",
    "revision": "10221687cfb30b91ea3cb1b190ea5544"
  },
  {
    "url": "assets/js/20.c6d9635e.js",
    "revision": "5167d35a856b6baa8e9ba1c108076a1d"
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
    "url": "assets/js/30.7f420952.js",
    "revision": "5df9f5bf0235a4a0731428c5c9bcff72"
  },
  {
    "url": "assets/js/31.ba29b257.js",
    "revision": "6ff6658550e0dec1a75b6d8190a65d0b"
  },
  {
    "url": "assets/js/32.3f29b76b.js",
    "revision": "371cb578e728d706f5bf8d3b50d38c31"
  },
  {
    "url": "assets/js/33.309f4d7e.js",
    "revision": "c4b174e1757fd3d24209789b7e25eecd"
  },
  {
    "url": "assets/js/34.c1513912.js",
    "revision": "e3970012dd96f5472658e7289f602b65"
  },
  {
    "url": "assets/js/35.7e6cad02.js",
    "revision": "2b98ee26fe15b2b6678ebeb24232d2d4"
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
    "url": "assets/js/8.33a066ce.js",
    "revision": "ae7af071b949b88cda7aa48af43e369f"
  },
  {
    "url": "assets/js/9.aa99e1c3.js",
    "revision": "814379924c95a24c3d5a198489919a54"
  },
  {
    "url": "assets/js/app.8972ff40.js",
    "revision": "45859550dba488326cdf02654cfe4356"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "ff3c59dc9aad2954826d29457bb9da3b"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "5325f62acb800cabc02a1e38b11c771b"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "d85b904f51280eac30df38d759e96514"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "f993c2baa666371e761b6222c0c09dc8"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "14f62ca67242123ad102b4a525962b57"
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
    "revision": "19e38398013ba9080f930726e8a42bdf"
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
    "revision": "6f8657f2fabd259ad4d8827f949ea6ff"
  },
  {
    "url": "tags/git/index.html",
    "revision": "91f0325cd0f96c42a5e455d12c1aa5a1"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "6bcf72e02f45f1ba3c0c288667d36360"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "5f1984ffd194c7046f1a821965114bfc"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "245b8e168526b4bc875b3b762bd4d0fc"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "70aced830eec143be9a1e3d2fc220959"
  },
  {
    "url": "test/index.html",
    "revision": "b9a22979f166a382f2c397d150508f7b"
  },
  {
    "url": "timeline/index.html",
    "revision": "ac54bd176eabf61d9e631da810af2f4a"
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
