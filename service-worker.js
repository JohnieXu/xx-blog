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
    "revision": "cfbe274472796a268a91691f8325107f"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "799e635430f515f631e011c4376cf627"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "145edcc53c5f811561869a9407587a6c"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "fa660f2eaffc734c36f54528e6fa66ec"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "373046669f99ddb3e53b87b00c90495b"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "ef516ecd4ec20755c512d2d391d745d2"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "849e180466f4430a5eda638df0e04003"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "2d8e9980f53f6b7f6c27f9ac84a20500"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "0be37f35b64f9bd1aa47a24919bc8b1a"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "77a490683597ae7b379b8694e9b85c01"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "877b17cfed73e7681455687ea66eda4f"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "a25b9773b9616204fab913a8c2e2a4fb"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "d4afdea994b8b13fef6791b35353f837"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "7198330ddb5e4496888714a57c7a02da"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "5394e6a38bff8373101626b9a1d6a315"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "a5b1ce04012ce7dd3e3c048c05005b3f"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "33633884c571eb016b030635857f57ca"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "e944f159d9f490463d0018f5afa347e9"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "f3dfb619b7011adbc6f2ec6087d66e80"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "215058166807b5495291a7f57638d4a2"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "c0b72a895561c161ec7bcdfca6dd71aa"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "6482cdcaad675a235e49804f36571866"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "4a78e28889cb4fb8605f148bf55f707e"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "ea7b6949893e4ae23269c5f82e6e2f99"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "fd4885789e626088b3059c5648b4b832"
  },
  {
    "url": "articles/index.html",
    "revision": "61e89c3243b0e2a52842c4a643576c26"
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
    "url": "assets/js/17.22f61a60.js",
    "revision": "528bb1731f9f71c430fc8775ede86787"
  },
  {
    "url": "assets/js/18.fb2039b3.js",
    "revision": "838b5d155e91239a47367d21c5b5a5a3"
  },
  {
    "url": "assets/js/19.81d81e5f.js",
    "revision": "a66daf105c418a5172df5420329fe3b3"
  },
  {
    "url": "assets/js/20.b06e513f.js",
    "revision": "f64c3293fdc4cf17a2c40b787166bf0b"
  },
  {
    "url": "assets/js/21.a67ec816.js",
    "revision": "432477ef62ef34f5de9346587a5e81e8"
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
    "url": "assets/js/25.ceeaf4ca.js",
    "revision": "d73ef18b6b0d0369a953ea7fcd3b317d"
  },
  {
    "url": "assets/js/26.bd802d79.js",
    "revision": "2ac54525e57d5f5b543c9df0e0aa93c1"
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
    "url": "assets/js/34.3a2fdf4a.js",
    "revision": "c54d9031fa720727d72a930f2e7ebde3"
  },
  {
    "url": "assets/js/35.28cd3251.js",
    "revision": "0b864dfe459cd701990f0a236f6aae71"
  },
  {
    "url": "assets/js/36.03f407ea.js",
    "revision": "d66ecb6576184324551296c1f4c63a80"
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
    "url": "assets/js/app.3e767563.js",
    "revision": "403e07acb34a844ef7a38d1d5e964e4e"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "5e34fc0ee9bf5602a2d58e7ab6fffe9d"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "8fe5f0de05e43e5b6ed6a3fe6ecd95f2"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "7dbd9a284ba916bec72c5b7bc3d867d7"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "b86003a52463a7cf386446756e6674c7"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "8522caadbb09f2d896a01f6d8c7b144b"
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
    "revision": "16775f6d92e5558031aa895826ff7d18"
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
    "revision": "f32ea3a59e6b14f3e876171a77ca0069"
  },
  {
    "url": "tags/git/index.html",
    "revision": "22360c345a64c1e07c7765767bbbab30"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "8e954efe008e2184e4e28d9d4f71646f"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "54a3670bb99cbd5f3da127c427c5a580"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "deb7d1f4555b613b9ce194d5140da8b3"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "a5bfd94dc86adf66eba1d123c61ecdd9"
  },
  {
    "url": "test/index.html",
    "revision": "751a9d09b7ce61b1e1995d3d464bd5b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "cd02c7bd7fc953ac72a0d57340065d8e"
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
