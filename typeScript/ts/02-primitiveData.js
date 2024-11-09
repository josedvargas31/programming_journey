"use strict";
let estudianteJavaScript = true;
if (estudianteJavaScript) {
    console.log("Puedes ver el video de Ts");
}
else {
    console.log("Primero tienes que ver el curso de Js");
}
let interMiami = 11;
// let interMiami: number | boolean | null = 11; // cuando el valor puede ser mas de un resultado
let fcDallas = 11;
let messi = 1;
let juegaMessi = true;
// void no devuelve nada
function jugar(equipo1, equipo2, juegaMessi) {
    let motivo = "";
    if (juegaMessi) {
        equipo1 = equipo1 + messi;
        motivo = "porque juega Messi";
    }
    if (equipo1 < equipo2) {
        console.log("Gana FC Dallas");
    }
    else if (equipo1 > equipo2) {
        console.log(`Gana Inter Miami ${motivo}`);
    }
    else if (equipo1 == equipo2) {
        console.log("Empatan");
    }
}
jugar(interMiami, fcDallas, juegaMessi);
