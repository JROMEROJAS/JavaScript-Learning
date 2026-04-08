//Cuando querramos definir una variable en JS utilizaremos LET, seguido del nombre de la variable mas el valor que le vamos a asignar a dicha variable.

//En JS para hacer uso de las variables debemos tener en cuenta unas "reglas" como por ejemplo el nombre de la variable debe comenzar con letras o guion bajos. Tampoco es posible utilizar palabras reservadas como el propio LET, ya que automaticamente arrojara error en el sistema.

//En JS existen tres convenciones, la primera es UpperCamelCase (esto lo que quiere decir es que cada primera letra de cada palabra de la cual nosotros llamemos una variable tendra que ser escrita en mayuscula), la segunda es camelCase (esto lo que quiere decir es que la primera letra de la primera palabra de la variable debe ser en minuscula y la segunda palabra debe tener como primera letra una mayuscula) y la tercera es snake_case (y esta basicamente lo que quiere decir es que si tenemos una variable que se llama con dos palabras, dichas palabras deben estar separadas con un guion bajo).

let nombre = "Hola Mundo";

//Ejemplo de variables con las tres convenciones:
//UpperCamelCase
let NombreCompleto;

//camelCase
let nombreCompleto;

//snake_case
let nombre_completo;

//Ademas de esto es importante saber que cuando definimos una variable usando let, nosotros podemos definir mas de una variable, por ejemplo (pero esta practica no se utiliza):
let apellido, animal;
apellido = "romero";

//Nota importante, la que mas se suele utilizar es la de: camelCase y es la que estaremos utilizando.

console.log(nombre);