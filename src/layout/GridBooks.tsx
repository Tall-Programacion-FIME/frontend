import React from "react";
import Cat from "components/Books/Cat";
import { BookModel } from "models/book";

export default function Grid({ books }: { books: BookModel[] }) {
  return (
    <main className="grid-home">
      {books.map((nD) => (
        <Cat data={nD} key={nD.id} />
      ))}
    </main>
  );
}
