// const nombre = "Hola";
// const precio = 20;

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio:300,
    disponible:true,
    mostrarInfo:function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostrarInfo();

const producto2 = {
    nombre: "Tablet",
    precio:3000,
    disponible:true,
    mostrarInfo:function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto2.mostrarInfo();
