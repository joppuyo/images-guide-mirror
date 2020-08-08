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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/hamburger.svg",
    "revision": "d2cb0dda3e8313b990e8dcf5e25d2d0f"
  },
  {
    "url": "images/icons/lightbulb.svg",
    "revision": "8c9fa41fd10124bd50ff27a026372ae2"
  },
  {
    "url": "images/icons/logo.svg",
    "revision": "a1e23ac638258bc05f84eebcd3ee0f1c"
  },
  {
    "url": "images/icons/star.svg",
    "revision": "5de8294cfcc3ced51cc478287fed403b"
  },
  {
    "url": "images/touch/safari-pinned-tab.svg",
    "revision": "9a3ded5d0b5ba5bc605f08d8a6489781"
  },
  {
    "url": "scripts/main.min.js",
    "revision": "03ad5791d62b72e5f45fffb90d097c6e"
  },
  {
    "url": "styles/main.css",
    "revision": "1738c20a38fb76511b476f6afac7b531"
  },
  {
    "url": "book.html",
    "revision": "a43abaa38ba76694f5185959763ac52c"
  },
  {
    "url": "index.html",
    "revision": "41959eabd6a1cb8c3934f4041e94ac3b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\/images\//, workbox.strategies.staleWhileRevalidate({ cacheName: "book-images", plugins: [] }), 'GET');
