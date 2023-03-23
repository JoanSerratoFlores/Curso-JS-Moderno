class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de : ${this.saldo}`;
    }

    static bienvenida(){
        return `Bienvenido al cajero`
    }

}

const juan = new Cliente('Juan', 400);
console.log(juan.mostrarInformacion());
console.log(juan);
console.log(Cliente.bienvenida());

class Cliente2 {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de : ${this.saldo}`;
    }
}

const juan2 = new Cliente2('JOAN', 4000);
console.log(juan2.mostrarInformacion());
console.log(juan2);