import React, { useEffect, useState } from "react";
import { getMyInfo } from "api/user";
import useStore from "store/Auth";
import userStore from "store/User";
import { deleteBook, updateBook } from "api/book";
import FormLayout from "../layout/Profile";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  const history = useHistory();
  const { access_token, isAuthenticated } = useStore();
  const { name, email, books_for_sale, updateBooks } = userStore();
  const [editing, setEditing] = useState<number | null>(null);

  const [currentBook, setCurrentBook] = useState({
    name: "",
    author: "",
    price: 0,
  });

  if (!isAuthenticated) history.push("/home");

  // useEffect Hook, used for async functions
  useEffect(() => {
    let mounted = true;
    // Check if user details are already cached
    if (!name) {
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
  }, [access_token, name]);

  const handleDeleteBook = async (book_id: number) => {
    await deleteBook(book_id, access_token);
    let new_books = books_for_sale.filter((book) => book.id !== book_id);
    updateBooks(new_books);
  };

  const handleEditBook = async (book_id: number) => {
    setEditing(book_id);
    let book = books_for_sale.find((book) => book.id === book_id);
    if (book !== undefined) {
      setCurrentBook(book);
    }
  };

  const handleSaveBook = async () => {
    let updatedBooks = books_for_sale.map((value) =>
      value.id === editing ? { ...value, ...currentBook } : value
    );
    updateBooks(updatedBooks);
    if (editing) {
      await updateBook(currentBook, editing, access_token);
    }
    setEditing(null);
  };

  return (
    <FormLayout>
      <div className="settings_profile">
        <h1>{name}</h1>
        <p>{email}</p>
        <Link to="/home">Lista de Libros</Link>
        <Link to="/upload">Añadir un Libro</Link>
        <Link to="/auth/logout">Cerrar Sesión</Link>
      </div>
      <div className="my-books">
        <table>
          <caption>Mis libros</caption>
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Precio</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {books_for_sale.map((book) => (
              <tr key={book.id}>
                <td data-label="Titulo">
                  {editing === book.id ? (
                    <>
                      <input
                        type="text"
                        defaultValue={currentBook.name}
                        onChange={(change) =>
                          setCurrentBook({
                            ...currentBook,
                            name: change.target.value,
                          })
                        }
                      />
                    </>
                  ) : (
                    <>
                      <span style={{ paddingRight: "2px" }}>{book.name}</span>
                      <Link to={`/book/${book.id}`}>
                        <FontAwesomeIcon icon="link" />
                      </Link>
                    </>
                  )}
                </td>
                <td data-label="Autor">
                  {editing === book.id ? (
                    <>
                      <input
                        type="text"
                        defaultValue={currentBook.author}
                        onChange={(change) =>
                          setCurrentBook({
                            ...currentBook,
                            author: change.target.value,
                          })
                        }
                      />
                    </>
                  ) : (
                    <span>{book.author}</span>
                  )}
                </td>
                <td data-label="Precio">
                  {editing === book.id ? (
                    <>
                      <input
                        type="number"
                        defaultValue={currentBook.price}
                        onChange={(change) =>
                          setCurrentBook({
                            ...currentBook,
                            price: parseInt(change.target.value),
                          })
                        }
                      />
                    </>
                  ) : (
                    <span>{book.price}</span>
                  )}
                </td>
                <td>
                  {editing === book.id ? (
                    <button onClick={() => handleSaveBook()}>Guardar</button>
                  ) : (
                    <>
                      <button
                        className="delete"
                        onClick={() => handleDeleteBook(book.id)}
                      >
                        <FontAwesomeIcon icon="trash-alt" />
                      </button>
                      <button onClick={() => handleEditBook(book.id)}>
                        <FontAwesomeIcon icon="edit" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FormLayout>
  );
}

export default Profile;
