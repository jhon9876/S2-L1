/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// In javascript, come in ogni altro linguaggio di programmazione, sono presenti vari tipi di dato tra cui troviamo:
// 1) Tipo numerico (intero o in virgola mobile)
// 2) Tipo stringa (Es. "Mario")
// 3)Tipo bool (True o False utilizzato in genere all'interno di costrutti per verificare determinate condizioni es:if) 
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const myName= "Giovanni"
console.log("Il mio nome è: " + myName);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const primoNumero=12
const secondoNumero=20
const somma=primoNumero+secondoNumero
console.log("la somma è data da: " + somma)
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x=12
console.log("Il valore di x è: " + x)
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// myName="Iacono"
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
sottrazione=4 - x
console.log("Il valore della sottrazione è: " + sottrazione)
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1="john"
let name2="John"
const Uguaglianza= (name1===name2)? "Uguali" : "Diverse"
console.log("Le due stringhe sono: " + Uguaglianza)
// non compreso bene l'extra
name1.toLowerCase
console.log("Stringa name1 in lowercase: " + name1)
name2.toLowerCase()
console.log("Stringa name2 in lowercase: " + name2)
console.log("Le due stringe in lowercase sono uguali? : " + name1===name2)