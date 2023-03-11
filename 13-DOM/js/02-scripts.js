//Seleccionar elementos por su clase
console.log('Seleccionar elementos por su clase');

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen mas de 1 vez
console.log('Si las clases existen mas de 1 vez');

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si una clase no existe
console.log('Si una clase no existe');

const NoExiste = document.getElementsByClassName('NoExiste');

console.log(NoExiste);