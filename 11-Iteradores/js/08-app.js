const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar', 'Jugar'];

for(let pendiente in pendientes)
{
    console.log(pendiente);
}

const auto = {
    modelo:'Camaro',
    year: 1960,
    motor:'6.0'
}

for(let propiedades in auto){
    console.log(`${auto[propiedades]}`);
}

for(let [llave,valor] of Object.entries(auto)){
    console.log(valor);
    console.log(llave);
}