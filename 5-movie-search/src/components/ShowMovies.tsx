import { Movie } from "../models/Movie";
import { ShowMovie } from "./ShowMovie";

type ShowMoviesProps = {
  movies: Movie[];
  addToCart: (movie: Movie) => void;
};

export const ShowMovies = (props: ShowMoviesProps) => {
  return (
    <section className="movies">
      {props.movies.map((movie) => (
        <ShowMovie
          key={movie.imdbID}
          movie={movie}
          addToCart={props.addToCart}
        />
      ))}
    </section>
  );
};
