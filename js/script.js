// per prima cosa creo due variabili const,
// la variabile priceKm è un float
const output= document.getElementById('output');
const priceKm = 0.21;

// chiedo all'utente quanti km deve percorrere e la sua età
let km = parseFloat(prompt('Quanti Km devi percorrere?'));
km.toFixed(2)
let age = parseInt(prompt('Quanti anni hai?'))

// calcolo il prezzo del biglietto granzie ai km che l'utente deve percorrere
let ticketPrice = km * priceKm;
console.log(ticketPrice);

// successivamente eseguo lo sconto in base all'età dell'utente
