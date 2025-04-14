import React from "react";

const SummaryItem = ({ category, score, icon, baseColor }) => {
  const bgColor = {
    red: "bg-light-red/10",
    yellow: "bg-orangey-yellow/10",
    green: "bg-green-teal/10",
    blue: "bg-cobalt-blue/10",
  };

  const textColor = {
    red: "text-light-red",
    yellow: "text-orangey-yellow",
    green: "text-green-teal",
    blue: "text-cobalt-blue",
  };

  return (
    <div
      className={`${bgColor[baseColor]} flex items-center justify-between rounded-lg bg-gradient-to-b p-3 text-center text-lg font-medium`}
    >
      <div className="flex items-center gap-2.5">
        <img src={icon} alt="" />
        <h4 className={`${textColor[baseColor]}`}>{category}</h4>
      </div>
      <p className="text-dark-gray-blue/60 font-bold">
        <span className="text-black">{score}</span> / 100
      </p>
    </div>
  );
};

export default SummaryItem;
