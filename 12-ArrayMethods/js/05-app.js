const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//Con un foreach

console.log('Con un foreach');

let resultado = '';

carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet')
    {
        resultado = carrito[index];
    }
});
console.log(resultado);

//Con un .find
console.log('Con un .find');

resultado2 = carrito.find(producto => producto.nombre === 'Tablet');

console.log(resultado2);

resultado3 = carrito.find(producto => producto.precio === 100);
console.log(resultado3);