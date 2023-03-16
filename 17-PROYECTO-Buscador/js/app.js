//Variables
const marca = document.querySelector('#marca');
const resultado = document.querySelector('#resultado');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const year = document.querySelector('#year');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultados = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max -10;

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
    
}

//Eventos
document.addEventListener('DOMContentLoaded',() => {
    mostrarAutos(); //Muestra los automoviles al cargar

    //Llena las opciones de años
    llenarSelect();

})

//Event Listener para los select de busqueda
marca.addEventListener('change',(e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change',(e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change',(e) => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change',(e) => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change',(e) => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change',(e) => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change',(e) => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});

//Funciones

function mostrarAutos() {
    autos.forEach(auto => {
        const {marca,modelo,year,puertas,transmision,precio,color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} - ${modelo}- ${puertas} Puertas - Transmision ${transmision} - Color ${color}`;
        //Insertar en el HTML
        resultado.appendChild(autoHTML);

    })
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opcion de año al select
        
    }
}

//Filtrar en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);
    console.log(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca===marca;
    }
    return auto;

}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year===year;
    }
    return auto;
}