import { IPokeResponse } from "../models/IPokeResponse";
import { IPokemon } from "../models/IPokemon";
import { get } from "./serviceBase";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemons = async (offset: number) => {
  const data = await get<IPokeResponse>(BASE_URL + "?offset=" + offset);
  return data.results;
};

export const getPokemonById = async (name: string) => {
  const data = await get<IPokemon>(BASE_URL + name);
  return data;
};
