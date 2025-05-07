import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  return (
    <div className="w-5xl rounded-3xl bg-white">
      <div className="grid grid-cols-2">
        <Calculator />
        <Results />
      </div>
    </div>
  );
}

export default App;
