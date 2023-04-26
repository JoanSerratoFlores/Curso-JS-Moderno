//Cacheando
const nombreCache = 'apv-v4';

const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
    'manifest.json',
];

//Cuando se instala el service Worker
self.addEventListener('install', e => {
    console.log('Instalando el Service Worker');
    console.log(e);
    e.waitUntil(
        caches.open(nombreCache)
        .then(cache => {
            console.log('Cacheando');
            cache.addAll(archivos)
        })
    )
});

//Activar el Service Worker
self.addEventListener('activate', e => {
    console.log('Service Worker Activado');;
    console.log(e);

    e.waitUntil(
        caches.keys()
        .then(keys => {
            return Promise.all(
                keys.filter(key => key !== nombreCache )
                .map(key => caches.delete(key)) //Borra las demas versiones anteriores
            )
        })
    )

});

//Evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return (respuestaCache ? respuestaCache : caches.match('./error.html'))
        })
        //.catch( () => caches.match('/error.html'))
    )
})