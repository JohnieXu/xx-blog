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
    "url": "articles/APP/FE-file-upload.html",
    "revision": "5cfb8c0788abe5937b61121a8859e569"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "dc0d5d76ce0d0408cd6c7d6448f49155"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "7a6dbe7d7e4f554765a40860213d3757"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "3a0734d16b804457f1721c9e4ac19684"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "7d718a28632ef5667394c91f4a16e7ca"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "61a482ee6448519d5c34cf7ad45cca8f"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "d61e6da7c5fb5946db8744419b571bbd"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "552764ff4ab6c0bfac096d7b63e14a88"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "ce0f4bce24a6464b9baaf79eca354d85"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "9ed8861d9f6806fbc90e1496d430d4aa"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "0bd64db5d9ecc94e3e74940d926cc8c6"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "f8c9d613ff875c8eedb69dbd8b9ed456"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "66ccf8fd976ba727c273148835ac3279"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "028232b4b2561fa8c8b3e69e87cf7d17"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "a021bb0a9f33af0b649c641278776d60"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "3a14b0184a8b05efc1819a5ef9a8b3db"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "0c2b102a3f4855779841bfbbd8253194"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "90009bcd978f6e028b280a63079e21bb"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "6b1acb1926fc0694e0ccdb9c227e1ebf"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "d3e514473d029486a7491e1bc03b112a"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "feaa0bec604eb7cec10ba2997204a3b7"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "8d008e4ab017369c7dc0622a1faca3f6"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "fbc96cd108912b21f49208c279c6f917"
  },
  {
    "url": "articles/GO/index.html",
    "revision": "605caccf4930a4aa490e590626d66ed8"
  },
  {
    "url": "articles/index.html",
    "revision": "b09e3a9743f4e9a71f6c4b789a187e0c"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "6435948814f6f6d4bfe8af2f63bd8e9b"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "478aa8f3cefb5163099fc6e79d4321be"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "2baf33320e36bacbfc55b1c2f61c47eb"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "a5f6b0abee0e5c4ef45b96917776758b"
  },
  {
    "url": "assets/css/0.styles.d1382f8f.css",
    "revision": "43c95f2d8ebc68ea5fe250a2188e4e1e"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ad70465e.js",
    "revision": "2da36464d3cbe00b027c6004959657d1"
  },
  {
    "url": "assets/js/11.3cc2a891.js",
    "revision": "ef31bd3f07b7eb9c573d21e30e1c6ada"
  },
  {
    "url": "assets/js/12.db8a362d.js",
    "revision": "1d570cca174119fbf886f1629d58b409"
  },
  {
    "url": "assets/js/13.57e754ce.js",
    "revision": "206b4987f802d7ff6c0066088a9fc749"
  },
  {
    "url": "assets/js/14.398c18fd.js",
    "revision": "5c242e87af82688e3a1ed30f7ea8403b"
  },
  {
    "url": "assets/js/15.fa7c32b5.js",
    "revision": "9b3fdd946fb4774554999fbdfcec7ff3"
  },
  {
    "url": "assets/js/16.88fe60a2.js",
    "revision": "533013c414b2a6c35c7301f88f27e410"
  },
  {
    "url": "assets/js/17.a3773dec.js",
    "revision": "91c3572882b1aee8154ae755765fdc44"
  },
  {
    "url": "assets/js/18.5360b253.js",
    "revision": "fde2971e42a294ba2bda35e24a4e7cee"
  },
  {
    "url": "assets/js/19.77f7a06d.js",
    "revision": "b223ed84819199fd5c4219091dceefc3"
  },
  {
    "url": "assets/js/2.b254d7e2.js",
    "revision": "54e6d19ab86ae49ec0d72ae2227e6439"
  },
  {
    "url": "assets/js/20.e4ed87ed.js",
    "revision": "4c3c4617f9668cf41f25c650c591fc58"
  },
  {
    "url": "assets/js/21.bc9fcd03.js",
    "revision": "0ed1dc6ed33fb97d9cfa77d34aa5d4f4"
  },
  {
    "url": "assets/js/22.27e4da0b.js",
    "revision": "ee706ad7a5e16cf9e702fdb816f318dd"
  },
  {
    "url": "assets/js/23.bc4033eb.js",
    "revision": "40a3f5121c29f532d9c6bc94f68c1e6c"
  },
  {
    "url": "assets/js/24.3988056a.js",
    "revision": "e09a9b7e4afc5cc7d9e20f18ee7ec84d"
  },
  {
    "url": "assets/js/25.c2ace688.js",
    "revision": "3447f00f7d4ef3e7ba3edc1156c909a5"
  },
  {
    "url": "assets/js/26.b669e297.js",
    "revision": "8fed56f085ec2649966f24206c472148"
  },
  {
    "url": "assets/js/27.856e0ae2.js",
    "revision": "52708346d01d1ced08e07aaee3ca6544"
  },
  {
    "url": "assets/js/28.0185934a.js",
    "revision": "76f4a430098dfebf543a5012d80d206e"
  },
  {
    "url": "assets/js/29.1f2814b1.js",
    "revision": "325a266cfb06714da3509da3a4717311"
  },
  {
    "url": "assets/js/3.8d498305.js",
    "revision": "e98cc45effb291eda30f46d44f43c6ed"
  },
  {
    "url": "assets/js/30.59587f93.js",
    "revision": "b15948fb68284ae79a8d708e47e90ac7"
  },
  {
    "url": "assets/js/31.352127f2.js",
    "revision": "36e4ed54f2a9ebd29069fd58e7cac5ca"
  },
  {
    "url": "assets/js/32.0ea09050.js",
    "revision": "31001a606daaa0810e7a4633384f629b"
  },
  {
    "url": "assets/js/33.3a0b6ad1.js",
    "revision": "dfd542489b6df1d1432c4580e2b1c142"
  },
  {
    "url": "assets/js/34.4a0e0a07.js",
    "revision": "9cfc9d5b9d8a4a0b388140d6ccf5dd46"
  },
  {
    "url": "assets/js/35.306db045.js",
    "revision": "5c7768154c614346fe65486c74ed7763"
  },
  {
    "url": "assets/js/36.fbb4c7f4.js",
    "revision": "d5dc2dcf5245da3c9e404d86efff31a9"
  },
  {
    "url": "assets/js/37.cdfb47c4.js",
    "revision": "06710100bfd3fd03330020c0677ad48d"
  },
  {
    "url": "assets/js/38.db82b913.js",
    "revision": "7d7a7482bbcdf7a5217dd6df26f67fc1"
  },
  {
    "url": "assets/js/4.deba05c5.js",
    "revision": "c435418192d8c441016581995e7fece8"
  },
  {
    "url": "assets/js/5.0d081646.js",
    "revision": "eedf955d5d90d49b26545a93b8fc753e"
  },
  {
    "url": "assets/js/6.116a5ed5.js",
    "revision": "5ecc1906846b4d19f1ac55b520bcc811"
  },
  {
    "url": "assets/js/7.d93de520.js",
    "revision": "f1ea502962a975b358e368a51e75e15c"
  },
  {
    "url": "assets/js/8.f3f91096.js",
    "revision": "999c3bf66122fe9dad8a4f9f9ee2682b"
  },
  {
    "url": "assets/js/9.95e567bd.js",
    "revision": "d3ad8822664f81bfe314ccea8978e2e8"
  },
  {
    "url": "assets/js/app.85d3a545.js",
    "revision": "3a7830d0f33518189f057d33bf6a3b17"
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
    "revision": "9981c75f8f36cf0699704acecaff8fee"
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
    "revision": "8fc5fe8e06c537e8e526a5488dd5c72d"
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
