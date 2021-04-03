import React from "react";
import useStore from "../../store/Auth";

function AuthSatisfied() {
  const { access_token, refresh_token, isAuthenticated } = useStore();

  return (
    <div>
      <h1>Get</h1>
      <h1>{access_token}</h1>
      <h2>{refresh_token}</h2>
      <p>""{isAuthenticated}</p>
    </div>
  );
}

export default AuthSatisfied;
