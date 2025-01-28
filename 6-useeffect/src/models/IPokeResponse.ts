export interface IPokeResponse {
  results: ISmallPokemon[];
}

export interface ISmallPokemon {
  name: string;
  url: string;
}
