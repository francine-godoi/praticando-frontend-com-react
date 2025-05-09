import React, { useEffect, useState } from "react";

const Results = ({
  monthlyRepayment,
  totalRepayment,
  monthlyInterest,
  totalInterest,
  type,
}) => {
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (monthlyRepayment !== 0) {
      setResult(true);
    } else {
      setResult(false);
    }
  });

  return (
    <div
      className={
        result
          ? "flex flex-col items-center justify-start rounded-r-3xl rounded-bl-[5rem] bg-slate-900 pt-6 text-white"
          : "flex flex-col items-center justify-center rounded-r-3xl rounded-bl-[5rem] bg-slate-900 text-white"
      }
    >
      {!result && (
        <div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="../src/assets/images/illustration-empty.svg"
              alt="empty results"
            />
          </div>

          <h3 className="my-5 text-center text-2xl font-bold">
            Results shown here
          </h3>

          <p className="w-[38ch] text-center text-base font-medium text-slate-300">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
      {result && (
        <div>
          <h3 className="my-5 text-2xl font-bold">Your results</h3>
          <p className="w-[37ch] text-base font-medium text-slate-300">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="border-t-lime relative mt-10 rounded-lg border-t-4 bg-slate-900 p-7">
            <div className="absolute top-0 left-0 h-full w-full rounded-lg bg-slate-900 brightness-80"></div>
            <p className="relative z-10 mb-4 text-sm font-medium text-slate-300">
              {type === "repayment"
                ? "Your monthly repayments"
                : "Your monthly interest"}
            </p>
            <span className="text-lime relative z-10 text-5xl font-bold">
              £
              {type === "repayment"
                ? monthlyRepayment.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })
                : monthlyInterest.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
            </span>
            <hr class="relative z-10 my-8 h-px border-0 bg-slate-700/30" />
            <p className="relative z-10 mb-2 text-sm font-medium text-slate-300">
              {type === "repayment"
                ? "Total you'll repay over the term"
                : "Total interest you'll repay over the term"}
            </p>
            <span className="relative z-10 text-xl font-bold">
              £
              {type === "repayment"
                ? totalRepayment.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })
                : totalInterest.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
