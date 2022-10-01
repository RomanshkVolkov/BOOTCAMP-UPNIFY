function cargarPokemon(pokemon) {
    console.log(`Cargando ${pokemon}...`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pokemon !== 'Pikachu') {
                resolve(`${pokemon} cargado`);
            } else {
                reject(`${pokemon} no se pudo cargar`);
            }
        }, 1000)
    })
}


cargarPokemon('Guzguz')
.then((respuesta) => {
    console.log(respuesta)
    return cargarPokemon('Charmander')
}).then((respuesta) => {
    console.log(respuesta)
    return cargarPokemon('Bulbasaur')
})
.then((respuesta)=> {
    console.log(respuesta)
    return cargarPokemon('Squirtle')
})
.then((respuesta) => {
    console.log(respuesta)
    return cargarPokemon('Pikachu')
})
.catch((error) => {
    console.log(error)
    return cargarPokemon('pikabu')
})
.finally(() => {
    console.log(`Fin del programa`);
});


console.log(`Fin del programa`);