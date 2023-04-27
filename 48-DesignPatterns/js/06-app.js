//Mixings Pattern

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

class Cliente {
  constructor(nombre, email) {
    this.nombre = nombre;
    this.email = email;
  }
}

const funcionesPersona = {
  mostrarInfo() {
    console.log(`Nombre : ${this.nombre} Email : ${this.email}`);
  },
  mostrarNombre() {
    console.log(`Mi nombre es :${this.nombre}`);
  },
};

//Object Assign
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona("Juan", "correo@correo.com");

console.log(cliente);
cliente.mostrarInfo();
cliente.mostrarNombre();

const cliente2 = new Cliente('Cliente','cliente@cliente.com');
cliente2.mostrarInfo();
cliente2.mostrarNombre();