/* Indice validar que no sea menor a cero y que el elemento exista en el array */

// El Tercer ejercicio lo complete 0 % (😓)
function getbyIdx(arr, idx) {
	if (idx < 0 || arr.length <= idx) {
		return "Elemento no existe";
	}
	return arr[idx];
}
let resultado = getbyIdx([1, 2], 1);

console.log(resultado);
