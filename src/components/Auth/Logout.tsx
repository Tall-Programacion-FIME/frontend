import React from "react";
import { Redirect } from "react-router-dom";
import useStore from "../../store/Auth";

function logout() {
  const newState = {
    access_token: "",
    refresh_token: "",
    isAuthenticated: false,
  };
  useStore.setState(newState);
  return <Redirect to="/home" />;
}

export default logout;
