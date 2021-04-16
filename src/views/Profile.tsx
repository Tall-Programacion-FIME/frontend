import React, { useEffect } from "react";
import { getMyInfo } from "../api/user";
import useStore from "../store/Auth";
import userStore from "../store/User";

function Profile() {
  const { access_token } = useStore();
  const { name, id, email } = userStore();

  // useEffect Hook, used for async functions
  useEffect(() => {
    const fetchData = async () => {
      const user_info = await getMyInfo(access_token);
      if (mounted && user_info) {
        userStore.setState(user_info);
      }
    };
    let mounted = true;
    // noinspection JSIgnoredPromiseFromCall
    fetchData();
    return () => {
      mounted = false;
    };
  }, [access_token]);

  return (
    <div className="form_fullscreen">
      <h1>Nombre: {name}</h1>
      <h2>Id: {id}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
}

export default Profile;
