self.addEventListener('install', e => {
    try {
        e.waitUntil(
            caches.open('static').then(cache => {
                return cache.addAll([
                    './',
                    './bundle.js',
                    './favicon.ico',
                    './default.css',
                    './index.html',
                    './img/icon152.png',
                    './img/icon192.png',
                    './img/icon384.png',
                    './img/icon512.png',
                    './img/supplement-art.png',
                ]);
            })
        )
        console.log("sw.js - SW registered successfully!");
    } catch (error) {
        console.log("SW registration failed. " + error);
    }
});

// these logs will only print if a change is made to this file, and must be inspected in the browser. Go to application, then service workers, then click on stopwaiting, 

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            // if it is in the cache, fetch the request. else fetch it from the network 
            return response || fetch(e.request);
        })
    )
})