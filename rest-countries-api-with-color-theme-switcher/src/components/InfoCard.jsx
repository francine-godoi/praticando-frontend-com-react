const InfoCard = ({ flag, name, population, region, capital }) => {
  return (
    <div className="text-grey-950 w-fit rounded-lg bg-white shadow-md hover:cursor-pointer">
      <div className="w-64 rounded-t-lg">
        <img className="aspect-[3/2] w-full rounded-t-lg" src={flag}></img>
      </div>
      <div className="p-5 text-sm">
        <p className="mb-3 text-lg font-extrabold">{name}</p>
        <p className="font-semibold">
          Population:{" "}
          <span className="font-light">
            {population.toLocaleString("en-US")}
          </span>
        </p>
        <p className="my-1 font-semibold">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="mb-5 font-semibold">
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
