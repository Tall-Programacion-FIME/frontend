import { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { postRegister } from "api/auth";
import { RegisterModel } from "models/user";
import useStore from "store/MessageState";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [redirect, setRedirect] = useState(false);

  const Submit = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPass) {
      return useStore.setState({
        isMessage: true,
        isPermanent: true,
        message: "Contraseñas no coinciden",
        typeMessage: "error",
      });
    }
    const data: RegisterModel = {
      name,
      email,
      password,
    };
    await postRegister(data);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/auth/login" />;
  }

  return (
    <form className="form_fullscreen" onSubmit={Submit}>
      <h2>Registrate</h2>
      <label htmlFor="name">Nombre:</label>
      <main className="input_container">
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="name" className="label_name">
          <span className="content_span">Ingresa tu nombre</span>
        </label>
      </main>
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
          <span className="content_span">Ingresa tu Contraseña</span>
        </label>
      </main>
      <label htmlFor="confirm-password">Confirmar Contraseña:</label>
      <main className="input_container">
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          onChange={(e) => setConfirmPass(e.target.value)}
          required
        />
        <label htmlFor="confirm-password" className="label_name">
          <span className="content_span">Confirma tu Contraseña</span>
        </label>
      </main>
      <input type="checkbox" name="terms" id="terms" />
      <label htmlFor="terms">
        Acepto los{" "}
        <Link to="/terms" className="link">
          términos y condiciones
        </Link>
      </label>
      <button type="submit">Regístrate</button>
    </form>
  );
}

export default Register;
