//Elementos de una clase en HTML
console.log('Elementos de una clase en HTML');
const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Los espacios en blanco son considerados elementos
console.log(navegacion.children[1]);

const card = document.querySelector('.card');
console.log(card.children[1].children);

//Trasversing the DOM
console.log('Trasversing the DOM');
const card2 = document.querySelector('.card');
card2.children[1].children[1].textContent='Nuevo heading desde trasversing the dom';
card2.children[0].src='img/hacer3.jpg'
console.log(card2.children[0]);

//Traversing the dom de hijo a padre
console.log('Traversing the dom de hijo a padre');
console.log(card.parentElement.parentElement);

//Traversing the dom de hermano
console.log('Traversing the dom de hermano');
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

const ultimocard = document.querySelector('.card:nth-child(4)');
console.log(ultimocard.previousElementSibling);



