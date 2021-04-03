import React from "react";
import useStore from "../../store/Auth";

const saveOnLocal = (access_token: string, refresh_token: string) => {
  window.localStorage.setItem(access_token, access_token);
  window.localStorage.setItem(refresh_token, refresh_token);
};

function AuthSatisfied() {
  const { access_token, refresh_token, isAuthenticated } = useStore();
  if (isAuthenticated) {
    saveOnLocal(access_token, refresh_token);
  }

  return (
    <div>
      <h1>Get</h1>
      <h1>{access_token}</h1>
      <h2>{refresh_token}</h2>
      <p>{isAuthenticated}</p>
    </div>
  );
}

export default AuthSatisfied;
