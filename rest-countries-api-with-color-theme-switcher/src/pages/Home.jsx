import React, { useState } from "react";
import InfoCard from "../components/InfoCard";

const Home = ({ countryList }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    console.log(search);
  };

  return (
    <main className="h-full px-40">
      <div className="flex items-center justify-between">
        <div className="text-grey-400 my-12 flex w-md items-center gap-5 rounded-lg bg-white px-7 text-sm font-semibold shadow-lg/5">
          <ion-icon name="search-sharp"></ion-icon>
          <input
            className="w-full py-3.5 outline-0"
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div className="text-grey-950 rounded-lg bg-white px-7 py-3.5 text-sm shadow-lg/5">
          Filter by Region [placeholder]
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-20">
        {countryList.map((country, index) => (
          <InfoCard
            key={index}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            alpha3Code={country.alpha3Code}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
