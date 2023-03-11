//Modificar CSS del HTML
console.log('Modificar CSS del HTML');
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor='red';
encabezado.style.fontFamily='Comic Sans MS';
encabezado.style.textTransform='uppercase';

//Modificar clase de HTML
console.log('Modificar clase de HTML');
const card = document.querySelector('.card');
card.classList.add('nueva-clase,segunda-clase');
card.classList.remove('card');
console.log(card.classList);