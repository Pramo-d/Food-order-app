import { useReducer } from "react";

import CartContex from "./cart-context";

// import React, { useState } from "react";

const defaultCartState = {
  items: [],
  totalAmount:0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,  defaultCartState);
  // const [items, updateItems] = useState([]);
  // const [amount, updateAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });

    // updateItems([...items, item]);
    // updateAmount(amount + item.price );
    // console.log(cartContext);
  };

  const removeItemfromCartHandler = () => {
    dispatchCartAction({type:'REMOVE'})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemfromCartHandler,
  };
  return (
    <CartContex.Provider value={cartContext}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
