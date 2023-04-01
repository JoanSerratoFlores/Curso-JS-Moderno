//Previamente vimos getClientRect, que nos permitia identificar cuando un elemento estaba visible
//existe otra API llamada Intersection Observer, veamos como utilizarla..

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries =>{
        console.log('Ya esta visible');
    });

    observer.observe(document.querySelector('.premium'));
});