//ejercicio 5

const contador = document.getElementById("contador");
const btnSumar = document.getElementById("sumar");
const btnRestar = document.getElementById("restar");

btnRestar.addEventListener("click", () => {
    let valorActual = parseInt(contador.innerText);
    contador.innerText = valorActual + 1;
});

btnRestar.addEventListener("click", () => {
    let valorActual = parseInt(contador.innerText);
    contador.innerText = valorActual - 1;
});
