var filesToCache = [
  "/",
  "Emulatrix.htm",
  "Emulatrix.json",
  "EmulatrixFavIcon_192x192.png",
  "EmulatrixFavIcon_512x512.png",
  "EmulatrixFavIcon.svg",
  "EmulatrixShare.png",
  "Emulatrix_DOS.js",
  "Emulatrix_GameBoy.js",
  "Emulatrix_GameBoyAdvance.js",
  "Emulatrix_Genesis.js",
  "Emulatrix_MAME.js",
  "Emulatrix_Nintendo.js",
  "Emulatrix_SuperNintendo.js",
  "index.html",
]

var staticCacheName = "emulatrix-v2"

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches
      .match(event.request)
      .then(function (response) {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch(function (_error) {})
  )
})
