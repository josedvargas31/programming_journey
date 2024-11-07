//  logs
// while, do while, for, for in, for ot
// Ejecutar una porcion de codigo multiple veces

// cuales son los numeros pares

// Lo que va a pasar es, que mientras se cumpla la condicion del while, se va a ejecutar hasta que se incumpla, es decir, si la variable i esta en el rango de 0 a 9 se va a ejecutar la condicion del while
let i = 0; 
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Numero par ', i);
        i++;      
    }
}

console.log('Fuera del while');
