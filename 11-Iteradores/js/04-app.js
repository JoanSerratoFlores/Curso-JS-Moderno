let i = 1; //Inicializar el while

while (i < 100) {
    console.log(`Numero ${i}`);
    i++; // incremento
}

let a = 1; //Inicializar el while

while (a < 100) {
    if(a % 15===0)
    {
        console.log(`${a} fizz buzz`);
    }
    else if(a % 5===0)
    {
        console.log(`${a} buzz`);
    }else if(a % 3===0)
    {
        console.log(`${a} fizz`);
    }
    a++; // incremento
}
 