const criptoMonedasSelect = document.querySelector("#criptomonedas");
const MonedasSelect = document.querySelector("#moneda");
const formulario = document.querySelector("#formulario");
const resultado = document.querySelector("#resultado");

const onjBusqueda = {
  moneda: "",
  criptomoneda: "",
};

const obtenerCriptomonedas = (criptomonedas) =>
  new Promise((resolve) => {
    resolve(criptomonedas);
  });

document.addEventListener("DOMContentLoaded", () => {
  consultarCriptomoendas();
  formulario.addEventListener("submit", submitFormulario);
  criptoMonedasSelect.addEventListener("change", leerValor);
  MonedasSelect.addEventListener("change", leerValor);
});

async function consultarCriptomoendas() {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

//   Promise
//   fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((resultado) => obtenerCriptomonedas(resultado.Data))
//     .then((criptomonedas) => selectCriptoMonedas(criptomonedas));

//  Async Try-Catch
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptoMonedas(criptomonedas)
    } catch (error) {
        console.log(error);
    }
}

function selectCriptoMonedas(criptomonedas) {
  criptomonedas.forEach((cripto) => {
    const { FullName, Name } = cripto.CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    criptoMonedasSelect.appendChild(option);
  });
}

function leerValor(e) {
  onjBusqueda[e.target.name] = e.target.value;
  console.log(onjBusqueda);
}

function submitFormulario(e) {
  e.preventDefault();

  //Validar

  const { moneda, criptomonedas } = onjBusqueda;

  if (moneda === "" || criptomonedas === "") {
    mostrarAlerta("Ambos campos son obligatorios");
    return;
  }

  //Consultar la API con los resultados
  consultarAPI();
}

function mostrarAlerta(msg) {
  const existeError = document.querySelector(".error");
  if (!existeError) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("error");

    //Mensaje de error
    divMensaje.textContent = msg;

    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
}

async function consultarAPI() {
  const { moneda, criptomoneda } = onjBusqueda;

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

  mostrarSpinner();

//   Promise
//   fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((cotizacion) => {
//       mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
//     });

//  Async Try-Catch
    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
    } catch (error) {
        console.log(error);
    }
}

function mostrarCotizacionHTML(cotizacion) {
  LimpiarHTML();
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

  const precio = document.createElement("p");
  precio.classList.add("precio");
  precio.innerHTML = `El precio es : <span>${PRICE}</span>`;

  const precioAlto = document.createElement("p");
  precioAlto.innerHTML = `El precio mas alto del dia es : <span>${HIGHDAY}</span>`;

  const precioBajo = document.createElement("p");
  precioBajo.innerHTML = `El precio mas bajo del dia es : <span>${LOWDAY}</span>`;

  const ultimasHoras = document.createElement("p");
  ultimasHoras.innerHTML = `Variacion de las ultimas 24 horas es : <span>${CHANGEPCT24HOUR}%</span>`;

  const UltimaActualizacion = document.createElement("p");
  UltimaActualizacion.innerHTML = `Ultima Actualizacion: <span>${LASTUPDATE}</span>`;

  resultado.appendChild(precio);
  resultado.appendChild(precioAlto);
  resultado.appendChild(precioBajo);
  resultado.appendChild(ultimasHoras);
  resultado.appendChild(UltimaActualizacion);
}

function LimpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

function mostrarSpinner() {
  LimpiarHTML();

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");

  spinner.innerHTML = `
  <div class="bounce1"></div>
  <div class="bounce2"></div>
  <div class="bounce3"></div>  
  `;
  resultado.appendChild(spinner);
}
