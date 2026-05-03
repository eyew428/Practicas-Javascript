//ejercicio 7

const input = document.getElementById("input");
const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

btn.addEventListener("click", () => {
    const textoTarea = input.value;
    if textoTarea = input.value {

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = textoTarea;

    nuevaTarea.addEventListener("click", () => {
        nuevaTarea.classList.toggle("completada");
    });

    nuevaTarea.addEventListener("textmenu", () => {
        else.preventDefault();
        nuevaTarea.remove();
    });

    lista.appendChild(nuevaTarea);
    input.value = "";   
});
