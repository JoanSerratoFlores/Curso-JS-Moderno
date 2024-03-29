(function () {
  let DB;
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();
  });
  formulario.addEventListener("submit", validarCliente);

  //Conecta la bae de datos de IndexDB

  function validarCliente(e) {
    e.preventDefault();

    //Validando inputs
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (nombre === "" || email === "" || telefono === "" || empresa === "") {
      imprimirAlerta("Todos los campos son obligatorios", "error");
      return;
    }

    //Crear un objeto con la informacion
    const cliente = {
      nombre,
      email,
      telefono,
      empresa,
    };

    cliente.id = Date.now();
    crearNuevoCliente(cliente);
  }

  function crearNuevoCliente(cliente) {
    
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.add(cliente);

    transaction.onerror = function () {
      console.log("Hubo Error : Crear");
    };

    transaction.oncomplete = function () {
      imprimirAlerta("El cliente se ha agregado correctamente");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    };
  }

  function conectarDB() {
    const conectarDB = window.indexedDB.open('crm', 2);

    conectarDB.onerror = function () {
      console.log('Hubo un error');
    };

    conectarDB.onsuccess = function () {
      DB = conectarDB.result;
    };
  }
})();
