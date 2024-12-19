// Crear un algoritmo que devuelva un array de objetos en la base a pares

// El Noveno ejercicio lo complete 0 % (😓)
let pairs = [
	[1, { name: "Nicolas" }],
	[1, { name: "Felipe" }],
	[1, { name: "Chanchito" }],
];

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

function toCollection(arr) {
    let collection = [];
    for (let idx in arr) {
      let elemento = arr[idx];
      collection[idx] = elemento[1];
    //   Le agrega el id a al array de pairs
    collection[idx].id  = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);
