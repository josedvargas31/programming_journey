// Nos permiten crear objectos de manera sencilla y no repetitiva
// Factory functions


// Resivimos el name y email como parametros
// Si la variable se llama lo mismo que la propiedad, podemos presintir email, == email: email,
function crearUsuario(name, email) {
    return {
        id: 1,
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log("recuperando clave...");
        },
    };
}
//  de esta forma podecmos crear objetos de la misma estructura en cunato a sus propiedades
let user1 = crearUsuario('Nicolas', 'nico@holamundo.io')
let user2 = crearUsuario('Felipe', 'felipe@holamundo.io')
console.log(user1, user2);
