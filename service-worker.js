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
    "revision": "05cb32e1e55e13109210edd8638e0073"
  },
  {
    "url": "articles/BE/index.html",
    "revision": "f55e1b87322dcd7104b9be8bae5fbd3e"
  },
  {
    "url": "articles/BE/web-service-deployment.html",
    "revision": "3dee0aef02ab11449a7a15baa0b330eb"
  },
  {
    "url": "articles/index.html",
    "revision": "567ed3f16b12816117af65fa0a6201ea"
  },
  {
    "url": "articles/UI/index.html",
    "revision": "1eb1ba0b31c29ed6fcb21d11d6bacafd"
  },
  {
    "url": "articles/UI/miniprogram-design-pattern.html",
    "revision": "4db00f6214e88751218a4550d09b6a05"
  },
  {
    "url": "assets/css/0.styles.ac505532.css",
    "revision": "f7b4d5eb3657a054e3aba40b057bcbc6"
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
    "url": "assets/img/d2b99797-4d59-4e23-ba90-38c1a42d3ade.b17bd642.png",
    "revision": "b17bd642b7c4de23d86998c764fa7b9b"
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
    "url": "assets/js/10.69f17209.js",
    "revision": "085e81167b78cf96fa1eb4d465ad7ee4"
  },
  {
    "url": "assets/js/11.69ce02e6.js",
    "revision": "a28e54623468342160eabc33d786c02c"
  },
  {
    "url": "assets/js/12.52e91bb0.js",
    "revision": "75a73e78a812c190873fff49dc492487"
  },
  {
    "url": "assets/js/13.e895daa2.js",
    "revision": "b3c19f7a4b2423444190b38e055d97dc"
  },
  {
    "url": "assets/js/14.edeb257d.js",
    "revision": "3ef0f7eae995ff1c994f2ada4e5a1493"
  },
  {
    "url": "assets/js/15.e901b924.js",
    "revision": "e69dac16484c3d94244a5500d73f1ba7"
  },
  {
    "url": "assets/js/16.cca724a7.js",
    "revision": "a4213ae98f24187f682ba00b5f44690c"
  },
  {
    "url": "assets/js/17.91d7bff4.js",
    "revision": "62cdc54fc17edc6e0ab3944652d78ac8"
  },
  {
    "url": "assets/js/18.e789da3f.js",
    "revision": "9ffc89c760b36f046691bcc22b44a9cf"
  },
  {
    "url": "assets/js/19.df24a0af.js",
    "revision": "220e476c3877c1b19cc070e25cdfc9da"
  },
  {
    "url": "assets/js/2.36b792b1.js",
    "revision": "bff44239d163ac673f5781d00fd71d63"
  },
  {
    "url": "assets/js/20.cffe67a6.js",
    "revision": "6e90a2f51253f3e1861b4a855df971cc"
  },
  {
    "url": "assets/js/21.4d943b4c.js",
    "revision": "f489fc3eac5331587b58370f3a0b4c84"
  },
  {
    "url": "assets/js/22.499f542e.js",
    "revision": "9b7b3d869a082bbd1d4406e6f4604d47"
  },
  {
    "url": "assets/js/23.9bf5951a.js",
    "revision": "6ea5dd340d32a4121bc22b702f4a8788"
  },
  {
    "url": "assets/js/24.3bc50298.js",
    "revision": "e2a948672f8c9074ad6922027c9d8b29"
  },
  {
    "url": "assets/js/25.cb90004d.js",
    "revision": "faa0b4c6d27a22160570cf65fffa486c"
  },
  {
    "url": "assets/js/26.30b19556.js",
    "revision": "afae768b3a8642a6651fec66eb33062e"
  },
  {
    "url": "assets/js/27.c1617680.js",
    "revision": "b76fab76786dcb152725074d3f96f522"
  },
  {
    "url": "assets/js/28.c7feeb6f.js",
    "revision": "452d3d88f48a9071a77c573e2d7b4927"
  },
  {
    "url": "assets/js/29.fddf6327.js",
    "revision": "13407958c8ff2e423fe39c45a8a821db"
  },
  {
    "url": "assets/js/3.a50af193.js",
    "revision": "c3d6974fa902c5c1f4096710c645da64"
  },
  {
    "url": "assets/js/30.e2d5fb01.js",
    "revision": "4028a9c371e450ae4db97db3ec0d08f9"
  },
  {
    "url": "assets/js/31.5506d8d8.js",
    "revision": "41e80180cf8153b942ec32682e3fdbfe"
  },
  {
    "url": "assets/js/32.46c245ff.js",
    "revision": "00095201c7ac2cabad76c1d5cfefc9a6"
  },
  {
    "url": "assets/js/33.7f7af834.js",
    "revision": "f592317fd90c2b48da221e8e38429091"
  },
  {
    "url": "assets/js/34.0426d7b8.js",
    "revision": "41549963fef7875696d3bffc58589baf"
  },
  {
    "url": "assets/js/35.88e63d1f.js",
    "revision": "56b4af45fd88c097ed3edf125df7da4d"
  },
  {
    "url": "assets/js/36.0703b33d.js",
    "revision": "38c6e9807d4dda697f4225f7ddb2aada"
  },
  {
    "url": "assets/js/37.bd73677e.js",
    "revision": "b56fef0dcfb8fcbb97adeb61121efe77"
  },
  {
    "url": "assets/js/38.d9f8026f.js",
    "revision": "d5b0adf90caf0a0f728791a11a671695"
  },
  {
    "url": "assets/js/39.65e00457.js",
    "revision": "4e0de6b40b2e826f07bbaf4b7e6a6b49"
  },
  {
    "url": "assets/js/4.ff8cb881.js",
    "revision": "9af962511a6da3df2002b4faf06eba3a"
  },
  {
    "url": "assets/js/5.583cd493.js",
    "revision": "87a85fe55d04e1f577c97e302f289984"
  },
  {
    "url": "assets/js/6.da50b0f0.js",
    "revision": "66ce65d4e2c1b3088a9dc8abd6cd8897"
  },
  {
    "url": "assets/js/7.51216d6c.js",
    "revision": "4843c41a75146fd41d31eaa12039af45"
  },
  {
    "url": "assets/js/8.71293a61.js",
    "revision": "3804684290727d01ee4293b7395385c8"
  },
  {
    "url": "assets/js/9.87739adf.js",
    "revision": "5bc1049a48720e9c94128aae9bd44ce4"
  },
  {
    "url": "avatar.jpeg",
    "revision": "354794ed89fe2f606802ad0f560ccc8e"
  },
  {
    "url": "go/GO笔记-错误捕获.html",
    "revision": "154aed867326a8e8b5e9f7535b683e85"
  },
  {
    "url": "go/index.html",
    "revision": "e7989e0fd8717b6c0b557f4218bba29b"
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
    "revision": "100632c7a9ebe28de21791c191c98a5e"
  },
  {
    "url": "links.html",
    "revision": "b48b6c39190dfaaf5153e7e5be590987"
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
    "revision": "acc01d52de692f5d54d81d07d4ef6082"
  },
  {
    "url": "practice/Vuepress-builds-PWA-blog.html",
    "revision": "8fb6991d24cf36f79bcb1ac636cb99da"
  },
  {
    "url": "program/A-comprehensive-analysis-and-summary-of-BFC-principle-and-Practice.html",
    "revision": "1ef6b7e5975a24defa67aae3143b3465"
  },
  {
    "url": "program/deep-understanding-of-es6-module.html",
    "revision": "b0ec7548491229046243cfbfc42663b4"
  },
  {
    "url": "program/deep-understanding-of-JS-module.html",
    "revision": "b9674a5aee28eeb209186c4e9d52a71b"
  },
  {
    "url": "program/deep-understanding-of-JS-prototype-and-inheritance.html",
    "revision": "278233dc14cd4d3f2e701c19bee4db77"
  },
  {
    "url": "program/FE-file-upload.html",
    "revision": "450b15b0c857bdec4c2947804974e11f"
  },
  {
    "url": "program/frontend-interview.html",
    "revision": "a5d75abc9cb874d4aeb3fcd857649efa"
  },
  {
    "url": "program/key-concepts-of-react-and-dva.html",
    "revision": "78f95695c128ff0ab584702109715e4e"
  },
  {
    "url": "program/lazyload-pullup-load.html",
    "revision": "87c4e241e7d79ca13f598e4a62e094c6"
  },
  {
    "url": "program/prototype-of-JS.html",
    "revision": "863953d2a5ec508b6aa5d3efcd502c96"
  },
  {
    "url": "program/react-component-encapsulation.html",
    "revision": "5241b679656b8c8f41995f81f07006cc"
  },
  {
    "url": "program/react-quill-in-react.html",
    "revision": "afafa80d331fdcdca2d2f27b2a7e4f6d"
  },
  {
    "url": "program/regular-directives-of-Git.html",
    "revision": "08c1dbfc556708e7681a4b06fb02cff8"
  },
  {
    "url": "program/Take-you-to-analyze-the-source-code-of-Vue-router.html",
    "revision": "5bbbce3d8bd3d2903810db2dae31522f"
  },
  {
    "url": "program/Talk-about-the-pit-encountered-in-the-implementation-of-Vue-routing-component-cache.html",
    "revision": "70c1fd8c53dd66ee1a7f72499f8bae54"
  },
  {
    "url": "program/Thoroughly-understand-DOM-event-mechanism.html",
    "revision": "cbc68e06b8b1a6b6e47a90846cfad5b6"
  },
  {
    "url": "program/tmp.html",
    "revision": "79b06f31c43290eabc4f1c3d01f7c265"
  },
  {
    "url": "program/video.js-in-react.html",
    "revision": "e1c9c5af41b890bdef734866a4cb97db"
  },
  {
    "url": "program/Yarn Plug'n Play.html",
    "revision": "f375eeda1e96e147a9ea5a0676b975e2"
  },
  {
    "url": "summary/2020.11.15.html",
    "revision": "84609aaf06d3385357eb459d540dd588"
  },
  {
    "url": "timeline.html",
    "revision": "322a0e093389e8180435ce8ec6fd20cc"
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
