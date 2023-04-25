window.onload = () => {
    console.log('Ventana Lista');
}

window.nombre = 'monitor 20 pulgadas';

const producto = {

    precio:30,
    disponible:true,
    mostrarInfo: function(){
        // const self= this;
        return `El producto ${self.nombre} tiene un precio de ${self.precio}`
    }
}
console.log(producto.mostrarInfo());