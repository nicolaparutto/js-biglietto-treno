//Il programma da riprodurre deve chiedere all'utente il numero di km che vuole percorrere e l'età del paseggero.
//Sulla base di queste info, deve calcolare il prezzo totale del viaggio, secondo queste regole:
// 1. il prezzo del biglietto è definito in base ai km (0.21€ al km).
// 2. deve applicare uno sconto del 20% per i minorenni.
// 3. deve applicare uno sconto del 40% per gli over 65.
// 4. L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// DATI UTILI
const etaMinore = 18;
const etaOver = 65;
const prezzoKm = 0.21;
const discountMinorenne = 20;
const discountOver = 40;

// prompt per la domanda della quantità di km da percorrere.
const kmDaPercorrere = prompt('Quanti km vuoi percorrere?');
// prompt per la domanda dell'età del passeggero.
const etaPaseggero = prompt("Quanti anni hai?");2

// Calcola prezzo base
const prezzoTotale = kmDaPercorrere * prezzoKm;

//Dichiaro temporaneamente la variabile che poi conterrà il prezzo finale del biglietto.
let prezzoFinale;

// Sconto del 20% per i minorenni.
if (etaPaseggero < etaMinore) {
   const sconto = prezzoTotale * (discountMinorenne / 100);
   prezzoFinale = prezzoTotale - sconto;
}
// Sconto del 40% per gli over 65.
else if (etaPaseggero > etaOver) {
   const sconto = prezzoTotale * (discountOver / 100);
   prezzoFinale = prezzoTotale - sconto;
}
//Costo per un'età compresa tra i 18 e i 65 anni.
else {
   prezzoFinale = prezzoTotale;
}

//RISULTATO FINALE
console.log('Il prezzo totale è: €', prezzoFinale.toFixed(2));

