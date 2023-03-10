let i = 1000;

do{
    console.log(`numero ${i}`);
    i++; // Incremento
}while(i<10); //Condicion

let a = 0; // Inicio

do{
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
}while(a<100); // Condicion