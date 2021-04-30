import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import FormLayout from "../layout/Forms";

const Terms = () => {
  const [redirect, setRedirect] = useState(false);
  const Submit = (e: any) => {
    e.preventDefault();
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/auth/register" />;
  }

  return (
    <FormLayout>
      <form className="form_fullscreen" onSubmit={Submit}>
        <h2>Términos y condiciones</h2>
        <p>
          Somos capaces de hacer con tus datos todo lo que queramos Pero no te
          preocupes, los trataremos de cuidar siempre
        </p>
        <button>Aceptar</button>
      </form>
    </FormLayout>
  );
};

export default Terms;
