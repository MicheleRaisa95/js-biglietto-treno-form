'use strict'

// Funzione per calcolare prezzo del biglietto

function calcolaPrezzo() {
    const km = Number (document.getElementById('km').value);
    const age = parseInt (document.getElementById('age').value);
   
   
    // Calcolo del prezzo del biglietto
  let totalPrice = km * 0.21;

  // Applicazione degli sconti in base all'età
  
  const minorDiscount = 0.2;
const seniorDiscount = 0.4;

if (age < 18) {
    totalPrice *= 1 - minorDiscount;
} else if (age >= 65) {
    totalPrice *= 1 - seniorDiscount;
} else {
    console.log("Nessuno sconto applicato.");
}

  // Output del prezzo finale
  console.log("Prezzo del biglietto: " + totalPrice.toFixed(2) + " €");
}

// Aggiunta dell'evento click al bottone
const calcolaBtn = document.getElementById('calcolaBtn');
calcolaBtn.addEventListener('click', calcolaPrezzo);
