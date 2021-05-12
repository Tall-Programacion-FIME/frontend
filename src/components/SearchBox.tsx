import React, { useEffect, useState } from "react";

import { BookModel } from "models/book";
import bookStore from "store/SearchBooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBox() {
  const [searchBox, setSearchBox] = useState("");
  const [booksCache, setBooksCache] = useState<BookModel[]>([]);
  let { books } = bookStore();

  useEffect(() => {
    let searchBooks = async () => {
      if (searchBox === "") {
        setBooksCache([]);
        return;
      }
      let foundBooks = books.filter(
        ({ name, author }) =>
          name.toLowerCase().includes(searchBox.toLocaleLowerCase()) ||
          author.toLowerCase().includes(searchBox.toLowerCase())
      );
      setBooksCache(foundBooks);
    };

    const timeoutId = setTimeout(() => searchBooks(), 500);
    return () => clearTimeout(timeoutId);
  }, [searchBox]);

  return (
    <div className="form-wrapper">
      <form
        onSubmit={(event) => event.preventDefault()}
        className="search-form"
      >
        <input
          placeholder="Buscar un libro"
          onChange={(e) => setSearchBox(e.target.value)}
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
