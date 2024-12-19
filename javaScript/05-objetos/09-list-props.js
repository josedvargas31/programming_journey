const punto = {
	x: 10,
	y: 15,
	dibujar() {
		console.log("Dibujando...");
	},
};
// delete punto.dibujar;
// preguntar si existe una propiedad de nombre dibujar dentro del objeto punto
if ("dibujar" in punto) {
	punto.dibujar();
}
// console.log(Object.keys(punto));

// con of iteramos un array
// para tener en cuenta, cuando es un codigo viejo
// metodos estaticos son keys y entries
/* for (let llave of Object.keys(punto)) {
	console.log(llave, punto[llave]);
}
for (let entry of Object.entries(punto)) {
	console.log(entry);
} */
// preferible que sea asi
for (let llave in punto) {
 console.log(llave, punto[llave]);
 
}
