import React from "react";

const Header = ({ lightMode, setLightMode }) => {
  const toggleDarkMode = () => {
    if (lightMode) {
      setLightMode(false);
    } else {
      setLightMode(true);
    }
  };

  return (
    <header
      className={`flex justify-between ${lightMode ? "text-grey-950 bg-white" : "bg-blue-900 text-white"} w-full px-5 py-8 shadow-md/5 lg:px-2 lg:py-5`}
    >
      <h1 className="text-base font-extrabold lg:text-2xl">
        Where in the world?
      </h1>
      {lightMode && (
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-1.5 text-sm font-semibold hover:cursor-pointer lg:text-base"
        >
          <ion-icon name="moon-outline"></ion-icon>Dark Mode
        </button>
      )}

      {!lightMode && (
        <button
          onClick={toggleDarkMode}
          className="flex items-center gap-1.5 text-sm font-semibold hover:cursor-pointer lg:text-base"
        >
          <ion-icon name="sunny-outline"></ion-icon>Light Mode
        </button>
      )}
    </header>
  );
};

export default Header;
