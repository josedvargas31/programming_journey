// El primer ejercicio lo complete 100% (👌)
function cualEsMayor(a, b) {
	if (a < b) {
		return b;
	} else {
		return a;
	}
    // Utilizando el operador ternario queda asi:
    // return (a < b) ? a : b
}

let mayor = cualEsMayor(10, 5);
console.log( "El numero mayor es", mayor);
