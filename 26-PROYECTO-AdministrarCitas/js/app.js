//Campos del formulario

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

//Clases

class Citas {

    constructor() {
        this.citas = [];
    }

    agregarCitas(cita){
        
        this.citas=[...this.citas,cita];
        console.log(this.citas);

    }

}

class UI{

    //Metodos

    imprimirAlerta(mensaje,tipo){
        //Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert','d-block','col-12');

        //Agregar clase en base al tipo de error

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success');
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'));

        //Quitar a alerta despues de 5 segundos
        setTimeout(() => {
            divMensaje.remove();
        },5000);

    }

}

//Instanciar

const ui = new UI();
const adminstrarCitas = new Citas();

//Registrar Eventos 

eventListeners();

function eventListeners() {
    //Llenar los datos de variables en inputs
    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}

//Objetos con info de la cita

const citaObj = {
    mascota:'',
    propietario:'',
    telefono:'',
    fecha:'',
    hora:'',
    sintomas:'',    
}

//Agregar datos de la cita

function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}

//Valida y agrega nueva cita a la clase de citas
function nuevaCita(e){
    
    e.preventDefault();

    //Extraer la info del objeto de cita
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citaObj; 

    //Validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === ''|| sintomas === '')
    {
        ui.imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }

    //Generar un Id unico
    citaObj.id = Date.now();
    
    //Guardando las nuevas citas
    adminstrarCitas.agregarCitas({...citaObj});

    //Reiniciar el objeto para la validacion
    reiniciarObjeto();

    //Reiniciar el formulario
    formulario.reset();

}

function reiniciarObjeto(){
    citaObj.mascota ='';
    citaObj.propietario ='';
    citaObj.telefono ='';
    citaObj.fecha ='';
    citaObj.hora ='';
    citaObj.sintomas ='';

}