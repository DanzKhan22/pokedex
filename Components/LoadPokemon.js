"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchPokemon } from "@/app/Actions/api";
import PokemonCard from "./PokemonCard";

export const LoadPokemon = ({ initialPokemon, initialSearch, initialPage }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [pokemon, setPokemon] = useState(initialPokemon);
    const [page, setPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const loadPokemonPage = async (pageNumber, searchQuery) => {
        setLoading(true);
        await delay(100);
        const newPokemon = await fetchPokemon({ search: searchQuery, page: pageNumber });

        setPokemon(newPokemon || []);
        setLoading(false);
    };

    const handleNextPage = () => {
        const nextPage = page + 1;
        router.push(`/pokemon?search=${initialSearch}&page=${nextPage}`);
        setPage(nextPage);
    };

    const handlePreviousPage = () => {
        if (page === 1) return;
        const previousPage = page - 1;
        router.push(`/pokemon?search=${initialSearch}&page=${previousPage}`);
        setPage(previousPage);
    };

    useEffect(() => {
        const queryParams = Object.fromEntries(searchParams.entries());
        const search = queryParams.search || "";
        const page = parseInt(queryParams.page || "1", 10);
        
        loadPokemonPage(page, search);
    }, [searchParams]);

    return (
        <div className="container">
            <div className="row">
                {pokemon?.map((poke) => (
                    <PokemonCard key={poke.url} pokemon={poke} />
                ))}
            </div>
            <div className="pagination-controls d-flex justify-content-center m-3">
                <button className="btn btn-outline-light btn-lg" onClick={handlePreviousPage} disabled={page === 1 || loading}>
                &laquo; Previous
                </button>
                <button className="btn btn-outline-light btn-lg" onClick={handleNextPage} disabled={loading}>
                    Next &raquo;
                </button>
            </div>
            {loading && <div>Loading...</div>}
        </div>
    );
};

export default LoadPokemon;