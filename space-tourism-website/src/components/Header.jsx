import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-28 items-center justify-between font-(family-name:--bellefair-regular) backdrop-blur-xl">
      <img className="w-10" src="src/assets/shared/logo.svg" alt="logo" />
      <ul className="flex gap-5 text-white uppercase">
        <li>
          <Link to={"/"}>00 Home</Link>
        </li>
        <li>
          <Link to={"/destination"}>01 Destination</Link>
        </li>
        <li>
          <Link to={"/crew"}>02 Crew</Link>
        </li>
        <li>
          <Link to={"/technology"}>03 Technology</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
