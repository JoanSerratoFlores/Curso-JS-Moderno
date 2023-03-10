///FIZZ BUZZ - 100 NUMEROS

for(var i = 0; i <100;i++)
{
    console.log(i);
}

//FIZZ - 3 6 9
//BUZZ - 5 10 15
//FIZZ BUZZ - 15 30 45

for(var i = 1; i <100;i++)
{
    if(i % 15 ==0)
    {
        console.log(`${i} fizz buzz`);
    }
    else if(i % 5 ==0)
    {
        console.log(`${i} buzz`);
    }else if(i % 3 ==0)
    {
        console.log(`${i} fizz`);
    }
}