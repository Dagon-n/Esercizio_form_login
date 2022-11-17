let Utente = class {

    constructor(nome, cognome, CF, DataNascita, Indirizzo, Email, Telefono, Occupazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.CF = CF;
        this.DataNascita = DataNascita;
        this.Indirizzo = Indirizzo;
        this.Email = Email;
        this.Telefono = Telefono;
        this.Occupazione = Occupazione;
    }

    prova() {
        console.log( 'ciao!' );
    }

}

export {Utente};