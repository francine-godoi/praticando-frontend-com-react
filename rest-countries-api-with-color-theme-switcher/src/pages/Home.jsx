import React, { useEffect, useState } from "react";
import InfoCard from "../components/InfoCard";
import DropDownFilter from "../components/DropDownFilter";

const Home = ({ countryList, lightMode }) => {
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

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

  return (
    <main className="min-h-dvh w-full px-5 pb-10 lg:px-2">
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div
          className={`mt-7 mb-10 flex items-center gap-5 rounded-md lg:mt-12 lg:mb-12 lg:w-md ${lightMode ? "text-grey-400 bg-white" : "bg-blue-900 text-white"} px-7 text-sm font-semibold shadow-lg/5`}
        >
          <ion-icon name="search-sharp"></ion-icon>
          <input
            id="search"
            autoComplete="off"
            className={`w-full py-3.5 outline-0 ${lightMode ? "text-grey-400 placeholder:text-grey-400 bg-white" : "bg-blue-900 text-white placeholder:text-white"}`}
            type="text"
            placeholder="Search for a country..."
            value={search}
            onChange={handleChange}
          />
        </div>
        <DropDownFilter
          countryList={countryList}
          setFilteredCountries={setFilteredCountries}
          lightMode={lightMode}
        />
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(256px,1fr))] place-items-center gap-10 lg:gap-20">
        {filteredCountries.map((country, index) => (
          <InfoCard key={index} country={country} lightMode={lightMode} />
        ))}
      </div>
    </main>
  );
};

export default Home;
