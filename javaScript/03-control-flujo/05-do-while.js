//  Cuales son los numeros pares

let i = 2;

// En while, se evalua primero la condicion, si la condicion se cumple, se ejecuta la procion de codigo que esta debajo
while (i < 2) {
    if (i % 2 == 0) {
        console.log('Numero par ', i);
        i++;      
    }
}

// do while se ejecuta la porcion de codigo y luego va a realizar la evaluacion de la condicion 
 do {
    if (i % 2 == 0) {
        console.log('Numero par ', i);
        i++;      
    }
 } while (i < 2);