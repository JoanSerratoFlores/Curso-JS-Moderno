const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown',() =>{
    console.log('Escribiendo');
})

busqueda.addEventListener('keyup',() =>{
    console.log('Dejo de esccribir');
})

busqueda.addEventListener('blur',() =>{
    console.log('Dejo el formulario');
})

busqueda.addEventListener('copy',() =>{
    console.log('copio');
})

busqueda.addEventListener('paste',() =>{
    console.log('pego');
})

busqueda.addEventListener('input',(evt) =>{
    console.log(evt);
})

busqueda.addEventListener('input',(e) =>{
    if(e.target.value == '')
    {
        console.log('fallo la validacion');
    }
    console.log(e.target.value);
})




