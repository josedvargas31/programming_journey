// Crear un algoritmo que devuelva la cantidad de numeros positivos de un Array

let array = [2, 5, 7, 15, -5, -100, 55];

// El Tercer ejercicio lo complete 50 % (🥲)
function cuantosPositivos(arr) {

    let cantidad = 0;
    for (let elemento of arr) {
        if (elemento > 0) {
            cantidad++;
        }
    }
    return cantidad;
//     let positivos = arr[0];
//     for (let numero of arr) {
//         positivos = positivos > 0 ? positivos : numero;
        
//     }
// return positivos
}
let resultado = cuantosPositivos(array)
console.log(resultado);
