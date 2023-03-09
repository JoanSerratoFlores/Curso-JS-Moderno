const usuario = false;
const puedePagar = false;

if(usuario && puedePagar) {
    console.log("Puede Comprar");
}
else if(!usuario && !puedePagar) {
    console.log("No puede Comprar");
}
else if(!usuario){
    console.log('Inicia sesion o saca una cuenta');
}
else if(!puedePagar){
    console.log('Fondos insuficientes');
}