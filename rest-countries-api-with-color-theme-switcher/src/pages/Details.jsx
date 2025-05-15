import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";

const Details = ({ countryList, lightMode }) => {
  const { alpha3Code } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  useEffect(() => {
    getData();
  }, [countryList, alpha3Code]);

  const getData = () => {
    let country = countryList.filter((c) => c.alpha3Code == alpha3Code);
    setCountryDetails(country);
  };

  const findBorderCountry = (border) => {
    let borderCountry = countryList.find((c) => c.alpha3Code == border);
    return borderCountry;
  };

  return (
    <main className="h-full min-h-dvh px-40">
      <Link
        to="/"
        className={`${lightMode ? "text-grey-950 bg-white" : "bg-blue-900 text-white"} my-12 flex w-fit items-center gap-1 rounded-lg px-10 py-2.5 text-sm font-semibold shadow-(--shadow)`}
      >
        <ion-icon name="arrow-back-outline"></ion-icon>Back
      </Link>

      {countryDetails.map((country, index) => (
        <div key={index} className="grid grid-cols-2 gap-25">
          <div>
            <img
              className="aspect-[3/2] w-full"
              src={country.flag}
              alt={`${country.name} flag`}
            />
          </div>
          <div
            className={`${lightMode ? "text-grey-950" : "text-white"} flex flex-col justify-center`}
          >
            <h2 className="mb-8 text-2xl font-extrabold">{country.name}</h2>
            <div className="grid grid-cols-2 gap-20">
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
            <div className="mt-12 flex gap-1">
              <p className="mr-5 w-36 font-semibold">Border Countries: </p>
              <div className="flex flex-wrap gap-2.5">
                {country.borders?.map((border, index) => (
                  <Link
                    className={`${lightMode ? "bg-white" : "bg-blue-900"} w-24 truncate rounded-sm p-1 text-center text-sm font-light shadow-(--shadow)`}
                    to={`/details/${findBorderCountry(border).alpha3Code}`}
                    key={`border-${index}`}
                  >
                    {findBorderCountry(border).name}{" "}
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
