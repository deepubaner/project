import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const existing = state.find((i) => i._id === action.item._id);
      if (existing) {
        return state.map((i) =>
          i._id === action.item._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.item, qty: 1 }];
    }
    case "INC":
      return state.map((i) =>
        i._id === action.id ? { ...i, qty: i.qty + 1 } : i
      );
    case "DEC":
      return state
        .map((i) =>
          i._id === action.id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, []);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, dispatch, total }}>
      {children}
    </CartContext.Provider>
  );
};
