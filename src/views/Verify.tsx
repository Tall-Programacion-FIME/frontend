import * as React from "react";
import { useParams } from "react-router-dom";

type VerifyProps = {
  token: string;
};

function Verify() {
  const { token }: VerifyProps = useParams();
  return (
    <>
      <h1>Verify</h1>
      <p>{token}</p>
    </>
  );
}

export default Verify;
