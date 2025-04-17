import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, removeCartItem, totalOrder }) => {
  const [emptyCart, setEmptyCart] = useState(true);

  useEffect(() => {
    if (cartItems[0] !== undefined) {
      setEmptyCart(false);
    } else {
      setEmptyCart(true);
    }
  }, [cartItems[0]]);

  return (
    <>
      {emptyCart && (
        <div>
          <img
            className="mx-auto w-32"
            src="../src/assets/images/illustration-empty-cart.svg"
            alt=""
          />
          <p className="my-4 text-center text-sm font-semibold text-rose-500">
            Your added items will appear here
          </p>
        </div>
      )}
      {!emptyCart && (
        <>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              removeCartItem={removeCartItem}
            />
          ))}
          <div
            id="order-total"
            className="mt-5 mb-2.5 flex items-center justify-between"
          >
            <p className="text-sm text-rose-900">Order Total</p>
            <p className="text-2xl font-bold text-rose-900">
              ${totalOrder.toFixed(2)}
            </p>
          </div>
          <div
            id="delivery-info"
            className="my-3.5 flex items-center justify-center gap-2.5 rounded-lg bg-rose-50 p-3.5"
          >
            <div>
              <img src="../src/assets/images/icon-carbon-neutral.svg" alt="" />
            </div>
            <p className="text-sm text-rose-900">
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button className="bg-red mt-3 rounded-full border py-3 text-white hover:cursor-pointer hover:brightness-90">
            Confirm Order
          </button>
        </>
      )}
    </>
  );
};

export default Cart;
