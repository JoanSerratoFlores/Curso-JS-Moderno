"use-strict";

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio:300,
    disponible:true,
}

Object.freeze(producto);

//producto.disponible = false;
//producto.imagen = "imagen.png";

//delete producto.precio; 

console.log(producto);

console.log(Object.isFrozen(producto));

