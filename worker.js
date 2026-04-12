const filesToCache = [
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

const staticCacheName = "emulatrix-v2"

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch((_error) => {})
  )
})
