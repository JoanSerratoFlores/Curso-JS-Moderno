//Generador con elementos estaticos

function *crearGenerador(){
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

//Generador para carrito de compras
//Generador programado

function *generadorCarrito(){

    for(let i=0;i<carrito.length;i++)
    yield carrito[i];
}

const carrito = ['1','2','3','4','5','6','7','8','9'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());