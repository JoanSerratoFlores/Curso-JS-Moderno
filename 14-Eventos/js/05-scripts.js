// window.addEventListener('scroll', () => {
//     console.log('scrolling');
// })

// window.addEventListener('scroll', () => {
//     const scrollPX = window.scrollY;
//     console.log(scrollPX);
// })

window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();


    if(ubicacion.top < 780){
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aun no');
    }

})

