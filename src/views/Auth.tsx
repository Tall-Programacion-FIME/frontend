import React from "react";
import { Redirect, useParams } from "react-router-dom";

// Model for Route Param
import { ModelAuth } from "../models/routeAuth";

// Import Forms
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import Logout from "../components/Auth/Logout";

import Forms from "../layout/Forms";

// Here the code is Executed
function Auth() {
  const { typeAuth }: ModelAuth = useParams();
  switch (typeAuth) {
    case "register":
      return (
        <Forms>
          <Register />
        </Forms>
      );
    case "login":
      return (
        <Forms>
          <Login />
        </Forms>
      );
    case "logout":
      return (
        <Forms>
          <Logout />
        </Forms>
      );
    default:
      return <Redirect to="/home" />;
  }
}

export default Auth;
