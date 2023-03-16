document.addEventListener('DOMContentLoaded', function () {

    // Seleccionar los elementos de la interfazz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const Formulario = document.querySelector('#formulario');

    // console.log(inputEmail);
    // console.log(inputAsunto);
    // console.log(inputMensaje);

    //Asignar eventos
    inputEmail.addEventListener('blur', validar)

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar)

    function validar(e) {
        console.log(e.target.parentElement);
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
        } else {
            console.log('si hay algo');
        }
    }

    //Avisar que no se escribio en input
    function mostrarAlerta(mensaje,referencia){
        //Comprueba si y existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }


        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent=mensaje;
        error.classList.add('bg-red-600','tex-white','p-2','text-center');
        console.log(error);
        //Inyectar el error al formulario
        //AppendChild
        referencia.appendChild(error);
        //INNERHTML
        // Formulario.innerHTML = error.innerHTML;
    }

});