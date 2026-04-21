//Ejercicio 1

let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}

    console.log("Suma total: ", suma);


//Ejercicio 2

let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}

//Ejercicio 3

const numeros = [4, 17, 3, 25, 8, 11];
let mayor = numeros[0];
for (let contador = 0; contador < numeros.length; contador++) {
    if (numeros[contador] > mayor) {
        mayor = numeros[contador];
    }
    console.log(numeros.length);
    
}

console.log("El número mayor es: ", mayor);


//Ejercicio 4


const palabras = ["sol", "montaña", "mar", "elefante", "río", "cascada"];
const palabrasLargas = [];
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > 4) {
        palabrasLargas.push(palabras[i]);
    }
}
console.log("Palabras largas: ", palabrasLargas);


//Ejercicio 5

const numero = 7;
let multiplicador = 1;

while (multiplicador <= 10) {
    let resultado = numero * multiplicador;
    console.log(`${numero} x ${multiplicador} = ${resultado}`);
    multiplicador++;
    
}