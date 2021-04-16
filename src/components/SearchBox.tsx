import React, { useState, FormEvent, ChangeEvent } from "react";

import { searchBook } from "../api/book";
import { BookModel } from "../models/book";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useStore from "../store/SearchBooks";

export default function SearchBox() {
  const { books } = useStore();
  //const [data, setData] = useState<BookModel[]>([]);
  //const [detail, setDetail] = useState("");
  const [searchBox, setSearchBox] = useState("");
  const [booksCache, setBooksCache] = useState<BookModel[]>([]);

  let searchHandler = (e: FormEvent) => {
    e.preventDefault();
    if (searchBox === "") return;
    // Cache all books when searching for a specific book
    setBooksCache(books);
    searchBook(searchBox)
      .then((data) => {
        useStore.setState({ books: data });
      })
      .catch((_) => useStore.setState({ areThereBooks: false }));
  };

  let searchBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setSearchBox(val);
    // If search string is empty restore the book cache
    if (val === "" && booksCache.length !== 0) {
      useStore.setState({ areThereBooks: true });
      useStore.setState({ books: booksCache });
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
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
      <div className="dropdown">
          <div className="dropdown-content">
            <a href="/">Link 1</a>
            <a href="/">Link 2</a>
            <a href="/">Link 3</a>
            <a href="/">Link 3</a>
            <a href="/">Link 3</a>
          </div>
      </div>
    </div>
  );
}
