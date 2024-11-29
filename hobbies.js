/*
 ! ----STEP-2----
 ?   - Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree.La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array
 ?     di hobby.
 */

/**
* 
* @param {string} hobbyOne 
* @param {string} hobbyTwo 
* @param {string} hobbyThree 
* @returns Object An object with param hobbies and array of hobbies inside
*/

/*------Function-Hobbies-BaseSintax------*/
const hobbies = function (hobbyOne, hobbyTwo, hobbyThree) {
    return { "hobbies": [hobbyOne, hobbyTwo, hobbyThree] }
}
console.log(hobbies("swim", "golf", "music"));

/*------ArrowFunction-Sintax------*/
// const hobbies = (hobbyOne, hobbyTwo, hobbyThree) => ({ "hobbies": [hobbyOne, hobbyTwo, hobbyThree] });
// console.log(hobbies("swim", "golf", "music"));

/*------Modules-Export-Sintax------*/
module.exports = { hobbies } // Questa sintassi ci permette di esportare piu valori.

