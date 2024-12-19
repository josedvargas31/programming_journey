function Punto(x, y) {
	this.x = x;
	this.y = y;

	this.dibujar = function () {
		console.log("Dibujando...");
	};
}
// extender objetos o otras funciones con call o apply
let punto = {z:7}
// Punto.call(punto, 1, 2);
Punto.apply(punto, [1, 2]); // tambien podemos utilziar apply, pero los arguemntos lo debemos entregar dentro de un array
console.log(punto);

// const Point = new Function(
// 	"x",
// 	"y",
// 	`
//         this.x = x;
//     this.y = y;
  
//     this.dibujar = function() {
//       console.log('Dibujando...');
//     };
//     `
// );
// let p = new Point(1, 2);
// console.log(p);

