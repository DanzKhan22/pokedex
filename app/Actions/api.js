"use server";

export async function getPokemon({ query, page = 1, limit = 32 } = {}) {
    const offset = (page - 1) * limit;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (query) {
            const allPokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
            const allPokemonData = await allPokemonResponse.json();

            const filteredPokemon = allPokemonData.results.filter(
                (pokemon) => pokemon.name.toLowerCase().startsWith(query.toLowerCase())
            );
            return filteredPokemon.slice(offset, offset + limit);
        } else {
            return data.results;
        }
    } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
        return null;
    }
}

export async function fetchPokemon({ page = 1, search } = {}) {
    try {
        const pokemonData = await getPokemon({ query: search, page });
        return pokemonData;
    } catch (error) {
        console.error("Failed to fetch Pokémon data:", error);
        return null;
    }
}