//ejercicio 6

const input6 = document.getElementById("input");
const preview = document.getElementById("preview");

input6.addEventListener("input", (event) => {
  preview.textContent = event.target.value;
});
