import CartContex from "./cart-context";
import React,{useState} from "react";
 
const CartProvider = (props) => {

  const [items,updateItems]=useState([])
  const addItemToCartHandler = (item) => {
     updateItems([...items,item]);
     console.log(cartContext)
  };

  const removeItemfromCartHandler = () => {};
  const cartContext = {
    items: items,
    totalAmount: 0,
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
