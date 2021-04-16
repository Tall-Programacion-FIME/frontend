import { useParams } from "react-router-dom";
import { BookDetailParams } from "../models/routeBookDetail";
import { getBook } from "../api/book";
import { useEffect, useState } from "react";
import { BookModel } from "../models/book";
import { UserModel } from "../models/user";
import { getUser } from "../api/user";

function BookDetail() {
  let [book, setBook] = useState<BookModel>();
  let [user, setUser] = useState<UserModel>();
  let { id } = useParams<BookDetailParams>();

  useEffect(() => {
    const fetchData = async () => {
      if (mounted) {
        let book = await getBook(parseInt(id));
        setBook(book);
        let user = await getUser(book.owner_id);
        setUser(user);
      }
    };
    let mounted = true;
    // noinspection JSIgnoredPromiseFromCall
    fetchData();
    return () => {
      mounted = false;
    };
  }, [id]);

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

          <div style={{ marginBottom: "2rem" }} />

          <h1>Datos del vendedor</h1>
          <hr />
          <h2>{user?.name}</h2>
          <h4>Contacto: {user?.email}</h4>
          <div style={{ marginBottom: "2rem" }} />
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
