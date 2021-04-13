import {useParams} from "react-router-dom"
import {BookDetailParams} from "../models/routeBookDetail";
import {getBook} from "../api/book";
import {useEffect, useState} from "react";
import {BookModel} from "../models/book";

function BookDetail() {
  let [ book, setBook ] = useState<BookModel>()
  let { id } = useParams<BookDetailParams>();

  useEffect(() => {
    getBook(parseInt(id)).then(result => {
      setBook(result)
    })
  })
  return (
    <div className="detail-layout">
      <img src={book?.cover_url} alt={book?.name}/>
      <aside>
        <h2>{book?.name}</h2>
        <span>Precio: ${book?.price}</span>
      </aside>
    </div>
  );
}

export default BookDetail;
