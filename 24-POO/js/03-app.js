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

//Herencia
class Empresa extends Cliente{
    constructor (nombre,saldo,telefono,categoria) {
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){ // Reescribir un metodo
        return `Bienvenido al cajero de Empresas`
    }
}


const juan = new Cliente('Joan', 500);
const empresa  = new Empresa('Codigo con Joan',500,1091391,'Aprendizaje en Linea');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());