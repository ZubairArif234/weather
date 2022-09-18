

const staticDevCoffee = "weather-gossip-v1";
const assets1 = ["/",
"/index.html",
"/app.js",
"/style.css",
"/assets/blueback.avif",
"/assets/clear.png",
"/assets/cloudparty.jpg",
"/assets/clouds.png",
"/assets/dry.png",
"/assets/dust.png",
"/assets/dustblow.avif",
"/assets/greenyclouds.jpg",
"/assets/haze.png",
"/assets/rain.png",
"/assets/raindroplts.jpg",
"/assets/rainroad.jpg",
"/assets/smokyred.avif",
"/assets/strom.png",
"/assets/sun.png",
"/assets/sunnyblow.jpg",
"/assets/sunnytree.avif",
"/assets/sunRain(1).png",
"/assets/thermometer.jpg",
"/assets/wind.png"
];

// self.addEventListener("install", (installEvent) => {
//   installEvent.waitUntil(
//     caches.open(staticDevCoffee).then((cache) => {
//       cache.addAll(assets1);
//     })
//   );
// });

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets1)
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})


// self.addEventListener("fetch", function (event) {
//   console.log("The service worker is serving the asset.");
//   event.respondWith(
//     checkResponse(event.request).catch(function () {
//       return returnFromCache(event.request);
//     })
//   );
//   event.waitUntil(addToCache(event.request));
// });

// var checkResponse = function (request) {
//   return new Promise(function (fulfill, reject) {
//     fetch(request).then(function (response) {
//       if (response.status !== 404) {
//         fulfill(response);
//       } else {
//         reject();
//       }
//     }, reject);
//   });
// };

// var addToCache = function (request) {
//   return caches.open("pwabuilder-offline").then(function (cache) {
//     return fetch(request).then(function (response) {
//       console.log("[PWA Builder] add page to offline" + response.url);
//       return cache.put(request, response);
//     });
//   });
// };

// var returnFromCache = function (request) {
//   return caches.open("pwabuilder-offline").then(function (cache) {
//     return cache.match(request).then(function (matching) {
//       if (!matching || matching.status == 404) {
//         return cache.match("offline.html");
//       } else {
//         return matching;
//       }
//     });
//   });
// };