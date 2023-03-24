const carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco');
carrito.add('Tenis');
carrito.add('Balon');
carrito.add('disco');

carrito.delete('Disco');
console.log(carrito.delete('Disco'));

console.log(carrito);
console.log(carrito.size);
console.log(carrito.has('Guitarra'));

carrito.forEach((producto,index,pertenece) => {
    // console.log(producto);
    //console.log(index);
    console.log(pertenece);
})

console.log(carrito);

//Del siguiente arreglo, eliminar los duplicados

const numero = [10,20,30,40,50,10,20];

const noDuplicados = new Set(numero);
console.log(noDuplicados);

