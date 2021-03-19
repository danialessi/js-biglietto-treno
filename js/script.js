// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero, sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio

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

// Sconto 20%
var percent20 = (prezzo / 100) * 20;
var prezzoMinorenni = prezzo - percent20;

// Sconto 40% 
var percent40 = (prezzo / 100) * 40;
var prezzoOver = prezzo - percent40;

// prezzo viaggio 
if (numeroEtà < 18) {
    alert(prezzoMinorenni);
} else if (numeroEtà > 65) {
    alert(prezzoOver);
} else {
    alert(prezzo)
}