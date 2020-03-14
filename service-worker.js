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
    "revision": "1d2990e7d110aa983058643e5e08682e"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "c4ddd80040677750604135b6bde21915"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "24d62f414ee9c80cbebf69febf898b24"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "a23fb2cfc7663b8f863a98a3dabeecd0"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "5f986e21a141acda7f5f62b4de6121cf"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "cf805b8923481dd85fb580766e392be3"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "98c0330279e94364d4b07afafa79eab9"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "6528802acf0da48bd9fd1c61c632b955"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "ec3ba5bc70a6156699cad98a38bef707"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "862e4d7f059329fd8cdccd174aba8f1e"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "9008c0d12f89d06baa8b2308af911bd6"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "65e44392228aeed4ad15de8e78eebfa7"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "43656798b2cd22f0b553b04c28c08a3f"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "c9a945e480201af514de8efc71bccb0d"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "ed70ab9de990756752ea921d5eae84f0"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "ceb2fb64e2080ac469857bd4bdb418dd"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "1d45dd8bc9168a3b20a9db6b727753b3"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "8b69e46c153f5714659fc28324a7e393"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "3e14b35c05d5bbdbad14758509a05729"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "25dd82a3f447eb24b4d4e7949629a288"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "b74d9c9111b4edbc24545946011d5031"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "0f4b1a1f10932473464c6da755eb85b2"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "326a423ad6176662be98a005ac7c968c"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "b929bd8817f0f3c901660472f51ffd69"
  },
  {
    "url": "articles/index.html",
    "revision": "c7435fc11b5809a5c938c7d0adea6948"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "3c6111c3bb415100f63d08386dc26dc8"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "c1fe74783ce1c9d68b9931ccfccc7c2f"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "568094f7a91ea60cf848f50fd65d3bd4"
  },
  {
    "url": "assets/css/0.styles.7100df58.css",
    "revision": "d6a4bf30c9006b7f97a03e451f51e202"
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
    "url": "assets/js/12.ff4ad064.js",
    "revision": "6bd95248b26911a53ea8f1c73d96f6b3"
  },
  {
    "url": "assets/js/13.db6d3f5b.js",
    "revision": "5b8c26aca65d69fd8b4e5be3d31074bc"
  },
  {
    "url": "assets/js/14.db61c49c.js",
    "revision": "c55c6fcc511cc75967cba35bec1d192e"
  },
  {
    "url": "assets/js/15.ff5101d9.js",
    "revision": "915abab7e53389d4fe933c5d3152746c"
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
    "url": "assets/js/23.cc819cfd.js",
    "revision": "81027f8a1a63fb33604bbd95f519467b"
  },
  {
    "url": "assets/js/24.93dddc08.js",
    "revision": "8b3a1c7c9ad33f7836bd060b4ca20185"
  },
  {
    "url": "assets/js/25.798133e1.js",
    "revision": "d4ce11a3570a730decc15109ecbd33e0"
  },
  {
    "url": "assets/js/26.d6bc45bf.js",
    "revision": "58375acfe1ef19f59b3304817ed0bc1b"
  },
  {
    "url": "assets/js/27.e00cd156.js",
    "revision": "435d2052a2b590dabd0dcbe188479653"
  },
  {
    "url": "assets/js/28.f7c66334.js",
    "revision": "3ca5e209f91cf199cb3c6bc9030119c2"
  },
  {
    "url": "assets/js/29.95018992.js",
    "revision": "405aecd6b4b81c23e80aae116700313f"
  },
  {
    "url": "assets/js/3.5e08ee06.js",
    "revision": "8b08a1714b514bfc43643e5a013172a4"
  },
  {
    "url": "assets/js/30.03c52e47.js",
    "revision": "ce43c4fca9062e24133b666977ae48e3"
  },
  {
    "url": "assets/js/31.68717fea.js",
    "revision": "926772c444979c44f511d0a746bf0648"
  },
  {
    "url": "assets/js/32.27c951ce.js",
    "revision": "db495c8dec63b16f8de213fb76edec23"
  },
  {
    "url": "assets/js/33.33efd3c5.js",
    "revision": "f7fa0549e4d8851cc01174ec35997d00"
  },
  {
    "url": "assets/js/34.e4a167c8.js",
    "revision": "ccb095a8a14ace869235ce962c8d8ead"
  },
  {
    "url": "assets/js/35.2c701d01.js",
    "revision": "66d8caf0a3b0163671c9df3a92ffe9db"
  },
  {
    "url": "assets/js/36.c8195341.js",
    "revision": "3868e34d47a4c6ddc92c18a6e2b2e96f"
  },
  {
    "url": "assets/js/37.9087bc1f.js",
    "revision": "ed6e4a159f07c54439b6462a11b591dc"
  },
  {
    "url": "assets/js/38.79295cae.js",
    "revision": "b9b0cca37e7f16bcc55bc5caf878b616"
  },
  {
    "url": "assets/js/39.087ec60f.js",
    "revision": "eb1bc9f81b1a6ad9ea727239e5fb87ed"
  },
  {
    "url": "assets/js/4.edd4f908.js",
    "revision": "fe6ad36e70f24023654bc8a9888ecddb"
  },
  {
    "url": "assets/js/40.43aa8605.js",
    "revision": "ddaa2d3f9f5b2b9672d2da9793c1d4d9"
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
    "url": "assets/js/8.bbbd9612.js",
    "revision": "06fcbfce2fa8b1041f64fb59872d7797"
  },
  {
    "url": "assets/js/9.c504dd1e.js",
    "revision": "8ff8987de3f3b5072fd28d96380d6c0d"
  },
  {
    "url": "assets/js/app.c500305e.js",
    "revision": "3aff86d644f94489d30af24753122009"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "b71887439c9d828f85ec6a12b738e868"
  },
  {
    "url": "categories/index.html",
    "revision": "4799b0b7241d29c94f73fb687c1a03eb"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "ef3cb11841e3799ae3b201132f8d7d29"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "391f1fa79077db4ed1de6ea01b5f41f8"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "fa7bd7411affe4852fef307a9c77e8a0"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "c232f6ecf624bded048c3064d434dd35"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "e8429251fc6529bcb4f2e2dc3f102038"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "b9877b03c45dd5e77d9f79b66c4400b1"
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
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "0190c2d6b940734297ececf90e994de8"
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
    "revision": "d66f0d5fb62cfff64d6fcfb4335add94"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a88e64ff28df4ed83bb8dd2f3634f833"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "d74bcd9e51b95933b737314355d97603"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "bfa1c420f4cfbc6eaaf3934136e1d43c"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "5485c56ae1919866b1b2b52b29bf0b86"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "d44c8061e6b6e55437c9446c5e8f52a5"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "8381ead30e2d316ff7926501401f51e0"
  },
  {
    "url": "test/index.html",
    "revision": "ed2979fb0b82964738f45f335da54ba8"
  },
  {
    "url": "timeline/index.html",
    "revision": "f663baa45eea540d16af8c6ba2ff0f38"
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
