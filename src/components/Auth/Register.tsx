import React from "react";

function Register() {
  return (
    <form className="form form_register">
      <h2>Registrate</h2>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ingresa tu Nombre"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
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
      <label htmlFor="confirm-password">Confirmar Contraseña:</label>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        placeholder="Ingresa tu contraseña"
      />
      <input type="checkbox" name="terms" id="terms" />
      <label htmlFor="terms">Acepto los términos y condiciones</label>
      <button type="submit">Regístrate</button>
    </form>
  );
}

export default Register;
