const suma = (a, b, c) => a + b + c;

// console.log(suma(1, 2, 3));

// const parcial = (a) => (b, c) => suma(a, b, c);

// const primernumero = parcial(5);

// const resultado = primernumero(4, 3);

// console.log(resultado);

const parcial = (a) => (b) => (c) => suma(a, b, c);

const primernumero = parcial(5);
const segundonumero = primernumero(4);
const resultado = segundonumero(3);

console.log(resultado);


const resultadoParcial = parcial(5)(4)(3);
console.log(resultadoParcial);