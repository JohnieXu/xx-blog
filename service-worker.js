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
    "revision": "ff96a5926ae1bcc6cd6b2821ac950a88"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "18a2712320404a3b7777a6b7f3f31762"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "2c3d768acc7b784dd5255a5070ad5966"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "456e1d68b7029b56f7dcd574c5da9714"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "bddc352b16f278a895fed49063c58985"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "3f5ac45f0d1b7f2f29cd77dddb21d661"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "87c3d03b9021c752165033d416cc34de"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "f9d51f8002bbb8bc0accf85e1b75ac1a"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "ac1fcc1eae4f4e575be9137b1b6ee643"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "1fcbc6481938a9c127f5d3b2282f2d5e"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "aee00ec081d38ae49eb80e7c23a6efc9"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "6b560bf5a0a8d53471999b39659271f2"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "2ad17a7ffaf61279b4d40b596d8d53bc"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "92c18c8bce1f9fc2bd80e142b78b0496"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "a965b59b2c3d83ded7bc025a73e284c8"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "a0d23808b0e2058b180d8d661084ea48"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "1ed4d007c666293a2860cfed2ff3a0ce"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "2ccf5b59296e76ddc142a6f3a522b6bb"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "2757b37787d204cb81b6c6e424419751"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "1949eebf9c70d0245753c0010e8ad6cf"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "42f2ff0f94faed6eaa67698be128f74c"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "553d961c9d1630a9f07cb7ca9f5ccba8"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "ea15b3a8c83932fc9a41c27a2486ab17"
  },
  {
    "url": "articles/index.html",
    "revision": "5b159b300d8ed03ddff802d2a70100a6"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "405779c9177acb92c0fbd4a5b10d5966"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "9eb533b925282395286e1d808805da77"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "72062facd6c37978371da17b6fa9fae6"
  },
  {
    "url": "assets/css/0.styles.47b9a09f.css",
    "revision": "1cce00e7f898aa335a73fc02a860aa4b"
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
    "url": "assets/js/10.d66ea20f.js",
    "revision": "4a348a86675041fe7152ea81bf8eeb46"
  },
  {
    "url": "assets/js/11.3165da73.js",
    "revision": "e72dd7513832dec82c9391db57249902"
  },
  {
    "url": "assets/js/12.cd4a9549.js",
    "revision": "f8f815894ba68837e15987843462cd97"
  },
  {
    "url": "assets/js/13.a715ded6.js",
    "revision": "2cc6e890600a9ed1a385aa28f541855d"
  },
  {
    "url": "assets/js/14.291b71e3.js",
    "revision": "42123990d9708cecb71a9d34e670276f"
  },
  {
    "url": "assets/js/15.cccb6322.js",
    "revision": "b2c6012de96327513d6c1e1579b2f981"
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
    "url": "assets/js/20.9e19416e.js",
    "revision": "e559d9b3666f9a5b421949d4e61f8b69"
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
    "url": "assets/js/23.cd1881ea.js",
    "revision": "12d6d5d0f2c627afed6c7eda59a91bf1"
  },
  {
    "url": "assets/js/24.c58c0f88.js",
    "revision": "3a190c2c9317881ba0b3fe17a509e127"
  },
  {
    "url": "assets/js/25.5f823c33.js",
    "revision": "d5e895e70ae09d94d272f8ec403e806b"
  },
  {
    "url": "assets/js/26.3aaa8626.js",
    "revision": "f2e6e24fbb84fe1e951b24e62c673c33"
  },
  {
    "url": "assets/js/27.d2043b1f.js",
    "revision": "fc7b1aa3ec5c1cb091f88e4e0a0633b0"
  },
  {
    "url": "assets/js/28.2a5fc34b.js",
    "revision": "a7a4381000705779f1b27010e47c18a5"
  },
  {
    "url": "assets/js/29.a2b476fb.js",
    "revision": "1e9305a5e25a9aa8ba91869879aade55"
  },
  {
    "url": "assets/js/3.893ca284.js",
    "revision": "fe3340e9fbd70a11326bc89978f9c955"
  },
  {
    "url": "assets/js/30.739dccae.js",
    "revision": "79be7b510e1d96ebdd3e2e53991140c6"
  },
  {
    "url": "assets/js/31.58c9924e.js",
    "revision": "7dd7cb18d7dd373bf9cf760df6d2268a"
  },
  {
    "url": "assets/js/32.d331c159.js",
    "revision": "a4ac32eac1ff706cb3b5a86124efcbd4"
  },
  {
    "url": "assets/js/33.a2f03472.js",
    "revision": "46abd30a85c73317e2eebe773e6ed00f"
  },
  {
    "url": "assets/js/34.2ae0251f.js",
    "revision": "1a69a07999304843a5938b59507294ef"
  },
  {
    "url": "assets/js/35.6d620de9.js",
    "revision": "5f5e5529529360074dcf7bf4875ab247"
  },
  {
    "url": "assets/js/36.75302863.js",
    "revision": "4a2fd3cf301b66a24b78c0e32d902fa0"
  },
  {
    "url": "assets/js/37.028bd7c0.js",
    "revision": "7c8ee1ffdae0e016d3aaa7bb7ce5a23e"
  },
  {
    "url": "assets/js/38.7540da3e.js",
    "revision": "2ef19b058de53afade7210b6d47f5bb2"
  },
  {
    "url": "assets/js/39.2413366c.js",
    "revision": "24310acf033462c0f28d62ae7fec5d5d"
  },
  {
    "url": "assets/js/4.ece452b5.js",
    "revision": "94ea75955b529d20e588c6b6d46b1fcb"
  },
  {
    "url": "assets/js/5.d891d5b9.js",
    "revision": "791dbac4e5fd47bec5e9658b439833b2"
  },
  {
    "url": "assets/js/6.bf72c337.js",
    "revision": "bcf7356df511c0de5101517c652b2a83"
  },
  {
    "url": "assets/js/7.d2aec703.js",
    "revision": "cd9249316498dc007d8b44a2a1124bc0"
  },
  {
    "url": "assets/js/8.33a9afc6.js",
    "revision": "588f4c33834e227d683663f2caf4f661"
  },
  {
    "url": "assets/js/9.17e25c78.js",
    "revision": "c3f00cad173f1c422114478fb403a22f"
  },
  {
    "url": "assets/js/app.68bc0576.js",
    "revision": "9dc1c3fe788e1418aeef953c43fd5c85"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "685410d89991b622d55783c12acfe03f"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "e0722508698c30b6a28a0e83487a2e2e"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "18f76e5707bd28297ef9cf1301f85570"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "d9f58126d99a050da88a74927f635469"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "bdbce132cf6d698eaeb762ed2b05a76c"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "8ecb3c338accc8ee5e9b26a6975b74c6"
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
    "revision": "3acc5962caa8b9087afaee3e1d332755"
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
    "revision": "6b9af148fc84887cc8f6106840d093fc"
  },
  {
    "url": "tags/git/index.html",
    "revision": "a41a480faa776e043322362ae5ee21bc"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "f8da61900e21469e007e71433bbf9693"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "62c94e2634550129ac284a28ae1911a0"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "f13b6be124cce63617aa84ebfde7253a"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "2bbc463ff85d8fa65571db0b0d97ab6e"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "1be762640da9fc1c7c8346c8f7d2f990"
  },
  {
    "url": "test/index.html",
    "revision": "0623b9486b6fb655ae221a0c1637ad88"
  },
  {
    "url": "timeline/index.html",
    "revision": "8c44f67a401803cf4af1905c72200cc2"
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
