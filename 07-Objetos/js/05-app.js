const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio:300,
    disponible:true,
    informacion:{
        peso:"1kg",
        medida:'1m',
    },
    fabricacion:{
        pais:'China'
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.peso);
console.log(producto.informacion.medida);
console.log(producto.fabricacion.pais);


