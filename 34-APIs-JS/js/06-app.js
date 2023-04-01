const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
  const SpeechRecognition = webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.start();

  recognition.onstart = function () {
    salida.classList.add('mostrar');
    salida.textContent = 'Escuchando';
  };

  recognition.onspeechend = function () {
    salida.textContent = 'se dejo de grabar';
    recognition.stop();
  };

  recognition.onresult = function (e) {
    console.log(e.result[0][0]);

    const { confidence, transcript } = e.result[0][0];
    
    const speech = document.createElement('p');
    speech.innerHTML = `grabado:${transcript}`;
    
    const seguridad = document.createElement('p');
    seguridad.innerHTML = `Seguridad: ${parseInt(confidence * 100)}`;

    salida.appenChild(speech);
    salida.appenChild(seguridad);
  };
}
