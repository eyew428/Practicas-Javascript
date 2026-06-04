//ejercicio 8

const lista8 = document.getElementById("lista7");
lista8.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completada");
    console.log("Hiciste click en", event.target.innerText);
  }
});
