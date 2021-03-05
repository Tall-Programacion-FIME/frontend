import React from "react";

export default function Cat({ data }: any) {
  return (
    <section className="cat">
      <p>{data.text}</p>
      <strong>{data.price}</strong>
      <img src={data.image} alt="" />
    </section>
  );
}
