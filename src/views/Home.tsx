import React, { useEffect } from "react";
import GridBooks from "../layout/GridBooks";
import { getBooks } from "../api/book";
//import { BookModel } from "../models/book";
import useStore from "../store/SearchBooks";

export default function Home() {
  const { data, detail } = useStore();

  // useEffect Hook, used for async functions
  useEffect(() => {
    let mounted = true;
    getBooks().then((data) => {
      if (mounted) {
        data
          ? useStore.setState({ data })
          : useStore.setState({ detail: "No hay ningún libro por ahora" });
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
      <GridBooks data={data} detail={detail} />;
    </>
  );
}
