import { IMovie } from "../models/IMovie";
import { ShowMovie } from "./ShowMovie";

interface IShowMoviesProps {
  movies: IMovie[];
}

export const ShowMovies = (props: IShowMoviesProps) => {
  return (
    <div className="movies">
      {props.movies.map((m) => {
        return <ShowMovie movie={m} key={m.imdbID}></ShowMovie>;
      })}
    </div>
  );
};
