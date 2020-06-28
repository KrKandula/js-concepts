//reference: https://hackernoon.com/service-workers-62a7b14aa63a

// Notes: 
// It is a script file that runs in the background without interfering with the user interactions.
// Service Worker provides a rich offline-first user experience, background sync, push notifications
// Service Worker acts as a proxy server that intercepts the network requests sent by your web application to the server.
// requests to fetch js files, css files will go through proxy server.
// Service worker has the ability to modify this request or send a custom response back to the client.
// service worker should be served from the same domain.

//service worker stores information in indexedDB

//example event
//'self' is used to refer to the service worker
// event.waitUntil(), makes service worker reamain active until the event is triggered
self.addEventListener('fetch', (event) => {
	event.waitUnitil(
		if (event.request.url.includes('/product') {
			let productId = event.data.productId
			let productCount = getProductData(productId)
			indexedDB.open('store', 1, (db) => {
				let productStore = db.createObjectStore('products', { keyPath: 'id' })
				productStore.put({ id: productId, count: ++productCount })
			})
		}
	)
})

//Service Worker cannot access the DOM directly. 
//It works in a different context and can communicate with the client using postmessages.
self.addEventListener('activate', (event) => {
    event.waitUntil(
        self.clients.matchAll().then ( (client) => {
            client.postMessage({
                msg: 'Hey, from service worker! I\'m listening to your fetch requests.',
                source: 'service-worker'
            })
        })
    )
})

//Below is the listener on the client javascript that listens to messages and 
//accordingly performs an action when the message is from the service worker.
this.addEventListener('message', (data) => {
    if (data.source == 'service-worker') {
        console.log(data.msg)
    }
})

//============================================

//Client registration
// When your page is refreshed, the service worker registration code is not executed again, browser takes care of that.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then (registration => {
        console.log('Service Worker registered successfully!')
    }, (error) => {
        console.log('Error in registering service worker', error)
    })
}

// By default, the scope of the service worker is ‘/’, which means it can intercept all the network requests coming 
// from the root, scope can be registered using scope property
navigator.serviceWorker.register('/service-worker.js', { scope: '/products/fashion' })

//service worker initialization tasks are next, like setting up the browser cache or creating object stores in IndexedDB
self.addEventListener('install', (event) => {
    let CACHE_NAME = 'xyz-cache'
    let urlsToCache = [
        '/',
        '/styles/main.css',
        '/scripts/bundle.js'
    ]
    event.waitUntil(
        /* open method available on caches, takes in the name of cache as the first paramter. It returns a promise that resolves to the instance of cache
        All the above URLS can be added to cache using the addAll method. */
        caches.open(CACHE_NAME)
        .then (cache => cache.addAll(urlsToCache))
    )
})

//activate step. After successful installation, service worker enters in the ready state
// Here, we can manage the old cache resources or clean up the stale data in IndexedDb.
self.addEventListener('activate', (event) => {
    let cacheWhitelist = ['products-v2'] // products-v2 is the name of the new cache

    event.waitUntil(
        caches.keys().then (cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    /* Deleting all the caches except the ones that are in cacheWhitelist array */
                    if (cacheWhitelist.indexOf(cacheName) === -1) { 
                        return caches.delete(cacheName)
                    }
                })
            )
        })
    )
})

//How do I know if my web page is controlled by any service worker?

let controller = navigator.serviceWorker.controller

if (controller) {
    console.log('Your page is controlled by', controller)
} else {
    console.log('Your page is not controlled by any service worker!')
}
