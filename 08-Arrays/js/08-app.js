const producto ={
    nombre: 'Monitor 1',
    precio: 1000,
    cantidad: 10,
    disponible: true
}

//Destructuring

const {nombre} = producto;
console.log(nombre);

const {disponible} = producto;
console.log(disponible);

//Desctructuring con Arreglos

const numeros = [1,2,3,4,5];

const [primero,...tercero] = numeros;

console.log(tercero);