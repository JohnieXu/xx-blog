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
    "revision": "9e6283629691d01fb76e070e2e52c9cd"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "a073729570849c38092441a0d425aed2"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "a3805e409388b358af6cdabd7c336cd2"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "6aec25c180c2574d5199d7ade35834d3"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "2e0741f28fa494017ad3543b6f8549ed"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "88c51dc565f5dfafcf87165ee6b69b68"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "29ac9875653e70b4e9da0ab8aca4784d"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "2cad01ec1b53be3ffd8419b2cd8897b3"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "0e102524bcf0f6642edfa7255de3700c"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "5c7d9267970fed75e70725a700f9aeff"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "63ce30a0fc3cc90513fa778984c2cdd2"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "ac30c5008344298a6e9226718c0e4b6d"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "6369faf71affec61f9266db9032c5596"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "8b25024d3145d66b503f287bf305a5f8"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "e433554a724eea1c89ae631fb0bf1f3e"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "1482f781daa7616ec9faa3336b63c149"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "ab88dc1ad81a44fb97c811ea99046914"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "2829ad5b085452dac9828c795e91b8f3"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "ea98ad562b56301890edfd42983d1370"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "a0137f9cbea1f6380573fc1a75eb555e"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "2fc8bc5ef2ba24adc19c59152aad671a"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "73d30acd81b2f6e7696784717f9670c6"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "cd97d2f9f206d4a8847473dc8bf11d63"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "94234f92e55b8c0476b1e1f350b1debf"
  },
  {
    "url": "articles/GO/index.html",
    "revision": "5252ace00c105eecd44896c39e8f3dfa"
  },
  {
    "url": "articles/index.html",
    "revision": "349e0342eed69edc89563edf1f9e186a"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "1d705fd03f09f433419af36a3f8f8703"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "436e84b118d1a26e587a3e5eb2fe68c6"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "05ac59652f9ae956d4e78d3828dc0bec"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "c8d20d7710e24d3571024c45a128c538"
  },
  {
    "url": "assets/css/0.styles.807f460e.css",
    "revision": "8efba1b30b3bfb96fb777aa1df0c4055"
  },
  {
    "url": "assets/img/00a39db2-760f-43d5-bc9f-a472c4450710.bf9f8f08.png",
    "revision": "bf9f8f08c40d687fea0452ea2f0599a2"
  },
  {
    "url": "assets/img/04e33871-b8b0-41f7-8ffa-7f45bfded077.8050920c.png",
    "revision": "8050920c0b3f019dbf547f1a223eb715"
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
    "url": "assets/img/7f402f00-11d4-4cef-8543-79929256dd6d.96bb809d.png",
    "revision": "96bb809d45a236d0b897119f09b69a95"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9670fa50.js",
    "revision": "ab6de25367ed6a5241c9acb338f82a30"
  },
  {
    "url": "assets/js/11.a878d1dc.js",
    "revision": "8bd859a7f6e0e1b6c25ae62e6da2ed05"
  },
  {
    "url": "assets/js/12.5c511969.js",
    "revision": "910f49a9015195c0a2ff3e51045d5f9d"
  },
  {
    "url": "assets/js/13.a5a52d3f.js",
    "revision": "aeade175c69aada53cc34f605805aa4b"
  },
  {
    "url": "assets/js/14.d8e865b2.js",
    "revision": "8e2964f0913a76755288a166efddba16"
  },
  {
    "url": "assets/js/15.d7b9132f.js",
    "revision": "e8573d0ed4a36f71cb1f99a93d46a19e"
  },
  {
    "url": "assets/js/16.e6b942e5.js",
    "revision": "2cfbbb861d073acc67ff4ca7549d712d"
  },
  {
    "url": "assets/js/17.1e50735e.js",
    "revision": "6e463fb18195f64a2038be1aa97acc8c"
  },
  {
    "url": "assets/js/18.3a0e5148.js",
    "revision": "6d4fd478ef617ca433e72729d3c2135d"
  },
  {
    "url": "assets/js/19.79614b4e.js",
    "revision": "fc544b98e67d90357ab276d34e0bbeac"
  },
  {
    "url": "assets/js/2.28423feb.js",
    "revision": "f88ccfeaad2a54fb3423912a5dde97b0"
  },
  {
    "url": "assets/js/20.c8f0fe16.js",
    "revision": "5eea85652401d873c763eb61a7c5fe73"
  },
  {
    "url": "assets/js/21.e318ce8c.js",
    "revision": "89fc4580ee45d7d6f3b49ac39855719d"
  },
  {
    "url": "assets/js/22.16c7babe.js",
    "revision": "abdc6fa3797109258dd4a273c916c399"
  },
  {
    "url": "assets/js/23.8396faac.js",
    "revision": "cae8c40176c9227bc74ed3d72431880d"
  },
  {
    "url": "assets/js/24.ba70ab22.js",
    "revision": "69ea1af477c2ae43813a4b979f241181"
  },
  {
    "url": "assets/js/25.797c9dc7.js",
    "revision": "5e0d4c4c23b961be0b015ed7bd7903f9"
  },
  {
    "url": "assets/js/26.8e5a1033.js",
    "revision": "19f3f87659967abc6ca4a816b8f57ce9"
  },
  {
    "url": "assets/js/27.e5c62a73.js",
    "revision": "9abe8b0ab3f35ec91f7a8c554949f563"
  },
  {
    "url": "assets/js/28.21114f30.js",
    "revision": "44a13243c25eabbb7a57bd13fbb2dc81"
  },
  {
    "url": "assets/js/29.c5bd27f3.js",
    "revision": "2140807be95390ff2fccf11ef16bb94b"
  },
  {
    "url": "assets/js/3.d3ff6991.js",
    "revision": "9e69ff0fb6ced37a96c050ef13ddf841"
  },
  {
    "url": "assets/js/30.500d7417.js",
    "revision": "d54df7b2011f427a0d7fbdff7887ae40"
  },
  {
    "url": "assets/js/31.4516d562.js",
    "revision": "b92d6b04d665c2f6d43e283fa6324dd8"
  },
  {
    "url": "assets/js/32.c3182c2f.js",
    "revision": "1677833514e63c9dc4123bd260409c75"
  },
  {
    "url": "assets/js/33.6b52b7bc.js",
    "revision": "89d0d777911325bb34c3ade262ea4998"
  },
  {
    "url": "assets/js/34.7d265cfa.js",
    "revision": "93ae6307b3b5564acc758dd3bed5f009"
  },
  {
    "url": "assets/js/35.5cc382f5.js",
    "revision": "ca2dde23744f8255882e5ba1ec15efc5"
  },
  {
    "url": "assets/js/36.df809e3b.js",
    "revision": "5af48db6204df696ef2ec81297b530e3"
  },
  {
    "url": "assets/js/37.d31fabba.js",
    "revision": "274730a4676ae4f82686d4c40d76e3ce"
  },
  {
    "url": "assets/js/4.3741df5c.js",
    "revision": "791d921500d16d94eded160654dea265"
  },
  {
    "url": "assets/js/5.e6d8d175.js",
    "revision": "dc5821d2dd969b2c19a4f5dc15a70084"
  },
  {
    "url": "assets/js/6.7729a882.js",
    "revision": "9d7b524de20edfb3f58c609ad8e8a368"
  },
  {
    "url": "assets/js/7.dc583fc6.js",
    "revision": "d7091247ebcfaa67e386044546d5433d"
  },
  {
    "url": "assets/js/8.6150247e.js",
    "revision": "b19e345a4a6d0c79a21dfd9af91cf6b0"
  },
  {
    "url": "assets/js/9.957633d7.js",
    "revision": "3bbeb16b3cd8fbb7cc44dd21128719da"
  },
  {
    "url": "assets/js/app.8de24816.js",
    "revision": "3381a294d433911579a2005b1a0a0a91"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
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
    "revision": "bf0722c69cad5a339817381e41d52bd7"
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
    "url": "test/index.html",
    "revision": "06549b30b4fe7ea8da0c460a12ee7e31"
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
