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
    "revision": "c565614df4303c883861ea5c5e8ecf34"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "e8313940fb250c19ed25c9bebadc62fd"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "d5f1620eb8833808cd1bbb182cd9b4cf"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "4c9dbd73896e540bf72af709f9515263"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "d9c4bdaa5528439612f6a2eee46a430c"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "b7ae35fb83c6faa9d65ba16c090c2446"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "09df3f55e455a32bf0d8b4f261a76a3e"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "b54c5da7968724bd21c83504718ec1ab"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "756e712675e88693658e27736fc92758"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "0b6357b6a6dc9b1ae4a02665257c6ca9"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "428f4df6c757c1d6750696b4aa49a2b3"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "50d125a90b38af4f5c4806033fe64ac1"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "f99ebc04bd98f20354a3368422e5ae3f"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "3f5195695f364e039b4728dd3498ebe2"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "e0462260345af6e7e5e1ed878ec822be"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "fffd87d8acea97c115d5dc1eae3fd74f"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "8e9a4db6d9641a11009c22dc78bcd51d"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "c72aaa488ec7bddff449938c3691a436"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "2dd1bf3e9b3a34b538f0e5cc3f236aec"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "1036f4770ce5d472fb049af2ca2065ff"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "03b8aa8ecf6f151ae29dc49ea6f0b2a3"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "2270c067b4c0940bd629ebf7e21cae04"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "cc4f6b066becdd867274719322ee25ef"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "e0e8d89b427eab9c685d6bfb478d31f0"
  },
  {
    "url": "articles/GO/index.html",
    "revision": "f773585c2b86a189815c927a66d4ebba"
  },
  {
    "url": "articles/index.html",
    "revision": "11096e46bbff853f7afaf90c7cd8e19d"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "fa2d484f84d23dc60124741be64e1d29"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "04752ceaa962bb37c3f16175b4eae8a5"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "032ec9e6fcb149a0515577f50cd0a564"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "4153e08f796975ae4ff1af29bbfb953e"
  },
  {
    "url": "assets/css/0.styles.f6b7f6c8.css",
    "revision": "2b2d40744bc1c4d6d59e17f5501444ce"
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
    "url": "assets/js/1.d1785368.js",
    "revision": "cd91ddf663d3ddc630f761ebb13df99c"
  },
  {
    "url": "assets/js/10.f73a57ef.js",
    "revision": "4d4df32634eb55fa322d15289f92af41"
  },
  {
    "url": "assets/js/11.d28464c6.js",
    "revision": "f60b1a10f4103308aa941da3722df03a"
  },
  {
    "url": "assets/js/12.ace34f29.js",
    "revision": "0b35c1424a517625201a7c961a28a3c4"
  },
  {
    "url": "assets/js/13.cef15fe4.js",
    "revision": "a726af830fc91477942083e80eefba63"
  },
  {
    "url": "assets/js/14.dafcbd6f.js",
    "revision": "965fe0ee01066d4c73323f97c261cfa2"
  },
  {
    "url": "assets/js/15.6a318fc0.js",
    "revision": "b1906c80a9534e248dd3356632f54dc4"
  },
  {
    "url": "assets/js/16.f9b4bda9.js",
    "revision": "efc3bf243368c723f0d5910f217f0721"
  },
  {
    "url": "assets/js/17.6f0ee47c.js",
    "revision": "35c376538b920fce25ba1693d14b70e8"
  },
  {
    "url": "assets/js/18.53d8298a.js",
    "revision": "aae05c54b3a6cea640b837f1a670d735"
  },
  {
    "url": "assets/js/19.acc495ef.js",
    "revision": "6325051524af6c0badeb685be6f8ba85"
  },
  {
    "url": "assets/js/20.01d8fb0a.js",
    "revision": "ac061b8203fd24b264552643c1eb75d7"
  },
  {
    "url": "assets/js/21.bf1034b8.js",
    "revision": "534738d776bf905ca4da6f5e3ddca158"
  },
  {
    "url": "assets/js/22.91f18d29.js",
    "revision": "847000c81e529ab253a89b0f95f95705"
  },
  {
    "url": "assets/js/23.87ccaa8c.js",
    "revision": "2f14b064f061d64538538cab7c64f26b"
  },
  {
    "url": "assets/js/24.ea563187.js",
    "revision": "fba73ea1c52d2eff0ce37f347ba38722"
  },
  {
    "url": "assets/js/25.6b5bf3c6.js",
    "revision": "06c0875fcd82ad6275f6cc2c7f2c0ddc"
  },
  {
    "url": "assets/js/26.9d287f36.js",
    "revision": "9b399a194da4330281adb1e44f527bf8"
  },
  {
    "url": "assets/js/27.216870be.js",
    "revision": "7bcd148eb0c808f02c16fcff80d19d93"
  },
  {
    "url": "assets/js/28.cf9b136c.js",
    "revision": "9cb37a68615ff1c308092bcccf2e0419"
  },
  {
    "url": "assets/js/29.102bb796.js",
    "revision": "52ca105480f093d3f0fa2968852aba91"
  },
  {
    "url": "assets/js/3.c3515d07.js",
    "revision": "bd34d5a8f093630262974d1b46429a02"
  },
  {
    "url": "assets/js/30.f57a0225.js",
    "revision": "da603451ac379349a5fdfb8cee2a1894"
  },
  {
    "url": "assets/js/31.677d1514.js",
    "revision": "a9ed2e8d74bccb3f32bcf27f18d97963"
  },
  {
    "url": "assets/js/32.4c6e4c5f.js",
    "revision": "f807857fbffccedef636221c38abe34c"
  },
  {
    "url": "assets/js/33.c588ff93.js",
    "revision": "4c470b172389cfbea6440d99c6ac45c4"
  },
  {
    "url": "assets/js/34.262ef1da.js",
    "revision": "88e51bd590c4f5fb870fd0f6b5f6517a"
  },
  {
    "url": "assets/js/35.e2f77e60.js",
    "revision": "499a12e982bc5876a1f1f7340edbf8d8"
  },
  {
    "url": "assets/js/36.b02491c3.js",
    "revision": "95a5ec3418ef4d4e2ad6cff346b8ab72"
  },
  {
    "url": "assets/js/37.f6a7a116.js",
    "revision": "ffc07b910f6f6eaf645e21cd306fc171"
  },
  {
    "url": "assets/js/38.6e67e1da.js",
    "revision": "0ba95ac63f77254b1360b88e126f1137"
  },
  {
    "url": "assets/js/39.a29d61b8.js",
    "revision": "1a8d8fe24d9daf009c88ab8d62a0b4bf"
  },
  {
    "url": "assets/js/4.662e2210.js",
    "revision": "76390050a78a4cf3f22fa774b0472c3d"
  },
  {
    "url": "assets/js/40.206b983d.js",
    "revision": "c3fd74ba79ff697f191bafb7d57674d7"
  },
  {
    "url": "assets/js/41.776d8777.js",
    "revision": "e7a884d9ae736d8dee8904512cbd6226"
  },
  {
    "url": "assets/js/42.26e59d1e.js",
    "revision": "9e8f23ac394a8913f218a2d47be8e169"
  },
  {
    "url": "assets/js/5.8cfa9548.js",
    "revision": "8249ab017293c3332dbd0021e32609d7"
  },
  {
    "url": "assets/js/6.9b749c1d.js",
    "revision": "2ff9e14097ab081c7350f3dd087ef28c"
  },
  {
    "url": "assets/js/7.5c854ac0.js",
    "revision": "3680a19c88b561ddabd5291503013f89"
  },
  {
    "url": "assets/js/8.0b4e495c.js",
    "revision": "6a4d495874c61a1693f08116a27f9a4d"
  },
  {
    "url": "assets/js/9.07b4ea94.js",
    "revision": "21a813ea781882e957e0d0b940f219a3"
  },
  {
    "url": "assets/js/app.5b11a96c.js",
    "revision": "39b4e09046126bae3a0eb1d70ee407ef"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "a6044de3cad5abf8de809bc13e74ccdb"
  },
  {
    "url": "categories/index.html",
    "revision": "22cb2a7c20dea9ecb91d4df083fe1d18"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "e14bc3fd963922a8434c6814b4d4c1b5"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "ffa464be60b24a17768a7f77d83955a1"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "a4ec431e834a87caf7da64ada0219482"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "c20e55ded234db4a3de4a39a308f39a3"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "4d99b61a771699e11458299680f5da80"
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
    "url": "home-bg3.jpg",
    "revision": "2fc5b6ddd301cb381530ba4fbe76a233"
  },
  {
    "url": "home-image.jpg",
    "revision": "1b545b6cfea48891b376755c59362868"
  },
  {
    "url": "index.html",
    "revision": "7635bbeb9ed55ce9d222ffe7a72ca6fc"
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
    "revision": "f79558eb353341a6f38446b2d4c89e94"
  },
  {
    "url": "tags/git/index.html",
    "revision": "3c73cf464593861db9ec1fe4c6ab9126"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "32329160b4d02ccc6765a247d8a4c3bc"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "dd1ae4492ed192efe5d7872d1e0460df"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "8a844171053efc9ee840813d7f2fa41d"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "6435f8b1633249d989d52a4503432b82"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "14a7fae65b9c9020976fd007231a13eb"
  },
  {
    "url": "test/index.html",
    "revision": "1101f8cb39b6d5046254cb8415777dce"
  },
  {
    "url": "timeline/index.html",
    "revision": "89abf671b82f95a92cfdc2279a679e7e"
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
