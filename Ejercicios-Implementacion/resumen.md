# Ejercicios e Implementación en JavaScript

En esta sección del repositorio documento todos los ejercicios prácticos que voy desarrollando mientras aprendo JavaScript.

A diferencia de la carpeta de conceptos, aquí aplico lo aprendido mediante ejemplos simples, pruebas y pequeñas implementaciones que me ayudan a entender cómo funciona realmente el lenguaje.

---

## Objetivo

* Reforzar la lógica de programación.
* Comprender cómo funciona JavaScript en la práctica.
* Aplicar conceptos teóricos mediante código.
* Desarrollar buenas prácticas desde etapas tempranas.
* Prepararme para trabajar con frameworks y backend.

---

## Contenido

### 1. Hola Mundo

Primer acercamiento a JavaScript.

```js
console.log("Hola Mundo");
```

Aprendizaje:

* Cómo ejecutar código en JavaScript.
* Uso de `console.log`.
* Primer contacto con el lenguaje.

---

### 2. Variables

Las variables permiten almacenar información que puede cambiar durante la ejecución del programa.

```js
let nombre = "Juan";
const edad = 20;
var ciudad = "Bogotá";
```

Aprendizaje:

* `let`: valor que puede cambiar.
* `const`: valor constante (no cambia).
* `var`: forma antigua (no recomendada actualmente).
* Importancia del scope (alcance de variables).

---

### 3. Convenciones de Nombres

Formas comunes de nombrar variables.

```js
let nombreUsuario = "Juan";     // camelCase (recomendado)
let NombreUsuario = "Juan";     // PascalCase / UpperCamelCase
let nombre_usuario = "Juan";    // snake_case
```

Aprendizaje:

* JavaScript usa principalmente **camelCase**.
* Mantener nombres claros mejora la legibilidad.

---

### 4. Tipos de Datos

Tipos básicos en JavaScript.

```js
let numero = 10;            // number
let texto = "Hola";         // string
let esVerdadero = true;     // boolean
let indefinido;             // undefined
let nulo = null;            // null
```

Aprendizaje:

* Identificar tipos de datos.
* Diferencia entre `undefined` (no definido) y `null` (vacío intencional).

---

### 5. Operadores

Permiten realizar operaciones con valores.

```js
let a = 10;
let b = 5;

console.log(a + b); // suma
console.log(a - b); // resta
console.log(a * b); // multiplicación
console.log(a / b); // división
```

Aprendizaje:

* Operadores aritméticos básicos.
* Manipulación de valores numéricos.

---

### 6. Condicionales

Permiten tomar decisiones en el código.

```js
let edad = 18;

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}
```

Aprendizaje:

* Uso de `if` y `else`.
* Evaluación de condiciones.
* Control del flujo del programa.

---

### 7. Bucles

Permiten repetir acciones varias veces.

#### For

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

#### While

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

Aprendizaje:

* Repetición de código.
* Control de iteraciones.
* Diferencia entre `for` y `while`.

---

### 8. Funciones

Bloques de código reutilizables.

```js
function saludar(nombre) {
    return "Hola " + nombre;
}

console.log(saludar("Juan"));
```

Aprendizaje:

* Reutilización de código.
* Parámetros y retorno de valores.
* Organización del código.

---

### 9. Arrays

Estructuras para almacenar múltiples valores.

```js
let numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]); // acceso a elementos
```

📌 Aprendizaje:

* Uso de listas en JavaScript.
* Acceso mediante índices.
* Base para estructuras más complejas.

---

### 10. Objetos

Permiten almacenar información en formato clave-valor.

```js
let persona = {
    nombre: "Juan",
    edad: 20,
    ciudad: "Bogotá"
};

console.log(persona.nombre);
```

📌 Aprendizaje:

* Representación de datos estructurados.
* Acceso a propiedades.
* Base para trabajar con APIs y JSON.

---

## 🚀 Cómo ejecuto los ejercicios

Dependiendo del ejercicio, utilizo:

### 🔹 Node.js

```bash
node archivo.js
```

### 🔹 Navegador

* Abro el archivo `.html`
* Uso la consola del navegador (F12)

---

## ⚠️ Errores comunes que he encontrado

* Olvidar declarar variables (`let` o `const`)
* Confundir `=` con `==` o `===`
* No cerrar llaves `{}` correctamente
* Errores de escritura en nombres de variables

---

## 🧠 Reflexión

Estos ejercicios me ayudan a entender JavaScript de forma práctica. No solo escribo código, sino que intento comprender por qué funciona así.

A medida que avance, este apartado irá creciendo con ejercicios más complejos y cercanos a proyectos reales.

---

## 📌 Próximos temas a estudiar

* Métodos de arrays (`map`, `filter`, `reduce`)
* Funciones flecha
* Manipulación del DOM
* Eventos
* Promesas y async/await
* Consumo de APIs

---

✍️ Nota: Este archivo se actualizará constantemente conforme avance en mi aprendizaje en JavaScript.systemctl --user restart docker-desktop
