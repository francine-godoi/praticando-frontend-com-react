import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Details = ({ countryList, lightMode }) => {
  const { alpha3Code } = useParams();
  const [countryInfo, setCountryInfo] = useState([]);
  const [borderCountriesInfo, setBorderCountriesInfo] = useState([]);

  useEffect(() => {
    let country = countryList.filter((c) => c.alpha3Code == alpha3Code);
    setCountryInfo(country);
  }, [countryList, alpha3Code]);

  useEffect(() => {
    setBorderCountriesInfo([]);
    for (let i = 0; i < countryInfo[0]?.borders?.length; i++) {
      let borderCountry = countryList.find(
        (c) => c.alpha3Code == countryInfo[0]?.borders[i],
      );

      setBorderCountriesInfo((bci) => [
        ...bci,
        { name: borderCountry.name, alpha3Code: borderCountry.alpha3Code },
      ]);
    }
  }, [countryInfo]);

  return (
    <main className="min-h-dvh w-full px-7 pb-10 lg:px-2">
      <Link
        to="/"
        className={`${lightMode ? "text-grey-950 bg-white" : "bg-blue-900 text-white"} mt-12 mb-20 flex w-fit items-center gap-1 rounded-lg px-10 py-2.5 text-sm font-semibold shadow-(--shadow) lg:mb-12`}
      >
        <ion-icon name="arrow-back-outline"></ion-icon>Back
      </Link>

      {countryInfo.map((country, index) => (
        <div
          key={index}
          className="grid gap-12 md:grid-cols-1 lg:grid-cols-2 lg:gap-25"
        >
          <div>
            <img
              className={`aspect-[3/2] w-full ${lightMode ? "shadow-sm" : "shadow-none"}`}
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div
            className={`${lightMode ? "text-grey-950" : "text-white"} flex flex-col justify-center`}
          >
            <h2 className="mb-8 text-2xl font-extrabold">{country.name}</h2>
            <div className="grid grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-20">
              <div>
                <p className="font-semibold">
                  Native Name:{" "}
                  <span className="font-light">{country.nativeName}</span>
                </p>
                <p className="my-2 font-semibold">
                  Population:{" "}
                  <span className="font-light">
                    {country.population.toLocaleString("en-US")}
                  </span>
                </p>
                <p className="my-1 font-semibold">
                  Region: <span className="font-light">{country.region}</span>
                </p>
                <p className="my-2 font-semibold">
                  Sub Region:{" "}
                  <span className="font-light">{country.subregion}</span>
                </p>
                <p className="mb-5 font-semibold">
                  Capital: <span className="font-light">{country.capital}</span>
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Top Level Domain{" "}
                  <span className="font-light">{country.topLevelDomain}</span>
                </p>
                <p className="my-2 font-semibold">
                  Currency:{" "}
                  {country.currencies?.map((currency, index) => (
                    <span className="font-light" key={`currency-${index}`}>
                      {currency.name}
                      {index < country.currencies.length - 1 && ", "}
                    </span>
                  ))}
                </p>
                <p className="font-semibold">
                  Languages:{" "}
                  {country.languages?.map((language, index) => (
                    <span className="font-light" key={`language-${index}`}>
                      {language.name}
                      {index < country.languages.length - 1 && ", "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-1 lg:flex-row">
              <p className="mr-5 mb-4 min-w-36 text-lg font-semibold lg:mb-0 lg:text-base">
                Border Countries:{" "}
              </p>
              <div className="flex w-full flex-wrap gap-2.5">
                {borderCountriesInfo?.map((country, index) => (
                  <Link
                    className={`${lightMode ? "bg-white" : "bg-blue-900"} w-24 truncate rounded-sm p-1 text-center text-sm font-light shadow-(--shadow)`}
                    to={`/details/${country.alpha3Code}`}
                    key={`border-${index}`}
                  >
                    {country.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Details;
