const producto = 'Monitor 20 Pulgadas ';
const precio = '30 USD';

console.log(precio);
console.log(producto.concat(precio));
console.log(producto.concat('20% de descuento'));

console.log(producto + 'con un precio de: ' + precio);

console.log('El producto ' + producto + 'tiene un precio de: ' + precio);
console.log('El producto ', producto, 'tiene un precio de: ', precio);

console.log(`El producto ${producto}tiene un precio de: $${precio}`);
