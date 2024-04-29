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

  const prezzoFormattato = totalPrice.toFixed(2);
document.getElementById("risultato").innerHTML = `
    <p>Recap dei dati:</p>
    <ul>
        <li>Chilometri da percorrere: ${km} km</li>
        <li>Età del passeggero: ${age} anni</li>
    </ul>
    <p>Il prezzo del biglietto è di <strong>${prezzoFormattato} €</strong>.</p>
`;
}

// Aggiunta dell'evento click al bottone
const calcolaBtn = document.getElementById('calcolaBtn');
calcolaBtn.addEventListener('click', calcolaPrezzo);



const prezzoFormattato = totalPrice.toFixed(2);
document.getElementById("risultato").innerHTML = `
    <p>Recap dei dati:</p>
    <ul>
        <li>Chilometri da percorrere: ${km} km</li>
        <li>Età del passeggero: ${age} anni</li>
    </ul>
    <p>Il prezzo del biglietto è di <strong>${prezzoFormattato} €</strong>.</p>
`;

function reset() {
    document.getElementById("anullaBtn").reset();
}
