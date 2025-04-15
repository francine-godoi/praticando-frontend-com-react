import React from "react";

const ProductCard = ({ image, name, category, price }) => {
  return (
    <div className="mb-5 flex w-fit flex-col gap-10">
      <div className="relative flex w-fit flex-col items-center">
        <img className="w-3xs rounded-lg" src={image} alt={name} />
        <button className="absolute -bottom-1/11 flex w-fit gap-2 rounded-full border border-rose-500 bg-white p-2 pr-7 pl-7 font-semibold text-rose-900">
          <img
            src="../src/assets/images/icon-add-to-cart.svg"
            alt="add to cart icon"
          />
          Add to Cart
        </button>
      </div>
      <div>
        <p className="text-sm font-normal text-rose-500">{category}</p>
        <p className="font-semibold text-rose-900">{name}</p>
        <p className="text-red font-semibold">{`$${price.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
