let accion = "actualizar";

// si la accion se cumple, es decir: 'case es == listar' se cumple lo que sale debajo de case
// case, compara el valor con el que hay en la variable accion
// Cada vez que hay un case, siempre debe ir un break;

// la diferencia entre if (if, elseif y else) y switch es la comodidad o preferencia que quieras
switch (accion) {
	case "listar":
		console.log("Acción de listar");
		break;

	case "guardar":
		console.log("Acción de guardar");
		break;
        // El default, se ejecuta cuando no exista ninguna case a cual la variable pueda corresponder 
    default:
        console.log('Acción no reconocida');
        
}
