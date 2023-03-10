//Foreach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar', 'Jugar'];

pendientes.forEach((pendientes) => {
    console.log(pendientes);
})

pendientes.forEach(pendientes => {
    console.log(pendientes);
})

pendientes.forEach((pendientes, indice) => {
    console.log(`${indice } : ${pendientes}`)
})

const carrito = [
    {nombre : 'Monitor 27 pulgadas',precio:500,},
    {nombre : 'Television',precio:100,},
    {nombre : 'Tablet',precio:200,},
    {nombre : 'Audifonos',precio:300,},
    {nombre : 'Teclado',precio:400,},
    {nombre : 'Celular',precio:700,},
]

const nuevoArreglo = carrito.forEach(producto => producto.nombre)

const nuevoArreglo2 = carrito.map(producto => producto.precio)

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
