const formulario = document.querySelector('#formulario');
const inputNombre = document.querySelector('#resultadoNombre');
const contenidoResultado = document.querySelector('#resultado');
const cuerpoPagina = document.querySelector('#cuerpo');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = inputNombre.value;

    if (nombre === ""){
        alert("El campo no puede quedar vacio.");
        return;
    }

    let conversionMayuscula = nombre.toUpperCase();
    let palabras = nombre.trim().split(" ");
    let cantidadPalabras = palabras.length;
    let palabraSinEspacios = nombre.toLowerCase();
    let textoInvertido = palabraSinEspacios.split("").reverse().join("");

    let mensajePalindromo = "";

    if (palabraSinEspacios === textoInvertido) {
        mensajePalindromo = "Es un palindromo.";
        cuerpoPagina.style.backgroundColor = "#2bff00";
    } else {
        mensajePalindromo = "No es un palindromo."
        cuerpoPagina.style.backgroundColor = "#ff350d";
    }

    contenidoResultado.innerHTML = `
        <div class="resultado">
            <hr>
            <p><strong>Nombre en mayúscula:</strong> ${conversionMayuscula}</p>
            <p><strong>Cantidad de palabras:</strong> ${cantidadPalabras}</p>
            <p><strong>Resultado:</strong> ${mensajePalindromo}</p>
    `;

});