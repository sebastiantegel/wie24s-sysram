import { Movie } from "../models/Movie";

type ShowMovieProps = {
  movie: Movie;
  addToCart: (movie: Movie) => void;
};

export const ShowMovie = (props: ShowMovieProps) => {
  return (
    <div className="movie">
      <h3>{props.movie.Title}</h3>
      <div className="image-container">
        <img src={props.movie.Poster} alt={props.movie.Title} />
      </div>
      <button
        onClick={() => {
          props.addToCart(props.movie);
        }}
      >
        Köp
      </button>
    </div>
  );
};
