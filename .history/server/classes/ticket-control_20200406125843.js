const fs = require('fs');

class Ticket {

    constructor(numero, escritorio) {

    }

}

class TicketControl {

    constructor() {

        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];

        let data = require('../data/data.json');

        //console.log(data);

        if (data.hoy === this.hoy) {

            this.ultimo = data.ultimo;

        } else {
            this.reiniciarConteo();
        }

    }

    siguienteTicket() {

        this.ultimo += 1;
        this.grabarArchivo();

        return `Ticket ${ this.ultimo }`;

    }

    getUltimoTicket() {
        return `Ticket ${ this.ultimo }`;
    }

    reiniciarConteo() {

        this.ultimo = 0;
        this.tickets = [];

        console.log("Se ha inicializado el sistema");
        this.grabarArchivo();

    }

    grabarArchivo() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy
        };

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync('./server/data/data.json', jsonDataString);
    }


}


module.exports = {
    TicketControl
};