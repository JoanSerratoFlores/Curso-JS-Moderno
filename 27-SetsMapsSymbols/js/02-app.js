//WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juan',
    saldo:300,
}

// const nombre = 20;

weakset.add(cliente);
// weakset.add(nombre);

// console.log(weakset.has('Nombre'));

// weakset.delete(cliente);

console.log(cliente.size);

console.log(weakset);