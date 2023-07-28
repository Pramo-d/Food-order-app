import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {

  const cartItems =(
    <ul className={classes['cart-items']}>
      {[{ id: "c1", name: "Mix Veg", amount: 2, price: 13.33}].map((item) => (
          <li>{item.name}</li>
        
    ))}
    </ul>
  );
  return (
    <div>
    < Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>33.33</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
      </Modal>
      </div>
  );
};

export default Cart;
