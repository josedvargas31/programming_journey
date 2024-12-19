// Permite iterar las propiedades de un objeto
// Si vamos a aceder a los elementos de un array, no utilices forin, utiliza forof

// For of
let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
}
for (let prop in user) {
    console.log(prop, user[prop]);
}

// For in
let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];

for (let indice in animales) {
    console.log(indice, animales[indice]);
    
}