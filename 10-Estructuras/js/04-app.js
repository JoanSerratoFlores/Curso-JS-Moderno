const dinero = 3000;
const tarjeta = false;
const total=30000;
const cheque=true;

if(dinero >= total) {
    console.log("El dinero es mayor que el total");
}else if(tarjeta){
    console.log("Tengo tarjeta");
}else if(cheque){
    console.log("Tengo cheque");
}
else{
    console.log("El dinero es menor que el total");
}