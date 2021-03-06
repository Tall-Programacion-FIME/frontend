import { useHistory, useParams } from "react-router-dom";
import { BookDetailParams } from "models/routeBookDetail";
import { deleteBook, getBook, sellBook } from "api/book";
import React, { useEffect, useState } from "react";
import { BookModel } from "models/book";
import { UserModel } from "models/user";
import { banUser, getUser, getMyInfo } from "api/user";
import userStore from "store/User";
import authStore from "store/Auth";

function SellComponent({
  userEmail,
  email,
  id,
  access_token,
}: {
  userEmail: string | undefined;
  email: string;
  id: number;
  access_token: string;
}) {
  const history = useHistory();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await sellBook(id, access_token);
    history.push("/home");
  };
  if (userEmail === email) {
    return (
      <form onSubmit={handleSubmit}>
        <button className="sell">Vender</button>
      </form>
    );
  } else {
    return <></>;
  }
}

function BookDetail() {
  let [book, setBook] = useState<BookModel>();
  let [user, setUser] = useState<UserModel>();
  const [email, setEmail] = useState("");
  let { id } = useParams<BookDetailParams>();

  let { is_admin } = userStore();
  let { access_token } = authStore();

  const history = useHistory();

  useEffect(() => {
    let mounted = true;
    (async () => {
      if (mounted) {
        let book = await getBook(parseInt(id));
        setBook(book);
        let user = await getUser(book.owner_id);
        setUser(user);
        const user_info = await getMyInfo(access_token);
        if (user_info) {
          setEmail(user_info.email);
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, [id, access_token]);

  const handleDeleteBook = async () => {
    let confirmation = window.confirm("Deseas borrar este libro");
    if (confirmation) {
      await deleteBook(parseInt(id), access_token);
      history.push("/home");
    }
  };

  const handleBanUser = async () => {
    console.log(id);
    let confirmation = window.confirm("¿Deseas banear a este usuario?");
    if (confirmation) {
      if (book) {
        await banUser(book.owner_id, access_token);
      }
      history.push("/home");
    }
  };

  return (
    <div className="detail-layout">
      <div className="card">
        <div className="img-container">
          <img src={book?.cover_url} alt={`${book?.name} - ${book?.author}`} />
        </div>
        <div className="product-content">
          <h2 className="product-title">{book?.name}</h2>
          <h2>
            Autor(es): <span>{book?.author}</span>
          </h2>
          <span>
            Precio: <b>$ {book?.price}</b>
          </span>

          <h1>Datos del vendedor</h1>
          <hr />
          <h2>{user?.name}</h2>
          <h4>Contacto: {user?.email}</h4>
          <div style={{ marginBottom: "2rem" }} />
          <SellComponent
            email={email}
            userEmail={user?.email}
            access_token={access_token}
            id={parseInt(id)}
          />
          {is_admin ? (
            <>
              <button className="delete" onClick={handleDeleteBook}>
                Borrar libro
              </button>
              <button className="delete" onClick={handleBanUser}>
                Banear usuario
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
