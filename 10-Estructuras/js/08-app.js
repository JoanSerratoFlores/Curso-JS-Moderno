const autenticado = true;

if(autenticado){
    console.log('El usuario esta autenticado');
}

const puntaje = 450;

function revisarPuntaje(){
    if(puntaje > 300){
        console.log('El puntaje es mayor a 100');
        return;
    }
    if(puntaje > 100){
        console.log('El puntaje es mayor a 300');
        return;
    }
}

revisarPuntaje();

function revisarPuntaje2(){
    if(puntaje > 300){
        console.log('El puntaje es mayor a 100');
        
    }
    if(puntaje > 100){
        console.log('El puntaje es mayor a 300');
        
    }
}

revisarPuntaje2();