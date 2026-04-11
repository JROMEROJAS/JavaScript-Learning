//JavaScript existe algo llamado tipo de referencia que es basicamente un valor que no se guarda directamente en la variable, sino que la variable guarda una referencia (direccion en memeria) donde esta el dato. En otras palabras, la variable apunta al valor, no contiene el valor en si.

let obj1 = {nombre: "Juan"};
let obj2 = obj1;

obj2.nombre = "Pedro";

console.log(obj1.nombre);

//Esto arroja como resultado "Pedro", ¿Por que?, porque obj1 y obj2 apuntan al mismo objeto, esto quiere decir que si se modifica uno, cambia el otro.

