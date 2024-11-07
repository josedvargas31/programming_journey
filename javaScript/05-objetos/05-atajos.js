//  Atajos constructores

let obj = {}; // atajo 

let obj2 = new Object();

/* 
 new Array(); crea []
 new String(); crea "" or '' ``
 new Number(); 12
 new Boolean(); true false
 */

 function Usuario() {
    this.name = 'Chanchito feliz';

 }
 let user = new Usuario();
 console.log(user.constructor);

//  s1 tomo el string y lo evaluo, y dio como resultado dos
//  s2 creado con el constructor lo dejo exactamente igual
 const s1 = "1 + 1";
 const s2 = new String("1 + 1"); 
//  console.log(eval(s1), eval(s2));
console.log(s2.valueOf()); // con esta funcion de js nos vuelve su valor como string literal
// los valueOf lo tiene tambien Number, Boolean, Array

 
 

// let numero = 23423;

// function suma(num) {
//     while (num > 9) { // Mientras el número tenga más de un dígito
//         let sumaDigitos = 0;
//         let numStr = num.toString(); // Convertimos el número a string para recorrerlo dígito por dígito

//         for (let i = 0; i < numStr.length; i++) {
//             sumaDigitos += parseInt(numStr[i]); // Sumamos cada dígito
//         }

//         num = sumaDigitos; // Actualizamos el número con la suma de los dígitos
//     }
//     return num; // Cuando el número sea menor a 10, retornamos el valor
// }

// let resultado = suma(numero);

// console.log("La suma de los dígitos es:", resultado);
