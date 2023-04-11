import React from "react";
import "./Cart.scss";

function Cart({ cartItems, setCartItems }) {
  return (
    <div className="app__cart">
      <div className="app__cart-title">
        <span>Cart</span>
      </div>
      <div className="app__cart-info">
        {cartItems === 0 ? (
          <span>Your cart is empty.</span>
        ) : (
          <div>
            <div>
              <div className="app__cart-thumbnail">
                <img src="images/image-product-1-thumbnail.jpg" alt="product" />
              </div>

              <div className="app__cart-price">
                <span>Fall Limited Edition Sneakers</span>
                <span>
                  $125.00 x {cartItems}{" "}
                  <strong>
                    {(cartItems * 125).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </strong>{" "}
                </span>
              </div>
              <div className="app__cart-delete">
                <img
                  src="images/icon-delete.svg"
                  alt="delete"
                  onClick={() => setCartItems(0)}
                />
              </div>
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
