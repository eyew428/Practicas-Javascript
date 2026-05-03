//ejercicio 8

const lista = document.getElementById("ul");
lista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completado");
        console.log("Hiciste click en", event.target.innerText);
    }
});
