type Programador = {
    nombre: string,
    tecnologias: string[],
    tomaMate?: boolean | null,
}

let programador1: Programador = {
	nombre: "Josed",
	tecnologias: ["JavaScript", "Laravel", "NodeJs", "React"],
	tomaMate: true,
};

let programador2: Programador = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomaMate: null
}