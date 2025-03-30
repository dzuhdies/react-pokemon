import PokemonList from "./component/pokemonlist/pokemonlist";
import PokemonItem from "./component/pokemonitem/pokemonitem";
import pokemonJSON from "./data/pokemon.json";

function App() {
  return (
    <>
    <div className="app-container">
      <h1>Daftar Pokémon</h1>
      <PokemonList />
    </div>
    </>
  );
}

export default App;
