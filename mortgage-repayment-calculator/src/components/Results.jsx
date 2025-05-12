import React, { useEffect, useState } from "react";

const Results = ({
  monthlyRepayment,
  totalRepayment,
  monthlyInterest,
  totalInterest,
  type,
}) => {
  const [result, setResult] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (monthlyRepayment !== 0 || monthlyInterest !== 0) {
      setResult(true);
    } else {
      setResult(false);
    }
  });

  useEffect(() => {
    setShow(type);
  }, [monthlyRepayment, monthlyInterest]);

  return (
    <div
      className={`flex flex-col items-center pb-7 ${result ? "justify-start" : "justify-center"} bg-slate-900 text-white lg:rounded-r-3xl lg:rounded-bl-[5rem] lg:pt-6`}
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

          <p className="mb-5 w-[28ch] text-center text-base font-medium text-slate-300 lg:w-[38ch]">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
      {result && (
        <div>
          <h3 className="my-5 text-2xl font-bold">Your results</h3>
          <p className="w-[28ch] text-base font-medium text-slate-300 lg:w-[37ch]">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="border-t-lime relative mt-5 rounded-lg border-t-4 bg-slate-900 p-5 lg:mt-10 lg:p-7">
            <div className="absolute top-0 left-0 h-full w-full rounded-lg bg-slate-900 brightness-80"></div>
            <p className="relative z-10 mb-3 text-sm font-medium text-slate-300 lg:mb-4">
              {show === "repayment"
                ? "Your monthly repayments"
                : "Your monthly interest"}
            </p>
            <span className="text-lime relative z-10 text-3xl font-bold lg:text-5xl">
              £
              {show === "repayment"
                ? monthlyRepayment.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : monthlyInterest.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
            </span>
            <hr className="relative z-10 my-4 h-px border-0 bg-slate-700/30 lg:my-8" />
            <p className="relative z-10 mb-2 text-sm font-medium text-slate-300">
              {show === "repayment"
                ? "Total you'll repay over the term"
                : "Total interest you'll repay over the term"}
            </p>
            <span className="relative z-10 text-xl font-bold">
              £
              {show === "repayment"
                ? totalRepayment.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : totalInterest.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
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
