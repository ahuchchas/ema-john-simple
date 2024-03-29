import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected item: {quantity}</p>
      <p>Total price: ${total}</p>
      <p>Total shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand total: ${grandTotal}</h5>
      <button onClick={clearCart}>Clear Cart</button>
      {children}
    </div>
  );
};

export default Cart;
