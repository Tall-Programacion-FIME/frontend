import React from "react";
import { user } from "../api/user";

const data = user();

const About = () => {
  return (
    <>
      <h1>About this app</h1>
    </>
  );
};

export default About;
