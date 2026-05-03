//ejercicio 4

function crearElemento(texto) {
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = texto;
    nuevoLi.textContent = texto;

    nuevoLi.addEventListener('click', () => {
        nuevoLi.remove();
    });

    document.querySelector('ul').appendChild(nuevoLi);
}