import { Link } from "react-router";
import { IMovieExt } from "../models/IMovieExt";

interface IShowExtendedMovieProps {
  movie: IMovieExt;
}

export const ShowExtendedMovie = (props: IShowExtendedMovieProps) => {
  return (
    <div>
      <Link to={"/movies"}>Tillbaka</Link>
      <h3>{props.movie.Title}</h3>
      <img src={props.movie.Poster} alt={props.movie.Title} />
      <p>{props.movie.Plot}</p>
      <p>{props.movie.Released}</p>
      <ul>
        {props.movie.Ratings.map((r) => {
          return (
            <li key={r.Source}>
              {r.Source}: {r.Value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
