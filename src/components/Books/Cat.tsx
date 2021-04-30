import React, { MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { BookModel } from "models/book";

export default function Cat({ data }: { data: BookModel }) {
  const history = useHistory();

  let handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    history.push(`/book/${data.id}`);
  };
  return (
    <section className="book" onClick={handleClick}>
      <p>Nombre: {data.name}</p>
      <p>Autor: {data.author}</p>
      <strong>Precio: {data.price}</strong>
      <img src={data.cover_url} alt="" />
    </section>
  );
}
