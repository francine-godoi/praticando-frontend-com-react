import React from "react";

const Header = ({ lightMode, setLightMode }) => {
  const toggleMode = () => {
    if (lightMode) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  };

  return (
    <header
      className={`flex justify-between ${lightMode ? "text-grey-950 bg-white" : "bg-blue-900 text-white"} px-40 py-5 shadow-md/5`}
    >
      <h1 className="text-2xl font-extrabold">Where in the world?</h1>
      {lightMode && (
        <button
          onClick={toggleMode}
          className="flex items-center gap-1.5 font-semibold hover:cursor-pointer"
        >
          <ion-icon name="moon-outline"></ion-icon>Dark Mode
        </button>
      )}

      {!lightMode && (
        <button
          onClick={toggleMode}
          className="flex items-center gap-1.5 font-semibold hover:cursor-pointer"
        >
          <ion-icon name="sunny-outline"></ion-icon>Light Mode
        </button>
      )}
    </header>
  );
};

export default Header;
