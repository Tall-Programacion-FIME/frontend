import React from "react";
import { getBooks } from "../api/book";

const data = getBooks();

const About = () => {
  console.log(data);
  return (
    <>
      <h1>About this app</h1>
    </>
  );
};

export default About;
