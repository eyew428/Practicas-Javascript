//Ejercicio 1

const boton1 = document.getElementById("btn");
const titulo = document.getElementById("titulo");

boton1.addEventListener("click", () => {
  titulo.textContent = "Texto cambiado";
});
