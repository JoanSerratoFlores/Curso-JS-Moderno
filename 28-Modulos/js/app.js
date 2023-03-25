import minuevafuncion, { nombreCliente,ahorro,mostrarInformacion, tieneSaldo,Cliente } from "./cliente.js";
//Importar Empresas
import {Empresa} from './empresa.js';

minuevafuncion();

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente,ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente,ahorro);

console.log(cliente.mostrarInformacion());



const empresa = new Empresa('Codigo con Joan',100,'Aprendizaje en Linea');
console.log(empresa.mostrarInformacion());