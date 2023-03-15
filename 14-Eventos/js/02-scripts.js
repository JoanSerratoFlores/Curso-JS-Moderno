const nav = document.querySelector('.navegacion');

//Rgistrar un evento 
console.log('Registrar un evento');

//Hacer click
nav.addEventListener('click',() => {
    console.log('Haz hecho click en nav');
})

//Sobre el mouse
nav.addEventListener('mouseenter',() => {
    console.log('Haz entrado en nav');
    nav.style.backgroundColor='white';
})

//Saliendo del mouse
nav.addEventListener('mouseout',() => {
    console.log('Haz salido en nav');
    nav.style.backgroundColor='transparent';
})

//Dejar de hacer click

nav.addEventListener('mousedown',() => {
    console.log('Haz salido en nav');
    nav.style.backgroundColor='transparent';
})

//Clickeando
nav.addEventListener('mouseup',() => {
    console.log('Haz salido en nav');
    nav.style.backgroundColor='red';
})

//Doble click
nav.addEventListener('dblclick',() => {
    console.log('Haz salido en nav');
    nav.style.backgroundColor='blue';
})
