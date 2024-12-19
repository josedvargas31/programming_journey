// Nos permite salir del look, y continue, salir de la interaccion
// Lo podemos utilizar para los for, for-in, for-of y do while
let i = 0;
while (i < 6) {
    i++;
    // esto quiere decir, una vez se llegue a esa condicion, todo lo que se encuentre despues de el, va a ser ignorado, vuelve al comienzo:  while (i < 6)

    if (i === 2) {
        continue;
    }
    // Detiene la ejecucion de nuestro look while 
    if (i === 4) {
        break;
    }
    console.log(i);
    
}
