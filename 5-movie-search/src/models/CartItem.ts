import { Movie } from "./Movie";

export class CartItem {
  constructor(public movie: Movie, public amount: number) {}
}
