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
    "revision": "3319f1552f0738a1d1ee0be87574655a"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "c9ba98486d97d318b47de2499b158c50"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "ab224187fe77cfd44e2631e28d4849c6"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "dd40e4098237c926f008eaf6ac1a9e65"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "bf1e221371583e0e856fc9c84d74c2fa"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "d4cedf822336b94817e2e642564deb03"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "1c5725dff021c8d2e508ceb9d9b09edf"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "84a82b7c4611c94dce3bed931c97ba9b"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "65adeac8e5fb0daea8fb6328c25b5399"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "c793b1c431835206ce1974ee91c589c1"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "e23e3d26616afa5f75278ad0a37b1c43"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "300663b049fce4315f2b5850496a9739"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "4b497f65db1cb4c2b6d5401fb0d264df"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "f3a8c4171443bb9e46c0a70fa6dc1e0c"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "f7605d5868281fbc42f16f23c8d8c026"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "1630afb4e287c7c6b193cef554e6bb25"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "56bd3457c345a0f6ef30da3fe195c340"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "5872ae6b46e286e7477324864efb883c"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "f762cc0f92851d7e764ba71d560fc178"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "ce85149ef3ae2037659783f1bf3da6ca"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "463a4db4b6c1f832e94bdff7b999ac53"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "5dd0997139137aba3e1c2ae7c04065d9"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "1e29fe5daa4a30a7bfcc6048c6166e9c"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "3183b86e12a1d126d29543faadc14827"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "54d0a316f00807c81159c3d15c1387f7"
  },
  {
    "url": "articles/index.html",
    "revision": "6fd5622f07f8f9687452d109013ad256"
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
    "url": "assets/js/14.021b0e14.js",
    "revision": "2652a1aec71e1bbe67e5a5b6ff505738"
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
    "url": "assets/js/24.59b6a630.js",
    "revision": "6f68ab16f4bf3e9e5bc917ad592043a3"
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
    "url": "assets/js/27.b868064a.js",
    "revision": "c2a90f1b335b7e73637544fe2a851ecd"
  },
  {
    "url": "assets/js/28.8413696f.js",
    "revision": "c2a3f59bb47d44df96d65ef0cc00c9e6"
  },
  {
    "url": "assets/js/29.89f80285.js",
    "revision": "c68cc423a089e83263bd909d254bb6df"
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
    "url": "assets/js/31.be75d516.js",
    "revision": "a4d55cc4c69376b808e37a7aa3e667f1"
  },
  {
    "url": "assets/js/32.8fa033e7.js",
    "revision": "10bff36989bcc846956f3d4da19593de"
  },
  {
    "url": "assets/js/33.8fb9fed1.js",
    "revision": "4e0a7b3d3074cb76d93e25d218c36fc1"
  },
  {
    "url": "assets/js/34.c1513912.js",
    "revision": "e3970012dd96f5472658e7289f602b65"
  },
  {
    "url": "assets/js/35.edf939fb.js",
    "revision": "9224e103db7dc119982265bc20a33824"
  },
  {
    "url": "assets/js/36.75302863.js",
    "revision": "4a2fd3cf301b66a24b78c0e32d902fa0"
  },
  {
    "url": "assets/js/37.67ce5a81.js",
    "revision": "0053f535bba66269dc245a3acc902795"
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
    "url": "assets/js/app.c7d7b2f3.js",
    "revision": "ffeac2d5f1a72caedd18100fc37b670f"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "e320f1e1006f5bb7dfc6ac4c51e5eefd"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "7330ec29326762ff17ed919d18fbc979"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "b5e93925389621f904638f097c9e2b09"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "45ee425c2db879abd99fd53b7af76c3a"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "dbd75b8f47c4c4154c0d26c17e0df5a1"
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
    "revision": "4ca6a30336f312be6ac10c5b7729d331"
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
    "revision": "06224545395fa09fdac87eaacae0f1f2"
  },
  {
    "url": "tags/git/index.html",
    "revision": "d4f470c1d0db486750def86f3419880f"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "fd645dd1eb62808f755ce17d91e05664"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "2362939e53f6b69dbc07d354878a32aa"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "994c06bdedd033fe391dc18319931b77"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "4140f61520f82652f9a6a364b27e8828"
  },
  {
    "url": "test/index.html",
    "revision": "c49d91451c106fe7cb8eb763385f9621"
  },
  {
    "url": "timeline/index.html",
    "revision": "a29d4a80bfa78bfe6e92632f399dc75e"
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
