import React from "react";

function Login() {
  return (
    <form className="form form_login">
      <h2>Inicia Sesión</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Ingresa tu email"
      />
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Ingresa tu contraseña"
      />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
