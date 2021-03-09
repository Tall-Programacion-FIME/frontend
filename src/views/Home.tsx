import React, { useState, useEffect } from "react";
import GridBooks from "../layout/GridBooks";

import { getBooks } from "../api/book";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getBooks().then(({ data }) => setData(data));
  }, [setData]);

  console.log(data);
  return (
    <>
      <GridBooks data={data}></GridBooks>
    </>
  );
}
