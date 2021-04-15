import {useState, ChangeEvent, FormEvent} from "react";
import {BookUploadModel} from "../models/book";
import {postBook} from "../api/book";
import useStore from "../store/Auth";

function UploadBook() {
  const FILE_EXTENSIONS = ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "webp"]

  const {access_token} = useStore()
  let [bookName, setBookName] = useState("")
  let [author, setAuthor] = useState("")
  let [price, setPrice] = useState("")
  let [cover, setCover] = useState<File>()

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files
    if (files) {
      let [, extension] = files[0].name.split(".")
      if (!FILE_EXTENSIONS.includes(extension.toLowerCase())) {
        console.log("Format not supported") // TODO Handle invalid image type
        e.target.value = ""
        return
      }
      setCover(files[0])
      console.log(cover)
    }
  }

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!bookName || !author || !price || !cover) {
      console.log("Llena el formulario") // TODO Send message to user
      return;
    }
    let book: BookUploadModel = {
      name: bookName,
      author: author,
      price: price,
      cover: cover
    }

    const status = await postBook(book, access_token)
    if (status !== 200) {
      // TODO Handle failure
    }
  }

  return (
    <div className="home-head">
      <h1>{bookName}</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Nombre del libro:
          <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)}/>
        </label>
        <label>
          Autor:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
        </label>
        <label>
          Precio:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </label>
        <label>
          Imagen de portada:
          <input type="file" onChange={handleFile}/>
        </label>
        <input type="submit"/>
      </form>
    </div>
  );
}

export default UploadBook;
