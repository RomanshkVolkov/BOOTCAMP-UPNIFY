async function cargarPokemon(pokemon) {
    console.log(`Cargando ${pokemon}...`);

    return new Promise((resolve, reject) => {
             setTimeout(() => {
                if (pokemon !== 'Pikachu') {
                    resolve(`${pokemon} cargado`);
                } else {
                    reject(`${pokemon} no se pudo cargar`);
                }
            }, 1000)
        });
}


async function main1() {
    try {
        let respueta = await cargarPokemon('Equisde');
        console.log(respueta);

        respueta = await cargarPokemon('Guzguz');
        console.log(respueta);

        respueta = await cargarPokemon('Charmander');
        console.log(respueta);

        respueta = await cargarPokemon('Bulbasaur');
        console.log(respueta);

        respueta = await cargarPokemon('Squirtle');
        console.log(respueta);

        respueta = await cargarPokemon('Pikabu');
        console.log(respueta);

    } catch (error) {
        console.log(error);
    } finally {
        console.log(`Fin del programa`);
    }
    
}


async function main () {
    try {
        let respueta = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => response.json());
        console.log(respueta.name);

    } catch (error) {
        console.log(error);
    } finally {
        console.log(`Fin del programa`);
    }
    
}


main();