Per la realizzazione della milestone 1:
creo la funzione calcola prezzo(){
definisco le variabili km e age, e stabilisco che l'utente possa soalmente inserire dei numeri 

poi creo la variabile let prezzo totale per calcolare il costo del biglietto senza sonti

definsco due variabili minor discount e seniordiscount
creo la condizionale per calcolare gli sconti da applicare 
if (age<18) 
{costo biglietto *=1-minorDiscount
}else if (age>=65) {
costo biglietto *=1-seniorDiscount
}

stampo in consolo l'output del prezzo finale del biglietto
console.log("prezzo del biglietto: " + totalPrice.toFixed(2) + " euro")

aggiungo un evento al click del bottone 
creo un bottone nella parte html che ha un id calcolaBtn
creo la variabile const calcolaBtn al quale aggiungo un evet listener 


