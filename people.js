/*
 ! ----STEP-3----
 ? Importa la tua funzione da names.js
 ? Importa la tua funzione da hobbies.js
 ? Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue 
 ? due funzioni precedenti per costruire l'oggetto.
 */

// Importo i moduli da "names.js" e "hobbies.js"
const namesFile = require("./names.js");
const hobbiesFile = require("./hobbies.js");

// Destrutturo i valori da namesFile, usando la funzione generateName e l'array degli hobby dalla funzione hobbiesFile.hobbies
const { firstName, lastName } = namesFile.generateName("Andrea", "Presti");
const { hobbies } = hobbiesFile.hobbies("swim", "golf", "music");

// Funzione per creare un nuovo oggetto con nome completo e hobby
const newObject = function () {
    return {
        fullName: `${firstName} ${lastName}`, // Combina firstName e lastName
        hobbies: hobbies, // Aggiunge gli hobby come array
        hobbies2: `${hobbies}`, // Aggiunge gli hobby come stringa
        hobbies3: hobbies.join(", ") // Aggiunge gli hobby come array e li converte in stringa.
    }
};

// Stampa il nuovo oggetto creato
console.log(newObject());




