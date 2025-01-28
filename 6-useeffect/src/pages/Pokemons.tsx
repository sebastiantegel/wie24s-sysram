import { useEffect, useState } from "react";
import { ISmallPokemon } from "../models/IPokeResponse";
import { getPokemons } from "../services/pokemonService";
import { useNavigate } from "react-router";

export const Pokemons = () => {
  const [pokemons, setPokemons] = useState<ISmallPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const pokemons = await getPokemons(offset);
      setPokemons(pokemons);
    };

    if (pokemons.length > 0 && offset === 0) return;
    getData();
  }, [offset]);

  return (
    <>
      <div className="pokemons">
        {pokemons.map((p) => {
          return (
            <>
              <h3 key={p.name}>{p.name}</h3>
              <button
                onClick={() => {
                  navigate("/pokemon/" + p.name);
                }}
              >
                Läs mer
              </button>
            </>
          );
        })}
        <div>
          <button onClick={() => setOffset(offset + 20)}>Hämta nästa</button>
        </div>
      </div>
    </>
  );
};
