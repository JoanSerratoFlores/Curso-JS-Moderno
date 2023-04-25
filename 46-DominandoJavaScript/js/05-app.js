//Explicit Binding

function persona(el1,el2){
    console.log(`${this.nombre} ${el1} ${el2}`);
}

const information = {
    nombre:'juan'
}

const musicaFavorita = ['Heavy Metal','Rock'];

persona.call(information,musicaFavorita[0],musicaFavorita[1]);

persona.apply(information,musicaFavorita);

const nuevaFn = persona.bind(information,musicaFavorita[0],musicaFavorita[1]);
nuevaFn();