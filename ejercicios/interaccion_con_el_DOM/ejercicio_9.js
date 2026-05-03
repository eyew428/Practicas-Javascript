//ejercicio 9

let tareas = [];
const listaUl = document.getElementById("lista-tareas");
const inputTarea = document.getElementById("input-tarea");

function renderizar() {
    listaUl.innerHTML = "";
    tareas.forEach((tarea) => {
        const nuevoLi = document.createElement("li");
        nuevoLi.textContent = tarea;
        listaUl.appendChild(nuevoLi);
    });
}

function agregarTarea() {
    const valor = inputTarea.value();
    if (valor) {
        tareas.push(valor);
        renderizar();
        inputTarea.value = "";
        renderizar();
    }
}