const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const paginacionDiv = document.querySelector("#paginacion");

const registrosPorPagina = 30;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
  formulario.addEventListener("submit", validrFormulario);
};

function validrFormulario(e) {
  e.preventDefault();

  const terminoBusqueda = document.querySelector("#termino").value;

  if (terminoBusqueda === "") {
    mostrarAlerta("agrega un termino busqueda");
    return;
  }
  buscarImagenes();
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector(".bg-red-100");
  if (!existeAlerta) {
    const alerta = document.createElement("p");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "text-center"
    );

    alerta.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block sm:inline">${mensaje}</span>
        `;
    formulario.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function buscarImagenes() {
  const termino = document.querySelector("#termino").value;
  const apiKey = "35147084-79c02991a8004a5e5e964370b";
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

  fetch(url)
    .then((response) => response.json())
    .then((resultado) => {
      totalPaginas = calcularPaginas(resultado.totalHits);
      console.log(totalPaginas);
      mostrarImagenes(resultado.hits);
    });
}

function mostrarImagenes(imagenes) {
  console.log(imagenes);
  //Limpiar HTML
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }

  //Iterar sobre el arreglo de imagenes y construir el HTML
  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL } = imagen;
    resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}">

                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                    <p class="font-bold">${views} <span class="font-light">Veces Vista</span></p>
                    <a 
                        class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" 
                        href="${largeImageURL}" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Ver Imagen
                    </a>
                </div>
            </div>
        </div>
        `;
  });
  //Limpiar el paginador previo
  while (paginacionDiv.firstChild) {
    paginacionDiv.removeChild(paginacionDiv.firstChild);
  }

  //Generamos el nuevo HTML
  imprimirPaginador();
}

function calcularPaginas(total) {
  return parseInt(Math.ceil(total / registrosPorPagina));
}

//Generador que va a registrar la cantidad de elementos de acuerdo a las paginas
function *crearPAginador(total) {
  console.log(total);
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function imprimirPaginador() {
  iterador = crearPAginador(totalPaginas);
  while (true) {
    const { value, done } = iterador.next();
    if (done) {
      return;
    }
    //Caso contrario,genera un boton por cada elemento en el generador
    const boton = document.createElement("a");
    boton.href = "#";
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add(
      "siguiente",
      "bg-yellow-400",
      "px-4",
      "py-1",
      "mr-2",
      "font-bold",
      "mb-5",
      "rounded"
    );

    boton.onclick = () => {
      paginaActual = value;
      buscarImagenes();
    };

    paginacionDiv.appendChild(boton);
  }
}
