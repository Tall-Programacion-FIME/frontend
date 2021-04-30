import React, { ChangeEvent, useEffect, useState } from "react";

import { searchBook } from "api/book";
import { BookModel } from "models/book";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBox() {
  const [searchBox, setSearchBox] = useState("");
  const [booksCache, setBooksCache] = useState<BookModel[]>([]);

  useEffect(() => {
    let searchBooks = async () => {
      if (searchBox === "") {
        setBooksCache([]);
        return;
      }
      let books = await searchBook(searchBox);
      setBooksCache(books);
    };

    const timeoutId = setTimeout(() => searchBooks(), 500);
    return () => clearTimeout(timeoutId);
  }, [searchBox]);

  let searchBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    setSearchBox(val);
  };

  return (
    <div className="form-wrapper">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="search-form"
      >
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
          {booksCache.map((book) => (
            <a href={`/book/${book.id}`} key={book.id}>
              {book.name} - {book.author}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
