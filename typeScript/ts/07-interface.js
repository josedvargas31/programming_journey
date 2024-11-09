"use strict";
let dev = {
    nombre: "Josed",
    tecnologias: ["JavaScript", "Laravel", "NodeJs", "React"],
    tomaMate: true,
};
let dev2 = {
    name: "Federico",
    tech: ["HTML", "Cobol"],
    lastName: 'Buenardo',
};
function enviarCorriculum(personas) {
    console.log(`Este Curriculum es de ${personas.nombre}`);
}
enviarCorriculum(dev);
