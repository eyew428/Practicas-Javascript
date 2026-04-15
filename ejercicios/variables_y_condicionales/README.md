# Ejercicios variables y condicionales

> [!tip]
> Hacer los ejercicios en el archivo [script.js](./script.js) y mirar el resultado en la consola del navegador

## Ejercicio 1 - Saludo personalizado

Declara una variable `nombre`con tu nombre. Usa un `if` para saludar con `"Hola, [nombre]"` si el nombre no está vacío y `"Hola desconocido"` si lo está.

## Ejercicio 2 - Número par o impar

Declara una variable `numero` con un valor entero. Usa `if` para mostrar si es par o impar.

> [!tip]
> `numero%2===0` devuelve un valor `True` si es par y `False` si no lo es.

## Ejercicio 3 - Calificación escolar

Declara `calificacion` (0-100). Usa `if-else if` para mostrar: `"Aprobado"` (>=60), `"Reprobado"` (<60).

## Ejercicio 4 - Día de la semana

Declara `dia` (1-7). Usa `switch` par amostrar el nombre del día (ej: 1 = "lunes").

## Ejercicio 5 - Mayor de edad

Declara `edad`. Usa `if` para mostrar si es mayor de edad (>=18) o menor.

## Ejercicio 6 - Clasificación de temperatura

Declara `temperatura`. Usa `if-else if` para clasificar: `“Frío”` (<10), `“Templado”` (10-25), `“Caluroso”` (>25).

## Ejercicio 7 - Número positivo, negativo o cero

Declara `num`. Usa `if-else if` para clasificarlo.

## Ejercicio 8 - Descuento según monto

Declara `monto`. Si es ≥100, aplica 10% de descuento. Si es ≥200, 20%. Usa `if-else if`.

## Ejercicio 9 - Tipo de triángulo

Declara `lado1`, `lado2`, `lado3`. Usa `if` para determinar si es equilátero, isósceles o escaleno.

> [!tip]
>
> - Equilátero: 3 lados iguales
> - Isósceles: 2 lados iguales
> - Escaleno: 3 lados diferentes

## Ejercicio 10 - Validar contraseña

Declara `contraseña`. Si tiene al menos 8 caracteres, muestra `“Válida”`, sino `“Demasiado corta”`.

> [!tip]
> La propiedad `.lenght` devuelve el largo de cualquier string.

## Ejercicio 11 - Estación del año

Declara `mes` (1-12). Usa `switch` para mostrar la estación (ej. 12,1,2 = “Invierno”).

> [!tip]
>
> - Verano: diciembre (12), enero (1), febrero (2)
> - Otoño: marzo (3), abril (4), mayo (5)
> - Invierno: junio (6), julio (7), agosto (8)
> - Primavera: septiembre (9), octubre (10), noviembre (11)

## Ejercicio 12 - Nivel de usuario

Declara `puntos`. Usa `if-else if`: 0-50 = `“Novato”`, 51-100 = `“Intermedio”`, >100 = `“Experto”`.

## Ejercicio 13 - Operación matemática

Declara `operacion` (`“+”`, `“-”`, `“\*”`, `“/”`) y dos números. Usa `switch` para realizar la operación.

## Ejercicio 14 - Validar email básico

Declara `email`. Usa `if` para verificar si contiene `“@”` y `“.”`. Muestra `“Válido”` o `“Inválido”`.

> [!tip]
> La función `.includes("a")` devuelve un valor `True` si el string tiene una letra `a`.

## Ejercicio 15 - Menú de opciones

Declara `opcion` (1-3). Usa `switch` para mostrar: 1 = “Iniciar”, 2 = “Configurar”, 3 = “Salir”.
