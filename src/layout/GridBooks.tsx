import React from "react";
import Cat from "../components/Books/Cat";
//import data from "../data/books.json";

export default function Grid({ data }: any) {
  return (
    <main className="grid-home">
      {data.map((nD: any) => (
        <Cat key={nD._id} data={nD}></Cat>
      ))}
    </main>
  );
}
