localStorage.setItem('nombre', 'JOAN');

const producto = {
    nombre: 'Monitor de 24 Pulgadas',
    precio:300,
}

const productoString = JSON.stringify(producto);
localStorage.setItem('producto', productoString);

const meses = ['Enero','Febrero','Marzo']
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses',mesesString);
