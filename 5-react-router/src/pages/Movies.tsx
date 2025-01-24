import { useEffect, useState } from "react";
import { Movie } from "../models/Movie";
import { OmdbResponse } from "../models/OmdbResponse";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://omdbapi.com/?apikey=416ed51a&s=star"
      );
      const data: OmdbResponse = await response.json();
      setMovies(data.Search);
    };

    getData();
  }, []);

  return (
    <>
      <div>
        {movies.map((m) => {
          return (
            <div
              key={m.imdbID}
              //   onClick={() => {
              //     navigate("/movie/" + m.imdbID);
              //   }}
            >
              <h4>{m.Title}</h4>
              <Link to={"/movie/" + m.imdbID}>Läs mer</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
