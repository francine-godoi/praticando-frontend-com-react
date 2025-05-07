import React from "react";

const Results = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-r-3xl rounded-bl-[5rem] bg-slate-900 text-center text-white">
      <div>
        <img
          src="../src/assets/images/illustration-empty.svg"
          alt="empty results"
        />
      </div>

      <h3 className="my-5 text-2xl font-bold">Results shown here</h3>

      <p className="w-[38ch] text-base font-medium text-slate-300">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
};

export default Results;
