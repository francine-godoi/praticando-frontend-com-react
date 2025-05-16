import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countryList, setCountryList] = useState([]);
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await axios("../src/assets/data.json")
      .then((response) => setCountryList(response.data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }

  return (
    <div
      className={`relative flex w-full justify-center ${lightMode ? "bg-grey-50" : "bg-blue-950"}`}
    >
      <div
        className={`${lightMode ? "bg-white" : "bg-blue-900"} absolute top-0 left-0 z-1 w-full py-9 shadow-md/5`}
      ></div>
      <div
        className={`relative z-10 w-full max-w-7xl ${lightMode ? "bg-grey-50" : "bg-blue-950"}`}
      >
        <BrowserRouter>
          <Header lightMode={lightMode} setLightMode={setLightMode} />
          <Routes>
            <Route
              path="/"
              element={<Home countryList={countryList} lightMode={lightMode} />}
            />
            <Route
              path="/details/:alpha3Code"
              element={
                <Details countryList={countryList} lightMode={lightMode} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
