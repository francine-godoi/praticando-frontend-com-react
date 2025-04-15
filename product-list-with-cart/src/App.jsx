import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [data, setData] = useState([]);

  fetch("../db/data.json")
    .then((response) => response.json())
    .then((data) => setData(data));

  return (
    <div className="mx-auto my-15 min-h-dvh w-6xl">
      <h1 className="mb-8 text-4xl font-bold">Desserts</h1>
      <div className="grid w-3/4 grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-2.5">
        {data.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image.desktop}
            name={item.name}
            category={item.category}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
