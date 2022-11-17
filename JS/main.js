// import {Utente} from "./Utente.js";

function prendiDati() {

    let nomeUtente = document.getElementById('nomeUtente').value;
    let cognomeUtente = document.getElementById('cognomeUtente').value;
    let cfUtente = checkCF();
    let nascitaUtente = document.getElementById('nascitaUtente').value;
    let indirizzoUtente = document.getElementById('indirizzoUtente').value;
    let emailUtente = checkEmail();
    let telefonoUtente = checkNumber();
    let occupazioneUtente = document.getElementById('occupazioneUtente').value;

    if(cfUtente != 'ERROR' && emailUtente != 'ERROR' && telefonoUtente != 'ERROR') {
        document.getElementById('alertError').style.display = 'none';
        printUtente(nomeUtente, cognomeUtente, cfUtente, nascitaUtente, indirizzoUtente, emailUtente, telefonoUtente, occupazioneUtente)
    }

    return false;

}

function checkCF() {

    let cfInserito = document.getElementById('cfUtente').value;
    cfInserito = cfInserito.replaceAll(' ', '');
    cfInserito = cfInserito.toUpperCase();
    if(cfInserito.length != 16) {
        document.getElementById('cfUtente').style.border = '2px solid #FF0000';
        document.getElementById('alertError').style.display = 'block';
        return 'ERROR';
    }else{
        document.getElementById('cfUtente').style.border = '1px solid #ccc';
        return cfInserito;
    };

}

function checkEmail() {

    let emailUtente = document.getElementById('emailUtente').value;
    if(emailUtente.indexOf('@') < 0) {
        document.getElementById('emailUtente').style.border = '2px solid red';
        document.getElementById('alertError').style.display = 'block';
        return 'ERROR';
    }else{
        document.getElementById('emailUtente').style.border = '1px solid #ccc';
        return emailUtente;
    };

}

function checkNumber() {

    let telefonoUtente = document.getElementById('telefonoUtente').value;
    if(telefonoUtente.length != 10) {
        document.getElementById('telefonoUtente').style.border = '2px solid red';
        document.getElementById('alertError').style.display = 'block';
        return 'ERROR';
    }else{
        document.getElementById('telefonoUtente').style.border = '1px solid #ccc';
        return telefonoUtente;
    }

}

function printUtente(nome, cognome, cf, nascita, indirizzo, email, telefono, occupazione) {

    document.getElementById('contenitoreRisultato').style.display = 'block';

    document.getElementById('nome').innerText = nome;
    document.getElementById('cognome').innerText = cognome;
    document.getElementById('cf').innerText = cf;
    document.getElementById('nascita').innerText = nascita;
    document.getElementById('indirizzo').innerText = indirizzo;
    document.getElementById('email').innerText = email;
    document.getElementById('telefono').innerText = telefono;
    document.getElementById('occupazione').innerText = occupazione;

    creaUtente(nome, cognome, cf, nascita, indirizzo, email, telefono, occupazione);

}

// function creaUtente(nome, cognome, cf, nascita, indirizzo, email, telefono, occupazione) {

//     const nuovoUtente = new Utente(nome, cognome, cf, nascita, indirizzo, email, telefono, occupazione);

//     nuovoUtente.prova();

// }