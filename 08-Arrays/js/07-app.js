//Forma Declarativa

const carrito = [];

//Definir un producto

const producto = {
    nombre:'Monitor de 32 pulgadas',
    precio:400,
}

const producto2 = {
    nombre:'Celular',
    precio:800,
}

carrito.push(producto2);
carrito.push(producto);

const producto3 ={
    nombre:'Teclado',
    precio:300,
}

const producto4 ={
    nombre:'Mouse',
    precio:200,
}

carrito.unshift(producto3);
carrito.unshift(producto4);
console.table(carrito);

// //Eliminar ultimo elemento de un arreglo

// carrito.pop();
// console.table(carrito);

// //Eliminar primer elemento de un arreglo

// carrito.shift();
// console.table(carrito);

carrito.splice(3, 1);
console.table(carrito);