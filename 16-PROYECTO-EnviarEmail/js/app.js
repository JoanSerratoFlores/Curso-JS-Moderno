document.addEventListener('DOMContentLoaded', function () {

    const email = {
        email:'',
        asunto:'',
        mensaje:'',
    }    
        
    // Seleccionar los elementos de la interfazz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const Formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    
    // console.log(inputEmail);
    // console.log(inputAsunto);
    // console.log(inputMensaje);
    
    //Asignar eventos
    inputEmail.addEventListener('input', validar)
    
    inputAsunto.addEventListener('input', validar);
    
    inputMensaje.addEventListener('input', validar)
    
    Formulario.addEventListener('submit',enviarEmail);
    
    btnReset.addEventListener('click',function(e) {
        e.preventDefault();
        resetFormulario();
    })

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFormulario();
            
            //Crear una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500','text-white','p-2','text-center','rounded-lg','mt-10','font-bold','text-sm','uppercase');
            alertaExito.textContent='Mensaje Enviado Exitosamente';
            Formulario.appendChild(alertaExito);
            setTimeout(() =>
            {
                alertaExito.remove();
            },3000);
            
        }, 3000);
    }

    function validar(e) {
        console.log(e.target.parentElement);
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = ''
            comprobarEmail();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta(`Debe ser un email valido`, e.target.parentElement);
            email[e.target.name] ='';
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        //Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        //Comprobar el objeto de email
        comprobarEmail();
    }

    //Alerta de que no se escribio en input
    function mostrarAlerta(mensaje,referencia){

        limpiarAlerta(referencia);
        // const alerta = referencia.querySelector('.bg-red-600');
        // if(alerta){
        //     alerta.remove();
        // }


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

    function limpiarAlerta(referencia) {
        //Comprueba si y existe una alerta        
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }    
    }

    function validarEmail(e) {
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        const resultado = emailRegex.test(e);
        console.log(resultado);
        return resultado;
    }

    function comprobarEmail() {
        console.log(email);
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;    
    }

    function resetFormulario(){
        //Reiniciar el objeto
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        //Reiniciar el formulario
        Formulario.reset();
        comprobarEmail();                        
    }
    
});