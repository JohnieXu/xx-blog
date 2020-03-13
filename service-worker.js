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
    "revision": "42454cb4469c7a82615e437243ca2883"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "f0b8af92392b6d8e2d389a9e75be9ca0"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "c747e02088a7e1c1336d7353fab4bc9a"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "82294bf61cee4b6a3254412b78e6539e"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "eacf55c6f17189d02703a7d241d209fc"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "730790946fa517f258f305d21d9cc410"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "99f63f29bec91ae5163f531ae66e0770"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "c0d558f1843216e531860ce1f53bc43f"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "affb17c53e32091ac5c09ca5bc5fa6e1"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "990f54e9ab6790b4efa5f4594ee874fd"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "6d39ad030dda3ebdaaa1dfbe286be209"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "629c0adb40da4f67a88aa09fee8c0278"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "3d60df1ef5e79ca9cd36fde0f7fe55de"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "78db62d30affc96f4dd1c0c3bd95f353"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "497d828a5df7b32bbd9eb703d5b71c8a"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "9232cef726e962f6d597c223739567cd"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "18b6b3e89eba1693e49731ab2ffba096"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "30a84582178b60be5ab7fb4cf9c047f4"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "efa0c4eb11eefc217340c001770ea221"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "21fad2beaecd73a11b77e8638602a3b9"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "70b7d72a16739b36355bd600c369f532"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "bcb827facad078654cdca92e1417be1b"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "e14a0776cd4de253e1dc3b79f0c5c3ee"
  },
  {
    "url": "articles/GO/GO笔记-错误捕获.html",
    "revision": "5e9d32e6917f8b1a5a3de61267a0fa7b"
  },
  {
    "url": "articles/index.html",
    "revision": "df801887bd7f86853f68608ce77fc675"
  },
  {
    "url": "articles/PRACTICE/index.html",
    "revision": "d653641fe50437e4f82c91e81d691611"
  },
  {
    "url": "articles/PRACTICE/Vuepress-builds-PWA-blog.html",
    "revision": "967bce28b60780fd301ae19d42be973c"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "ee7e71919174c92d3a1375d18a796bf6"
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
    "url": "assets/js/1.4caedbc5.js",
    "revision": "55643be070adb6d3a00a1b58bb4a1451"
  },
  {
    "url": "assets/js/10.f73a57ef.js",
    "revision": "4d4df32634eb55fa322d15289f92af41"
  },
  {
    "url": "assets/js/11.3165da73.js",
    "revision": "e72dd7513832dec82c9391db57249902"
  },
  {
    "url": "assets/js/12.a7585fd8.js",
    "revision": "debd37fb0b0f2cd6fbb7d613f909af5e"
  },
  {
    "url": "assets/js/13.16abeba6.js",
    "revision": "5477648b6e6c5b28c07f63e4ee6f2e54"
  },
  {
    "url": "assets/js/14.9e783175.js",
    "revision": "e2d558bb47127dad8f5557bf3f8f24c1"
  },
  {
    "url": "assets/js/15.913c4837.js",
    "revision": "f9e08bbebb936a125b88fc8592da50d5"
  },
  {
    "url": "assets/js/16.6446fba1.js",
    "revision": "95685a50830b0c6ea352848c32607db3"
  },
  {
    "url": "assets/js/17.18276f23.js",
    "revision": "85f760faa7a357c4d71d7bd4b92ece55"
  },
  {
    "url": "assets/js/18.2bbd5b56.js",
    "revision": "7864f2c45e1cb1b9c052a18b6d08ce80"
  },
  {
    "url": "assets/js/19.8490504b.js",
    "revision": "2979d2afe7003ba192b8700aa561ccb7"
  },
  {
    "url": "assets/js/20.3566121c.js",
    "revision": "5d796761a582ecda6dfd97e7d07bd824"
  },
  {
    "url": "assets/js/21.9d2878e5.js",
    "revision": "30afa62184eea8cc8393334b50c8dea7"
  },
  {
    "url": "assets/js/22.7f729023.js",
    "revision": "e798b4db13e7f36cb2cc1ad1369c2a00"
  },
  {
    "url": "assets/js/23.2276bf10.js",
    "revision": "0ea36b3111fa715b5b92a51a612ca345"
  },
  {
    "url": "assets/js/24.0eea8c5b.js",
    "revision": "b98051c8c1e2710664d08e380c0fa7b6"
  },
  {
    "url": "assets/js/25.7abf6fed.js",
    "revision": "bf5e87a30772dd14e836647e279a35b6"
  },
  {
    "url": "assets/js/26.9d287f36.js",
    "revision": "9b399a194da4330281adb1e44f527bf8"
  },
  {
    "url": "assets/js/27.af45e691.js",
    "revision": "bd7dd4ba73341371cfa8340914c03895"
  },
  {
    "url": "assets/js/28.2c6ff889.js",
    "revision": "5a294a59f297c09e96d4265b166ea8fd"
  },
  {
    "url": "assets/js/29.eee7df2b.js",
    "revision": "5d4cb66fedadcae5073babea657d094e"
  },
  {
    "url": "assets/js/3.736990cf.js",
    "revision": "fbb449ad6d1bee837ed79978d0d1e714"
  },
  {
    "url": "assets/js/30.59c4fc82.js",
    "revision": "c82de30d2ebf1fafd0bb65fc00213521"
  },
  {
    "url": "assets/js/31.8a268bce.js",
    "revision": "b138111d5ad254645e365b9a5445b183"
  },
  {
    "url": "assets/js/32.5c8ba44d.js",
    "revision": "e1530f7c4b77e3c924742ee2184dc6b2"
  },
  {
    "url": "assets/js/33.199afcb7.js",
    "revision": "ccd289148b6948f666a8826a590ab644"
  },
  {
    "url": "assets/js/34.f82605a7.js",
    "revision": "6bf95628d9f6aecf0fa5dce0ab209ca9"
  },
  {
    "url": "assets/js/35.f44a32a7.js",
    "revision": "8b99895aa698be08a51413c53903f313"
  },
  {
    "url": "assets/js/36.04bfea0f.js",
    "revision": "2bbc1a74c10db428cfce760d71507f53"
  },
  {
    "url": "assets/js/37.4bed1e9d.js",
    "revision": "f0d5ae0fbec9e3936129a5a18474c71e"
  },
  {
    "url": "assets/js/38.6fb7d050.js",
    "revision": "b6fca3b33e66e89097aabae6d8a39636"
  },
  {
    "url": "assets/js/39.8ec9275b.js",
    "revision": "afa893529a59f31cce48552c0098c51a"
  },
  {
    "url": "assets/js/4.662e2210.js",
    "revision": "76390050a78a4cf3f22fa774b0472c3d"
  },
  {
    "url": "assets/js/40.37c1f253.js",
    "revision": "2ba66e9e7dc35dcf21c99bc4c16ae07e"
  },
  {
    "url": "assets/js/5.01bccdda.js",
    "revision": "3b3a7c6aafd1f11a9b4c174cb117aaea"
  },
  {
    "url": "assets/js/6.1d3bd5f0.js",
    "revision": "c26601ca80731f31e277359240e10ab5"
  },
  {
    "url": "assets/js/7.a7128848.js",
    "revision": "2aa23b510a6464c64952970e59007c30"
  },
  {
    "url": "assets/js/8.87db1fdd.js",
    "revision": "2cd702b5478962fded1e03e85aafb467"
  },
  {
    "url": "assets/js/9.07b4ea94.js",
    "revision": "21a813ea781882e957e0d0b940f219a3"
  },
  {
    "url": "assets/js/app.ef4fa1c8.js",
    "revision": "4d54d53413293e7c92efc6b0a2ca2347"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/GO/index.html",
    "revision": "0b82985ad24183b9d26059a7237ea8c6"
  },
  {
    "url": "categories/index.html",
    "revision": "2d9fb16063050da78e9d990ce909c5e8"
  },
  {
    "url": "categories/UI设计/index.html",
    "revision": "7eb5709109545001941b0232a1a6d42b"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "0d7cebddb26af0f0859f5dbba6459fc0"
  },
  {
    "url": "categories/学习笔记/index.html",
    "revision": "421f121228394a1015d0fe98d2ffe4b4"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "d7a62591fc12a5dc1cb0535d09eaeb7f"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "08c574bd13ce58cab3e2f42f17c76bd6"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "b39de8699791b0c674c73da900287bd0"
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
    "revision": "08d1446a07c38f958d7a2f413f4e25d4"
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
    "revision": "b3a64637ed6e723d352942c73baff06a"
  },
  {
    "url": "tags/git/index.html",
    "revision": "48f045da293aa48b6563730df3cb8d72"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "edca1a32fe81b9a440e56080ab962894"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "97ab0c4eba1f211f8559f5bfce0befe1"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "6ac68bc53f6fb395b73778fbcf920341"
  },
  {
    "url": "tags/学习笔记/index.html",
    "revision": "87e1e7ac67c2f0de95fddd749e186b6b"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "1ef2d9eafb38eeda3b9e388bcbeea801"
  },
  {
    "url": "test/index.html",
    "revision": "5e8365f9ccf92be0bf693b13c11ffca7"
  },
  {
    "url": "timeline/index.html",
    "revision": "0fce873d2a5247a66a32dd65875b0f28"
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
