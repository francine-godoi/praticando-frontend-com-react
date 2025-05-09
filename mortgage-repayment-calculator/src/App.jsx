import { useState } from "react";
import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  const [formData, setFormData] = useState({
    amount: "",
    term: "",
    interest: "",
    type: "",
  });

  const [monthlyRepayment, setMonthlyRepayment] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  return (
    <div className="w-5xl rounded-3xl bg-white">
      <div className="grid grid-cols-2">
        <Calculator
          formData={formData}
          setFormData={setFormData}
          setMonthlyRepayment={setMonthlyRepayment}
          setTotalRepayment={setTotalRepayment}
          setTotalInterest={setTotalInterest}
          setMonthlyInterest={setMonthlyInterest}
        />
        <Results
          monthlyRepayment={monthlyRepayment}
          totalRepayment={totalRepayment}
          monthlyInterest={monthlyInterest}
          totalInterest={totalInterest}
          type={formData.type}
        />
      </div>
    </div>
  );
}

export default App;
