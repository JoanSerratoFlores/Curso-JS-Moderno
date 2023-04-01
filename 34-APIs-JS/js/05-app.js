document.addEventListener("visibilitychange",() => {
    if(document.visibilityState == "visible"){
        console.log('Ejecutar la funcion de reproducir video');
    }else{
        console.log('Pausar el video');
    }
});