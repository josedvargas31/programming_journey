// Creamos una clase
/* class Pelicula {
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine() {
        console.log(`La pelicula de ${this.nombre} está siendo proyectada`);
        
    }
}

const pelicula = new Pelicula; */

// Constructor
class Pelicula {
	nombre?: string;
	protagonistas?: string[];
	actores?: string[];

	proyectarEnCine() {
		console.log(`La pelicula de ${this.nombre} está siendo proyectada`);
	}
	constructor(nombre: string, protagonistas: string[], actores: string[]) {
		this.nombre = nombre, // this.nombre se refiere al atributo de la clase pelicula, y lo que va despues del igual, debe ser el mismo al que va en el constructor
		this.protagonistas = protagonistas,
		this.actores = actores
	}
}

const pelicula = new Pelicula(
	"Barbie",
	["Barbie", "Ken"],
	["Margot Robbie", "Ryan Gosling"]
);

const pelicula2 = new Pelicula(
	"Openheimer",
	["Openheimer", "Strauss"],
	["Cillian Murphy", "Robbert Downey Jr"]
);

pelicula.proyectarEnCine();
console.log(pelicula2);
