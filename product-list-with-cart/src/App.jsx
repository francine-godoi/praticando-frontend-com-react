import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  fetch("../db/data.json")
    .then((response) => response.json())
    .then((data) => setData(data));

  const updateCart = (item) => {
    setCartItems((c) => c.filter((cartItem) => cartItem.name !== item.name));
    setCartItems((c) => [...c, item]);
  };

  return (
    <div
      id="container"
      className="mx-5 my-10 flex min-h-dvh flex-col items-center justify-center gap-7 md:flex-row md:items-start"
    >
      <div id="products-list-container" className="w-full md:w-3xl">
        <h1 className="mb-8 text-4xl font-bold">Desserts</h1>
        <div
          id="products-grid-container"
          className="grid grid-cols-1 gap-7 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]"
        >
          {data.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
              updateCart={updateCart}
            />
          ))}
        </div>
      </div>
      <div
        id="cart-container"
        className="flex h-fit w-96 flex-col rounded-2xl bg-white p-5"
      >
        <h3 className="text-red mb-8 text-xl font-bold">Your Cart (0)</h3>
        <img
          className="mx-auto w-32"
          src="../src/assets/images/illustration-empty-cart.svg"
          alt=""
        />
        <p className="mx-auto my-4 text-sm font-semibold text-rose-500">
          Your added items will appear here
        </p>
      </div>
    </div>
  );
}

export default App;
