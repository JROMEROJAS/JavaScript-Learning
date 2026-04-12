const readline = require('readline');

const resultado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

resultado.question("Ingresa una palabra: ", (palabra) => {
    let cantidadVocales = 0;

    let contaA = 0;
    let contaE = 0;
    let contaI = 0;
    let contaO = 0;
    let contaU = 0;

    let conversion = palabra.toLowerCase();

    for(let i =0; i < conversion.length; i++) {
        let letra = conversion[i];

        if (letra === 'a') {
            contaA++;
            cantidadVocales++;
        } else if (letra === 'e') {
            contaE++;
            cantidadVocales++;
        } else if (letra === 'i') {
            contaI++;
            cantidadVocales++;
        } else if (letra === 'o') {
            contaO++;
            cantidadVocales++;
        } else if (letra === 'u') {
            contaU++;
            cantidadVocales++;
        }
    }

    console.log("Resultado")
    console.log("Palabra ingresada: ", palabra)
    console.log("Total de vocales: ", cantidadVocales)
    console.log("Resumen: ")
    console.log("A: ", contaA);
    console.log("E: ", contaE);
    console.log("I: ", contaI);
    console.log("O: ", contaO);
    console.log("U: ", contaU);

    resultado.close();

})