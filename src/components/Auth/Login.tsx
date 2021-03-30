import React from "react";

function Login() {
  return (
    <form className="form_fullscreen">
      <h2>Inicia Sesión</h2>
      <label htmlFor="email">Email:</label>
      <main className="input_container">
        <input type="text" name="email" id="email" required />
        <label htmlFor="email" className="label_name">
          <span className="content_span">Ingresa tu email</span>
        </label>
      </main>
      <label htmlFor="password">Contraseña:</label>
      <main className="input_container">
        <input type="password" name="password" id="password" required />
        <label htmlFor="password" className="label_name">
          <span className="content_span">Ingresa tu contraseña</span>
        </label>
      </main>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default Login;
