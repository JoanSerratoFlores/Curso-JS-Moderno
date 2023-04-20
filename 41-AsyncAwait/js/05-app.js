const url = 'https://picsum.photos/list'

document.addEventListener('DOMContentLoaded',obtenerDatos)

//Promise
// function obtenerDatos(){
//     fetch(url)
//     .then(respuesta => respuesta.json())
//     .then(resultado=> console.log(resultado))
//     .catch(error => console.log(error));
// }

//Async 
// async function obtenerDatos(){
//     const respuesta = await fetch(url);
//     const resultado = await respuesta.json();
//     console.log(resultado);
// }

//Try Catch
async function obtenerDatos(){
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}