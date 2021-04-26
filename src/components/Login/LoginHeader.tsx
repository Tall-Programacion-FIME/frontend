import React from "react";
import { Link } from "react-router-dom";
import useStore from "../../store/Auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotAuth() {
  return (
    <div className="login_header">
      <Link to="/auth/register">
        <button className="primary">
          <h4>Registrate</h4>
        </button>
      </Link>
      <Link to="/auth/login">
        <button className="secondary">
          <h5>Inicia Sesión</h5>
        </button>
      </Link>
    </div>
  );
}

function IsAuth() {
  return (
    <div className="login_header">
      <Link to="/upload">
        <button className="secondary">
					<FontAwesomeIcon icon="upload" />
        </button>
      </Link>
      <Link to="/profile">
        <button className="secondary">
					<FontAwesomeIcon icon="user" />
        </button>
      </Link>
      <Link to="/auth/logout">
        <button className="primary">
          <h4>Cerrar Sesión</h4>
        </button>
      </Link>
    </div>
  );
}

function LoginHeader() {
  const { isAuthenticated } = useStore();
  if (isAuthenticated) {
    return <IsAuth />;
  } else {
    return <NotAuth />;
  }
}

export default LoginHeader;
