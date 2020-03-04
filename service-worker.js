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
    "revision": "4d3d3891455ecb2e87432d832b0582c8"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "4dd777dbd2f6493ee3fdc6ee794cd201"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "471565fffdbc09c708f49a3253de79eb"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "49146d775b760552772f2f6fcba8b926"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "74d427820d053116934f2c1e4665b8b6"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "3f8f23337b87f83dd7f5fd865722935b"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "3e8406995f23f4e573d848d29d114266"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "a20d27da186a977f7fc1270c0f126a94"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "ba31f9e4a503b58975b012c2d2abc0dd"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "b7e3569861f149e65d13f7aa4574f3d5"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "319a110fa64c50ccdbd79291e2c1a5ad"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "b047869ba5096fa9ca1cafc98d3a2e6b"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "1d3dc7d298316875403495d4e5eed971"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "0465b780c521e62007764cd8fc09d8b4"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "843271046f6093de50725b1b73f0fb42"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "ac8466348bac1272fde4e7a92f9c7353"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "882c26002f1cc938e7dadd2cf7aba2d9"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "95ed82eb70c794413ed63a8ff8d967bb"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "16cd5d93bdb882fe4a95adccc6f5a73c"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "35e0acad6802e5051f116a3dd3cd05db"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "236f67de483e6b3cf75269e34c45b2ff"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "565067f348d3836d43d01c23440808a3"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "e068c7bc8afec72c913b05baeb879190"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "b7373e5d0e0fbd903a1518bc25786aa3"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "e1e84fd216299ea28c2dde4f4098618d"
  },
  {
    "url": "articles/index.html",
    "revision": "b4b89a4a0d6fbe46817cf19dc7546170"
  },
  {
    "url": "assets/css/0.styles.5175eca1.css",
    "revision": "fed1b9ce0087c08f659e97e3d322f109"
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
    "url": "assets/js/12.6390b522.js",
    "revision": "f127bb3c70a7bf380556e870d7abbb28"
  },
  {
    "url": "assets/js/13.952627aa.js",
    "revision": "20d6c804c849e76440fcae61efbfae23"
  },
  {
    "url": "assets/js/14.80abcd9a.js",
    "revision": "7912f0e5630f9247880ea3cc6182a808"
  },
  {
    "url": "assets/js/15.80d18ded.js",
    "revision": "0a3417f200a499a153d5fb1e4f88f09e"
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
    "url": "assets/js/23.5d21dbea.js",
    "revision": "6d9f17c920e307a577f7a1a36f95c6b9"
  },
  {
    "url": "assets/js/24.54c3e450.js",
    "revision": "f5fa37c84753993d82617094aee0b4a7"
  },
  {
    "url": "assets/js/25.c38285e9.js",
    "revision": "e21c1d40f3eea4f037eb6c2567e897f5"
  },
  {
    "url": "assets/js/26.5051d7f2.js",
    "revision": "5147ae2c48d8c1ce0c8c1fcae2949c0f"
  },
  {
    "url": "assets/js/27.b62f3f29.js",
    "revision": "1c987b69cced7df459acb93fef0d1551"
  },
  {
    "url": "assets/js/28.36c7488c.js",
    "revision": "6d73cb7eb7e2c1fbb24542474b74f391"
  },
  {
    "url": "assets/js/29.d9b63768.js",
    "revision": "413779879d0c42362cbfdfa80afecf50"
  },
  {
    "url": "assets/js/3.5e08ee06.js",
    "revision": "8b08a1714b514bfc43643e5a013172a4"
  },
  {
    "url": "assets/js/30.25d9aeec.js",
    "revision": "498768f116c87ff4e80930601f852723"
  },
  {
    "url": "assets/js/31.9d0e686d.js",
    "revision": "c410b74507cb1dff72a6d41cf0ce0891"
  },
  {
    "url": "assets/js/32.a85f238a.js",
    "revision": "50e0a18ff967aeb9b9f71f3765fac7eb"
  },
  {
    "url": "assets/js/33.daec06ac.js",
    "revision": "7d73bad56bb80ec7f4d6130f463728b8"
  },
  {
    "url": "assets/js/34.0ee3792d.js",
    "revision": "53fc3bb65a7b8e525e1fa3817a9feb5f"
  },
  {
    "url": "assets/js/35.2f453f2a.js",
    "revision": "c8f511bdfb3123f90458f835169b1e38"
  },
  {
    "url": "assets/js/36.2e01727f.js",
    "revision": "e75978d41956de9dcd2d89f70d18f83a"
  },
  {
    "url": "assets/js/37.8c91257e.js",
    "revision": "2ebb1aa09abcc23c53999f687a9ea6b8"
  },
  {
    "url": "assets/js/38.116f5f6d.js",
    "revision": "10d3c2f0fefe1c5903a46e039408e3d7"
  },
  {
    "url": "assets/js/4.edd4f908.js",
    "revision": "fe6ad36e70f24023654bc8a9888ecddb"
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
    "url": "assets/js/8.da3b749d.js",
    "revision": "7a6aa0390520c7ab4ebb31369a091e6c"
  },
  {
    "url": "assets/js/9.33a037fd.js",
    "revision": "739dc2a57e36956bbf6d2afbf94cef23"
  },
  {
    "url": "assets/js/app.47491add.js",
    "revision": "7bd82d44c2d59af18ae52bf28b6d7bf3"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "d8bfc2f40d3780d77385988fe4635c6e"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "433f11b2cdd32a206206a839c90de2a0"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "8fe892fcbffd7b2166b7e48ca981e26e"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "20ecee62ed986f811942d19efb6c2c3c"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "7b1aa3eadab85f06045aae0f7971a913"
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
    "revision": "b15ef86ceac359010c94b3d466dd78c2"
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
    "revision": "ba8470e27e9cbf41f02156d0faf8f076"
  },
  {
    "url": "tags/git/index.html",
    "revision": "9dc0f3477b602f180e3c39e6956b8477"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "f3fcae48280fb898a477c7938209dc63"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "e76d0b2f5799a56703ee5c1349137e10"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "6d7cb5b54073edfa9139774097fcf24f"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "b4a42366f01d2bc9bed20df262f4b28b"
  },
  {
    "url": "test/index.html",
    "revision": "75cb584df8f878c2bad60e021923605a"
  },
  {
    "url": "timeline/index.html",
    "revision": "630ab9cb0b623a55970391a864ffb4cf"
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
