const sym = Symbol('1');
const sym2 = Symbol('1');

if(sym===sym2){
    console.log('Son iguales');
}else{
    console.log('Son diferentes');
}

// console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//agregar el nombre y apellido como llaves del objeto

persona[nombre] = 'Joan';
persona[apellido] = 'Serrato';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

//Las propiedades que utilizan un symbol no son iterables

for (let i in persona){
    console.log(i);
}

//Definir una descripicion del symbol

const nombreCliente = Symbol('Nombre del Cliente');
const cliente =[];

cliente[nombreCliente] = 'Pedro'

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);