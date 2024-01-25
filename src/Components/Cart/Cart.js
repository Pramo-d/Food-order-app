import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);

  const totalAmount = `$${cartCxt.totalAmount.toFixed(2)}`;
  const hasItems = cartCxt.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCxt.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCxt.addItem(item);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)} //this function when received only it executed
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose} className={classes["cart-items"]}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span> {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
