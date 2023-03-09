//Switch Case

const metodoPago='tarjeta';

switch(metodoPago) { 
    case 'Efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        pagar();
        break;
        case 'cheque':
            console.log(`Pagaste con ${metodoPago}`);
            pagar();
            break;
            case 'tarjeta':
                console.log(`Pagaste con ${metodoPago}`);
                pagar();
                break;
            default:
                console.log('Aun no has seleccionado un metodo de pago no soportado');
                break;
}

function pagar() {
    console.log('Pagaste');
}