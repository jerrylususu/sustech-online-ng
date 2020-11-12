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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

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
    "revision": "67b4863a1a25861bab4be8206c0bc251"
  },
  {
    "url": "about.html",
    "revision": "9af0b900ef466fd6efa19d7b6b236018"
  },
  {
    "url": "assets/css/0.styles.585772f3.css",
    "revision": "039e6987439f3a31b384df9b895ef216"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline2.789d29f5.png",
    "revision": "789d29f569ececb82f4d260ac0b0726b"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/qr-code.9c784d6e.jpg",
    "revision": "9c784d6e62e54647252c3e081e3c22e9"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.4020eebd.js",
    "revision": "24eae1b2f991b3a6891e48efa3bf59f4"
  },
  {
    "url": "assets/js/11.4c61e9bd.js",
    "revision": "597468284976998747ecdf0dccfe66d4"
  },
  {
    "url": "assets/js/12.cddf9a6a.js",
    "revision": "d77adad6f00e420cbd3f187e9d77a614"
  },
  {
    "url": "assets/js/13.e2813a91.js",
    "revision": "c47381a1b2318e8ac1caa04dbd3162d4"
  },
  {
    "url": "assets/js/14.fcd07ae8.js",
    "revision": "f7c82234d7776c41900a97a0e78b7191"
  },
  {
    "url": "assets/js/15.f64f4455.js",
    "revision": "87826d4012ea6adc27501d73c30351ab"
  },
  {
    "url": "assets/js/16.242cca14.js",
    "revision": "31c481ac30afb5aae9d6f8e884e4942c"
  },
  {
    "url": "assets/js/17.7489d176.js",
    "revision": "465d4448870cc003337f73caa0f6e97b"
  },
  {
    "url": "assets/js/18.9919cc75.js",
    "revision": "f6000034ed294427d9be1467e8214bb5"
  },
  {
    "url": "assets/js/19.81c6ab56.js",
    "revision": "5ef5aca00abafd5242dc2fe5b4be7879"
  },
  {
    "url": "assets/js/2.97b079f7.js",
    "revision": "07a74114b0b9e79632b47e74257b7cde"
  },
  {
    "url": "assets/js/20.7d115edb.js",
    "revision": "a7e94e450884ac36b1ceadf0d427d47d"
  },
  {
    "url": "assets/js/21.f3a28132.js",
    "revision": "5d85539190871118cdf5ffc47c9be1ae"
  },
  {
    "url": "assets/js/22.a498f0e4.js",
    "revision": "fbd4123c8e548e9c5454c7444d3b2357"
  },
  {
    "url": "assets/js/23.bd710216.js",
    "revision": "715ec06e4d8a1783eca5494ee48d4778"
  },
  {
    "url": "assets/js/24.9c7a3be9.js",
    "revision": "2aa0b35021af1552c87cf86dd82a4c3c"
  },
  {
    "url": "assets/js/25.f0e332ff.js",
    "revision": "c9d86c581a7868b8173721b9b6204927"
  },
  {
    "url": "assets/js/26.d25778ee.js",
    "revision": "651737765a1c1584ab4f29c2fc9f9fac"
  },
  {
    "url": "assets/js/27.f1c60ec3.js",
    "revision": "5a0f35eda72034131fcb07809fa45e09"
  },
  {
    "url": "assets/js/28.637bb53d.js",
    "revision": "70b6fa621aa4216603c0ec8cd2b4cd5f"
  },
  {
    "url": "assets/js/29.c1363528.js",
    "revision": "189b246444872395c77f682221827362"
  },
  {
    "url": "assets/js/3.c93341ec.js",
    "revision": "f6993bce65b8a138eb97194da1c43c2c"
  },
  {
    "url": "assets/js/30.858f5e84.js",
    "revision": "f948b78594267f3e3e309c9bc71e68a0"
  },
  {
    "url": "assets/js/31.e2573fb1.js",
    "revision": "f76a2423d04bb1e56482d851b4c03e72"
  },
  {
    "url": "assets/js/32.24d46b80.js",
    "revision": "78b8e9a65c8b1215ed75ce7c886b6b89"
  },
  {
    "url": "assets/js/33.4f0b06c7.js",
    "revision": "ad7cb02aa330d2241d64f1ba23ef8b82"
  },
  {
    "url": "assets/js/34.be88ae51.js",
    "revision": "9189d726f9050a7fb5aba97c296398e2"
  },
  {
    "url": "assets/js/35.5f22ab0e.js",
    "revision": "8b1084437c0a0488cce2cbd61b3a3973"
  },
  {
    "url": "assets/js/36.7424775e.js",
    "revision": "a71fb76cc237cdb53380eabb456bef28"
  },
  {
    "url": "assets/js/37.7cfea32a.js",
    "revision": "68ec8165b284af9fe3010e22eba41fb8"
  },
  {
    "url": "assets/js/38.88851dc3.js",
    "revision": "af81ebfcd4b22997a88079e090890779"
  },
  {
    "url": "assets/js/39.ed054bae.js",
    "revision": "1e6aa8bc5a01d5bb85464016f05b3524"
  },
  {
    "url": "assets/js/4.0a10c220.js",
    "revision": "eee04492df1e9ffd3ce6ed19593a97be"
  },
  {
    "url": "assets/js/40.fe73677c.js",
    "revision": "315f66c0ac291981c50ed432d130bcd1"
  },
  {
    "url": "assets/js/41.cada65f6.js",
    "revision": "8ebe9865c839ed6ac069966b7a24871b"
  },
  {
    "url": "assets/js/42.d0373e81.js",
    "revision": "4a2620534c7ad88225bca90379b60fc8"
  },
  {
    "url": "assets/js/43.96643e81.js",
    "revision": "ec993fa3fdd2b26e8238383e917eed4a"
  },
  {
    "url": "assets/js/44.bb53a7c9.js",
    "revision": "647bd07bfaafac40b94a7bfef7732c1e"
  },
  {
    "url": "assets/js/45.3b1a9465.js",
    "revision": "218b4b64c93ad91e47986dd6636b5871"
  },
  {
    "url": "assets/js/46.01f1334a.js",
    "revision": "8b99e6b10a2cf10ee18a48c6d58ff5c2"
  },
  {
    "url": "assets/js/47.624dbec7.js",
    "revision": "d056e90e912524e039e696a380fa05d2"
  },
  {
    "url": "assets/js/48.aa29ea34.js",
    "revision": "af27d029023a8f7fa7471848023fcbf1"
  },
  {
    "url": "assets/js/49.d7f5039a.js",
    "revision": "d5dc3b491196fe57e23e5c9994c7cc78"
  },
  {
    "url": "assets/js/5.13c6e175.js",
    "revision": "1eaef130c51f05101c1532c1d5950110"
  },
  {
    "url": "assets/js/50.32fa8d39.js",
    "revision": "14a4daef330a85d0ad96e3041226d0d3"
  },
  {
    "url": "assets/js/51.66524f88.js",
    "revision": "14eb4ed76f4ccd63808f335a5d05e37b"
  },
  {
    "url": "assets/js/52.ad2a5d14.js",
    "revision": "42e204cff0a37d28fbbe3f743b28550f"
  },
  {
    "url": "assets/js/53.3c36fb10.js",
    "revision": "0b8b380b198f15ae877ce57b737d62f5"
  },
  {
    "url": "assets/js/6.768b2b23.js",
    "revision": "d736f49389ce5fc4b619cac5c05a3872"
  },
  {
    "url": "assets/js/7.7f978e02.js",
    "revision": "64a2e97fb8064ff04a7a1bb2d1d1e564"
  },
  {
    "url": "assets/js/8.028828d5.js",
    "revision": "c825c410c386d09e5ab43a1a014ef549"
  },
  {
    "url": "assets/js/9.4823610a.js",
    "revision": "a231c46292cc267c0027c9601678299c"
  },
  {
    "url": "assets/js/app.d88b1f7c.js",
    "revision": "98ac7b80aaaa968e24bcac7f0456b0d9"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "c3282faca89a8eaeb9501a8c82f89a08"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "97cb9ce0fd377fdb5fe611c2d6d35164"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "cd3de2c80f5de631ad1df9cff8f86d75"
  },
  {
    "url": "calendar/index.html",
    "revision": "0a541809ed2b8490d2a37a7ada8085cf"
  },
  {
    "url": "catering/index.html",
    "revision": "b977943cd6b75d70f8b40a34a665229a"
  },
  {
    "url": "contact/index.html",
    "revision": "9e728e1e14424205ddbd7cfb13973635"
  },
  {
    "url": "facility/index.html",
    "revision": "cfa184748bcd981a0b97e35130b93969"
  },
  {
    "url": "facility/panolens.html",
    "revision": "f92c6fcfd0754c648380dd4112b45cae"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "c50ae24194c5b3093a5139c9a32a5bfe"
  },
  {
    "url": "index.html",
    "revision": "cd02a6660989f36d275b7929fb7320b4"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "d3e69c27f969bb76521f57253eb71004"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "c6fc92c76ee4a12c504ed3a7cbc5de7e"
  },
  {
    "url": "life/index.html",
    "revision": "5c3ffa45d546598a36600af2351f0706"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "e7270910a556c515b37f925b7674a8fa"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "59bcfb1861d664d1435b57669c757efd"
  },
  {
    "url": "organizations/index.html",
    "revision": "21405ddfb6c49008294d7cbd0f266f41"
  },
  {
    "url": "organizations/registered-organization-2019.html",
    "revision": "e8469acff6a57be2ad26784a77063942"
  },
  {
    "url": "organizations/registered-organization-2020.html",
    "revision": "60ad21f49730bbb2014f8cfb6856c14a"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "bc7b31027741be5b150665059f0b3730"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "15a1ea181d54d757cf7a3af7d98b70d4"
  },
  {
    "url": "service/email/index.html",
    "revision": "9ceefe41b6eed8881570644e97669628"
  },
  {
    "url": "service/index.html",
    "revision": "bb74029fc76293c5b1d990b7ce7c365b"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "c4fced25b5707a684ad677a12ab09e27"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "5de31d01c5b556814a1d4e32d628dfad"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "484933cfe87d510c5f3496d84868438c"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "569be1fd3cc24a7fd7b462dc50357677"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "b57e527e3c97c808b2f8f7253234a9c6"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "32ff413538bf07cfce223860b3f961f7"
  },
  {
    "url": "service/network/index.html",
    "revision": "a1dbd07c43f3a67d91874e6b20acef2c"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "981730829d110a77609e6a60aebecd00"
  },
  {
    "url": "service/sid/index.html",
    "revision": "66b8990c7d2988625b9fcf119f9463ad"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "fb082403ce197dcf10764a74703f0ae7"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "dfbdda27badb24ce6aa829008082197a"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "0c945aa83b1af9dfd391c0fe0604cebc"
  },
  {
    "url": "site-help/index.html",
    "revision": "8b3fc278197f3c71eb22d020ba430865"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "b2dfd085800dcd38b6ddcda6ad2dafc8"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "0b9a8d80b507fefe0edd75b46b0d1f26"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "0ccdfda0e21221b6a7a9ccbd8f76dd57"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "fd5eb5a7a7ade434c38e17f8c148e3ff"
  },
  {
    "url": "study/index.html",
    "revision": "e58f4f2f4686d3d41d051762c00f717c"
  },
  {
    "url": "surroundings/index.html",
    "revision": "949646e3d25eea34f934d52c68248087"
  },
  {
    "url": "transport/holiday.html",
    "revision": "7506a351b0fb928c6ceea7a798eff691"
  },
  {
    "url": "transport/index.html",
    "revision": "7b41cae2f370e588e278c6d47f970ee6"
  },
  {
    "url": "transport/workday.html",
    "revision": "035ea7681bf78876ee05530f2cfa0867"
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
