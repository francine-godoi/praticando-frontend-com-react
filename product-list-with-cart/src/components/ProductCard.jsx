import React, { useEffect, useState } from "react";

const ProductCard = ({
  image,
  name,
  category,
  price,
  updateCart,
  removedItem,
  setRemovedItem,
}) => {
  const [openSelector, toggleSelector] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function openQuantitySelector() {
    toggleSelector((o) => ({ openSelector: true }));
    increaseQuantity();
  }

  function increaseQuantity() {
    setQuantity((q) => q + 1);
  }

  function decreaseQuantity() {
    setQuantity((q) => Math.max(q - 1, 1));
  }

  const addToCart = () => {
    const item = {
      image: image.thumbnail,
      name: name,
      quantity: quantity,
      price: price,
    };
    updateCart(item);
  };

  useEffect(() => {
    if (quantity !== 0) addToCart();
  }, [quantity]);

  useEffect(() => {
    if (removedItem === name || removedItem === "clearAll") {
      toggleSelector(false);
      setQuantity(0);
      setRemovedItem(null);
    }
  }, [removedItem]);

  return (
    <div id="card-container" className="flex flex-col gap-10">
      <div
        id="product-image"
        className="relative flex w-fit flex-col items-center"
      >
        <picture>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 640px)" />
          <img
            className={
              openSelector
                ? "border-red rounded-lg border-2"
                : "rounded-lg border border-transparent"
            }
            src={image.mobile}
            alt={`${name} image`}
          />
        </picture>

        <button
          onClick={openQuantitySelector}
          className="hover:text-red hover:border-red absolute -bottom-1/17 flex w-44 gap-2 rounded-full border border-rose-500 bg-white p-2 px-7 font-semibold text-rose-900 hover:cursor-pointer md:-bottom-1/11"
        >
          <img
            src="../src/assets/images/icon-add-to-cart.svg"
            alt="add to cart icon"
          />
          Add to Cart
        </button>
        {openSelector && (
          <div className="bg-red border-red absolute -bottom-1/17 flex w-44 justify-between rounded-full border p-2 px-2.5 font-semibold text-white md:-bottom-1/11">
            <div
              onClick={decreaseQuantity}
              className="hover:text-red flex items-center justify-center rounded-full border border-white px-1.5 hover:cursor-pointer hover:bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="2"
                fill="currentColor"
                viewBox="0 0 10 2"
              >
                <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
            </div>
            <p>{quantity}</p>
            <div
              onClick={increaseQuantity}
              className="hover:text-red flex items-center justify-center rounded-full border border-white px-1.5 hover:cursor-pointer hover:bg-white"
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
                  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div id="product-info">
        <p className="text-sm font-normal text-rose-500">{category}</p>
        <p className="font-semibold text-rose-900">{name}</p>
        <p className="text-red font-semibold">{`$${price.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
