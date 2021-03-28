import React from "react";
import { Link } from "react-router-dom";

function LoginHeader() {
  return (
    <div className="login_header">
      <Link to="/login">
        <button className="primary">
          <h4>Registrate</h4>
        </button>
      </Link>
      <Link to="/login">
        <button className="secondary">
          <h5>Inicia Sesión</h5>
        </button>
      </Link>
    </div>
  );
}

export default LoginHeader;
