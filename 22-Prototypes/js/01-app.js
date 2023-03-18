const cliente = {
    nombre: 'Juan',
    saldo : 500
}

console.log(cliente);
console.log(typeof cliente);

function Cliente (nbombre,saldo) {
    this.nbombre = nbombre;
    this.saldo = saldo;
}

const juan = new Cliente ('Juan',500);
console.log(juan);

