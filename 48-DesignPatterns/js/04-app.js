//Factory Pattern - Crea objetos con ciertas condiciones

class inputHTML {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }

  crearInput() {
    return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
  }
}

class HTMLFactory {
  crearElemento(tipo, nombre) {
    switch (tipo) {
      case "text":
        return new inputHTML("text", nombre);
      case "tel":
        return new inputHTML("tel", nombre);
        case "email":
            return new inputHTML("email", nombre);
      default:
        break;
    }
  }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento("text", "nombre-cliente");
console.log(inputText.crearInput());

const elemento2 = new HTMLFactory();
const inputText2 = elemento.crearElemento("tel", "telefono-cliente");
console.log(inputText2.crearInput());

const elemento3 = new HTMLFactory();
const inputText3 = elemento.crearElemento("email", "email-cliente");
console.log(inputText3.crearInput());
