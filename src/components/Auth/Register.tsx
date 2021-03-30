import React from "react";

function Register() {
  return (
    <form className="form_fullscreen">
      <h2>Registrate</h2>
      <label htmlFor="name">Nombre:</label>
      <main className="input_container">
        <input type="text" name="name" id="name" required />
        <label htmlFor="name" className="label_name">
          <span className="content_span">Ingresa tu nombre</span>
        </label>
      </main>
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
          <span className="content_span">Ingresa tu Contraseña</span>
        </label>
      </main>
      <label htmlFor="confirm-password">Confirmar Contraseña:</label>
      <main className="input_container">
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          required
        />
        <label htmlFor="confirm-password" className="label_name">
          <span className="content_span">Confirma tu Contraseña</span>
        </label>
      </main>
      <input type="checkbox" name="terms" id="terms" />
      <label htmlFor="terms">Acepto los términos y condiciones</label>
      <button type="submit">Regístrate</button>
    </form>
  );
}

export default Register;
