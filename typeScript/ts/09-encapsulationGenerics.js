"use strict";
// 'T' es generico, que almanecaremos un datos pero no sabemos que
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    // SetTicket y GetTicket, sirve para encapsular ticket, en tal forma que no se pueda modificar (ese seguro)
    setTicket(ticket) {
        // set es de setear, configurar
        this.ticket = ticket;
    }
    getTicket() {
        // recibir
        return this.ticket;
    }
    // si se puede aceder desde afuera
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
// cuando estoy instanciando, T es number
let sorteo = new Sorteo('Josed Crack');
sorteo.setTicket('S7');
console.log(sorteo.sortear());
