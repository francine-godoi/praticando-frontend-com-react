import React from "react";
import SummaryItem from "./SummaryItem";
import data from "../../db/data.json";

const Summary = () => {
  const colors = ["red", "yellow", "green", "blue"];

  return (
    <div className="h-fit w-96 flex-col rounded-tr-4xl rounded-br-4xl bg-white p-8 pt-5 text-lg font-medium lg:p-10">
      <h3 className="mb-7 text-2xl font-bold">Summary</h3>

      <div className="flex flex-col gap-4">
        {data.map((item, index) => (
          <SummaryItem
            key={index}
            category={item.category}
            score={item.score}
            icon={item.icon}
            baseColor={colors[index]}
          ></SummaryItem>
        ))}
      </div>

      <button className="bg-dark-gray-blue hover:from-light-slate-blue-background to-light-royal-blue-background mt-8 w-full rounded-full pt-2.5 pb-2.5 text-white hover:cursor-pointer hover:bg-gradient-to-b">
        Continue
      </button>
    </div>
  );
};

export default Summary;
