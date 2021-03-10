import React from "react";

export default function Cat({ data }: any) {
  return (
    <section className="book">
      <p>Nombre: {data.name}</p>
      <p>Autor: {data.author}</p>
      <strong>Precio: {data.price}</strong>
      <img src={data.cover_url} alt="" />
    </section>
  );
}
