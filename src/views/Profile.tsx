import React, { useEffect, useState } from "react";
import { getMyInfo } from "../api/user";
import useStore from "../store/Auth";
import userStore from "../store/User";
import { deleteBook } from "../api/book";

function Profile() {
  const { access_token } = useStore();
  const { name, email, books_for_sale, updateBooks } = userStore();
  const [editing, setEditing] = useState<number | null>(null);

  const [currentBook, setCurrentBook] = useState({
    name: "",
    author: "",
    price: 0,
  });

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
    let book = books_for_sale.reduce((acc, curr) =>
      curr.id === book_id ? curr : acc
    );
    if (book !== null) {
      setCurrentBook(book);
    }
  };

  const handleSaveBook = () => {
    let updatedBooks = books_for_sale.map((value) =>
      value.id === editing ? { ...value, ...currentBook } : value
    );
    updateBooks(updatedBooks);
    setEditing(null);
  };

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
                    <a href={`/book/${book.id}`}>
                      <img
                        style={{ height: "1rem", width: "auto" }}
                        alt={book.name}
                        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDEzYTUgNSAwIDAgMCA3LjU0LjU0bDMtM2E1IDUgMCAwIDAtNy4wNy03LjA3bC0xLjcyIDEuNzEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xNCAxMWE1IDUgMCAwIDAtNy41NC0uNTRsLTMgM2E1IDUgMCAwIDAgNy4wNyA3LjA3bDEuNzEtMS43MSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+"
                      />
                    </a>
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
                      Eliminar
                    </button>
                    <button onClick={() => handleEditBook(book.id)}>
                      Editar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Profile;
