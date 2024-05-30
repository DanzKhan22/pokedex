"use server"

async function getPokemon({ query, page = 1, limit = 32 } = {}) {
    let apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=${(page - 1) * limit}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (query) {
            const filteredPokemon = data.results.filter(
                (pokemon) => pokemon.name.toLowerCase().startsWith(query.toLowerCase())
            );
            return filteredPokemon.slice(0, limit);
        } else {
            return data.results.slice(0, limit);
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

let Vpage = 1;

export async function fetchPokemon({ page = Vpage, search } = {}) {
    try {
        const pokemonData = await getPokemon({ query: search, page });
        return pokemonData;
    } catch (error) {
        console.log(error);
        return null;
    }
}