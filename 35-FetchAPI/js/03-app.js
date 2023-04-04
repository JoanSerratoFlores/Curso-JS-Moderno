const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
cargarJSONArrayBtn.addEventListener("DOMContentLoader", obtenerDatos);

function obtenerDatos() {
  const url = "data/empleados.json";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHTML(resultado));
}

function mostrarHTML(empleados) {
  const ocntenido = document.querySelector(".contenido");
  let html = "";

  empleados.forEach((empleado) => {
    const { id, nombre, empresa, trabajo } = empleado;

    html += `
        <p>Empleado : ${nombre}</p>
        <p>Id : ${id}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
        `;
  });
  ocntenido.innerHTML = html;
}
