import React from "react";
import Cat from "../components/Books/Cat";
import data from "../data/books.json";

export default function Grid() {
  return (
    <main className="grid-home">
      {data.map((nD) => (
        <Cat key={nD._id} data={nD}></Cat>
      ))}
    </main>
  );
}
