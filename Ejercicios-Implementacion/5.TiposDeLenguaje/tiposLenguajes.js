//En este caso estaremos hablando principalmente de dos tipos de lenguaje, los cuales son: Tipado estatipo vs Tipado dinamico.

//El lenguaje de tipado estatico es aquel donde el tipo de dato de una variable se define antes de ejecutar el programa (en tiempo de compilacion) y este no puede cambiar. En otras palabras, el compilador ya sabe que tipo es cada variable y verifica errores antes de compilar.

//El lenguaje de tipado dinamico es aquel donde el tipo de dato se asigna en tiempo de ejecucion, y una variable puede cambiar de tipo. En otras palabras, el tipo depende del valor que tenga la variable en ese momento.

//En este caso, JavaScript es de tipado dinamico.

let numero = 42;
let nombre = "juan";
let verdadero = true;
let undef;
let nula = null;

//nombre = 53;

//console.log(nombre);

//En este caso, estoy usando la variable nombre en dos casos y esto me arroja un "53".

//Pero en caso tal yo no quiera esto, puedo ejecutar el comando "typeof" antes de la variable en el console.log, por ejemplo, "console.log(typeof nombre)".

console.log(typeof nombre);
console.log(typeof numero);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nula);  

//Esto lo que nos arrojara es basicamente la descripcion del tipo de dato que nosotros estamos manejando.