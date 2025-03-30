import "./pokemonitem.css";
import { colours } from "../../data/colours";

function PokemonItem({ pokemon }) {
  return (
    <div
      className="pokemon-card"
      style={{
        backgroundColor: pokemon.color || "#f5f5f5",
      }}
    >
      <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
      <h1>{pokemon.name}</h1>

      <div className="types-container">
        {Array.isArray(pokemon.types) &&
          pokemon.types.map((item, index) => (
            <span
              key={index}
              className="type-badge"
              style={{
                backgroundColor: colours[item.toLowerCase()] || "#ccc",
              }}
            >
              {item}
            </span>
          ))}
      </div>

      <p className="description">{pokemon.description}</p>
    </div>
  );
}

export default PokemonItem;
