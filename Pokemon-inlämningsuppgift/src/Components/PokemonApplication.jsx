import React, { useState, useEffect } from 'react';
import Pokemon from './Pokemon';

function PokemonApplication({ goHome }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
  
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((data) => setPokemonList(data.results))
      .catch((err) => console.error('Kunde ej få Pokemon lista', err));
  }, []);

  const fetchPokemonData = () => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then((res) => res.json())
        .then((data) => setPokemonData(data))
        .catch((err) => console.error('Kunde ej få Pokemon data', err));
    }
  };

  return (
    <div>
      {!pokemonData ? (
        <>
          <select value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
            <option value="">Välj en Pokemon</option>
            {pokemonList.map((pokemon) => (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            ))}
          </select>
          <button onClick={fetchPokemonData}>Hämta Pokemon</button>
        </>
      ) : (
        <>
          <Pokemon data={pokemonData} />
          <button onClick={() => setPokemonData(null)}></button>
        </>
      )}
      <button onClick={goHome}>Tillbaka</button>
    </div>
  );
}

export default PokemonApplication;
