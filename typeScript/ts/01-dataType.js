"use strict";
/*  */
// STRING
/*  */
// Comillas dobles
const str1 = "Hola, soy una cadena con dos comillas dobles.";
// Comillas simples
const str2 = "Hola, soy una cadena con comillas simples.";
// Templete literals (backticks):
const nombre = "Jose";
const edad = 18;
const str3 = `Hola mi nombre es ${nombre} y tengo ${edad} años.`;
/*  */
// NUMBERS
/*  */
// Números enteros:
const mun1 = 10;
// Números decimales:
const mun2 = 18.5;
// Notación exponencial:
const num3 = 2.53e3; // 2.5 * 10^3 = 2500
// Notación exponencial negativa:
const num4 = 1.5e-2; // 1.5 * 10^-2 = 0.015
// Hexadecimales (base 16) utilizando el prefijo "0x":
const mun5 = 0xa; // Valor decimal: 10
// Octales (base8) utilizando el prefijo "0o":
const num6 = 0o12; //    Valor decimal: 10
// Binario (base 2) utilizando el prefijo "0b":
const num7 = 0b1010; // Valor decimal: 10
/*  */
// BOOLEAMS
/*  */
// Valor boleano true:
const bool1 = true;
// Valor boleano false:
const bool2 = false;
/*  */
// UNDEFINED
/*  */
// Declaración de una variable con valor undefined
let variableUndefined;
// Asiganción de valor undefined
variableUndefined = undefined;
/*  */
// NULL
/*  */
// Declaración de una variable con valor null
let variablenull;
// Asignación de valor null
variablenull = null;
/*  */
// OBJETO
/*  */
const programador = {
    nombre: "Josed",
    casado: false,
    cursosEnYoutube: 4,
    cursos: ["JavaScript", "Laravel", "NodeJs", "React"],
    viajeAEuropa: undefined,
    viajeAEstadosUnidos: null,
};
/*  */
// ARRAYS
/*  */
// Arreglo de números:
const numeros = [1, 2, 3, 4, 5];
// Arreglo de cadenas de texto:
const nombres = ["Juan", "María", "Pedro"];
// Arreglo de booleanos:
const valoresBool = [true, false, true];
/*  */
// ENUM
/*  */
// Definición de un enum para días de la semana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
// Enum con valores de cadena (String Enums):
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Verde"] = "verde";
    Colores["Azul"] = "azul";
})(Colores || (Colores = {}));
/*  */
// FUNCIONES
/*  */
// Declaración de función con tipado explícito:
function sumar(a, b) {
    return a + b;
}
// Funciones flecha con retorno implícito (inferido por TypeScript):
const dividir = (a, b) => a / b;
// Funciones con parámetros opcionales:
// No es obligatorio mandar el parametro de edad, se le coloca '?'
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}
// Funciones con parámetros por defecto:
function saludar2(nombre, edad = 30) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
/*  */
// CLASES
/*  */
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}.`);
    }
}
