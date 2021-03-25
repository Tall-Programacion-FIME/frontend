import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <header>
      <Link to="/">
        <h1>FIME sobre ruedas</h1>
      </Link>
      <SearchBox />
    </header>
  );
}

export default Header;
