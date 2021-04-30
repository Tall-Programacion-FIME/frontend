import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import LoginHeader from "./Login/LoginHeader";
import LogoSVG from "assets/logos/mini.svg";
// import { BrowserView } from "react-device-detect";

function Header() {
  return (
    <header>
      <Link to="/home">
        <img src={LogoSVG} alt="Logo" />
      </Link>
      <SearchBox />
      <LoginHeader />
    </header>
  );
}

export default Header;
