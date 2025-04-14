import React from "react";

const Results = () => {
  return (
    <div className="from-light-slate-blue-background to-light-royal-blue-background flex h-fit w-84 flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-b p-8 text-center text-lg font-medium text-white">
      <h3 className="text-light-lavender text-2xl">Your Result</h3>

      <div className="from-violet-blue-circle to-persian-blue-circle mt-5 mb-5 rounded-full bg-gradient-to-b p-9 pr-12 pl-12">
        <p className="text-7xl font-extrabold">76</p>
        <p className="text-light-lavender/65"> of 100</p>
      </div>

      <h2 className="text-3xl font-bold">Great</h2>
      <p className="text-light-lavender w-3xs">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Results;
