let edad = 10;

// Las condicciones se evaluan de arriba hacia abajo, y toma la primera que se cumpla y las demas las ignora 
if (edad > 17) {
    console.log('Usuario mayor de edad...');
} else if (edad > 13 ) {
    console.log('Usuaario necesita estar acompañado de sus padres...');
    
} else {
    console.log('Usuario no puede ingresar...');
    
}