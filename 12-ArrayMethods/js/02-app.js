const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i)=>
{
    console.log(i);
    console.log(mes);
})

meses.forEach((mes , i)=>{
    if(mes == 'Abril'){
        console.log(`Encontrado ${mes} en el indice ${i}`);
    }
})

meses.forEach((mes , i)=>{
    if(mes == 'Abril'){
        console.log('No encontrado');
    }
})

//Encontrar el indice de abril
console.log('Encontrar el indice de abril');

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

const indice2 = meses.findIndex(mes => mes === 'Diciembre');
console.log(indice2);


//Encotrar un indice de un arreglo de objetos
console.log('Encotrar un indice de un arreglo de objetos');

const indice3 = carrito.findIndex(producto => producto.precio ===100);
console.log(indice3);


