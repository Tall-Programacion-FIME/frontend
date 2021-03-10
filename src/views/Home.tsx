import React, { useState, useEffect } from "react";
import GridBooks from "../layout/GridBooks";

import { getBooks } from "../api/book";

export default function Home() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState("");

  // useEffect Hook, used for async functions
  useEffect(() => {
    let mounted = true;
    getBooks().then(({ data }) => {
      if (mounted) {
        data ? setData(data) : setDetail("No hay ningún libro por ahora");
      }
    });
    return () => {
      mounted = false;
    };
  }, [setData]);

  return (
    <>
      <main className="home-head">
        <h3>Los mejores libros según tu ingeniería</h3>
      </main>
      <GridBooks data={data} detail={detail}></GridBooks>;
    </>
  );
}
