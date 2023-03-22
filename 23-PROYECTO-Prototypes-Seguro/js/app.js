//Constructores
function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos
Seguro.prototype.cotizarSeguro = function (){

    /*
    Americano 1.15
    Asiatico 1.05
    Europeo 1.35

    */

    let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }
    
    //Leer el año
    const diferencia = new Date().getFullYear() - this.year;
    
    //Cada año que la diferencia es mayor, el costo va a reducirse a un 3%
    cantidad -= ((diferencia*3) * cantidad)/100;    

    /*
        Si el seguro es basico se multiplica por un 30% mas
        Si el seguro es completo se multiplica por un 50% mas
    */

    if(this.tipo ==='basico')    {
        cantidad += 1.30;
    }
    else{
        cantidad += 1.50;
    }
    console.log(cantidad);
    return cantidad;


}


function UI(){

}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje,tipo) => {
    
    //Crear alerta 
    const div = document.createElement('div');

    if(tipo ==='error'){
        div.classList.add('error');
    }else {
        div.classList.add('correcto');   
    }

    div.classList.add('mensaje','mt-10');
    div.textContent=mensaje;

    //Insertar en el html
    const forumulario = document.querySelector('#cotizar-seguro');
    forumulario.insertBefore(div,document.querySelector('#resultado'));
    
    setTimeout(() =>{
      div.remove();  
    },3000);

}


//Llena el select con los años
UI.prototype.LlenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--) {
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        selectYear.appendChild(opcion);
    }
}

UI.prototype.mostrarResultado = (total,seguro) => {

    const {marca,year,tipo} = seguro;

    switch (marca) {
        case '1':
            textoMarca='Americano'
            break;
        case '2':
            textoMarca='Asiatico'
            break;
        case '3':
            textoMarca='Europeo'
            break;
        default:
        break;
    }

    //Crear el resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
    <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal capitalize  " > ${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    
    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none'; //Se borra el spinner
        resultadoDiv.appendChild(div); //Se muestra el resultado

    }, 3000);

}

//Instanciar
const ui = new UI();


document.addEventListener('DOMContentLoaded',()=> {
    ui.LlenarOpciones(); //Llena el select con los años
})

//Listeners
eventListeners();
function eventListeners(){
    const forumulario = document.querySelector('#cotizar-seguro');
    forumulario.addEventListener('submit', cotizarSeguro)
}

//Cotizar
function cotizarSeguro(e){
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    //Leer el año seleccionado
    const year = document.querySelector('#year').value;
    //Leer el tipo seleccionado
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    //Validacion de campos
    if(marca==''||tipo==''||year==''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error')
        return;
    }
    
    ui.mostrarMensaje('Cotizando...','correcto');

    //Ocultar las cotizaciones previas
    const resultado = document.querySelector('#resultado div');
    if(resultado != null) {
        resultado.remove();
    }

    //Instanciar el Seguro

    const seguro = new Seguro(marca,year,tipo)
    const total = seguro.cotizarSeguro();

    //Utlizar el Prototype que va a cotizar
    ui.mostrarResultado(total,seguro)


}