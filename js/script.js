// per prima cosa creo due variabili const,
// la variabile priceKm è un float
const output= document.getElementById('output');
const priceKm = 0.21;
const minorenni = 0.2;
const over65 = 0.4;

// chiedo all'utente quanti km deve percorrere e la sua età
let km = parseFloat(prompt('Quanti Km devi percorrere?'));
km = km.toFixed(2)
let age = parseInt(prompt('Quanti anni hai?'))

// calcolo il prezzo del biglietto granzie ai km che l'utente deve percorrere
let ticketPrice = km * priceKm;
console.log(ticketPrice);
let discount;
let discountedTicket;

// successivamente eseguo lo sconto in base all'età dell'utente
if (age < 18){

    discount = ticketPrice * minorenni;

    discountedTicket = ticketPrice - discount;

    // discountedTicket= discountedTicket.toFixed(2);
    
    console.log(discountedTicket);
    
    output.innerHTML = `Il prezzo del tuo biglietto è di: ${discountedTicket.toFixed(2)} €.`;
    
}

else if (age > 65){

    discount = ticketPrice * over65;

    discountedTicket = ticketPrice - discount;

    // discountedTicket = discountedTicket.toFixed(2);

    console.log(discountedTicket);

    output.innerHTML = `Il prezzo del tuo biglietto è di: ${discountedTicket.toFixed(2)} €.`;
}

// questo else finale rigurda la fascia d'età che viene esclusa dallo sconto
else{

    output.innerHTML = `Il prezzo del tuo biglietto è di: ${ticketPrice} €.`;
}