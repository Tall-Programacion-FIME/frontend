import React from "react";
import { BookModel } from "../../models/book";

export default function Cat({ data }: { data: BookModel }) {
  return (
    <section className="book">
      <p>Nombre: {data.name}</p>
      <p>Autor: {data.author}</p>
      <strong>Precio: {data.price}</strong>
      <img src={data.cover_url} alt="" />
    </section>
  );
}
