export const ahorro = 200;
export const nombreCliente = 'Juan';

export function mostrarInformacion(nombre,ahorro){
    return `Cliente ${nombre} - Ahorro: ${ahorro}`
}

export function tieneSaldo(ahorro){
    if(ahorro >0){
        console.log('El cliente tiene saldo');
    }
    else{
        console.log('El cliente no tiene saldo');
    }
}

export class Cliente {
    constructor(nombre,ahorros){
        this.nombre = nombre;
        this.ahorros = ahorros;
    }

    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorros}`
    }
}

export default function nuevafuncion(){
    console.log('Export Default');
}