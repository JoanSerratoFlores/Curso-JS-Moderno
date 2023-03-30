const aplicarDescuneto = new Promise((resolve, reject) => {
  const descuento = false;
  if (descuento) {
    resolve("Descuento Aplicado");
  } else {
    reject("Descuento no aplicado");
  }
});

aplicarDescuneto
  .then(resultado => descuento(resultado))
  .catch((err) => console.log(err));

//Hay 3 valores posibles...
//fulfilled - el promise se cumplio
//rejected - el promise no se cumplio
//pending - No se ha cumplido y no se ha rechazado

function descuento(mensaje) {
  console.log(mensaje);
}
