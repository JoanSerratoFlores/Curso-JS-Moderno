const reproductor = {
    reproducir:function(ID){
        console.log(`REPRODUCIENDO AUDIO CON EL ID: ${ID}`);
    },
    pausar:function(){
        console.log('Pausado');
    },
    borrar:function(id){
        console.log(`Borrar cancion... ${id}`);
    },
    crearPlaylist:function(nombre){
        console.log(`Creando la playlist ${nombre}`);
    },
    reproducirPlaylist:function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.crearPlaylist('Metal');
reproductor.reproducirPlaylist('Rap');


reproductor.borrar(30);