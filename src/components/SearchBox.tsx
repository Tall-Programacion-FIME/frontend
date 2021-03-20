import React, { useState, FormEvent, ChangeEvent } from "react";

import { searchBook } from "../api/book";
import { BookModel } from "../models/book";
import SearchIcon from "../data/search.png";

export default function SearchBox() {
  const [data, setData] = useState<BookModel[]>([]);
  const [detail, setDetail] = useState("");
  const [searchBox, setSearchBox] = useState("");
  const [booksCache, setBooksCache] = useState<BookModel[]>([]);

  let searchHandler = (e: FormEvent) => {
    e.preventDefault();
    if (searchBox === "") return;
    // Cache all books when searching for a specific book
    setBooksCache(data);
    searchBook(searchBox)
      .then((data) => {
        setData(data);
      })
      .catch((_) => setDetail("No encontramos libros"));
  };

  let searchBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setSearchBox(val);
    // If search string is empty restore the book cache
    if (val === "" && booksCache.length !== 0) {
      setDetail("");
      setData(booksCache);
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={searchHandler} className="search-form">
        <input
          placeholder="Buscar un libro"
          onChange={searchBoxHandler}
          className="search-input"
        />
        <button className="search-button" type="submit">
          <img src={SearchIcon} alt="Buscar" />
        </button>
      </form>
    </div>
  );
}
