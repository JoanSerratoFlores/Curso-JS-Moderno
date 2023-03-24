const producto = {
    idProducto : 10
}

const weakMap = new WeakMap();

weakMap.set(producto,'Monito');

console.log(weakMap.has(producto));
console.log(weakMap.get(producto));
console.log(weakMap.delete(producto));
console.log(weakMap.size);

console.log(weakMap);