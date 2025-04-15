import Results from "./components/Results";
import Summary from "./components/Summary";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  fetch("../../db/data.json")
    .then((response) => response.json())
    .then((responseData) => setData(responseData));

  let sum = 0;
  data.map((item) => {
    sum += Number(item.score);
  });

  useEffect(() => {
    setTotal(Math.floor(sum / Number(data.length)) || 0);
  }, [sum]);

  return (
    <div className="bg-pale-blue flex min-h-dvh items-center justify-center">
      <div className="flex flex-col bg-white lg:flex-row lg:rounded-4xl">
        <Results total={total} />
        <Summary data={data} />
      </div>
    </div>
  );
}

export default App;
