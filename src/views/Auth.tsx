import React from "react";
import { useParams, Redirect } from "react-router-dom";

// Model for Route Param
import { ModelAuth } from "../models/routeAuth";

// Import Forms
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";

// Here the code is Executed
function Auth() {
  const { typeAuth }: ModelAuth = useParams();
  switch (typeAuth) {
    case "register":
      return <Register />;
    case "login":
      return <Login />;
    default:
      return <Redirect to="/home" />;
  }
}

export default Auth;
