const autenticado = true;
const puedepagar = false;

console.log( autenticado || puedepagar ? 'Si esta autenticado' : 'No esta autenticado');

// const efectivo  = 800;
// const credito = 400;
// const saldo = efectivo + credito;
// const total = 600;

// if(efectivo > total || credito < total || saldo > total) {
//     if(efectivo > total)
//     {
//         console.log('Si pagaste con efectivo');
//     }else { 
//         console.log('Otra forma de pago');
//     }
//     }
//     else{
//         console.log('No puedes pagar');
//     }

console.log(autenticado ? puedepagar ? 'Si esta autenticado y puede pagar' : 'Si esta autenticado, No puedes pagar':'No esta autenticado');