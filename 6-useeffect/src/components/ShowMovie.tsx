import { Link } from "react-router";
import { IMovie } from "../models/IMovie";

interface IShowMovie {
  movie: IMovie;
}

export const ShowMovie = (props: IShowMovie) => {
  return (
    <div>
      <h3>{props.movie.Title}</h3>
      <img src={props.movie.Poster} alt={props.movie.Title} />
      <div>
        <Link to={"/movie/" + props.movie.imdbID}>Läs mer...</Link>
      </div>
    </div>
  );
};
