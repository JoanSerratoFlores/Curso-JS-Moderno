function Cliente (nombre,saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function (){
    let tipo;

    if(this.saldo >10000){
        tipo = 'Gold';
    }else if(this.saldo >5000){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre`
}

//Instanciarlo
const Pedro = new Cliente('Pedro',6000)
console.log(Pedro.tipoCliente());

console.log(Pedro);
