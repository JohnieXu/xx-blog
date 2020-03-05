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
    "revision": "e1eab24b750bde9e2178986bb969225e"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "deb8cbba74f23bd87490abd3f918321d"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "6aed93772f619458d266d9b51c44dc53"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "dc04ac6eca85f277dc3b6dbd2bf12929"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "18d2e25f46258dee347967a4455e7de0"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "034d79d1f441557816b85397c22062ed"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "b241babd3f0e0d510eb188b4304e3241"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "84ff3f89aac589a559633de4dda4e5a8"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "68c67dc6b20fd0677f13bfecad5ae9d3"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "cb840ce02eb40e462c5212a382dbc59b"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "5c247c7030b778cd8f4052018499627f"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "4df3c360ccd2a08878b0813c1e4eff63"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "74f3d5f1fc7095fd8f7f2f057bc35070"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "4d40a0eefe3cab4d6b3d2de687475b6f"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "fd99c926eb6eb632b6cd83f6132f6e8f"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "6bd1258dd0ac1fe337d6ed2676531fee"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "bcc58b52c757aa1a6fbde7ac969564a1"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "21a8c2fd3f9678762eed282cfb350cb3"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "7afc229bd295a573732b1b470e01f842"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "a97d0e4dba98fa29e484b89f65762e4f"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "5ff9d6c57dad44f7daae965b6c3644f0"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "a660f0bf2a319320322b35d660176267"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "2ade933ca0659adb9bde00f2f4657dd0"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "2ea072192f5a7b7e9340966e71dfc98c"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "96a9f4057266a310d51185bd5a1a5206"
  },
  {
    "url": "articles/index.html",
    "revision": "8e67659dfaf901a741ed747aa3151686"
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
    "url": "assets/js/15.6f5170b4.js",
    "revision": "889bf54e8f661c2d18bb44ce2066b47d"
  },
  {
    "url": "assets/js/16.e234aa69.js",
    "revision": "7e9245c35ed6b09c72c33ac99a80a481"
  },
  {
    "url": "assets/js/17.72f2bf38.js",
    "revision": "2a87e386df9664f48de50d6f0654a66d"
  },
  {
    "url": "assets/js/18.6c35063e.js",
    "revision": "874da329df0b89409423506f334090f5"
  },
  {
    "url": "assets/js/19.736dc389.js",
    "revision": "b1d9f7f8beddbfbdaa41d629250fb660"
  },
  {
    "url": "assets/js/20.cf2fcb7c.js",
    "revision": "0a7e9de74ffc5102ffc6c0b42b6faf86"
  },
  {
    "url": "assets/js/21.ead23de0.js",
    "revision": "d1678ffc3714b7f3f577557c5ebf6be1"
  },
  {
    "url": "assets/js/22.7f729023.js",
    "revision": "e798b4db13e7f36cb2cc1ad1369c2a00"
  },
  {
    "url": "assets/js/23.7b074d40.js",
    "revision": "9ac1b3fe72a2bcd9e32cc4c5e0a61493"
  },
  {
    "url": "assets/js/24.97671b65.js",
    "revision": "74acfdff949b4694ed05e5f56783d704"
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
    "url": "assets/js/29.ebdda9a8.js",
    "revision": "e2f42a971cdf4f35f18b3671c2c1434b"
  },
  {
    "url": "assets/js/3.893ca284.js",
    "revision": "fe3340e9fbd70a11326bc89978f9c955"
  },
  {
    "url": "assets/js/30.695772b5.js",
    "revision": "a339e1321185073aca02145feeb8c008"
  },
  {
    "url": "assets/js/31.ba29b257.js",
    "revision": "6ff6658550e0dec1a75b6d8190a65d0b"
  },
  {
    "url": "assets/js/32.8fa033e7.js",
    "revision": "10bff36989bcc846956f3d4da19593de"
  },
  {
    "url": "assets/js/33.8ee816b9.js",
    "revision": "9fd1f90aa2cb9d38188087e30ddb6edb"
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
    "url": "assets/js/7.8ca37541.js",
    "revision": "acc697bf7f2859c02e9ee009b87782b1"
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
    "url": "assets/js/app.14df399c.js",
    "revision": "db50d2866605a6dc9806f9de1d5697b1"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "8926cf4eae98224e8aba18a08b8ed79d"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "cc4370d66f8a5ee8436d421af3d926a9"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "1af65382ca3c0f9de353e1bea20424e5"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "e64fa467ab9dbf4f333410634b99478f"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "8f6c6f6b962372b0456a34b6277874b7"
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
    "revision": "77b81e74217aa1865614cbb776fd244d"
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
    "revision": "6d65dd744bb350b3e1a390a59113aeb0"
  },
  {
    "url": "tags/git/index.html",
    "revision": "075581da74187bbbf5be04f3582a1672"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "12852786d8e6cdb1fb250fc551b16b68"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "e5304f574ae5bfd0b83d857b351e93e0"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "6f00b82a45df98eadc3f22ff7e70acc0"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "78e5718935b7963150916c7c85693b5f"
  },
  {
    "url": "test/index.html",
    "revision": "4688a7c1e969fae6e52e84af77f941e7"
  },
  {
    "url": "timeline/index.html",
    "revision": "5f1c14fd911d1343aa96f8f1719d16af"
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
