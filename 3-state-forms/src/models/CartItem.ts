import { Movie } from "./Movie";

export class CartItem {
  constructor(public product: Movie, public amount: number) {}
}
