import { IMovie } from "./IMovie";

export interface IMovieExt extends IMovie {
  Plot: string;
  Released: string;
  Ratings: IRating[];
}

interface IRating {
  Source: string;
  Value: string;
}
