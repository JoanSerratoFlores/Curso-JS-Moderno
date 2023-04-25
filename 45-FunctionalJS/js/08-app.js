const obtenerCliente = () => {
    const nombre = 'Juan';

    function muestraCliente() {
        console.log(nombre);
    }

    return muestraCliente
};

const cliente = obtenerCliente();

cliente();
