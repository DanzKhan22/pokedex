import React, { useEffect, useState } from 'react';
import { fetchPokemon } from 'app/api.js';

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkAndLoadData = async () => {
            try {
                const response = await fetch('app/poki.json');
                if (response.ok) {
                    const localData = await response.json();
                    setPokemon(localData);
                } else {
                    // If the JSON file does not exist, fetch from API
                    const apiData = await fetchPokemon({ page: 1 });
                    if (apiData) {
                        setPokemon(apiData);
                        // Save the API data to a local JSON file
                        await saveToLocalFile(apiData);
                    }
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        checkAndLoadData();
    }, []);

    const saveToLocalFile = async (data) => {
        try {
            const response = await fetch('app/poki.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Failed to save local file');
            }
        } catch (error) {
            console.error('Error saving to local file:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemon.map((p) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonList;