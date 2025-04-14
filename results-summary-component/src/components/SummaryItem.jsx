import React from "react";

const SummaryItem = ({ category, score, icon, baseColor }) => {
  const colorVariant = {
    red: { bgColor: "bg-light-red/10", textColor: "text-light-red" },
    yellow: {
      bgColor: "bg-orangey-yellow/10",
      textColor: "text-orangey-yellow",
    },
    green: { bgColor: "bg-green-teal/10", textColor: "text-green-teal" },
    blue: { bgColor: "bg-cobalt-blue/10", textColor: "text-cobalt-blue" },
  };

  return (
    <div
      className={`${colorVariant[baseColor]["bgColor"]} flex items-center justify-between rounded-lg bg-gradient-to-b p-3 text-center text-lg font-medium`}
    >
      <div className="flex items-center gap-2.5">
        <img src={icon} alt="" />
        <h4 className={`${colorVariant[baseColor]["textColor"]}`}>{category}</h4>
      </div>
      <p className="text-dark-gray-blue/60 font-bold">
        <span className="text-black">{score}</span> / 100
      </p>
    </div>
  );
};

export default SummaryItem;
