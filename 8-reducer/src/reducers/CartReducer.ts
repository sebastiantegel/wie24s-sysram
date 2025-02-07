import { CartItem } from "../models/CartItem";
import { Product } from "../models/Product";

interface ICartAction {
  type: ICartActionType;
  payload: string;
}

export enum ICartActionType {
  ADDED,
  REMOVED,
  INCREASED,
  DECREASED,
}

export const CartReducer = (
  cart: CartItem[],
  action: ICartAction
): CartItem[] => {
  //   if (action.type === ICartActionType.ADDED) {
  //     // Gör om texten i action.payload till ett JSON-objekt
  //     const p: Product = JSON.parse(action.payload);

  //     const foundInCart = cart.find((ci) => ci.product.name === p.name);

  //     if (!foundInCart) {
  //       return [...cart, new CartItem(p, 1)];
  //     }

  //     return cart.map((ci) => {
  //       if (ci.product.name === p.name) {
  //         return { ...ci, amount: ci.amount + 1 };
  //       }
  //       return ci;
  //     });
  //   }

  //   if (action.type === ICartActionType.DECREASED) {
  //     const ci: CartItem = JSON.parse(action.payload);

  //     if (ci.amount >= 2) {
  //       return cart.map((c) => {
  //         if (c.product.id === ci.product.id) {
  //           return { ...c, amount: c.amount - 1 };
  //         }
  //         return c;
  //       });
  //     }

  //     return cart.filter((c) => c.product.id !== ci.product.id);
  //   }

  //   if (action.type === ICartActionType.INCREASED) {
  //     const ci: CartItem = JSON.parse(action.payload);

  //     return cart.map((c) => {
  //       if (c.product.id === ci.product.id) {
  //         return { ...c, amount: c.amount + 1 };
  //       }
  //       return c;
  //     });
  //   }

  //   if (action.type === ICartActionType.REMOVED) {
  //     const ci: CartItem = JSON.parse(action.payload);

  //     return cart.filter((c) => c.product.id !== ci.product.id);
  //   }

  //   return cart;

  switch (action.type) {
    case ICartActionType.ADDED: {
      // Gör om texten i action.payload till ett JSON-objekt
      const p: Product = JSON.parse(action.payload);

      const foundInCart = cart.find((ci) => ci.product.name === p.name);

      if (!foundInCart) {
        return [...cart, new CartItem(p, 1)];
      }

      return cart.map((ci) => {
        if (ci.product.name === p.name) {
          return { ...ci, amount: ci.amount + 1 };
        }
        return ci;
      });
    }

    case ICartActionType.DECREASED: {
      const ci: CartItem = JSON.parse(action.payload);

      if (ci.amount >= 2) {
        return cart.map((c) => {
          if (c.product.id === ci.product.id) {
            return { ...c, amount: c.amount - 1 };
          }
          return c;
        });
      }

      return cart.filter((c) => c.product.id !== ci.product.id);
    }

    case ICartActionType.INCREASED: {
      const ci: CartItem = JSON.parse(action.payload);

      return cart.map((c) => {
        if (c.product.id === ci.product.id) {
          return { ...c, amount: c.amount + 1 };
        }
        return c;
      });
    }

    case ICartActionType.REMOVED: {
      const ci: CartItem = JSON.parse(action.payload);

      return cart.filter((c) => c.product.id !== ci.product.id);
    }

    default:
      return cart;
  }
};
