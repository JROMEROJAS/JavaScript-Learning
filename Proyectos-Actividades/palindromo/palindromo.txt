import readline from "node:readline"


const valor = readline.createInterface({
    input: process.stdin,output: process.stdout
})


function verificarPalindromo(texto) {
    let textoSinEspacios = texto.split(" ").join("");

    let textoInvertido = "";
    for (let i = textoSinEspacios.length - 1; i >= 0; i--) {
        textoInvertido = textoInvertido + textoSinEspacios[i];
    }

    let textoOrdenado = textoSinEspacios.split("").sort().join("");
    if (textoSinEspacios === textoInvertido){
        console.log("Resultado: La palabra ingresada es un palindromo.")
    } else {
        console.log("Resultado: La palabra ingresada no es un palindromo.")
    }

    console.log("Palindromo organizado de forma alfabetica: " + textoOrdenado)
}

valor.question("Ingrese una palabra: ", (respuesta) => {
    verificarPalindromo(respuesta);

    valor.close();
})
