// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero

// Chilometri 
var chilometri = prompt('Quanti chilometri vuoi percorrere?');
var numeroChilometri = parseInt(chilometri);
console.log(numeroChilometri);

// Età 
var etàUtente = prompt('Età del passeggero?');
var numeroEtà = parseInt(etàUtente);
console.log(numeroEtà);

// Prezzo biglietto
var prezzo = 0.21 * numeroChilometri;
console.log(prezzo);

// Sconto 20%
// var scontoMinorenni;
var percent20 = (prezzo / 100) * 20;


// if (numeroEtà < 18) {
//     scontoMinorenni = (prezzo - (percent
// }