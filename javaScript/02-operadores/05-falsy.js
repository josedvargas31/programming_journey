// Short-circuit

// [] || {} = []
// [] && {} = {}

// Todos estos se llaman falsy
//  Falso
// false
// 0
//  ''
//  null
//  undefined
//  NaN

let nombre = 'Chanchito feliz';
let username = nombre || 'Anonimo';
console.log(username);

function fn1() {
    console.log('Soy funcion 1');
    return false
}
function fn2() {
    console.log('Soy funcion 2');
    return true
}
let x = fn1() && fn2()



