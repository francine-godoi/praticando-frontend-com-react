import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ConfirmationModal from "./components/ConfirmationModal";

function App() {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [removedItem, setRemovedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  fetch("../db/data.json")
    .then((response) => response.json())
    .then((data) => setData(data));

  const updateCart = (newItem) => {
    const tempCart = [...cartItems];
    const sameItem = tempCart.find((i) => i.name === newItem.name);
    if (sameItem !== undefined) {
      setTotalItems((t) => t + (newItem.quantity - sameItem.quantity));
      sameItem.quantity = newItem.quantity;
      setCartItems(tempCart);
    } else {
      setCartItems((c) => [...c, newItem]);
      setTotalItems((t) => t + 1);
    }
  };

  const removeCartItem = (itemName, quantity) => {
    setCartItems(cartItems.filter((c) => c.name !== itemName));
    setTotalItems((t) => Math.max(t - quantity, 0));
    setRemovedItem(itemName);
  };

  useEffect(() => {
    updateTotalOrder();
  }, [totalItems]);

  const updateTotalOrder = () => {
    let total = 0;
    cartItems.forEach((item) => (total += item.price * item.quantity));
    setTotalOrder(total);
  };

  const clearAll = () => {
    setCartItems([]);
    setTotalItems(0);
    setRemovedItem("clearAll");
    setIsModalOpen(false);
  };

  return (
    <div
      id="container"
      className="relative mx-5 my-10 flex min-h-dvh flex-col items-center justify-center gap-7 md:flex-row md:items-start"
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
              removedItem={removedItem}
              setRemovedItem={setRemovedItem}
            />
          ))}
        </div>
      </div>
      <div
        id="cart-container"
        className="flex h-fit w-80 flex-col rounded-2xl bg-white p-5 md:w-96"
      >
        <h3 className="text-red mb-2 text-xl font-bold">
          Your Cart ({totalItems})
        </h3>
        <Cart
          cartItems={cartItems}
          removeCartItem={removeCartItem}
          totalOrder={totalOrder}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      {isModalOpen && (
        <>
          <ConfirmationModal
            cartItems={cartItems}
            totalOrder={totalOrder}
            clearAll={clearAll}
          />
          <div className="bg-dim fixed top-0 left-0 h-full w-full opacity-60"></div>
        </>
      )}
    </div>
  );
}

export default App;
