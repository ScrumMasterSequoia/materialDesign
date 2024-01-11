// https://www.youtube.com/watch?v=WbbAPfDVqfY

self.addEventListener('install', e => {
    try{
        e.waitUntil(
            caches.open('static').then(cache => {
                return cache.addAll([
                    './',
                    './default.css',
                    './index.html',
                    './img/icon152.png',
                    './img/icon192.png',
                    './img/icon384.png',
                    './img/icon512.png'
                ]);
            })
        )
        console.log("sw.js - SW registered successfully!");
    }catch(error) {
    console.log("SW registration failed. "+error);
    }
});

// these logs will only print if a change is made to this file, and must be inspected in the browser, go to application, then service workers, then click on stopwaiting, 

self.addEventListener('fetch', e => {
    //console.log(`intercepting fetch request for: ${e.request.url}`)
    e.respondWith(
        caches.match(e.request).then(response => {
            // fetch the request from the network if it is not in the cache
            return response || fetch(e.request);
        })
    )
})