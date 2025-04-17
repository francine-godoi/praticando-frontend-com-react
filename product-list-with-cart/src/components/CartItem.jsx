import React from "react";

const CartItem = ({ name, quantity, price, removeCartItem }) => {
  const removeItem = () => {
    removeCartItem(name, quantity);
  };

  return (
    <div
      id="item-container"
      className="flex items-center justify-between border-b border-rose-100 py-4"
    >
      <div id="info-container" className="flex flex-col gap-1.5">
        <p className="font-semibold text-rose-900">{name}</p>
        <div id="totals-info" className="flex gap-3">
          <span className="text-red mr-3 font-semibold">{quantity}x</span>
          <p className="text-rose-500">@ ${price.toFixed(2)}</p>
          <p className="font-semibold text-rose-500">
            ${(quantity * price).toFixed(2)}
          </p>
        </div>
      </div>
      <div
        id="remove-icon"
        onClick={removeItem}
        className="rounded-full border border-rose-300 p-1 text-rose-300 hover:cursor-pointer hover:border-rose-900 hover:text-rose-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="currentColor"
          viewBox="0 0 10 10"
        >
          <path
            fill="currentColor"
            d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CartItem;
