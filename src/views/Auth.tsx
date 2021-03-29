import React from "react";
import { useParams } from "react-router-dom";

import { ModelAuth } from "../models/routeAuth";

function Auth() {
  const { typeAuth }: ModelAuth = useParams();
  switch (typeAuth) {
    case "register":
      return Register();
    case "login":
      return Login();
    default:
      return <h2>Hi</h2>;
  }
}

function Register() {
  return (
    <>
      <h2>Registrate</h2>
    </>
  );
}

function Login() {
  return (
    <>
      <h2>Inicia Sesión</h2>
    </>
  );
}

export default Auth;
