/**
Esercizio di oggi: commonjs-modules
2. Esporta la funzione dal file.
3 - people.js
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
Buon lavoro ! :muscolo: (modificato) 
 */

/*
 ! ----STEP-1----
 ?   - Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
 ?   - Esporta la funzione dal file.
 */

/*
   Dovendo operae con dei moduli CommonJS, quindi senza l'utilizzo della nuova sintassi ES6 applichiamo anche qui 
   i due valori di default di controllo del codice... ( Se avessimo usato estensione .mjs oppure type "module" nel file .json )
   avremmo potuto evitare questa prassi poichè impostata di default.
 */

"use strict"
console.clear();

/*------Function-To-Generate-Name-BaseSintax------*/
const generateName = function (firstName, lastName) {
    return { firstName, lastName };
}
//console.log(generateName("Andrea", "Presti"));

/*------ArrowFunction-Sintax------*/
//const generateName = (firstName, lastName) => ({ fisrtName, lastName }); // Le tonde evitano errori di sintassi con le graffe, in conflitto con le arrowFunction.
//console.log(generateName("Andrea", "Presti"));

/*------Modules-Export-Sintax------*/
module.exports = { generateName } // Questa sintassi ci permette di esportare piu valori.

