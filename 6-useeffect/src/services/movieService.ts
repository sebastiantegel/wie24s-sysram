import { IMovieExt } from "../models/IMovieExt";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://omdbapi.com/?apikey=416ed51a&";

export const getMovies = async () => {
  const data = await get<IOmdbResponse>(`${BASE_URL}s=star`);
  return data.Search;
};

export const getMovieById = async (id: string) => {
  const data = await get<IMovieExt>(`${BASE_URL}i=${id}`);
  return data;
};
