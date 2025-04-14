import React from "react";

const Results = () => {
  return (
    <div className="from-light-slate-blue-background to-light-royal-blue-background flex w-full flex-col items-center justify-center rounded-b-4xl bg-gradient-to-b p-6 text-center text-lg font-medium text-white lg:w-84 lg:gap-4 lg:rounded-4xl lg:p-8">
      <h3 className="text-light-lavender text-xl lg:text-2xl">Your Result</h3>

      <div className="from-violet-blue-circle to-persian-blue-circle mt-5 mb-5 rounded-full bg-gradient-to-b p-8 pr-10 pl-10 lg:p-9 lg:pr-12 lg:pl-12">
        <p className="text-6xl font-extrabold lg:text-7xl">76</p>
        <p className="text-light-lavender/65 text-base"> of 100</p>
      </div>

      <h2 className="text-2xl font-bold lg:text-3xl">Great</h2>
      <p className="text-light-lavender mt-2.5 mb-2.5 w-2xs text-base lg:w-3xs">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Results;
