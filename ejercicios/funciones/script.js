// Definición de funciones acá

//Ejercicio 1

function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

//Ejercicio 2


function calculadora(a, b, operacion) {
    switch(operacion) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Operación no válida";
    }
}

//Ejercicio 3


function areaRectangulo(base, altura) {
    return base * altura;
}

//Ejercicio 4

function esPar(numero) {
    if (numero % 2 == 0) {
        return "es par";
    } else {
        return "es impar";
    }
}

//Ejercicio 5

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

//Ejercicio 6

function calificarNota(num1) {
    if (num1 >= 90) {
        return "A";
    } else if (num1 >= 80) {
        return "B";
    } else {
        return "C";
    }
}

//Ejercicio 7

function sumarArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

//Ejercicio 8

function encontrarMaximoPar(array) {
    let maximoPar = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            if (maximoPar === null || array[i] > maximoPar) {
                maximoPar = array[i];
            }
        }
    }
    return maximoPar;
}

//Ejercicio 9


//Ejercicio 10

function dobleNumeros(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(array[i] * 2);
    }
    return resultado;
}