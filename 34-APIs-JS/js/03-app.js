window.addEventListener("online", actualizarEstado);
window.addEventListener("offline", actualizarEstado);

function actualizarEstado() {
  if (navigator.onLine) {
    console.log("Si Estas Conectado");
  } else {
    console.log("No Estas Conectado");
  }
}
