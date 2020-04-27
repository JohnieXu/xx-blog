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
    "revision": "38371ee65c7f1c1d4a3ba7417aa92cb1"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "28d0495b4a0d7e4f87f1185d28032e05"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "5a1b72ca5b0b019411cfc3a84d832d64"
  },
  {
    "url": "articles/index.html",
    "revision": "06bb884b0a7570fd01237ab7c02221e8"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "a25305457819ac4b871025572be7ec63"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "514ecee4caea09dbb8fbc66c1b3b3bd1"
  },
  {
    "url": "assets/css/0.styles.b6a64945.css",
    "revision": "e9e2249fee336ba8addbb8dd2558f366"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
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
    "url": "assets/img/0e1a5b12-c8ee-4c00-8e67-d7e8d986f209.d7ef8146.png",
    "revision": "d7ef81469fbe9f20beeb862770444c0a"
  },
  {
    "url": "assets/img/1.6f9c7284.svg",
    "revision": "6f9c72842ff38c688a8c70064760ded1"
  },
  {
    "url": "assets/img/10.cbbdc879.svg",
    "revision": "cbbdc87931c8ea842ea26739c7d58c98"
  },
  {
    "url": "assets/img/11.803ff6bd.svg",
    "revision": "803ff6bd0cc23e2d793d2ff3a9f75229"
  },
  {
    "url": "assets/img/12.5cbf9420.svg",
    "revision": "5cbf94208516a861610b8fa78330190e"
  },
  {
    "url": "assets/img/13.f162405c.svg",
    "revision": "f162405c7d78c75bc317a4da78351301"
  },
  {
    "url": "assets/img/14.e8a16708.svg",
    "revision": "e8a1670825fb5d7d861abad0cf2d135f"
  },
  {
    "url": "assets/img/15.9eff4e17.svg",
    "revision": "9eff4e1718e67c88f0ddb334b3dec5f1"
  },
  {
    "url": "assets/img/1521f01a-6f01-4d7e-83df-29c9682bcc57.0a426361.png",
    "revision": "0a426361b4020a6198eb3a7a9dd6367e"
  },
  {
    "url": "assets/img/16.aabf7c45.svg",
    "revision": "aabf7c4592a375325de1c55ce57c2c46"
  },
  {
    "url": "assets/img/17.fbf01503.svg",
    "revision": "fbf0150376415d4f1437b7a15f0e8f2d"
  },
  {
    "url": "assets/img/18.c712eba7.svg",
    "revision": "c712eba7b351caef3be4fcb016cd48ea"
  },
  {
    "url": "assets/img/19.06024e72.svg",
    "revision": "06024e7209cca126eca0cc3fe9c0a4a8"
  },
  {
    "url": "assets/img/1c454a56-eb16-42d1-a221-f816fc1f0ec7.9cb0b5e8.png",
    "revision": "9cb0b5e89c2185d8f4f0ef0591c7ca00"
  },
  {
    "url": "assets/img/1dd05efd-d977-4994-97c0-35cce5d973de.1e5ce6c1.png",
    "revision": "1e5ce6c17be2539fca898428fa92c1ec"
  },
  {
    "url": "assets/img/2.2ae6d27a.svg",
    "revision": "2ae6d27a3bbd0f896db796aafc68b8c2"
  },
  {
    "url": "assets/img/20.55395dee.svg",
    "revision": "55395deec8eca425648e81d1b2915c7a"
  },
  {
    "url": "assets/img/21.b08eae74.svg",
    "revision": "b08eae746181e4791d7c84d38d07443c"
  },
  {
    "url": "assets/img/22.5f63765b.svg",
    "revision": "5f63765b0741d34e2e3f62ebb9ae478e"
  },
  {
    "url": "assets/img/23.3cb8d4e4.svg",
    "revision": "3cb8d4e4b0121a183f66d2627d200ad9"
  },
  {
    "url": "assets/img/24.932db6a0.svg",
    "revision": "932db6a03645fa29afec8c1aed0b9059"
  },
  {
    "url": "assets/img/25.6dba982e.svg",
    "revision": "6dba982e7e6b1dc715737ce30def888e"
  },
  {
    "url": "assets/img/26.874a4174.svg",
    "revision": "874a41742bbd49c53c81da22589f4765"
  },
  {
    "url": "assets/img/2623680a-41fb-4a08-9048-dff736105bd8.e4a249bf.png",
    "revision": "e4a249bfffd1dd15900f9a4dcf9a1550"
  },
  {
    "url": "assets/img/27.d322e32f.svg",
    "revision": "d322e32f37b71967fc9c1742560efb04"
  },
  {
    "url": "assets/img/28.8e13fc4d.svg",
    "revision": "8e13fc4d554d0c71b54824b55029afa0"
  },
  {
    "url": "assets/img/29.d04889ff.svg",
    "revision": "d04889ff2aeeea542f0eb3bbd9e8e064"
  },
  {
    "url": "assets/img/2bae0844-c97a-4529-b9a8-ebd7a240b193.125d4d97.png",
    "revision": "125d4d9741a8a9dd4534981b5760c008"
  },
  {
    "url": "assets/img/3.c791168a.svg",
    "revision": "c791168a264485fe04948280b923d80d"
  },
  {
    "url": "assets/img/30.ce427580.svg",
    "revision": "ce4275800e649d48c7bceaeb62d9a9bd"
  },
  {
    "url": "assets/img/30a1bb57-0d4e-49ac-ad03-4581324e4401.4bbdfe1c.png",
    "revision": "4bbdfe1ccd03a5ebee8a8616f45acb38"
  },
  {
    "url": "assets/img/31.d8330d1d.svg",
    "revision": "d8330d1d9b01f2f74d9e7169086e1059"
  },
  {
    "url": "assets/img/32.be022200.svg",
    "revision": "be0222002f92c68d75038fd18d86b5b3"
  },
  {
    "url": "assets/img/3208bfb8-d96d-4e3f-bdd0-aa6d2687235d.4063c41c.png",
    "revision": "4063c41c4b9d4d4d3500e16191a8882f"
  },
  {
    "url": "assets/img/33.f7d2570d.svg",
    "revision": "f7d2570daaf147e7f53f07bad90ad700"
  },
  {
    "url": "assets/img/34.e9d47826.svg",
    "revision": "e9d478262edc560072bd1dc9edf55ca6"
  },
  {
    "url": "assets/img/35.51d71642.svg",
    "revision": "51d71642e4c33aedb00b5be4d1bc718e"
  },
  {
    "url": "assets/img/36.f7b672d9.svg",
    "revision": "f7b672d9ad3d6c8835b7eaf501180ae2"
  },
  {
    "url": "assets/img/37.b008678f.svg",
    "revision": "b008678f5e1f8469765ec3f95d35c5f3"
  },
  {
    "url": "assets/img/38.7598d92b.svg",
    "revision": "7598d92bbc1e5d622e752ce7d2a50b3a"
  },
  {
    "url": "assets/img/39.1d098e5b.svg",
    "revision": "1d098e5be255d36c74c1663efe83f3a0"
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
    "url": "assets/img/4.063f575d.svg",
    "revision": "063f575dc8b174f461e075a0edf3710c"
  },
  {
    "url": "assets/img/40.c7e218bf.svg",
    "revision": "c7e218bf69f93f37297bff1ea01bddc1"
  },
  {
    "url": "assets/img/41.688ff20d.svg",
    "revision": "688ff20dfc490334adf8867b6a50a956"
  },
  {
    "url": "assets/img/42.2e28d516.svg",
    "revision": "2e28d516080962906d4e7b80a001ed50"
  },
  {
    "url": "assets/img/43.e03bf731.svg",
    "revision": "e03bf731fc88c361dce05c1cc44b97a8"
  },
  {
    "url": "assets/img/44.a554d29c.svg",
    "revision": "a554d29c906f99fcd48b7121aae3acec"
  },
  {
    "url": "assets/img/45.74ad6023.svg",
    "revision": "74ad6023ad1f0082d7efe639025e1fde"
  },
  {
    "url": "assets/img/45e39817-7c06-4f5a-9d7d-ed185f246864.584ff358.png",
    "revision": "584ff35810d6142379dd2c0da8e9df0b"
  },
  {
    "url": "assets/img/46.a9478522.svg",
    "revision": "a947852236c85d556f9b2c799bcb9747"
  },
  {
    "url": "assets/img/47.24351103.svg",
    "revision": "24351103ee7d7833b7479bd2091a56fe"
  },
  {
    "url": "assets/img/4787d6dc-f780-4742-a971-f42f98d578b2.c40843fb.jpg",
    "revision": "c40843fbe8de103b0b2ca4253324dfa4"
  },
  {
    "url": "assets/img/48.56d22d95.svg",
    "revision": "56d22d958b1f0144eeab3bdaad30b52e"
  },
  {
    "url": "assets/img/49.12c2c953.svg",
    "revision": "12c2c9531b81fe8527db5db5a40efca6"
  },
  {
    "url": "assets/img/5.394d6b98.svg",
    "revision": "394d6b986f503d9ffaec9fa9040452f7"
  },
  {
    "url": "assets/img/5d72eaa2-15e1-41bd-b3d1-9ab54341d1f8.a9d5b209.png",
    "revision": "a9d5b209936ff86be8d7e697fd761cda"
  },
  {
    "url": "assets/img/6.2ff938b5.svg",
    "revision": "2ff938b506cc37892b1b6d87437d721a"
  },
  {
    "url": "assets/img/7.9e580c37.svg",
    "revision": "9e580c3780478922b79aa3554f49d559"
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
    "url": "assets/img/8.923fcde4.svg",
    "revision": "923fcde43d661f1bc44b9870af63b08a"
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
    "url": "assets/img/9.841bd6a0.svg",
    "revision": "841bd6a0821b1a45fce365c31727808a"
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
    "url": "assets/img/b7f24516-9e3c-4a50-902c-41a205947b13.b2bda89f.png",
    "revision": "b2bda89f16592d388f2408f3f1dbe9dc"
  },
  {
    "url": "assets/img/banner.4118b53d.png",
    "revision": "4118b53dc90650a1c6c09dd4efb07858"
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
    "url": "assets/img/logo144.11cc25dc.png",
    "revision": "11cc25dcd718764758a1b4b53e72e2c7"
  },
  {
    "url": "assets/img/weixin_subscribe.fb29ae6f.png",
    "revision": "fb29ae6f132f3a223591345c840c38d6"
  },
  {
    "url": "assets/js/10.97f2b715.js",
    "revision": "103eef083b2c3181964f761b28faa331"
  },
  {
    "url": "assets/js/11.c7247f78.js",
    "revision": "7ff5e076ecffe4da62aea72b44db4460"
  },
  {
    "url": "assets/js/12.7bb7d268.js",
    "revision": "330dadc23e61bf2d398e02411f2080ae"
  },
  {
    "url": "assets/js/13.15f27562.js",
    "revision": "cab30acf20c5e67a7b30b266762b5a41"
  },
  {
    "url": "assets/js/14.aa6b2b16.js",
    "revision": "23008d85b1fc6bf783436c5113e6fada"
  },
  {
    "url": "assets/js/15.e901b924.js",
    "revision": "e69dac16484c3d94244a5500d73f1ba7"
  },
  {
    "url": "assets/js/16.d53b1899.js",
    "revision": "5a38ba348a43471f79d9368e43be7a55"
  },
  {
    "url": "assets/js/17.60125ca4.js",
    "revision": "42fbba7720540d19aa06dec90fc8a26d"
  },
  {
    "url": "assets/js/18.2984b493.js",
    "revision": "8029adf1bdadaddcc866ba051a04d43a"
  },
  {
    "url": "assets/js/19.ffe7c5ee.js",
    "revision": "5612cf695af73d9986e8162a931acae0"
  },
  {
    "url": "assets/js/2.1549055a.js",
    "revision": "5f67ddbaeb87a4800c95be3c644b7ecb"
  },
  {
    "url": "assets/js/20.7e4734e1.js",
    "revision": "fe344272a1335689d434fbe457827c18"
  },
  {
    "url": "assets/js/21.668ed76b.js",
    "revision": "6c054d9b6e27d33976e4cf4af8ec4db1"
  },
  {
    "url": "assets/js/22.359e8d92.js",
    "revision": "d6a2a7fc13d53f8fa5050aaa80115a45"
  },
  {
    "url": "assets/js/23.42e9402a.js",
    "revision": "2c23c6ba4191c1531ab2a88bcd38cd48"
  },
  {
    "url": "assets/js/24.7ccd4857.js",
    "revision": "4863fba88b84cfab0f9906db1bc160c0"
  },
  {
    "url": "assets/js/25.3ce93d53.js",
    "revision": "b250a08c62b89c12f4e6cf31342d9043"
  },
  {
    "url": "assets/js/26.e275e576.js",
    "revision": "f0da28c0cdfae010aeb75ce0d16e3525"
  },
  {
    "url": "assets/js/27.86a3ae99.js",
    "revision": "d3b90e2e9ce8286aafe3e47948c5ee5e"
  },
  {
    "url": "assets/js/28.f80632ff.js",
    "revision": "22a3b5112acaf70d60a74ab93eede101"
  },
  {
    "url": "assets/js/29.df1a66fe.js",
    "revision": "1d1c17597849e8c97a76d2bbc9ba6e5a"
  },
  {
    "url": "assets/js/3.6f0ddccb.js",
    "revision": "8031a923fdfc3bb8739413fc170a82f9"
  },
  {
    "url": "assets/js/30.fac0423b.js",
    "revision": "b1ca7b76c54366de7c4f319e916785d7"
  },
  {
    "url": "assets/js/31.5ae7bdbd.js",
    "revision": "09e6005ad6e8e224565ff6e8e829c71f"
  },
  {
    "url": "assets/js/32.3dfb9fc4.js",
    "revision": "2e2df127535d1b794ddf944397ea2fac"
  },
  {
    "url": "assets/js/33.49c3d6b8.js",
    "revision": "d68828370f1a119aa323bf25fee26682"
  },
  {
    "url": "assets/js/34.0debd649.js",
    "revision": "de69dc36f4c7f76d2343b71eb01ad60a"
  },
  {
    "url": "assets/js/35.3f2c3a5e.js",
    "revision": "b7b4e0046568da8dc3d97d7b0a95171c"
  },
  {
    "url": "assets/js/36.d8756ef5.js",
    "revision": "c67bae6055358360076cabd29bedfa67"
  },
  {
    "url": "assets/js/4.806fd3eb.js",
    "revision": "a9d8d4e61b49b2f28002da2f9706edc8"
  },
  {
    "url": "assets/js/5.fb613363.js",
    "revision": "29b1da9b17b58d81794ca1c202db9310"
  },
  {
    "url": "assets/js/6.15354ee2.js",
    "revision": "c3b771fb63a7fcdf8570cce6d7372093"
  },
  {
    "url": "assets/js/7.73cb1b93.js",
    "revision": "6fe3cd942cff98e2e66aca449109d8b1"
  },
  {
    "url": "assets/js/8.f01bc52e.js",
    "revision": "9d4c5f7c2264224def52004304611374"
  },
  {
    "url": "assets/js/9.7cc725d0.js",
    "revision": "d1ff435768f107673fdff44b8805a654"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "go/GO笔记-错误捕获.html",
    "revision": "5045bdcba28e7597ea5fc0b97bad762a"
  },
  {
    "url": "go/index.html",
    "revision": "fa3774d9b0edff5707bbf14207db59c5"
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
    "revision": "eebe58134865ef07ddec143108dfbcf1"
  },
  {
    "url": "links.html",
    "revision": "201c3a8cd407abe6aa0c901d91dfd7e9"
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
    "url": "practice/index.html",
    "revision": "612fad64cef9e43405ed74fb55eab460"
  },
  {
    "url": "practice/Vuepress-builds-PWA-blog.html",
    "revision": "cc797fce832dd99f91dde8dfa3c1473f"
  },
  {
    "url": "program/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "4d73c34d2a9bc6fa727051ca3d46edbb"
  },
  {
    "url": "program/deep-understanding-of-es6-module.html",
    "revision": "ef9d92204785d3d3a0090b75362541a1"
  },
  {
    "url": "program/deep-understanding-of-JS-module.html",
    "revision": "0a869e316ada02c723bdf0f8c51ad119"
  },
  {
    "url": "program/deep-understanding-of-JS-prototype-and-inheritance.html",
    "revision": "23ba0821e8494749407e3dc3496e9ac0"
  },
  {
    "url": "program/FE-file-upload.html",
    "revision": "f4a92bdb353df8f308668764883e77e7"
  },
  {
    "url": "program/frontend-interview.html",
    "revision": "9e993127ee84e04a28167a9af93dac69"
  },
  {
    "url": "program/key-concepts-of-react-and-dva.html",
    "revision": "a94b9aeb37c024c71b5cb09abb10b5b7"
  },
  {
    "url": "program/lazyload-pullup-load.html",
    "revision": "932d038efe43b519f208358ccd227281"
  },
  {
    "url": "program/prototype-of-JS.html",
    "revision": "cbe628c72219aecb16c2933e2f6d62ea"
  },
  {
    "url": "program/react-component-encapsulation.html",
    "revision": "066d4ea43c1f07f7cff8aee37881f659"
  },
  {
    "url": "program/react-quill-in-react.html",
    "revision": "183f4cdbbb0e45ee49cc0cb578da0561"
  },
  {
    "url": "program/regular-directives-of-Git.html",
    "revision": "3b228aaaa1fa892752cabf386fb3b83a"
  },
  {
    "url": "program/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "7624269984da4d9983bda1bae7ac3e72"
  },
  {
    "url": "program/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "25c37da222c52a9287a2a721f15786e9"
  },
  {
    "url": "program/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "19f6289ce134d04e7874eb50a02e8fe6"
  },
  {
    "url": "program/video.js-in-react.html",
    "revision": "e1f1e330a56b81207e888a53e892456f"
  },
  {
    "url": "timeline.html",
    "revision": "4b7c4c21fbb7b93b5f608f911fc8fd16"
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
