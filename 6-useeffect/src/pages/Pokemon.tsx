import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPokemonById } from "../services/pokemonService";
import { IPokemon } from "../models/IPokemon";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const { name } = useParams();

  useEffect(() => {
    const getData = async () => {
      if (name) {
        const pokemon = await getPokemonById(name);
        setPokemon(pokemon);
      }
    };

    if (pokemon) return;
    getData();
  });

  return (
    <>
      {pokemon && (
        <div className="pokemons">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </>
  );
};
