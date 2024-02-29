var cacheName = "classpurchase-v1";
var cacheFiles = [
    "index.html",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/art.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/assyrian_flag.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/biology.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/chemistry.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/classics.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/computer.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/english.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/geography.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/icon-32.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/icon-512.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/maths.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/music.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/physics.png",
    "http://testapp-env.eba-26mfnh5p.eu-west-2.elasticbeanstalk.com/science.png"//should this be changed?
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