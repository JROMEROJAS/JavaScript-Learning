const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function sumar(a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

function multiplicacion(a,b){
    return a * b;
}

function division(a,b){
    if (b == 0) {
        return("No se puede realizar division por cero.")
    } 
    return a / b;
}

function potencia(a, b) {
    let res = 1;
    for (let i = 0; i < b; i++) { res *= a;}
    return res;
}

function tomaDatos(){
    console.log("Ingresa dos numeros.")
    rl.question("Ingresa el primer numero: ", (numero1) => {
        rl.question("Ingresa el segundo numero: ", (numero2) => {
            const num1 = parseFloat(numero1);
            const num2 = parseFloat(numero2);
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Uno de los valores ingresados es invalido.")
                rl.close();
                return
            }
            const resultados = [];

            const resultadoSuma = sumar(num1, num2);
            resultados.push(`${num1} + ${num2} = ${resultadoSuma}`);

            const resultadoResta = restar(num1, num2);
            resultados.push(`${num1} - ${num2} = ${resultadoResta}`);

            const resultadoMultiplicacion = multiplicacion(num1, num2);
            resultados.push(`${num1} * ${num2} = ${resultadoMultiplicacion}`);

            const resultadoDivision = division(num1, num2);
            if (typeof resultadoDivision === 'string') {
                resultados.push(`${num1} / ${num2} = ${resultadoDivision}`);
            } else {
                resultados.push(`${num1} / ${num2} = ${resultadoDivision}`);
            }

            const resultadoPotencia = potencia(num1, num2);
            resultados.push(`${num1} ^ ${num2} = ${resultadoPotencia}`);

            console.log("Resultados");
            for (let i = 0; i < resultados.length; i++) {
                console.log(resultados[i]);
            }
            rl.close();

        });
    });
}

tomaDatos();



