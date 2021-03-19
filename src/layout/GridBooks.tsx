import React from "react";
import Cat from "../components/Books/Cat";
import {BookModel} from "../models/book";

export default function Grid({data, detail}: { data: BookModel[], detail: string }) {
  return (
    detail !== ""
      ? <h1>{detail}</h1>
      : (<main className="grid-home">
        {data.map(nD => (
          <Cat data={nD}/>
        ))}
      </main>)
  );
}
