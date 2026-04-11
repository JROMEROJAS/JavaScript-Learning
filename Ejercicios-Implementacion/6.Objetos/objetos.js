//Un objeto es una estructura de datos que almacena informacion en forma de pares clave-valor. En otras pakabras, es una forma de agrupar datos y comportamientos en una sola entidad.

//Primer ejemplo:

/*
let persona = {
    nombre: "Juan",
    edad: 19,
    saludar: function() {
        return "Hola";
    }
}; 
*/

//Segundo ejemplo:
let nombre = "Tanjiro";
let anime = "Kimetsu no yaiba";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no yaiba",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre); //Forma de como buscar una informacion en especifico.
console.log(personaje['anime']); //Forma de como buscar una informacion en especifico.

//Para modificar una propiedad seria de la siguiente manera:
personaje.edad = 13;

//Ahora si lo que queremos es eliminar una propiedad lo hacemos de la siguiente manera:
delete personaje.anime;
console.log(personaje);
