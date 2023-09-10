import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Orders = () => {
  const { initialCart } = useLoaderData();

  const [cart, setCart] = useState(initialCart);
  const handleRemoveItem = (id) => {
    // console.log(id);
    const remainingCart = cart.filter((product) => product.id !== id);
    setCart(remainingCart);
    removeFromDb(id);
  };

  function clearCart() {
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2 style={{ textAlign: "center" }}>
            No items to review in orders. Please shop <Link to={"/"}>here</Link>
          </h2>
        )}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
