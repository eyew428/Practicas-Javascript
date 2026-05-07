//ejercicio 1

async function obtenerPokemon(nombrePokemon) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        const data = await response.json();
        console.log('Datos de Pikachu:', data);
    }

     const habilidades = datos.abilities.slice(0, 3); 
    console.log("Habilidades:");
    habilidades.forEach(h => console.log(h.ability.name));

  } catch (error) {
    console.error("Error:", error);

  }

obtenerPokemon('pikachu');


//ejercicio 2

async function renderizarPokemon(nombrePokemon) {
    try {
        const response = await fetch(`https://pokeapi.co`);
        const data = await response.json();
        const Lista Pokemon = datos.results;
        listaPokemon.forEach(pokemon => {
            const li = document.createElement('li');
            li.innerHTML = `<a href= "${pokemon.url}">${pokemon.name}</a>`;
            contenedor.appendChild(li);
        });

        catch (error) {
            console.error("Error al cargar la lista:", error);
        }
    }

    renderizarPokemones();

}


//ejercicio 3
`setTimeOut(() => {const mensajePantalla = document.getElementById('mensaje');
const contenerdor = document.getElementById('lista-pokemon');

async function gestionPokemonCompleta(nombrePokemon) {
    try {
   mensajePantalla.textContent = "Cargando...";

contenedor.innerHTML = "";}}, 2000)`

//ejercicio 4

fetch('https://url-invalida-ejemplo.com')
  .then(response => {
    if (!response.ok) {
      throw new Error("Error en la comunicación con el servidor");
    }
    return response.json();
  })
  .catch(error => {
     document.getElementById('mensaje-error').innerText = "Ocurrió un error al cargar los datos";
    console.error("Detalle del error:", error);
  });

    //ejercicio 5

async function obtenerHabilidadPokemon(nombrePokemon) {
    const contenedor = document.getElementById('resultado');
    try {
        const resPokemon = await fetch(`https://pokeapi.co{nombrePokemon}`);
        if (!resPokemon.ok) {
            throw new Error("No se encontró el Pokémon");
            const datosPokemon = await resPokemon.json();

            const urlHabilidad = datosPokemon.abilities[0].ability.url;
            const nombreHabilidad = datosPokemon.abilities[0].ability.name;
        
              const resHabilidad = await fetch(urlHabilidad);
            if (!resHabilidad.ok) throw new Error("No se pudo obtener la habilidad");
        
        const datosHabilidad = await resHabilidad.json();

          const resHabilidad = await fetch(urlHabilidad);
        if (!resHabilidad.ok) throw new Error("No se pudo obtener la habilidad");
        
        const datosHabilidad = await resHabilidad.json();

        }

    }

}

obtenerHabilidadPokemon('pikachu');