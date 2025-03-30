import { useState } from "react";
import PokemonItem from "../pokemonitem/pokemonitem";
import pokemonJSON from "../../data/pokemon.json";

import "./pokemonlist.css";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON); 
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (e) => {
    let search = pokemons.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilterPokemons(search);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Cari Pokémon..."
        className="search"
        onChange={handleSearch}
      />
      
      <div className="list-pokemon">
        {filterPokemons.length === 0 ? (
          <div>Data tidak ditemukan</div>
        ) : (
          filterPokemons.map((item) => (
            <PokemonItem key={item.id} pokemon={item} />
          ))
        )}
      </div>
    </>
  );
}

export default PokemonList;
