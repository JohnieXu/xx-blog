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
    "revision": "04f28a2aacadeb156f920ffd248f4ade"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "de9e1fd3fbe697292732b1e7825cc315"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "5953c20602b0e849772adc3cea95d8dd"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "8571b89f8690746400bc444814955a44"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "88514fef33b779a6e7dbc1b0eecd2dd6"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "a8796e7143541993e79352e9d976e94a"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "cd0b0094b59de6740a660f6192f4efe2"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "3e34a1a184f6f5b84618b1eaac810d28"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "1af2e283cf58140392f66ab2aa733b62"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "83fffce76e33c72407771d5b92db1be5"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "a7e473d7d5a27ae17d6221a6a2b93486"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "4a838a54015dbd37b85f76546588e0e4"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "d94347b9eb3e39145f8152bb9e87b1bd"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "af764b387258babdb4feeed54cb38efe"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "b907a13e59b982b800d62a9b6506851a"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "e0fdf1b61601c86d1fee1563d8ffda06"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "83cab45d17b4ea42ebbd7a2c3bcd9093"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "fba20b7c0822488cca0caf88b6ac4c40"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "1a6e7cad18a722b90c57888db369ea3a"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "41fc4da2f7d3edc0f91db04dc26cd70b"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "3cbaa3b737932898a25fd380678cb721"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "3762f8c2d18cc2451029698a75a11d37"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "ea308f25312600899a6dc953645af865"
  },
  {
    "url": "articles/GO/index.html",
    "revision": "5252646865dd4968fb3b7025fca8ad18"
  },
  {
    "url": "articles/index.html",
    "revision": "b0cf5b5e8bbaf94aaa972fc52b16ffb4"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "dd5c92ea81ae14ae716b51ea84ec6687"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "1ca6c8bc892daee3fabfe796f40d8657"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "5c4bbf083ead1d664cad92632b924064"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "12a2aa9307b669ec4d183c4102847b53"
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
    "url": "assets/js/10.3da5aef3.js",
    "revision": "9b17738e12551f17c38afa1a6acf3a04"
  },
  {
    "url": "assets/js/11.f2e6ab3f.js",
    "revision": "3b18c8bbb9193cc362cb24c62edd6686"
  },
  {
    "url": "assets/js/12.20216ed4.js",
    "revision": "a62f30792c5bd3938356083217616d0a"
  },
  {
    "url": "assets/js/13.5b9c8852.js",
    "revision": "3e1a78be7257be0c220f6c7e9cc2b72b"
  },
  {
    "url": "assets/js/14.398c18fd.js",
    "revision": "5c242e87af82688e3a1ed30f7ea8403b"
  },
  {
    "url": "assets/js/15.2e75b8fd.js",
    "revision": "e8d78bfcab042b36df27c3a82a6d75fd"
  },
  {
    "url": "assets/js/16.d88b187f.js",
    "revision": "25d657d8b4c7af31b22e26a2b510866a"
  },
  {
    "url": "assets/js/17.c1784bdb.js",
    "revision": "095c332181e8fc7119628f78b14dcb03"
  },
  {
    "url": "assets/js/18.5360b253.js",
    "revision": "fde2971e42a294ba2bda35e24a4e7cee"
  },
  {
    "url": "assets/js/19.cf190076.js",
    "revision": "8808ae4e13c122c767f0ea188389f51b"
  },
  {
    "url": "assets/js/2.b4f27ee0.js",
    "revision": "0e66193ee06f1f17ad783edaa7cfd32e"
  },
  {
    "url": "assets/js/20.3a6552da.js",
    "revision": "a773adfce22262b748103a8064db3617"
  },
  {
    "url": "assets/js/21.cf35786e.js",
    "revision": "f599a37c41ac96baa2bd34e22c388e9a"
  },
  {
    "url": "assets/js/22.8c337403.js",
    "revision": "1e7d9f37cc6945e997c04faad3653c98"
  },
  {
    "url": "assets/js/23.ee15a9cc.js",
    "revision": "d2b5e4debc8dae41f3c2c9c92126ac5b"
  },
  {
    "url": "assets/js/24.1d4ab9ef.js",
    "revision": "89c0e017236c2690a7f9457e00c23d16"
  },
  {
    "url": "assets/js/25.c07d02f6.js",
    "revision": "07e7bbf7ccb2e811a4eefabcaeddb1f2"
  },
  {
    "url": "assets/js/26.99e7dce1.js",
    "revision": "89f7862ae28887f68704847056dcf181"
  },
  {
    "url": "assets/js/27.3c801e2d.js",
    "revision": "7af2d2619829ca5ee6719aa735cf0bd6"
  },
  {
    "url": "assets/js/28.0446f55d.js",
    "revision": "f3bd851d19986bad82db20a90472c86c"
  },
  {
    "url": "assets/js/29.5cfc1132.js",
    "revision": "78523d74937cdbe4cb1032db717f329f"
  },
  {
    "url": "assets/js/3.85e1272e.js",
    "revision": "f07159632e31aa921b971252094a032b"
  },
  {
    "url": "assets/js/30.53607ab2.js",
    "revision": "2576221d4722f20ecdbd603162e7ab12"
  },
  {
    "url": "assets/js/31.351776dc.js",
    "revision": "c2e640bf6be94fc94703337269cc2c80"
  },
  {
    "url": "assets/js/32.cadfb0a3.js",
    "revision": "23f8fd18eb387fa9edfd5410cd4484cd"
  },
  {
    "url": "assets/js/33.7d139a39.js",
    "revision": "8b2d1ae09d7d498e24fe9ab101a76b7a"
  },
  {
    "url": "assets/js/34.43f5bdfd.js",
    "revision": "3537df4cf23a208884f765813e0cab41"
  },
  {
    "url": "assets/js/35.c284c13d.js",
    "revision": "03198b2781ab2564d58fa7e914647bbf"
  },
  {
    "url": "assets/js/36.bc5d04e9.js",
    "revision": "1e2e4d6dd2b71e7172a0d9ff5b3fa2c4"
  },
  {
    "url": "assets/js/37.cdfb47c4.js",
    "revision": "06710100bfd3fd03330020c0677ad48d"
  },
  {
    "url": "assets/js/38.bf8fad27.js",
    "revision": "441b00ad4ddf711e1921591079ac1585"
  },
  {
    "url": "assets/js/4.5dfe9687.js",
    "revision": "4991ca86188c042e3dbcbd23a343fe6d"
  },
  {
    "url": "assets/js/5.14bdf9a3.js",
    "revision": "853533567b2b47abf5702b7b4772f067"
  },
  {
    "url": "assets/js/6.05bc6ce8.js",
    "revision": "46c7e21b4e208649c297ddec099e9be6"
  },
  {
    "url": "assets/js/7.c372ee39.js",
    "revision": "8c54d8709259b4194a47e2f1c79048a8"
  },
  {
    "url": "assets/js/8.89c10d85.js",
    "revision": "e51bd02efe1500b3b6f1f77824a6c8ae"
  },
  {
    "url": "assets/js/9.5d8edd10.js",
    "revision": "923f05a21f871e60dd423e799a0e1101"
  },
  {
    "url": "assets/js/app.3bcf3a0e.js",
    "revision": "bff65c1dada7dc824395c05ba6193a58"
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
    "revision": "107ce3ffe0dcc0e331c07a91aea37868"
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
    "revision": "3af19bec30d8bfef83efc94918b67e87"
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
