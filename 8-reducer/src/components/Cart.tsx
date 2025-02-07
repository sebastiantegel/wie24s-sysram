import { useReducer } from "react";
import { Product } from "../models/Product";
import { CartReducer, ICartActionType } from "../reducers/CartReducer";
import { CartItem } from "../models/CartItem";

export const Cart = () => {
  const [cart, dispatch] = useReducer(CartReducer, []);

  const products: Product[] = [
    new Product(1, "Golfboll", 60),
    new Product(2, "Fotboll", 500),
    new Product(3, "Basketboll", 600),
  ];

  const handleAdd = (p: Product) => {
    dispatch({
      type: ICartActionType.ADDED,
      payload: JSON.stringify(p),
    });
  };

  const handleDecrease = (ci: CartItem) => {
    dispatch({
      type: ICartActionType.DECREASED,
      payload: JSON.stringify(ci),
    });
  };

  const handleIncrease = (ci: CartItem) => {
    dispatch({
      type: ICartActionType.INCREASED,
      payload: JSON.stringify(ci),
    });
  };

  const handleRemove = (ci: CartItem) => {
    dispatch({
      type: ICartActionType.REMOVED,
      payload: JSON.stringify(ci),
    });
  };

  return (
    <>
      <h3>Varukorg</h3>
      <ul>
        {cart.map((ci) => {
          return (
            <li key={ci.product.name}>
              <button onClick={() => handleDecrease(ci)}>-</button>
              <span>
                {ci.product.name} - {ci.amount}
              </span>
              <button onClick={() => handleIncrease(ci)}>+</button>
              <button onClick={() => handleRemove(ci)}>Ta bort</button>
            </li>
          );
        })}
      </ul>
      <h3>Produkter</h3>
      <ul>
        {products.map((p) => {
          return (
            <li key={p.id}>
              <span>
                {p.name} - {p.price}
              </span>
              <button onClick={() => handleAdd(p)}>Lägg i varukorg</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
