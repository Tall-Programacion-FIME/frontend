import {useParams} from "react-router-dom"
import {BookDetailParams} from "../models/routeBookDetail";
import {getBook} from "../api/book";
import {useEffect, useState} from "react";
import {BookModel} from "../models/book";
import {UserModel} from "../models/user";
import {getUser} from "../api/user";

function BookDetail() {
  let [book, setBook] = useState<BookModel>()
  let [user, setUser] = useState<UserModel>()
  let {id} = useParams<BookDetailParams>();

  useEffect(() => {
    const fetchData = async () => {
      let book = await getBook(parseInt(id));
      setBook(book)
      let user = await getUser(book.owner_id)
      setUser(user)
    }
    // noinspection JSIgnoredPromiseFromCall
    fetchData();
  }, [id])

  return (
    <div className="detail-layout">
      <img src={book?.cover_url} alt={book?.name}/>
      <aside>
        <h2>{book?.name}</h2>
        <p>Precio: <b>{book?.price}</b></p>
        <p>Autor: {book?.author}</p>
        <p>Vendido por: {user?.name} ({user?.email})</p>
      </aside>
    </div>
  );
}

export default BookDetail;
