const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio:300,
    disponible:true,
    
}

//Agregar nuevas propiedades al objecto

producto.imagen = "imagen.jpg";

//Eliminar propiedades al objecto
delete producto.disponible;

console.log(producto);