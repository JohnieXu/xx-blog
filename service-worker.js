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
    "revision": "f5605f9ea6bb6bfe13d38b403f6fc261"
  },
  {
    "url": "articles/APP/FE-file-upload.html",
    "revision": "7e40656f61392401639befe4a74434cd"
  },
  {
    "url": "articles/APP/hello-VuePress.html",
    "revision": "eadcc8b5b86ec9a076114361cf4353a2"
  },
  {
    "url": "articles/APP/hello-world.html",
    "revision": "6c968f94f3be4dad4a4a35c5b335be9c"
  },
  {
    "url": "articles/APP/index.html",
    "revision": "5737e488da464e052f2a58baad4e0761"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "1007c94d9ab7144d46e07ef1d7c312e8"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "19778a353b96d55c8b56432fde81dd0b"
  },
  {
    "url": "articles/FE/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "da017e39c67c4f39364742fd07f29ff3"
  },
  {
    "url": "articles/FE/deep-understanding-of-es6-module.html",
    "revision": "8d2a5943841aacb7c26be3a4b0c04443"
  },
  {
    "url": "articles/FE/deep-understanding-of-JS-module.html",
    "revision": "c342b9b56c3e4c96612db9c91ade8236"
  },
  {
    "url": "articles/FE/FE-file-upload.html",
    "revision": "7367501f3a15feb62a8818f668bc972c"
  },
  {
    "url": "articles/FE/frontend-interview.html",
    "revision": "be8e90ce2fdb8436e75eb54dd33242ba"
  },
  {
    "url": "articles/FE/hello-VuePress.html",
    "revision": "c63da081edbfab80c03417e610013fbb"
  },
  {
    "url": "articles/FE/hello-world.html",
    "revision": "a6e839a01be9f199d7918ebabb49c385"
  },
  {
    "url": "articles/FE/index.html",
    "revision": "9cc93e610e85d6df519237b0329653c7"
  },
  {
    "url": "articles/FE/key-concepts-of-react-and-dva.html",
    "revision": "ee4333e4fdcabca2bf16d14586e218e4"
  },
  {
    "url": "articles/FE/lazyload-pullup-load.html",
    "revision": "33d899f61f6f41eadfa417026bd6895d"
  },
  {
    "url": "articles/FE/prototype-of-JS.html",
    "revision": "8bc869ff2b2ced5dd87676b565430ce9"
  },
  {
    "url": "articles/FE/react-component-encapsulation.html",
    "revision": "09fb435df810febd5c0485487640db03"
  },
  {
    "url": "articles/FE/react-quill-in-react.html",
    "revision": "1831d8f812c2498096ee4073ac7d424e"
  },
  {
    "url": "articles/FE/regular-directives-of-Git.html",
    "revision": "734b925d6ad9ca777d56e0dff7deb65b"
  },
  {
    "url": "articles/FE/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "e2ebd1b4bc2c8efd016833090c97884a"
  },
  {
    "url": "articles/FE/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "5b52b004ca31c0570a07a0a7d3e86f23"
  },
  {
    "url": "articles/FE/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "54ea59551ca11fee0e34269af9eb1814"
  },
  {
    "url": "articles/FE/video.js-in-react.html",
    "revision": "e63ed62b79d212a9fd1f1fd5533a8fe9"
  },
  {
    "url": "articles/index.html",
    "revision": "687fadaeb967e8693f43e8093ea37f20"
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
    "url": "assets/js/13.5a7e8606.js",
    "revision": "2ca03bfea4c72616500143ca6adc32d4"
  },
  {
    "url": "assets/js/14.021b0e14.js",
    "revision": "2652a1aec71e1bbe67e5a5b6ff505738"
  },
  {
    "url": "assets/js/15.e8d4a6fd.js",
    "revision": "9e4eec4250c7a9ef97abc1233120e7a5"
  },
  {
    "url": "assets/js/16.c9592e68.js",
    "revision": "67608502341719ec7641f6a76f3ea8ea"
  },
  {
    "url": "assets/js/17.9e532be3.js",
    "revision": "f7faf72c47963a971d5f5eef1564acd3"
  },
  {
    "url": "assets/js/18.6c35063e.js",
    "revision": "874da329df0b89409423506f334090f5"
  },
  {
    "url": "assets/js/19.dbf9d8ed.js",
    "revision": "ba0b564aa6ff16d1de9100eeb33339cd"
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
    "url": "assets/js/22.8598131c.js",
    "revision": "dabb7dc42d4199c6e566d20a90116320"
  },
  {
    "url": "assets/js/23.a3217a29.js",
    "revision": "0b554290d22bb6a24111ebf709398ce4"
  },
  {
    "url": "assets/js/24.c0e3d353.js",
    "revision": "0566ef33f9266b147a50b8f90d92b1e7"
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
    "url": "assets/js/27.c64f7fba.js",
    "revision": "5ae1707aed0c19a72d17949f07b04aca"
  },
  {
    "url": "assets/js/28.8413696f.js",
    "revision": "c2a3f59bb47d44df96d65ef0cc00c9e6"
  },
  {
    "url": "assets/js/29.89f80285.js",
    "revision": "c68cc423a089e83263bd909d254bb6df"
  },
  {
    "url": "assets/js/3.893ca284.js",
    "revision": "fe3340e9fbd70a11326bc89978f9c955"
  },
  {
    "url": "assets/js/30.adfd2589.js",
    "revision": "71386161e6e4d6d36fff66ddd83ce7e1"
  },
  {
    "url": "assets/js/31.349bb807.js",
    "revision": "8e726b1ca328b7d4dce736f78569151e"
  },
  {
    "url": "assets/js/32.8fa033e7.js",
    "revision": "10bff36989bcc846956f3d4da19593de"
  },
  {
    "url": "assets/js/33.a943c027.js",
    "revision": "2c326b71e8b109395431207d3101406a"
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
    "url": "assets/js/36.7d0a1824.js",
    "revision": "99ee6e5f5fbbe7eb9a93a8eaf992ff22"
  },
  {
    "url": "assets/js/37.42c76f22.js",
    "revision": "2dc2cce3a86972b7dc860502818e6c83"
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
    "url": "assets/js/7.3754bf5d.js",
    "revision": "42a8411f12093ca774d7be7d88e99f91"
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
    "url": "assets/js/app.6a2898dd.js",
    "revision": "68cdf0781f69c0707aa702f945e7382a"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "categories/index.html",
    "revision": "02774ddba487b65480548dfce6ec2a55"
  },
  {
    "url": "categories/前端工具/index.html",
    "revision": "8d11d4eef50a893c0d4f5d0302968004"
  },
  {
    "url": "categories/工具笔记/index.html",
    "revision": "c93a0604d11f231c03a7571366c89993"
  },
  {
    "url": "categories/文章专栏/index.html",
    "revision": "fe119d5351334cd80ddabb02942bb48c"
  },
  {
    "url": "categories/硬核前端/index.html",
    "revision": "53ad7fe9f8b0a8a5293fae06e552714f"
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
    "revision": "812847066217a3feffc7242b22d77300"
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
    "revision": "ce6cabbbe5177f6883ab7fa126ea3a97"
  },
  {
    "url": "tags/git/index.html",
    "revision": "6b2715ff0257f1af8c717da0b62f4fdb"
  },
  {
    "url": "tags/前端工具/index.html",
    "revision": "2d6df86857222a9eb6604fb1972820e6"
  },
  {
    "url": "tags/前端核心/index.html",
    "revision": "8e98cbdd4d3917d12b643faebee207da"
  },
  {
    "url": "tags/前端进阶/index.html",
    "revision": "db6b91896676e7aba9f24e9d32ee4865"
  },
  {
    "url": "tags/源码分析/index.html",
    "revision": "182ee7e848c2d85a92f3b51374a00199"
  },
  {
    "url": "test/index.html",
    "revision": "9e71cb7b12f561bb75d82619dd9306c0"
  },
  {
    "url": "timeline/index.html",
    "revision": "fa5cacf530b468cb13c783cfc27d3492"
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
