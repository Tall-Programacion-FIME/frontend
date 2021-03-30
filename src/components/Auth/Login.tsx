import React from "react";

function Login() {
  return (
    <form className="form form_login">
      <h2>Inicia Sesión</h2>
      <label htmlFor="email">Email:</label>
      <main className="input_container">
        <span className="content_span">Ingresa tu email</span>
        <input type="text" name="email" id="email" />
      </main>
      <label htmlFor="password">Contraseña:</label>
      <main className="input_container">
        <span className="content_span">Ingresa tu contraseña</span>
        <input type="password" name="password" id="password" />
      </main>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
