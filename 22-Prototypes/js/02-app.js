function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

function formatearCliente(cliente){
    const {nombre,saldo}=cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

const Joan = new Cliente ('Joan',500);
console.log(formatearCliente(Joan));



function Empresa (nombre,saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

function formatearEmpresa(cliente){
    const {nombre,saldo,categoria}=cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pretenece a la categoria ${categoria}`;
}
const CCJ = new Empresa ('Udemy',5000,'Programacion Web')
console.log(formatearEmpresa(CCJ));
