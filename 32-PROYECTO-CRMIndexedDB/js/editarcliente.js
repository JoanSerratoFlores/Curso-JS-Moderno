(function () {
  let DB;

  const nombreInput = document.querySelector('#nombre');
  const emailInput = document.querySelector('#email');
  const telefonoInput = document.querySelector('#telefono');
  const empresaInput = document.querySelector('#empresa');

  document.addEventListener("DOMContentLoaded", () => {
    conectarDB();
    //Verificar el ID de laURL
    const parametroURL = new URLSearchParams(window.location.search);
    const idCliente = parametroURL.get("id");
    console.log(idCliente);

    if (idCliente) {
        setTimeout(() => {
            obtenerCliente(idCliente);            
        }, 1000);
    }
  });

  function obtenerCliente(id) {
    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');
    
    const cliente = objectStore.openCursor();
    cliente.onsuccess = function(e){
        const cursor = e.target.result;

        if(cursor){
            console.log(cursor.value);
            if(cursor.value.id ===Number(id)){
                llenarFormulario(cursor.value)
            }
            cursor.continue();
        }
    }
  }

  function llenarFormulario(datosCliente){
    
    const { nombre,email,telefono,empresa }= datosCliente;
    nombreInput.value=nombre;
    emailInput.value=email;
    telefonoInput.value=telefono;
    empresaInput.value=empresa;

  }

  function conectarDB() {
    const conectarDB = window.indexedDB.open("crm", 2);

    conectarDB.onerror = function () {
      console.log("Hubo un error");
    };

    conectarDB.onsuccess = function () {
      DB = conectarDB.result;
    };
  }
})();
