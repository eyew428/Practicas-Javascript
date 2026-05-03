//ejercicio 3

const boton3 = document.getElementById('#btn') [2];
const input = document.getElementById('input');
const lista = document.getElementById('lista');

boton3.addEventListener('click', () => {
    const texto = input.value;
    if (texto.trim() !== '') {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = texto;
        lista.appendChild(nuevoItem);
        input.value = '';
    }
}
