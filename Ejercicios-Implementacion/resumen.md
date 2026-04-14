# Conceptos y Fundamentos de JavaScript

Este documento contiene la base teórica detallada de los temas practicados en este repositorio. Como estudiante de 5to semestre, el enfoque aquí no es solo la sintaxis, sino el comportamiento interno del lenguaje.

---

## 1. Hola Mundo y Entorno de Ejecución
El `console.log()` es la puerta de entrada a la depuración. JavaScript es un lenguaje **interpretado** y **JIT (Just-In-Time compiled)**. 
* **Dato clave:** En el navegador, el motor que lo ejecuta es **V8** (Chrome/Edge) o **SpiderMonkey** (Firefox). En servidor, usamos **Node.js**.

---

## 2. Variables y Ciclo de Vida (Scope)
La forma en que declaramos variables afecta la memoria y el alcance del código.
* **`let`:** Declaración de bloque (Block Scope). Es la forma estándar moderna.
* **`const`:** Define una referencia inmutable. Es una buena práctica usarlo por defecto a menos que sepas que el valor cambiará.
* **`var`:** (Legacy) Tiene alcance de función y sufre de **Hoisting**, lo que puede elevar la declaración al inicio del script y generar errores silenciosos.

---

## 3. Convenciones de Nombres
Seguir estándares mejora la mantenibilidad en equipos de desarrollo.
* **camelCase:** Es el estándar de oro en JavaScript para variables y funciones (ej: `nombreUsuario`).
* **PascalCase:** Utilizado para Clases y componentes (ej: `UserComponent`).
* **Screaming Snake Case:** Para constantes que nunca cambian (ej: `API_KEY`).

---

## 4. Tipos de Datos
JavaScript es de **tipado dinámico**, lo que significa que una variable puede cambiar de tipo en tiempo de ejecución.
* **Primitivos:** `Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol` y `BigInt`.
* **Diferencia técnica:** `null` es un objeto que representa la ausencia de valor, mientras que `undefined` significa que la variable existe pero no tiene contenido aún.



---

## 5. Operadores y Coerción
Los operadores permiten manipular datos, pero en JS existe la **coerción de tipos**:
* **Aritméticos:** `+`, `-`, `*`, `/`, `%`.
* **Asignación:** `=`, `+=`, `-=`.
* **Coerción:** Si sumas un número y un string (`5 + "5"`), JS convertirá el número a string y los concatenará (`"55"`). Es mejor usar siempre el operador de igualdad estricta `===`.

---

## 6. Condicionales y Lógica
Controlan el flujo basándose en expresiones booleanas.
* **If / Else:** Estructura básica de decisión.
* **Valores Falsy:** En JS, valores como `0`, `""`, `null`, `undefined` y `NaN` se evalúan como `false` automáticamente.
* **Operador Ternario:** `condicion ? true : false;` (muy usado en frameworks como Angular).

---

## 7. Bucles e Iteración
* **For:** Control total sobre el inicio, condición e incremento.
* **While:** Ideal cuando no sabemos cuántas veces se debe repetir el ciclo.
* **Iteración de Arrays:** Para desarrollo profesional, se suelen preferir métodos como `.forEach()` o `.map()` sobre los bucles tradicionales.

---

## 8. Funciones: Ciudadanos de Primera Clase
En JS, las funciones pueden ser tratadas como cualquier otra variable.
* **Declarativas:** Tienen hoisting (puedes llamarlas antes de definirlas).
* **Arrow Functions:** `const miFuncion = () => { ... }`. No tienen su propio contexto de `this`, lo que las hace ideales para métodos de clase y callbacks.

---

## 9. Arrays (Arreglos)
Colecciones de datos indexadas. 
* **Dinámicos:** No necesitas definir un tamaño fijo al inicio (a diferencia de Java).
* **Métodos esenciales:** `.push()`, `.pop()`, `.shift()`, `.unshift()`.

---

## 10. Objetos (Estructuras de Datos)
Fundamentales para la comunicación con APIs (JSON).
* **Clave-Valor:** Permiten agrupar datos y funciones (métodos).
* **Acceso:** Se puede usar la notación de punto (`usuario.nombre`) o de corchetes (`usuario["nombre"]`).

---

## 🚀 Ejecución y Depuración
* **Node.js:** Para ejecutar scripts en consola mediante `node nombre_archivo.js`.
* **Navegador:** Uso de la pestaña **Console** en las DevTools (F12) para pruebas rápidas.

---

## ⚠️ Errores Comunes de Desarrollo
1. **Confundir `=` con `===`:** El primero asigna, el segundo compara valor y tipo.
2. **ReferenceError:** Intentar usar una variable que no ha sido definida o está fuera del scope.
3. **TypeError:** Intentar ejecutar algo que no es una función o acceder a propiedades de un `null`.

---

## 🧠 Reflexión Profesional
Como futuro Tecnólogo en Desarrollo, entender estos conceptos a nivel de "Motor de JS" es clave para saltar a frameworks como **Angular** o trabajar con **Node.js** en el backend. La lógica de programación es el lenguaje universal, JavaScript es solo la herramienta para implementarla.

---

✍️ Nota: Este archivo se actualizará constantemente conforme avance en mi aprendizaje en JavaScript.systemctl --user restart docker-desktop
