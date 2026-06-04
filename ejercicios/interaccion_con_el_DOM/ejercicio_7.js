//ejercicio 7

const input7 = document.getElementById("input7");
const btn7 = document.getElementById("btn7");
const lista7 = document.getElementById("lista7");

btn7.addEventListener("click", () => {
  const textoTarea = input7.value;
  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = textoTarea;
  const boton = document.createElement("button");
  boton.textContent = "Eliminar";
  nuevaTarea.appendChild(boton);

  nuevaTarea.addEventListener("click", () => {
    nuevaTarea.classList.toggle("completada");
  });

  boton.addEventListener("click", () => {
    nuevaTarea.remove();
  });

  lista7.appendChild(nuevaTarea);
  input7.value = "";
});
