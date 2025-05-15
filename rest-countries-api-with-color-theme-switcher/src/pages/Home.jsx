import React, { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";

const Home = ({ countryList }) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    const searchedCountry = value.replace(
      /(^\w|\s\w)(\S*)/g,
      (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase(),
    );
    setSearch(searchedCountry);
  };

  useEffect(() => {
    filterCountry();
  }, [search, countryList]);

  const filterCountry = () => {
    if (search === "") {
      setFilteredCountries(countryList);
    } else {
      let filteredCountries = countryList.filter((country) =>
        country.name.startsWith(search),
      );
      setFilteredCountries(filteredCountries);
    }
  };

  const toggleFilterMenu = () => {
    if (filterMenuOpen) {
      setFilterMenuOpen(false);
    } else {
      setFilterMenuOpen(true);
    }
  };

  const filterByRegion = (e) => {
    let region = e.target.textContent;
    if (region === "America") {
      region = "Americas";
    }
    let filteredCountries = countryList.filter(
      (country) => country.region == region,
    );
    setFilteredCountries(filteredCountries);
  };

  return (
    <main className="h-full px-40">
      <div className="flex items-center justify-between">
        <div className="text-grey-400 my-12 flex w-md items-center gap-5 rounded-lg bg-white px-7 text-sm font-semibold shadow-lg/5">
          <ion-icon name="search-sharp"></ion-icon>
          <input
            id="search"
            className="w-full py-3.5 outline-0"
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <div
          onClick={toggleFilterMenu}
          className="text-grey-950 relative flex w-48 items-center justify-between rounded-lg bg-white px-5 py-3.5 text-sm shadow-lg/5 hover:cursor-pointer"
        >
          <span>Filter by Region</span>
          <ion-icon name="chevron-down-outline"></ion-icon>
          <div
            className={`absolute ${filterMenuOpen ? "flex" : "hidden"} top-13 left-0.5 w-full flex-col rounded-lg bg-white py-2.5`}
          >
            <button
              onClick={filterByRegion}
              className="hover:bg-grey-400/25 px-5 py-1.5 text-start hover:cursor-pointer"
            >
              Africa
            </button>
            <button
              onClick={filterByRegion}
              className="hover:bg-grey-400/25 px-5 py-1.5 text-start hover:cursor-pointer"
            >
              America
            </button>
            <button
              onClick={filterByRegion}
              className="hover:bg-grey-400/25 px-5 py-1.5 text-start hover:cursor-pointer"
            >
              Asia
            </button>
            <button
              onClick={filterByRegion}
              className="hover:bg-grey-400/25 px-5 py-1.5 text-start hover:cursor-pointer"
            >
              Europe
            </button>
            <button
              onClick={filterByRegion}
              className="hover:bg-grey-400/25 px-5 py-1.5 text-start hover:cursor-pointer"
            >
              Oceania
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] gap-20">
        {filteredCountries.map((country, index) => (
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
