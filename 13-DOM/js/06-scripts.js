const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

console.log(encabezado.innerText); //Respeta el visibility:hidden
console.log(encabezado.textContent);//Si lo encuentra
console.log(encabezado.innerHTML); // Se trae el html

const nuevoHeading = 'nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading; // Modifica el heading

//Traer imagen
console.log('Traer imagen');
const imagen = document.querySelector('.card img');
console.log(imagen); //);

//Modificar imagen
console.log('Modificar imagen');
imagen.src = 'img/hacer2.jpg'