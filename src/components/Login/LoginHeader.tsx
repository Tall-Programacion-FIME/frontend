import React from "react";
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <div className="login_header">
      <Link to="/login">
        <button className="primary">Registrate Ahora!</button>
      </Link>
      <Link to="/login">
        <button className="secondary">Inicia Sesión</button>
      </Link>
    </div>
  );
}

export default LoginHeader;
