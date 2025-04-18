import React from "react";

const ConfirmationModal = ({ cartItems, totalOrder, clearAll }) => {
  const startNewOrder = () => {
    clearAll();
  };

  return (
    <div className="absolute top-[50%] left-[50%] z-10 h-fit w-80 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white p-8 md:w-xl">
      <img
        className="mb-4 w-10"
        src="../src/assets/images/icon-order-confirmed.svg"
      ></img>
      <h3 className="text-4xl font-bold text-rose-900">Order Confirmed</h3>
      <p className="mt-2 mb-8 font-normal text-rose-500">
        We hope you enjoy your food!
      </p>
      {cartItems.map((item) => (
        <div
          id="item-container"
          className="flex items-center justify-between rounded-lg border-b border-rose-100 bg-rose-50 p-4"
        >
          <div className="flex items-center gap-5">
            <img className="w-14" src={item.image} alt="" />
            <div id="info-container" className="flex flex-col gap-1.5">
              <p className="text-sm font-semibold text-rose-900">{item.name}</p>
              <div id="totals-info" className="flex gap-3">
                <span className="text-red mr-3 text-sm font-semibold">
                  {item.quantity}x
                </span>
                <p className="text-sm text-rose-500">
                  @ ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <p className="font-semibold text-rose-900">
            ${(item.quantity * item.price).toFixed(2)}
          </p>
        </div>
      ))}
      <div
        id="order-total"
        className="mb-2.5 flex items-center justify-between bg-rose-50 p-4"
      >
        <p className="text-sm text-rose-900">Order Total</p>
        <p className="text-2xl font-bold text-rose-900">
          ${totalOrder.toFixed(2)}
        </p>
      </div>
      <button
        onClick={startNewOrder}
        className="bg-red mt-5 w-full rounded-full py-3 text-white hover:cursor-pointer hover:brightness-90"
      >
        Start New Order
      </button>
    </div>
  );
};

export default ConfirmationModal;
