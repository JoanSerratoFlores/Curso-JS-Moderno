//Variables

const carrito = document.querySelector('#carrito');
const contenedor = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un curso presionando "Agregando al carrito"
    listaCursos.addEventListener('click',agregarCurso)
    //Elimina curso del carrito
    carrito.addEventListener('click',eliminarCurso)
    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click',() => {
        articulosCarrito=[];//Reseteamos el arreglo
        limpiarHTML(); //Eliminamos todo el HTML
        console.log('Vaciando carrito...');
        console.log(articulosCarrito);

    })
}

//Funciones
function agregarCurso(curso){
    curso.preventDefault();
    //Agrega un nuevo curso al carrito
    if(curso.target.classList.contains('agregar-carrito')){
        const cusrsoSeleccionado = curso.target.parentElement.parentElement;
        leerDatosCurso(cusrsoSeleccionado);
    }
}

//Eliminar un curso sdel carrito
function eliminarCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articuloCarrito por el dataId
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        console.log(articulosCarrito);
        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }
}

//Lee el contenido del HTML al que le dimos click y extrae la info del curso
function leerDatosCurso(curso){
    console.log(curso);

    //Crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad:1,
    }

    //Revisa si un elemento ya existe en carrito
    const existe = articulosCarrito.some(curso => curso.id ===infoCurso.id);
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objecto actualizado
            }else{
                return curso; // retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito=[...cursos];
    }else{
        //Agregar elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito,infoCurso]
        console.log(articulosCarrito);
        console.log(infoCurso);

    }

    carritoHTML();
}


//Muestra el carrito de compras en el HTML
function carritoHTML(){

    //LImpiar el HTML
    limpiarHTML();

    //Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso =>{
        const {imagen,titulo,precio,cantidad,id}=curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            <img src="${imagen}" width="100" 
            </td>
            <td>
            ${titulo}
            </td>
            <td>
            ${precio}
            </td>
            <td>
            ${cantidad}
            </td>
            <td>
            <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>            
            `;

            //Agrega el HTML en el carrito en el tbody
            contenedor.appendChild(row)
    });
}

//Elimina los cursos del tbody
function limpiarHTML(){
    //Forma Lenta
    //contenedor.innerHTML = '';

    //Forma Rapida
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}
