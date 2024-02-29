var cacheName = "classpurchase";
var cacheFiles = [
    "index.html",
    "images/art.png",
    "images/biology.png",
    "images/chemistry.png",
    "images/computer.png",
    "images/english.png",
    "images/classics.png",
    "images/geography.png",
    "images/maths.png",
    "images/music.png",
    "images/physics.png",
    "images/science.png",
    "images/assyrian_flag.png",
    "images/icon-32.png",
    "images/icon-512.png"
];

self.addEventListener("install", function(e) {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[Service Worker] Caching files");
            return cache.addAll(cacheFiles);
        })
    );
});