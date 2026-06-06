//ejercicio 1

async function obtenerPokemon(nombrePokemon) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
    );
    const data = await response.json();
    console.log("Datos de Pikachu:", data);

    const habilidades = data.abilities.slice(0, 3);
    console.log("Habilidades:");
    habilidades.forEach((h) => console.log(h.ability.name));
  } catch (error) {
    console.error("Error:", error);
  }
}
const form = document.getElementById("pokemon-form");
const input = document.getElementById("input-buscador");
const button = document.getElementById("buscar");
form.addEventListener("submit", (event) => {
  event.preventDefault(); //Previene que se recargue la página al enviar el formulario
  const nombrePokemon = input.value
    .trim() //Elimina espacios antes del texto
    .toLowerCase(); //convierte mayusculas a minusculas
  const pokemon = obtenerPokemon(nombrePokemon);
  renderizarPokemon(nombrePokemon);
});

const ul = document.getElementById("lista-pokemon");
const p = document.getElementById("mensaje");
async function renderizarPokemon() {
  p.textContent = "Cargando...";

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await response.json();
    setTimeout(() => {
      p.textContent = "";
      const ListaPokemon = data.results;
      ListaPokemon.forEach((pokemon) => {
        const li = document.createElement("li");
        li.textContent = pokemon.name;
        ul.appendChild(li);
      });
    }, 2000);
  } catch (error) {
    console.error("Error al cargar la lista:", error);
  }
}

renderizarPokemon();

//ejercicio 4

fetch("https://url-invalida-ejemplo.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la comunicación con el servidor");
    }
    return response.json();
  })
  .catch((error) => {
    document.getElementById("mensaje-error").innerText =
      "Ocurrió un error al cargar los datos";
    console.error("Detalle del error:", error);
  });

//ejercicio 5

async function obtenerHabilidadPokemon(nombrePokemon) {
  const contenedor = document.getElementById("resultado");
  try {
    const resPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
    );
    if (!resPokemon.ok) {
      throw new Error("No se encontró el Pokémon");
    }
    const datosPokemon = await resPokemon.json();

    const urlHabilidad = datosPokemon.abilities[(0, 3)].ability.url;
    const nombreHabilidad = datosPokemon.abilities[(0, 3)].ability.name;

    const resHabilidad = await fetch(urlHabilidad);
    if (!resHabilidad.ok) throw new Error("No se pudo obtener la habilidad");

    const datosHabilidad = await resHabilidad.json();
  } catch (error) {
    contenedor.textContent = error.message;
    console.error("Error:", error);
  }
}

//obtenerHabilidadPokemon("");
