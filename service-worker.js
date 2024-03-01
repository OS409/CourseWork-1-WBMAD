var cacheName = "classpurchase";
var cacheFiles = [
    "index.html",
    "images/art.png",
    "images/assyrian_flag.png",
    "images/biology.png",
    "images/chemistry.png",
    "images/classics.png",
    "images/computer.png",
    "images/english.png",
    "images/geography.png",
    "images/icon-32.png",
    "images/icon-512.png",
    "images/maths.png",
    "images/music.png",
    "images/physics.png",
    "images/science.png"//shouuld thie be changed?
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

self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (cachedFile) {
            //if the file is in the cache, retrieve it from there
            if (cachedFile) {
                console.log("Service Worker] Resoruce fetched from the cache for: " + e.request.url);
                return cachedFile;
            } else { //if the file is not in the cache, download the file
                console.log(e.request);
                return fetch(e.request).then(function (response) {
                    return caches.open(cacheName).then(function (cache) {
                        //add the new file to the cache
                        cache.put(e.request, response.clone());

                        console.log("[Service Worker] Resource fetched and saved in the cache for: " + e.request.url);
                        // 'r' is the matching file if it exists in the cache
                        return response;
                    })
                })
            }
        })
    );
});