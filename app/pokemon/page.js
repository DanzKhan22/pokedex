import { fetchPokemon } from "@/app/Actions/api";
import LoadPokemon from "@/components/LoadPokemon";
import Search from "@/Components/Search";

export default async function PokemonPage({ searchParams }) {
    const search = searchParams.search || "";
    const page = parseInt(searchParams.page || "1", 10);

    const initialPokemon = await fetchPokemon({ search, page });

    return (
        <div className="text-uppercase fw-bolder">
            <Search search={search}/>
            <ul>
            <LoadPokemon initialPokemon={initialPokemon} initialSearch={search} initialPage={page} />
            </ul>
        </div>
    );
}