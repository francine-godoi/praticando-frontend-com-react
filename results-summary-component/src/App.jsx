import Results from "./components/Results";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="bg-pale-blue flex min-h-dvh items-center justify-center">
      <div className="flex flex-col bg-white lg:flex-row lg:rounded-4xl">
        <Results></Results>
        <Summary></Summary>
      </div>
    </div>
  );
}

export default App;
