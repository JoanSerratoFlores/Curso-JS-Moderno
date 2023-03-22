function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retiro) {
    this.saldo -= retiro;
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.construtor = Cliente;

//Instanciarlo

const Juan = new Persona('Juan', 5000, 1029384756);
console.log(Juan);
console.log(Juan.tipoCliente());

Persona.prototype.mostrarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(Juan.mostrarTelefono());