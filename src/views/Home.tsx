import React from "react";
import GridBooks from "../layout/GridBooks";

import { getBooks } from "../api/book";

export default async function Home() {
  const data = await getBooks();
  console.log(data.data);
  return (
    <>
      <GridBooks data={data.data}></GridBooks>
    </>
  );
}
