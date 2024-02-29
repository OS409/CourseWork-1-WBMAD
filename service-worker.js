var cacheName = "classpurchase";
var cacheFiles = [
    "index.html",
    "collections/lessons.js",
    "images/art.png",
    "images/assyrian_flag.png",
    "images/biology.png",
    "images/chemistry.png",
    "images/classics.png",
    "images/computer.png",
    "images/english.png",
    "images/geography.png",
    "images/icon-32.png",
    "images/maths.png",
    "images/music.png",
    "images/physics.png",
    "images/science.png"
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