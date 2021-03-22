import React from "react";
import Cat from "../components/Books/Cat";
import { BookModel } from "../models/book";

export default function Grid({ data }: { data: BookModel[] }) {
  return (
    <main className="grid-home">
      {data.map((nD) => (
        <Cat data={nD} key={nD.id} />
      ))}
    </main>
  );
}
