/*Chiedere all’utente il cognome inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’.
Stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/


// 1. Chiedo il cognome all'utente
do {
  var cognomeUtente = prompt("Inserire il cognome");
  // 2. Validazione su cognome senza numeri O che la stringa sia vuota
} while ( !isNaN(parseInt(cognomeUtente[0])) || cognomeUtente.length == 0 )

// 3. Validazione extra -> trasformo la prima lettera del cognome in maiuscolo
cognomeUtente = cognomeUtente[0].toUpperCase() + cognomeUtente.substring(1);

// 4. Creo lista/array utenti
var listaCognomi = ['Lai', 'Furlan', 'Corrente', 'Fiorenzi', 'Giorgi', 'Bondi'];

// 5. Inserisco il cognome dell'utente nell'array
listaCognomi.push(cognomeUtente);

// 4. Stampo i cognomi in ordine alfabetico
console.log(listaCognomi.sort());

// 5. Stampo la posizione "umana" contando a prtire da 1 (non l'indice che partirebbe da 0)
var posizione = listaCognomi.indexOf(cognomeUtente)+1;

console.log("Il cognome " + cognomeUtente + " è nella posizione numero " + posizione + " della lista");
