//Forma Imperativa

const carrito = [];

//definir un producto

const producto = {
    nombre:'Monitor de 32 pulgadas',
    precio:400,
}

const producto2 = {
    nombre:'Celular',
    precio:800,
}

//Push agrega al final de un array
carrito.push(producto);
carrito.push(producto2);

const producto3 ={
    nombre:'Teclado',
    precio:300,
}

carrito.unshift(producto3);

console.table(carrito);