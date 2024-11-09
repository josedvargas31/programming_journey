//  never
// El never nunca va a devolver nada, asi que lo que retornara es never
function throwError(message: string): never {
    throw new Error(message);
}
// El void es la forma indicar que la funcion puede devolver un valor, pero no importa si devuelve un valor o no
function logMessage(message: string): void {
    console.log(message);
    //  throw new Error(message);

    // return implicito <--- TE DA IGUAL -> void -> no devuelve nada
}
// el never nunca llega al final de la funcion y el void se ejecuta la funcion