function descargarNuevosClientes() {
  console.log("Descargando Clientes");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Los clientes han sido descargados");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando Pedidos");
    setTimeout(() => {
      resolve("Los pedidos han sido descargados");
    }, 3000);
  });
}

const app = async () => {
  try {
    
    const respuesta = await Promise.all([descargarNuevosClientes(),descargarNuevosPedidos()])
    console.log(respuesta[0]);
    console.log(respuesta[1]);
  } catch (error) {
    console.log(error);
  }
};

app();