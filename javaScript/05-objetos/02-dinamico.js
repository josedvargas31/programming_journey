const user = {
    id: 1,
}
// Cuando definimos una variable de la palabra reserva const no podemos cambiarle el valor a esa misma variable, pero si el valor es un objeto, si podemos camiarle el valor a los propiedades a este objeto
user.name = 'Nicolas';
user.guardar = function () {
    console.log('Guardando', user.name);

    
}
user.guardar();

delete user.name;
delete user.guardar;
console.log(user);
//  El Object.freeze, lo que hace es que no se pueda modificar un objeto el cual haya sido creado, por ejemplo sus propiedades y valores
// const  user1 = Object.freeze({ id: 1 });

// utiliza seal, cuando quieras cambiarle los valores que ya tiene, peor no agregarle o quitarle propiedades
// Las propiedades estan fijas, en este caso el id, utiliza Object.seal
const  user1 = Object.seal({ id: 1 });
user1.name = 'Name';
user1.id = 2;
console.log(user1);

