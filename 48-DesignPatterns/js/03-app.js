//Singleton

let instancia = null;

class Persona {
  constructor(nombre, email) {
    if (!instancia) {
        this.nombre = nombre;
        this.email = email;
        instancia=this;
    }else{
        return instancia;
    }
  }
}

const presona = new Persona("Juan", "correo@correo.com");
console.log(presona);

const persona2 = new Persona("Karen", "karen@karen.com");
console.log(persona2);
