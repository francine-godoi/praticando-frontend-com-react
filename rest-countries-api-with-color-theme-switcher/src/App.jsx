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
    <div className={lightMode ? "bg-grey-50" : "bg-blue-950"}>
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
  );
}

export default App;
