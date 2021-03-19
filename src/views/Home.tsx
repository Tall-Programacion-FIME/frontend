import React, {useState, useEffect, FormEvent, ChangeEvent} from "react";
import GridBooks from "../layout/GridBooks";

import { getBooks, searchBook } from "../api/book";
import {BookModel} from "../models/book";
import SearchIcon from "../data/loupe.svg"

export default function Home() {
  const [data, setData] = useState<BookModel[]>([]);
  const [detail, setDetail] = useState("");
  const [searchBox, setSearchBox] = useState("")
  const [booksCache, setBooksCache] = useState<BookModel[]>([]);

  // useEffect Hook, used for async functions
  useEffect(() => {
    let mounted = true;
    getBooks().then(( data ) => {
      if (mounted) {
        data ? setData(data) : setDetail("No hay ningún libro por ahora");
      }
    });
    return () => {
      mounted = false;
    };
  }, [setData]);

  let searchHandler = (e: FormEvent) => {
    e.preventDefault()
    // Cache all books when searching for a specific book
    setBooksCache(data)
    searchBook(searchBox).then(data => {
      setData(data)
    }).catch(_ => setDetail("No encontramos libros"))
  }

  let searchBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value
    setSearchBox(val)
    // If search string is empty restore the book cache
    if (val === "" && booksCache.length !== 0) {
      setDetail("")
      setData(booksCache)
    }
  }

  return (
    <>
      <main className="home-head">
        <h3>Los mejores libros según tu ingeniería</h3>
      </main>
      <div className="form-wrapper">
        <form onSubmit={searchHandler} className="search-form">
          <input placeholder="Buscar un libro" onChange={searchBoxHandler} className="search-input"/>
          <button className="search-button" type="submit"><img src={SearchIcon} alt="Buscar" /></button>
        </form>
      </div>
      <GridBooks data={data} detail={detail}/>;
    </>
  );
}
