import React from "react";
import useStore from "../../store/Auth";
import { Redirect } from "react-router-dom";

const saveOnLocal = (access_token: string, refresh_token: string) => {
  window.localStorage.setItem("access_token", access_token);
  window.localStorage.setItem("refresh_token", refresh_token);
};

const loadOnState = () => {
  const access = window.localStorage.getItem("access_token");
  const refresh = window.localStorage.getItem("refresh_token");
  if (!access || !refresh) {
    return 0;
  }
  useStore.setState({
    access_token: access,
    refresh_token: refresh,
    isAuthenticated: true,
  });
};

function AuthSatisfied() {
  const { access_token, refresh_token, isAuthenticated } = useStore();
  if (isAuthenticated) {
    saveOnLocal(access_token, refresh_token);
  } else {
    loadOnState();
  }

  return <Redirect to="/home" />;
}

export default AuthSatisfied;
