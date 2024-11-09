// 'T' es generico, que almanecaremos un datos pero no sabemos que
class Sorteo<T> {
	// no se puede aceder desde afuera, solo se puede acceder desde la clase
	// atrivuto privado, que no esta definido pero sabemos  que es de tipo T
	private ticket?: T;

	constructor(private nombre: string) {}

    // SetTicket y GetTicket, sirve para encapsular ticket, en tal forma que no se pueda modificar (ese seguro)
	setTicket(ticket: T) {
		// set es de setear, configurar
		this.ticket = ticket;
	}

	getTicket() {
		// recibir
		return this.ticket;
	}
	// si se puede aceder desde afuera
	public sortear(): string {
		return `Para ${this.nombre} el ticket es ${this.ticket}`;
	}
}

// cuando estoy instanciando, T es number
let sorteo = new Sorteo<string>('Josed Crack');

sorteo.setTicket('S7');
console.log(sorteo.sortear());

