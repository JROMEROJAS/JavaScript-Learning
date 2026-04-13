//Un array es una estructura de datos que permite almacenar multiples valores en una sola variables, organizados por indices(posiciones). Ejemplo:

let animales = ["juan", "rayco"];
console.log(animales);

//En otras palabras, es una lista ordenada de elementos. Donde cada valor tiene una posicion que se conoce como "indice", estos indices empiezan desde el "0", es decir, en el array anterior juan esta en la posicion 0 y rayco en la posicion 1.

//Los arrays son dinamicos, es decir, puedes agregar o eliminar elementos facilmente. Por ejemplo:

animales[2] = "dragon";
console.log(animales);

//Otro dato importante es que los arrays pueden almacenar datos aleatorios como int, string o boolean. Por ejemplo:

let mezcla = [10, "juanjo", true];
console.log(mezcla);

//Otro dato importante es que tiene metodos utiles, donde cada uno sirve para algo en concreto: push(agregar), pop(eliminar), shift(eliminar primero), map(), filter(ambos manipulacion), length(devuelve la cantidad de elementos que se encuentran dentro del array).

console.log(animales.length);