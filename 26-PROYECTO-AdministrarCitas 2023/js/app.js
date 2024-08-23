//Campos del formulario

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
let editando;

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

    }

    eliminarCitas(id){ 
        this.citas=this.citas.filter(cita => cita.id!==id);
    }

    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id===citaActualizada.id ? citaActualizada : cita);
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

    imprimirCitas({citas}){
        this.limpiarHTML();    
        citas.forEach(cita => {
            const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            //Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bolder');
            mascotaParrafo.textContent=mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">telefono: </span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">fecha: </span> ${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">hora: </span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">sintomas: </span> ${sintomas}
            `;

            //Boton para eliminar cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            btnEliminar.innerHTML = 'Eliminar X';
            
            btnEliminar.onclick = () =>{
                eliminarCita(id);
            }

            //Añade un boton para editar cita
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-danger','mr-2');
            btnEditar.innerHTML = 'Editar';
            btnEditar.onclick = () =>{
                cargarEdicion(cita);
            }

            //Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);
            
        });
    }

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
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

    if(editando){
        
        ui.imprimirAlerta('Editado correctamente');
        console.log('Modo Edicion');
        
        //Pasar el objeto de la cita
        adminstrarCitas.editarCita({...citaObj});
        
        //Regresar el texto del boton a su estado original
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        
        //Quitar Modo Edicion
        editando=false

    }else{

        console.log('Modo Nueva Cita');
        //Generar un Id unico
        citaObj.id = Date.now();
        
        //Guardando las nuevas citas
        adminstrarCitas.agregarCitas({...citaObj});

        //Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agrego correctamente');
    }


    //Reiniciar el objeto para la validacion
    reiniciarObjeto();

    //Reiniciar el formulario
    formulario.reset();

    ui.imprimirCitas(adminstrarCitas);

}

function reiniciarObjeto(){
    citaObj.mascota ='';
    citaObj.propietario ='';
    citaObj.telefono ='';
    citaObj.fecha ='';
    citaObj.hora ='';
    citaObj.sintomas ='';

}

function eliminarCita(id){
    //Eliminar cita
    adminstrarCitas.eliminarCitas(id);

    //Muestre un mensaje
    ui.imprimirAlerta('La cita se elimino exitosamente');

    //Refresque la lista
    ui.imprimirCitas(adminstrarCitas);
}

function cargarEdicion(cita){
    const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;

    //Llenar los inputs
     mascotaInput.value=mascota;
     propietarioInput.value=propietario;
     telefonoInput.value=telefono;
     fechaInput.value=fecha;
     horaInput.value=hora;
     sintomasInput.value=sintomas;

     //Llenar el objeto
     citaObj.mascota = mascota;
     citaObj.propietario = propietario;
     citaObj.telefono = telefono;
     citaObj.fecha = fecha;
     citaObj.hora = hora;
     citaObj.sintomas = sintomas;
     citaObj.id = id;


     //Cambiar el texto del boton
     formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
     editando=true;
}
