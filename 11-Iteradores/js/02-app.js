for(let i=1; i<=20;i++){
    if(i===5)
    {
        console.log('Este es el 5');
        console.log('Cinco');
        // break;
        continue;
    }else{
        console.log(`Numero ${i}`);
    }
}

for(let i=1; i<=20;i++){
    if(i===5)
    {
        console.log('Cinco');
        // break;
        continue;
    }
    console.log(`Numero ${i}`);    
}

const carrito = [
    {nombre : 'Monitor 27 pulgadas',precio:500,},
    {nombre : 'Television',precio:100,},
    {nombre : 'Tablet',precio:200,descuento:true},
    {nombre : 'Audifonos',precio:300,},
    {nombre : 'Teclado',precio:400,},
    {nombre : 'Celular',precio:700,},
]

for(let i=0; i<carrito.length;i++){
    if(carrito[i].descuento===true){
        console.log(`${carrito[i].nombre} es descuento`);
    }else{
        console.log(`${carrito[i].nombre} no es descuento`);
    }
}
