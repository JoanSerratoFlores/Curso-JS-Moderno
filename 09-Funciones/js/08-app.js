function sumar(a,b){
    return a+b;
}

const resultado = sumar(2,3);

console.log(resultado);

//Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(400);
total = agregarCarrito(500);
total = agregarCarrito(700);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es : ${totalPagar}`);
console.log(total);





