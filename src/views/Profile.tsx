import React, { useEffect } from "react";
import { getMyInfo } from "../api/user";
import useStore from "../store/Auth";
import userStore from "../store/User";

function Profile() {
  const { access_token } = useStore();
  const { name, email, books_for_sale } = userStore();

  // useEffect Hook, used for async functions
  useEffect(() => {
    let mounted = true;
    // Check if user details are already cached
    if (!name) {
      console.log("Requesting");
      (async () => {
        const user_info = await getMyInfo(access_token);
        if (mounted && user_info) {
          userStore.setState(user_info);
        }
      })();
    }
    return () => {
      mounted = false;
    };
  }, [access_token]);

  return (
    <div className="my-books">
      <div className="form_fullscreen">
        <h1>Nombre: {name}</h1>
        <h2>Email: {email}</h2>
      </div>
      <table>
        <caption>Mis libros</caption>
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
            <th scope="col">Precio</th>
            <th scope="col"/>
          </tr>
        </thead>
        <tbody>
          {books_for_sale.map(book => (
            <tr>
              <td data-label="Titulo">{book.name}</td>
              <td data-label="Autor">{book.author}</td>
              <td data-label="Precio">{book.price}</td>
              <td>
                <button className="delete">Eliminar</button>
                <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
