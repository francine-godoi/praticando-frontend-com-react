import React from "react";
import SummaryItem from "./SummaryItem";
import data from "../../db/data.json";

const Summary = () => {
  return (
    <div className="h-fit w-96 flex-col rounded-tr-4xl rounded-br-4xl bg-white p-8 pt-5 text-lg font-medium lg:p-10">
      <h3 className="mb-7 text-2xl font-bold">Summary</h3>

      <div className="flex flex-col gap-4">
        <SummaryItem
          category={data[0].category}
          score={data[0].score}
          icon={data[0].icon}
          baseColor="red"
        ></SummaryItem>
        <SummaryItem
          category={data[1].category}
          score={data[1].score}
          icon={data[1].icon}
          baseColor="yellow"
        ></SummaryItem>
        <SummaryItem
          category={data[2].category}
          score={data[2].score}
          icon={data[2].icon}
          baseColor="green"
        ></SummaryItem>
        <SummaryItem
          category={data[3].category}
          score={data[3].score}
          icon={data[3].icon}
          baseColor="blue"
        ></SummaryItem>
      </div>

      <button className="bg-dark-gray-blue hover:from-light-slate-blue-background to-light-royal-blue-background mt-8 w-full rounded-full pt-2.5 pb-2.5 text-white hover:cursor-pointer hover:bg-gradient-to-b">
        Continue
      </button>
    </div>
  );
};

export default Summary;
