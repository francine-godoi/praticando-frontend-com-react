import { Link } from "react-router";
const InfoCard = ({ country, lightMode }) => {
  return (
    <Link
      title={country.name}
      to={`/details/${country.alpha3Code}`}
      className={`w-fit rounded-lg ${lightMode ? "text-grey-950 bg-white" : "bg-blue-900 text-white"} shadow-md hover:cursor-pointer`}
    >
      <div className="w-64 rounded-t-lg">
        <img
          className="aspect-[3/2] w-full rounded-t-lg"
          src={country.flag}
        ></img>
      </div>
      <div className="w-64 p-5 text-sm">
        <p className="mb-3 truncate text-lg font-extrabold">{country.name}</p>
        <p className="font-semibold">
          Population:{" "}
          <span className="font-light">
            {country.population.toLocaleString("en-US")}
          </span>
        </p>
        <p className="my-1 font-semibold">
          Region: <span className="font-light">{country.region}</span>
        </p>
        <p className="mb-5 font-semibold">
          Capital: <span className="font-light">{country.capital}</span>
        </p>
      </div>
    </Link>
  );
};

export default InfoCard;
