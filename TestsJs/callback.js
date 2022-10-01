function cargarPokemon(pokemon, callback) {
  console.log(`Cargando ${pokemon}...`);
  setTimeout(() => {
    callback(`${pokemon} cargado`);

  }, 1000)
}


cargarPokemon('Pikachu', (respuesta) => {
  console.log(respuesta)
  
});


const response = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => response.data);
console.log(response.abilities.ability.name);

console.log(`Fin del programa`);