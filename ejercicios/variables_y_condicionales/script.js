//Ejercicio 1:

> let (nombre = "")
> if (nombre != "") {
>     console.log("Hola " + nombre)
> } else {
>     console.log("Hola desconocido")
>
}


//Ejercicio 2:

let (edad =  18)
if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}


//Ejercicio 3:

let clasificacion = 60
if (clasificacion == 50) {
    console.log("Aprobado")
} else if (clasificacion <60) {
    console.log("Reprobado")
}


//Ejercicio 4:

switch (día) {
    case 1:
        console.log
        ("Lunes");

         case 2:
        console.log
        ("Martes");

         case 3:
        console.log
        ("Miércoles");

         case 4:
        console.log
        ("Jueves");

         case 5:
        console.log
        ("Viernes");
}


//Ejercicio 5:

if temp = 30;
if (temp < 10) {
    console.log("Hace frío")
} else if (temp >= 10 && temp <= 25) {
    console.log("templado");
    else if (temp > 25) {
        console.log("Hace calor")
    }
}


//Ejercicio 6:

let num1 = 5;
if (num1 > 0) {
    console.log("positivo");
} else if (num1 < 0) {
    console.log("negativo");
} else console.log("cero");


//Ejercicio 7:

let num2 = 0;
if (num2 > 0) {
    console.log("Positivo");
} else if (num2 < 0) {
console.log("Negativo");
}

//Ejercicio 8:

let monto = 100;
if (monto >= 100) {
    console.log("Descuento del 10%");
} else if (monto >= 200) {
    console.log("Descuento del 20%");
}

//Ejercicio 9:

let lado1 = 10;
let lado2 = 10;
let lado3 = 10;
if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es Equilátero");
} 
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es Isósceles");
} 
else {
    console.log("El triángulo es Escaleno");
}

//Ejercicio 10:

let contraseña = "contraseña123";
if (contraseña.length >= 8) {
    console.log("Contraseña válida");
} else {
    console.log("Demasiado corta");
}


//Ejercicio 11:

switch (mes) {
    case Verano:
        console.log
        ("Diciembre");("Enero");(Febrero);

    case Otoño:
        console.log
        ("Marzo");("Abril");("Mayo");

    case Invierno:
        console.log
        ("Junio");("Julio");("Agosto");

    case Primavera:
        console.log
        ("Septiembre");("Octubre");("Noviembre");
}


//Ejercicio 12:

let puntos;
if (puntos <= 50) {
    console.log("Novato");
} else if (puntos > 50 && puntos <= 100) {
    console.log("Intermedio");
} else if (puntos > 100) {
    console.log("Experto");
}

//Ejercicio 13:

let operacion = "+";
let num3 = 10;
let num4 = 5;

switch (operacion) {
    case "+":
        console.log("Resultado: " + (num3 + num4));
        break;
    case "-":
        console.log("Resultado: " + (num3 - num4));
        break;
    case "*":
        console.log("Resultado: " + (num3 * num4));
        break;
    case "/":
        console.log("Resultado: " + (num3 / num4));
        break;
}

//Ejercicio 14:

let email;
if (email.includes("@") && email.includes(".")) {
    console.log("válido");
} else {
    console.log("inválido");
}


//Ejercicio 15:

switch (opcion) {
    case 1:
        console.log("Iniciar");
        break;
    case 2:
        console.log("Configurar");
        break;
    case 3:
        console.log("Salir");
        break;
}