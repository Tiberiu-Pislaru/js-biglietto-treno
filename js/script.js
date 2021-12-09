// per prima cosa creo due variabili const,
// la variabile priceKm è un float
const output= document.getElementById('output');
const result= document.getElementById('button');
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

result.addEventListener('click', function(){

    // output.classList.remove('hide');


    if (age < 18) {

        discount = ticketPrice * minorenni;

        ticketPrice = ticketPrice - discount;

        // discountedTicket= discountedTicket.toFixed(2);

        console.log(ticketPrice);

        output.innerHTML = `Il prezzo del tuo biglietto è di: ${parseFloat(ticketPrice.toFixed(2))} €.`;

    }

    else if (age > 65) {

        discount = ticketPrice * over65;

        ticketPrice = ticketPrice - discount;

        // discountedTicket = discountedTicket.toFixed(2);

        console.log(ticketPrice);

        output.innerHTML = `Il prezzo del tuo biglietto è di: ${parseFloat(ticketPrice.toFixed(2))} €.`;
    }

    // questo else finale rigurda la fascia d'età che viene esclusa dallo sconto
    else {

        output.innerHTML = `Il prezzo del tuo biglietto è di: ${parseFloat(ticketPrice)} €.`;
    }
})

// successivamente eseguo lo sconto in base all'età dell'utente
