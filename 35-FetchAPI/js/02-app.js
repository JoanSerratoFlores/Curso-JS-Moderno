const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", cargarJSON);

function cargarJSON() {
  const url = "data/empleado.json";
  fetch(url)
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((resultado) => {
      mostrarHTML(resultado);
    });
}

function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector("#contenido");

  contenido.innerHTML = `
    <p>Empleado : ${nombre}</p>
    <p>Id : ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>
    `;
}
