(function () {
  let DB;
  const formulario = document.querySelector('#formulario');

  document.addEventListener('DOMContentLoaded', () => {
    conectarDB();
    formulario.addEventListener('submit', validarCliente);
  });

  //Conecta la bae de datos de IndexDB
  function conectarDB() {
    const conectarDB = window.indexedDB.open('crm',2);

    conectarDB.onerror = function () {
      console.log('Hubo un error');
    };

    conectarDB.onsuccess = function () {
      DB = conectarDB.result;
    };
  }

  function validarCliente(e) {
    e.preventDefault();

    //Validando inputs
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if (nombre === '' || email === '' || telefono === '' || empresa === '') {
      imprimirAlerta('Todos los campos son obligatorios', 'error');
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
    const transaction = DB.transaction(['crm'], 'readwrite');
    const objectStore = transaction.objectStore('crm');

    objectStore.add(cliente);

    transaction.onerror = function () {
        imprimirAlerta('Hubo Error : Crear');
    };

    transaction.oncomplete = function () {
      imprimirAlerta('El cliente se ha agregado correctamente');
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    };
  }

  function imprimirAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.alerta');
    if (!alerta) {
      //Crear la alerta
      const divMensaje = document.createElement('div');
      divMensaje.classList.add(
        'px-4',
        'py-3',
        'rounded',
        'max-w-lg',
        'mx-auto',
        'mt-6',
        'text-center',
        'border',
        'alerta'
      );
      if (tipo === 'error') {
        divMensaje.classList.add(
          'bg-red-100',
          'border-red-400',
          'text-red-700'
        );
      } else {
        divMensaje.classList.add(
          'bg-green-100',
          'border-green-400',
          'text-green-700'
        );
      }

      divMensaje.textContent = mensaje;
      formulario.appendChild(divMensaje);

      setTimeout(() => {
        divMensaje.remove();
      }, 3000);
    }
  }
})();
