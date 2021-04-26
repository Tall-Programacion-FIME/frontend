import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import LoginHeader from "./Login/LoginHeader";
import { BrowserView } from "react-device-detect";

function Header() {
  return (
    <header>
      <Link to="/home">
        <h1>FIME</h1>
        <h4>sobre ruedas</h4>
      </Link>
      <SearchBox />
      <LoginHeader />
    </header>
  );
}

export default Header;
