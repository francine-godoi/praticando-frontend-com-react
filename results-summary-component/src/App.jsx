import Results from "./components/Results";
import Summary from "./components/Summary";

function App() {
  return (
    <div className="bg-pale-blue flex h-dvh items-center justify-center">
      <div className="flex rounded-3xl bg-white">
        <Results></Results>
        <Summary></Summary>
      </div>
    </div>
  );
}

export default App;
