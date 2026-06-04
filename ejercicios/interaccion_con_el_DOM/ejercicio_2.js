//Ejercicio 2

const boton2 = document.querySelector('#ejercicio2 #btn');
const parrafo = document.querySelector('#ejercicio2 #texto');

boton2.addEventListener('click', () => {
    parrafo.classList.toggle('activo');

});