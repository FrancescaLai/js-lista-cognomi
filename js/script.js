/*Chiedere all’utente il cognome inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’.
Stampa la lista ordinata alfabeticamente.
Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova*/


// 1. Creo un array con dei cognomi
var listaCognomi = [ "Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi" ];

// 2. Chiedo cognome all'utente
var cognome = prompt("Inserisci il tuo cognome");

// 3. Inserisco il cognome dell'utente nell'array
for (var i =0; i < listaCognomi.length; i++){
  listaCognomi.push = cognome;
  // 4. Stampo i cognomi in ordine alfabetico
  console.log(listaCognomi.sort());
}
