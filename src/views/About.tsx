import React from "react";
import { getBooks } from "../api/book";

const About = async () => {
  const data = await getBooks();
  console.log(data);
  return (
    <>
      <h1>About this app</h1>
    </>
  );
};

export default About;
