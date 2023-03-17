//Variables
const  formulario = document.querySelector('#formulario');
const  listaTweets = document.querySelector('#lista-tweets');
let tweets=[];

//Event Listeners
evenListeners();

function evenListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);    
    //Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    })
}


//Funciones

function agregarTweet(e){
    e.preventDefault();
    
    //TextArea donde le usuario escribe
    const  tweet = document.querySelector('#tweet').value;
    
    //Validacion
    if(tweet==''){
        mostrarMensajeDeError('Un mensaje no puede ir vacio');
        return;  //Se evita que se ejecutan mas lineas de codigo
    }


    const tweetObj = {
        id:Date.now(),
        tweet,
    }

    //Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    //Una vez agregado vamos a crear el HTML
    crearHTML();

    //Reiniciar el formulario
    formulario.reset();
    
}

function mostrarMensajeDeError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Eliminar alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);


}

//Muestra un listado de los tweets
function crearHTML(){
    LimpiarHTML();
    if(tweets.length > 0){
        tweets.forEach(tweet => {

            //Agregar un botion de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            const li = document.createElement('li');

            //Añadir el texto
            li.innerText = tweet.tweet;

            //Asignar el boton
            li.appendChild(btnEliminar);

            //Insertarlo en el texto
            listaTweets.appendChild(li);
        });
    }
    sincronizarStorage();
}

//Agregar los tweets actuales a localstorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Eliminar Tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

function LimpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}