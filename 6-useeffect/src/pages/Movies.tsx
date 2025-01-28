import { useEffect, useState } from "react";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { IMovie } from "../models/IMovie";
import { ShowMovies } from "../components/ShowMovies";
import { getMovies } from "../services/movieService";

export const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getMovies();
      setMovies(data);
    };

    if (movies.length > 0) return;
    getData();
  });

  return (
    <>
      <ShowMovies movies={movies}></ShowMovies>
    </>
  );
};
