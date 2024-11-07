// Cuando creamos funciones contructoras, se espera que el nombre de la funcion sea UpperCanelCase o PascalCase, es decir que la primera letra debe ser mayuscula

// { is: 1, recuperarClave: function() {} }
function Usuario() {
	this.id = 1;
	this.recuperarClave = function () { // métodos! una funcion que fue asignada a una propiedad de un objeto
		console.log('Esperando clave...');
	};
}

// Cuando escribimos new, ocurreo cuantro cosas
// 1- se crea un objeto literal del aire
// 2- se vincula el 'propotipo' de la funcion, en este caso 'Usuario', con el objeto que se acaba de crear
// 3- ese objeto que se acaba de crear en el aire, se le asigna a la palabra reservada 'this'
// 4- Si la funcion de 'Usuario' no retorna absolutamente nada, como lo es en este ejemplo, lo que hace es que retorna de manera automatica 'this'

let usuario =  new Usuario();

// Crea un objeto literal del aire
// se vincula el prototipo
// Se le asigna a this, el objeto que acabamos de crear 
// SI no retorna nada, retorna this

console.log(usuario);

