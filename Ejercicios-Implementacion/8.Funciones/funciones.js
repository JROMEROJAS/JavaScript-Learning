//Una funcion es un bloque de codigo reutilizable que se ejecuta cuando se llama. En otras palabras, es una forma de encapsular instrucciones para usarlas cuando se necesiten.

//Algunas caracteristicas que tienen las funciones es que se pueden reutilizar, es decir, evitan a repetir codigo innecesario. Por otra parte, pueden recibir parametros y pueden retornar valores.

function saludar() {
    console.log('Hola mundo');
}

saludar();

function suma() {
    return 2+2;
}

let resultado = suma();
console.log(resultado);

//Al igual que los objetos y arrays, las funciones tambien son de tipo de referencia. Es decir, se almacenan como una referencia en memoria.

//Existen varios tipos de variables:
//Declaradas
function saludar () {}

//Expresadas
let saludar = function() {};

//Arrow functions
let saludar = () => "Hola";