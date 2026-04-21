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
for (let i = 0; i <= numeros.length-1; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}
console.log("El número mayor es: ", mayor);


//Ejercicio 4


