//Implicit Binding

const usuarios ={
    nombre : 'Juan',
    edad:20,
    informacion () {
        console.log(`Mi nombre es : ${this.edad}`);
    },
    MASCOTA : {
        nombre:'Hook',
        edad:1,
        informacion () {
            console.log(`Mi nombre es ${this.nombre}`);
        }
    }
}

usuarios.informacion()
usuarios.MASCOTA.informacion();