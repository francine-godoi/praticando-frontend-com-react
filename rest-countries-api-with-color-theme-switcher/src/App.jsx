import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countryList, setCountryList] = useState([]);

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
    <div className="bg-grey-50">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home countryList={countryList} />} />
          <Route path="/details/:alpha3Code" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
