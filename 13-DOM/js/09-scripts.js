const primerenlace = document.querySelector('a');
primerenlace.remove();

//Eliminar desde el padre
console.log('Eliminar desde el padre');
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);
console.log(navegacion);