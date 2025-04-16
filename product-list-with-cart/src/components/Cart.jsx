import React from "react";

const Cart = () => {
  return (
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
  );
};

export default Cart;
