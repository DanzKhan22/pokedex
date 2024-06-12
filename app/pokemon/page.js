import { fetchPokemon } from "@/app/Actions/api";
import LoadPokemon from "@/components/LoadPokemon";
import Search from "@/Components/Search";

export default async function PokemonPage({ searchParams }) {
    const search = searchParams.search || "";
    const page = parseInt(searchParams.page || "1", 10);

    const initialPokemon = await fetchPokemon({ search, page });

    return (
        <div className="text-uppercase fw-bolder">
            <div className="col p-2 px-5 d-flex justify-content-center">
          <div>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Kanto
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Johto
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Hoenn
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Sinnoh
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Unova
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Kalos
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Alola
            </button>
            <button type="button" className="btn btn-outline-light btn-lg fs-6 row-md-3 m-1">
              Galar
            </button>
          </div>
        </div>
            <Search search={search}/>
            <ul>
            <LoadPokemon initialPokemon={initialPokemon} initialSearch={search} initialPage={page} />
            </ul>
        </div>
    );
}