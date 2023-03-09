const efectivo  = 300;
const credito = 400;
const saldo = efectivo + credito;
const total = 600;

if(efectivo > total || credito < total || saldo > total) {
    console.log('Si podemos pagar');
}else { 
    console.log('No podemos pagar');
}
