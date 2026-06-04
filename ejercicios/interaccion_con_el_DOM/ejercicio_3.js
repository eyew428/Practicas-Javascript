//ejercicio 3

const boton3 = document.querySelector("#ejercicio3 #btn");
const input = document.querySelector("#ejercicio3 #input");
const lista = document.querySelector("#ejercicio3 #lista");

boton3.addEventListener("click", () => {
  const texto = input.value;
  if (texto.trim() !== "") {
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = texto;
    lista.appendChild(nuevoItem);
    nuevoItem.addEventListener("click", () => {
      nuevoItem.remove();
    });
    input.value = "";
  }
});
