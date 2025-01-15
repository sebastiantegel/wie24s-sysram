import { useState } from "react";
import { Movie } from "../models/Movie";

export const ObjectState = () => {
  const [movie, setMovie] = useState<Movie>(
    new Movie("Lord Of The Rings", "....", 2000)
  );
  //   const movie = new Movie("Lord Of The Rings", "....", 2000);

  const handleClick = () => {
    setMovie({ ...movie, Title: "The Matrix" });
  };

  return (
    <div className="movie" onClick={handleClick}>
      <h3>{movie.Title}</h3>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Year}</p>
    </div>
  );
};
