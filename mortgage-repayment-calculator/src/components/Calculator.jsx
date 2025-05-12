import React, { useState } from "react";

// https://www.dhiwise.com/post/a-step-by-step-guide-to-retrieving-input-values-in-react

const Calculator = ({
  formData,
  setFormData,
  setMonthlyRepayment,
  setTotalRepayment,
  setTotalInterest,
  setMonthlyInterest,
}) => {
  const [error, setError] = useState({
    amountError: false,
    termError: false,
    interestError: false,
    typeError: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value !== "") {
      const errorName = name + "Error";
      setError((error) => ({
        ...error,
        [errorName]: false,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorCount = 0;

    for (let [key, value] of Object.entries(formData)) {
      let errorName = key + "Error";

      if (value !== "") {
        setError((error) => ({
          ...error,
          [errorName]: false,
        }));
      } else {
        errorCount++;
        setError((error) => ({
          ...error,
          [errorName]: true,
        }));
      }
    }

    if (errorCount === 0) {
      calculateMortgage();
    }
  };

  const calculateMortgage = () => {
    const principalValue = parseFloat(formData.amount);
    const annualInterestRate = parseFloat(formData.interest);
    const years = parseInt(formData.term);

    const monthlyRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;

    const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;

    const monthlyPayment = principalValue * (numerator / denominator);

    if (formData.type === "repayment") {
      setMonthlyRepayment(monthlyPayment);
      setTotalRepayment(monthlyPayment * numberOfPayments);
      setMonthlyInterest(0);
      setTotalInterest(0);
    } else if (formData.type === "interest-only") {
      setMonthlyInterest(
        (monthlyPayment * numberOfPayments - principalValue) / numberOfPayments,
      );
      setTotalInterest(monthlyPayment * numberOfPayments - principalValue);
      setMonthlyRepayment(0);
      setTotalRepayment(0);
    }
  };

  const clearAll = (e) => {
    e.preventDefault();

    setFormData((prevState) => ({
      ...prevState,
      amount: "",
      term: "",
      interest: "",
      type: "",
    }));

    setError((error) => ({
      ...error,
      amountError: false,
      termError: false,
      interestError: false,
      typeError: false,
    }));

    setMonthlyRepayment(0);
    setTotalRepayment(0);
    setTotalInterest(0);
    setMonthlyInterest(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 lg:rounded-full lg:p-10"
    >
      <div className="mb-5 flex flex-col items-start lg:mb-10 lg:flex-row lg:justify-between">
        <h1 className="mb-1.5 text-2xl font-bold text-slate-900">
          Mortgage Calculator
        </h1>
        <button
          onClick={clearAll}
          className="font-medium text-slate-700 underline decoration-slate-500 decoration-2 hover:cursor-pointer"
        >
          Clear All
        </button>
      </div>

      <div className="flex flex-col">
        <label className="mb-2.5 font-medium text-slate-700" htmlFor="amount">
          Mortgage Amount
        </label>
        <div
          className={`focus-within:border-lime group relative flex rounded-md border ${error.amountError ? "border-red" : "border-slate-500"} p-2.5 hover:border-slate-900`}
        >
          <div
            className={`group-focus-within:bg-lime absolute top-0 left-0 rounded-l-[5px] ${error.amountError ? "bg-red text-white" : "bg-slate-100 text-slate-700"} px-3.5 py-2.5 font-bold group-focus-within:text-slate-900 group-hover:cursor-pointer`}
          >
            £
          </div>
          <input
            className="ml-11 w-full font-bold text-slate-900 outline-0 group-hover:cursor-pointer"
            type="text"
            name="amount"
            id="amount"
            autoComplete="off"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        {error.amountError && (
          <span className="text-red mt-3 text-xs font-bold">
            This field is required
          </span>
        )}
      </div>

      <div className="my-5 flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-col">
          <label className="mb-2.5 font-medium text-slate-700" htmlFor="term">
            Mortgage Term
          </label>
          <div
            className={`group focus-within:border-lime border ${error.termError ? "border-red" : "border-slate-500"} relative w-full rounded-md p-2.5 font-bold text-slate-900 outline-0 hover:cursor-pointer hover:border-slate-900 lg:w-52`}
          >
            <input
              className="ml-1 w-full font-bold text-slate-900 outline-0 group-hover:cursor-pointer"
              type="text"
              name="term"
              id="term"
              autoComplete="off"
              value={formData.term}
              onChange={handleChange}
            />
            <div
              className={`group-focus-within:bg-lime font-boldgroup-focus-within:text-slate-900 absolute top-0 right-0 rounded-r-[5px] px-3.5 py-2.5 group-hover:cursor-pointer ${error.termError ? "bg-red text-white" : "bg-slate-100 text-slate-700"}`}
            >
              years
            </div>
          </div>
          {error.termError && (
            <span className="text-red mt-3 text-xs font-bold">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label
            className="mb-2.5 font-medium text-slate-700"
            htmlFor="interest"
          >
            Interest Rate
          </label>
          <div
            className={`group focus-within:border-lime relative w-full rounded-md border lg:w-52 ${error.interestError ? "border-red" : "border-slate-500"} p-2.5 font-bold text-slate-900 outline-0 hover:cursor-pointer hover:border-slate-900`}
          >
            <input
              className="ml-1 w-full font-bold text-slate-900 outline-0 group-hover:cursor-pointer"
              type="text"
              name="interest"
              id="interest"
              autoComplete="off"
              value={formData.interest}
              onChange={handleChange}
            />
            <div
              className={`group-focus-within:bg-lime absolute top-0 right-0 rounded-r-[5px] px-3.5 py-2.5 font-bold group-focus-within:text-slate-900 group-hover:cursor-pointer hover:cursor-pointer ${error.interestError ? "bg-red text-white" : "bg-slate-100 text-slate-700"}`}
            >
              %
            </div>
          </div>
          {error.interestError && (
            <span className="text-red mt-3 text-xs font-bold">
              This field is required
            </span>
          )}
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2.5 lg:mb-10">
        <label className="font-medium text-slate-700">Mortgage Type</label>

        <div className="has-checked:bg-lime/20 group hover:border-lime has-checked:border-lime flex gap-4 rounded-md border border-slate-500 p-2.5 hover:cursor-pointer">
          <input
            type="radio"
            name="type"
            id="repayment"
            value="repayment"
            className="checked:accent-lime group-hover:border-lime hover:cursor-pointer"
            checked={formData.type == "repayment"}
            onChange={handleChange}
          />
          <label
            className="group-hover:border-lime inline w-full text-lg font-bold text-slate-900 hover:cursor-pointer"
            htmlFor="repayment"
          >
            Repayment
          </label>
        </div>
        <div className="has-checked:bg-lime/20 hover:border-lime has-checked:border-lime flex gap-4 rounded-md border border-slate-500 p-2.5 hover:cursor-pointer">
          <input
            type="radio"
            name="type"
            id="interest-only"
            value="interest-only"
            className="checked:accent-lime group-hover:border-lime hover:cursor-pointer"
            checked={formData.type == "interest-only"}
            onChange={handleChange}
          />
          <label
            className="group-hover:border-lime inline w-full text-lg font-bold text-slate-900 hover:cursor-pointer"
            htmlFor="interest-only"
          >
            Interest Only
          </label>
        </div>
        {error.typeError && (
          <span className="text-red mt-1 text-xs font-bold">
            This field is required
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-lime hover:bg-lime/75 flex w-full justify-center gap-3 rounded-full px-8 py-3 text-lg font-bold text-slate-900 hover:cursor-pointer"
      >
        <img
          src="../src/assets/images/icon-calculator.svg"
          alt="calculator icon"
        />
        Calculate Repayments
      </button>
    </form>
  );
};

export default Calculator;
