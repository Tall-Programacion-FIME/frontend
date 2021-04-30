import React, { useState } from "react";
import getToken from "helpers/getToken";
import { Redirect } from "react-router-dom";
import authStore from "store/Auth";
import userStore from "store/User";
import { getMyInfo } from "../../api/user";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = authStore();

  const Submit = async (e: any) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    const tokens = await getToken(data);
    authStore.setState(tokens);
    const userInfo = await getMyInfo(tokens.access_token);
    userStore.setState(userInfo);
  };

  if (isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <form className="form_fullscreen" onSubmit={Submit}>
      <h2>Inicia Sesión</h2>
      <label htmlFor="email">Email:</label>
      <main className="input_container">
        <input
          type="text"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="email" className="label_name">
          <span className="content_span">Ingresa tu email</span>
        </label>
      </main>
      <label htmlFor="password">Contraseña:</label>
      <main className="input_container">
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="password" className="label_name">
          <span className="content_span">Ingresa tu contraseña</span>
        </label>
      </main>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
