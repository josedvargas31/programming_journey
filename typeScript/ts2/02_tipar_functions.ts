/* Hay dos formas de tiparlos con ts */
/* forma uno */
// el tipo de este objeto (name y age), dos puntos y le colocamos la anotacion de tipos
/* function saludar({name, age}: {name: string, age: number}) {
    console.log(`Hola ${name}, tienes ${age} años`);
}
saludar({ name: 'Pepe', age: 2}); */

/* forma dos */
/* function saludar(persona: {name: string, age: number}) {
    const {name, age} = persona;
    console.log(`Hola ${name}, tienes ${age} años`);
}
saludar({ name: 'Pepe', age: 2}); */

/* function saludar({name, age}: {name: string, age: number}): number { // colocamos esto para decir que debe retornar esta funcion: ': string'
    console.log(`Hola ${name}, tienes ${age} años`);
    return age;
}
saludar({ name: 'Pepe', age: 2}); */