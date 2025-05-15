import React, { useState } from "react";

const DropDownFilter = ({ countryList, setFilteredCountries, lightMode }) => {
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);

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
    <div
      onClick={toggleFilterMenu}
      className={`relative flex w-48 items-center justify-between rounded-lg ${lightMode ? "text-grey-950 bg-white" : "bg-blue-900 text-white"} px-5 py-3.5 text-sm shadow-lg/5 hover:cursor-pointer`}
    >
      <span>Filter by Region</span>
      <ion-icon name="chevron-down-outline"></ion-icon>
      <div
        className={`absolute ${filterMenuOpen ? "flex" : "hidden"} top-13 left-0.5 w-full flex-col rounded-lg ${lightMode ? "text-grey-950 bg-white" : "bg-blue-900 text-white"} py-2.5`}
      >
        <button
          onClick={filterByRegion}
          className={`${lightMode ? "hover:bg-grey-400/25" : "hover:bg-grey-400/80"} px-5 py-1.5 text-start hover:cursor-pointer`}
        >
          Africa
        </button>
        <button
          onClick={filterByRegion}
          className={`${lightMode ? "hover:bg-grey-400/25" : "hover:bg-grey-400/80"} px-5 py-1.5 text-start hover:cursor-pointer`}
        >
          America
        </button>
        <button
          onClick={filterByRegion}
          className={`${lightMode ? "hover:bg-grey-400/25" : "hover:bg-grey-400/80"} px-5 py-1.5 text-start hover:cursor-pointer`}
        >
          Asia
        </button>
        <button
          onClick={filterByRegion}
          className={`${lightMode ? "hover:bg-grey-400/25" : "hover:bg-grey-400/80"} px-5 py-1.5 text-start hover:cursor-pointer`}
        >
          Europe
        </button>
        <button
          onClick={filterByRegion}
          className={`${lightMode ? "hover:bg-grey-400/25" : "hover:bg-grey-400/80"} px-5 py-1.5 text-start hover:cursor-pointer`}
        >
          Oceania
        </button>
      </div>
    </div>
  );
};

export default DropDownFilter;
