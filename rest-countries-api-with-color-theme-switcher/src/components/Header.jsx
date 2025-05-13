import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between bg-white px-40 py-5 shadow-md/5">
      <h1 className="text-2xl font-extrabold">Where in the world?</h1>
      <button className="flex items-center gap-1.5 font-semibold">
        <ion-icon name="moon-outline"></ion-icon>Dark Mode
      </button>
    </header>
  );
};

export default Header;
