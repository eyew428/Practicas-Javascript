//ejercicio 6

const input = document.getElementById("input");
const preview = document.getElementById("preview");

input.addEventListener("input", function() {
    preview.innerText = event.target.value;
});