const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  //Validar
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  if (ciudad === "" || pais === "") {
    //Hubo error
    mostrarError("Ambos campos son obligatorios");
    return;
  }

  //Consultar API

  consultarAPI(ciudad, pais);

  console.log("Buscando el clima");
}

function mostrarError(message) {
  const alert = document.querySelector(".bg-red-100");
  if (!alert) {
    //Crear alert
    const alert = document.createElement("div");

    alert.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alert.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block">${message}</span>
    `;
    container.appendChild(alert);
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

function consultarAPI(ciudad, pais) {
  const appId = "8e1a51309cf0fc940cb34a42e9fbef60";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  spinner(); //Muestra un spinner recarga
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      limpiarHTML();
      if (datos.cod === "404") {
        mostrarError("Ciudad no encontrado");
      }

      //Imprime la respuesta en el HTML
      mostrarClima(datos);
    });

  function mostrarClima(datos) {
    const {
      name,
      main: { temp, temp_max, temp_min },
    } = datos;
    console.log(datos);
    const centigrados = kelvinAcentigrados(temp);
    const max = kelvinAcentigrados(temp_max);
    const min = kelvinAcentigrados(temp_min);

    const nombreCiudad = document.createElement("p");
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add("font-bold", "text-2xl");

    const actual = document.createElement("p");
    actual.innerHTML = `${centigrados} °`;
    actual.classList.add("font-bold", "text-6xl");

    const tempMaxima = document.createElement("p");
    tempMaxima.innerHTML = `${max} °`;
    tempMaxima.classList.add("text-xl");

    const tempMinima = document.createElement("p");
    tempMinima.innerHTML = `${min} °`;
    tempMinima.classList.add("text-xl");

    const resultadoDiv = document.createElement("div");
    resultadoDiv.classList.add("font-bold", "text-white");
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);

    resultado.appendChild(resultadoDiv);
  }
}

function kelvinAcentigrados(grados) {
  return parseInt(grados - 273.15);
}

function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function spinner() {
  limpiarHTML();
  const divSpinner = document.createElement("div");
  divSpinner.classList.add("sk-fading-circle");
  divSpinner.innerHTML = `
  <div class="sk-circle1 sk-circle"></div>
  <div class="sk-circle2 sk-circle"></div>
  <div class="sk-circle3 sk-circle"></div>
  <div class="sk-circle4 sk-circle"></div>
  <div class="sk-circle5 sk-circle"></div>
  <div class="sk-circle6 sk-circle"></div>
  <div class="sk-circle7 sk-circle"></div>
  <div class="sk-circle8 sk-circle"></div>
  <div class="sk-circle9 sk-circle"></div>
  <div class="sk-circle10 sk-circle"></div>
  <div class="sk-circle11 sk-circle"></div>
  <div class="sk-circle12 sk-circle"></div>
  `;
  resultado.appendChild(divSpinner);
}
