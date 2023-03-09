const reproductor = {
    cancion: '',
    reproducir: ID => console.log(`REPRODUCIENDO AUDIO CON EL ID: ${ID}`),
    pausar: () => console.log('Pausado'),
    borrar: id => console.log(`Borrar cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.crearPlaylist('Metal');
reproductor.reproducirPlaylist('Rap');


reproductor.borrar(30);