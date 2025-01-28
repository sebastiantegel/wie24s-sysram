import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieById } from "../services/movieService";
import { IMovieExt } from "../models/IMovieExt";
import { ShowExtendedMovie } from "../components/ShowExtendedMovie";

export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovieExt>();

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const data = await getMovieById(id);
        setMovie(data);
      }
    };

    if (movie) return;
    getData();
  });

  return <>{movie && <ShowExtendedMovie movie={movie} />}</>;
};
