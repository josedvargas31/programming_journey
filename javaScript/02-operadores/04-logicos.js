// operadores logicos son: AND, OR, NOT

// AND &&
//  Evaluar a lo que se encuentra en la izquierda o derecha, vota un valor, puede ser false, o true
let mayor = false;
let suscrito = true
// console.log(true && true);
// console.log(false && true);
console.log('Operador and ', mayor && suscrito);


// OR ||
// Evalua devolver true si alguno de los dos el resultado sera true, si el primero es false, y el segundo da true, el resultado es true, y se deseversa
//  Si los dos son false, el resultado final sera false
console.log('Operador or ', mayor || suscrito);

// NOT !
// Invierte el valor inicial de la variable mayor
console.log('Operador no ', !mayor);
let soloCatalogoInfantil = !mayor
