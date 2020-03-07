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
    "revision": "7e4e7deabcd6a09df0a4ed62f8fa6673"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "6e94cf6467f3af901c525a19121be4b1"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "687a49371b34a59b533398fdbc46c210"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "b145196e71c91c4a1f587746d08b9136"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "5ab9afe51f52b487981d5f65a58b6b37"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "91fd2aec6ea36c7829880c9c7e59ac3c"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "704f55f6e382e1d82320cbf44e28fd34"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "1081b652fc85cb09b06863b954ec7669"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "e0572b80c41eb027ae470b7da982c134"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "6e97bce96b0167d9a8ea52fa504de24d"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "2e5774baf6f28c8d2ab8e49689b81cc1"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "39c518804e392b368f325789f35a5c04"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "8e19ec7832477e250f144d2c7d61b71a"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "9aa832d8d764ef7a82261a7157116ac8"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "58873b7be4612f6b368e7ed995dad73a"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "a2f5c98cae9a78fe8f8283c5065a12bb"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "d18facd052112bb52d69cef00c073f75"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "8b2476f375670b530a4101937bb79b7d"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "82e20fcafb5e6f67e1ed5aab21d0e157"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "ad20546b590a4f0e3f5da2f1363e0b79"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "4415a9d3212e6c921621301fe3686d7d"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "fc596c07ec1188808d6f85e545c0c210"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "0333c81f072d92ee07251958164c0a95"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "c6ee08ef5b3d05c6dacf92ce7d76738d"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "27dcb69cd008f4d311157a7f58e28821"
  },
  {
    "url": "articles/index.html",
    "revision": "023525bd38d31f7cfd11c28e82a6abb4"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "d16cea433649f1e4be1b254121c240d9"
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
    "url": "assets/js/12.c75ef851.js",
    "revision": "a608ce50b2dfa008bd97d18fabfec9e1"
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
    "url": "assets/js/37.ad4d9d23.js",
    "revision": "5a6e0f48e11cd26d5afc5ca7eae0c7ca"
  },
  {
    "url": "assets/js/38.dfa45e22.js",
    "revision": "f9965763cbacd45ebaabb6b4e40e212b"
  },
  {
    "url": "assets/js/39.5cca44c5.js",
    "revision": "712746f1b2f7a24b55b80bc861380ecb"
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
    "url": "assets/js/app.20ab0b90.js",
    "revision": "4c2453157402ade755fb4dbe7c64c5a0"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "3ce0bd623363cffd874caf70f66cc240"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "dad310a7a72950e49171a826a388c4d0"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "0da8123082e932e38a7364d699a1eb78"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "ee5a1e52ef47d1b0e8abd9141cf2bda8"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "a35ac47c7aa5b735c88e6474ba6b8fa0"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "927c105e99b856f0d516564031f88ce1"
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
    "revision": "258db3c5453916d7433eeeeafd83f5fe"
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
    "revision": "7bd19063d4f9ca25ebac0b7df918a57f"
  },
  {
    "url": "tags/git/index.html",
    "revision": "e8d0a2925fdba299fcb53bbf7764eade"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "59ad9506fb1c29652594a51364403fd6"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "ed22afd1b72466b194602ec4c0a8c62b"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "6529b7d82fe3734c8866a0e68dc82c4b"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "216dad2f01f4973a6125b8196d432934"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "9a0156b81a4a68866a6cebf96eb16b74"
  },
  {
    "url": "test/index.html",
    "revision": "aff2eb32b433ee8796d53e8cb1826431"
  },
  {
    "url": "timeline/index.html",
    "revision": "a74801abe2ba1df7561e4631fce96d75"
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
