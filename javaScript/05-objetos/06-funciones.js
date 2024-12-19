// Roxin cake gamer 

// Las funciones son objetos, y son objetos de primera clase, significa que tienes propiedades como los objetos, tambien podemos asignarlas a otras variables u otras constantes
// podemos pasarlas de argumentos a otras funciones 
// las funciones peuden ser retornadas en js
function Usuario(nombre) {
    this.name = nombre;
}
console.log(Usuario.name); // nombre de la función
console.log(Usuario.length); // indica la cantidad de argumentos que resibe una funcion

const U = Usuario
let user = new Usuario('Nicolas');
// Usuario fue creado a partir de la funcion Usuario
console.log(user);

/* Pasar las funciones a otras funciones como argumentos */
function of(Fn, arg) {
return new Fn(arg);
}
let user1 = of(Usuario, 'Chanchito');
console.log(user1);

/* La podemos retornar dentro de otras funciones */

function returned() {
    return function() {
        console.log("Hola Mundo");
        
    }
}
let saludo = returned()
saludo()