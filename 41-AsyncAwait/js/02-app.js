function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = true;
    setTimeout(() => {
      if (!error) {
        resolve("El listado de clientes se descargo");
      } else {
        reject("El listado de clientes no se descargo");
      }
    }, 3000);
  });
}

//Async await
async function ejecutar() {
  try {
    console.log(1 + 1);
    const respuesta = await descargarClientes();
    console.log(2 + 2);
    console.log(respuesta);
  } catch (error) {
    console.log(error);
  }
}

ejecutar();
