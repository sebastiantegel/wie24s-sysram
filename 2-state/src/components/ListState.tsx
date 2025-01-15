import { useState } from "react";
import { Movie } from "../models/Movie";

export const ListState = () => {
  const [movies, setMovies] = useState<Movie[]>([
    new Movie("Lord Of The Rings", "....", 2000),
    new Movie("The Matrix", "....", 1998),
    new Movie("Wicked", "....", 2024),
  ]);

  const addMovie = () => {
    setMovies([...movies, new Movie("Home alone", ",,,,", 1992)]);
  };

  const removeMovie = (movie: Movie) => {
    setMovies(movies.filter((m) => movie.Title !== m.Title));
  };

  const changeMovie = (movie: Movie) => {
    setMovies(
      movies.map((m) => {
        if (movie.Title === m.Title) {
          return { ...m, Year: m.Year + 1 };
        } else {
          return m;
        }
      })
    );
  };

  return (
    <>
      <div>
        <button onClick={addMovie}>Lägg till</button>
      </div>
      <div>
        {movies.map((m) => {
          return (
            <div key={m.Title}>
              <h3>{m.Title}</h3>
              <img src={m.Poster} alt={m.Title} />
              <p>{m.Year}</p>
              <div>
                <button
                  onClick={() => {
                    removeMovie(m);
                  }}
                >
                  Ta bort
                </button>
                <button
                  onClick={() => {
                    changeMovie(m);
                  }}
                >
                  Ändra
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
