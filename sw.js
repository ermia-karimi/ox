const CACHE_NAME = 'ermia-cache-v1';
const urlsToCache = [
    'index.html',
    't1.html',
    't2.html',
    't3.html',
    't4.html',
    't5.html',
    't6.html',
    't7.html',
    't8.html',
    't9.html',
    't10.html',
    'cart.html',
    'cart1.html',
    'cart2.html',
    'cart3.html',
    'cart4.html',
    'cart5.html',
    'cart6.html',
    'cart7.html',
    'cart8.html',
    'cart9.html',
    'trp.html',

    'style.css',

    'app.js',
    'app1.js',
    'app2.js',
    'app3.js',
    'app4.js',
    'app5.js',
    'app6.js',
    'app7.js',
    'app8.js',
    'app9.js',
    'ca1.js',
    'ca2.js',
    'ca3.js',
    'ca4.js',
    'ca5.js',
    'ca6.js',
    'ca7.js',
    'ca8.js',
    'ca9.js',
    'ca10.js',
    'translate.js',

    'cn.json',
    'ru.json',
    'fr.json',
    'jp.json',
    'fa.json',
    'en.json',
    'es.json',
    'de.json',
    'ar.json',

    'V.ttf',

    '15.jpg',

];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
