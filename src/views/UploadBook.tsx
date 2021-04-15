import {useState} from "react";

function UploadBook() {
  let [bookName, setBookName] = useState("")
  let [author, setAuthor] = useState("")
  let [price, setPrice] = useState(0)
  let [cover, setCover] = useState("")

  return (
    <div className="home-head">
      <h1>{bookName}</h1>
      <form>
        <label>
          Nombre del libro:
          <input type="text" onChange={(e) => setBookName(e.target.value)}/>
        </label>
        <label>
          Autor:
          <input type="text" onChange={(e) => setAuthor(e.target.value)}/>
        </label>
        <label>
          Precio:
          <input type="text" onChange={(e) => setPrice(parseInt(e.target.value))}/>
        </label>
        <label>
          Imagen de portada:
          {/*<input type="file" value={cover} onChange={(e) => setCover(e.target.files[0])}/>*/}
        </label>
      </form>
    </div>
  );
}

export default UploadBook;
