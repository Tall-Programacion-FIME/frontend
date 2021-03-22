import React, { useEffect } from "react";
import GridBooks from "../layout/GridBooks";
import { getBooks } from "../api/book";
//import { BookModel } from "../models/book";
import useStore from "../store/SearchBooks";

import WithoutBooks from "../components/Books/WithoutBooks";

export default function Home() {
  const { books, areThereBooks } = useStore();

  // useEffect Hook, used for async functions
  useEffect(() => {
    let mounted = true;
    getBooks().then((data) => {
      if (mounted) {
        data
          ? useStore.setState({ books: data })
          : useStore.setState({ areThereBooks: false });
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <main className="home-head">
        <h3>Los mejores libros según tu ingeniería</h3>
      </main>
      {areThereBooks ? <GridBooks books={books} /> : <WithoutBooks />}
    </>
  );
}
