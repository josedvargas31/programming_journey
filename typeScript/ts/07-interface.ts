interface Personas {
	nombre: string;
	tecnologias: string[];
	tomaMate?: boolean | null;
}
let dev: Personas = {
	nombre: "Josed",
	tecnologias: ["JavaScript", "Laravel", "NodeJs", "React"],
	tomaMate: true,
};

let dev2 = {
	name: "Federico",
	tech: ["HTML", "Cobol"],
	lastName: 'Buenardo',
};
function enviarCorriculum(personas: Personas) {
    console.log(`Este Curriculum es de ${personas.nombre}`);
    
}

enviarCorriculum(dev);