import React from "react";
import SearchIcon from '../data/search.png'

function Header() {
  return (
    <header>
      <h1>Hola FIME!</h1>
      <form>
        <input type="text" placeholder="Buscar un libro"/>
        <button><img src={SearchIcon} alt="Search" className="search-icon"/></button>
      </form>
    </header>
  );
}

export default Header;
