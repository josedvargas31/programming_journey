// personaje de TV

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

//  A esto '{}' se le conoce como objeto literal
let personaje = {
    // par llave-valor = nombre || propiedad
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,

};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 13;

let llave = 'edad'
personaje[llave] = 16

delete personaje.anime;
console.log(personaje);

