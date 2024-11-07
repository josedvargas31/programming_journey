// Crear algoritmo que tome un array de objetos y devuelva un array de pares

// El Octavo ejercicio lo complete 0 % (😓)
let array = [
	{
		id: 1,
		name: "Nicolas",
	},
	{
		id: 2,
		name: "Felipe",
	},
	{
		id: 3,
		name: "Chanchito",
	},
];

let pares = [
	[1, { id: 1, name: "Nicolas" }],
	[1, { id: 2, name: "Felipe" }],
	[1, { id: 3, name: "Chanchito" }],
];

function toPairs(arr) {
    let pairs = [];
    for (const idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}
let resultado = toPairs(array);
console.log(resultado);
