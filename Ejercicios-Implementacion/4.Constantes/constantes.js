//Como ya se estuvo viendo anteriormente, las variables se encargan de guardar valores. Dichos valores pueden ser modificados o cambiados en el futuro. Para cambiar el valor de estas variables, lo que debemos hacer basicamente es volver a utilizar el nombre de dicha variable sin necesidad de utilizar let y le asignamos un nuevo valor. De esta forma dicha variable tendra un valor nuevo.

//Nota: Cambiar los valores de las variables no es buena practica o no es 100% recomendado, en caso tal vayas a tener nuevos valores lo mas recomendable es asignarle una nueva variable a dicho valor.

let nombre = "Hola Mundo";

nombre = "juanfeliz"
console.log(nombre);

//Ahora bien, para nosotros asegurarnos de no cambiar el nombre una variable por accidente podemos hacer uso de lo que hoy por hoy se conoce como const. El siguiente ejemplo, si lo ejecutamos da como resultado un error porque lo que estamos tratando de hacer es declarando una variable como una constante para luego intentar cambiarle la informacion que guarda dicha variable, cosa que no se puede hacer con una constante.

const apellido = "Hola Mundo";
apellido = "romero"

console.log(apellido);

//Sabiendo esto, ¿Cuando debo utilizar let y cuando debo utilizar const?
//Como ya lo dije anteriormente no es recomendable cambiarle la informacion a una variable, es decir, no es buena practica. Por esto, llegamos a la conclusion que es mejor utilizar const, ahora bien, si por alguna razon yo debo cambiarle el valor a una variable que yo asigne pues es mejor utilizar let

