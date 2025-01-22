import { CartItem } from "../models/CartItem";

type CartProps = {
  cartItems: CartItem[];
};

export const Cart = (props: CartProps) => {
  return (
    <ul>
      {props.cartItems.map((ci) => {
        return (
          <li key={ci.movie.imdbID}>
            {ci.movie.Title} - {ci.amount}
          </li>
        );
      })}
    </ul>
  );
};
