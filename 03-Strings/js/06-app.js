const producto = 'Monitor 20 Pulgadas';

// .repeat te va a permitir repetir una cadena de texto...

const texto = ' en Promoción'.repeat(2);

console.log(texto);

console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = 'Estoy aprendiendo javascript moderno';
console.log(actividad.split(' '));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';

console.log(hobbies.split(','));

const tweet = 'Aprendiendo JavaScript Moderno #JSModernoConJuan';
console.log(tweet.split('#'));