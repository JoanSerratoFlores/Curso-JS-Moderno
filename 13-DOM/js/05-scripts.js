//Seleccione todas elementos 
console.log('Seleccione todas elementos ');
const card = document.querySelectorAll('.card');
console.log(card);

//Seleccione un elemento con ids
console.log('Seleccione un elemento con ids');
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

//Si un elemento no existe
console.log('Si un elemento no existe');
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);