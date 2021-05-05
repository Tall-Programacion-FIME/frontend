import { useState, ChangeEvent, FormEvent } from "react";
import { BookUploadModel } from "models/book";
import { postBook } from "api/book";
import authStore from "store/Auth";
import { useHistory } from "react-router-dom";

import FormLayout from "layout/Forms";

function UploadBook() {
  const FILE_EXTENSIONS = [
    "jpg",
    "jpeg",
    "jpe",
    "jif",
    "jfif",
    "jfi",
    "png",
    "webp",
  ];

  const { access_token } = authStore();
  const history = useHistory();

  let [bookName, setBookName] = useState("");
  let [author, setAuthor] = useState("");
  let [price, setPrice] = useState("");
  let [cover, setCover] = useState<File>();

  let [message, setMessage] = useState("");

  if (!access_token) {
    history.push("/auth/login");
  }

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    let files = e.target.files;
    if (files) {
      let [, extension] = files[0].name.split(".");
      if (!FILE_EXTENSIONS.includes(extension.toLowerCase())) {
        e.target.value = "";
        setMessage("Formato de archivo invalido");
        return;
      }
      setMessage("");
      setCover(files[0]);
      console.log(cover);
    }
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cover) return;

    let book: BookUploadModel = {
      name: bookName,
      author: author,
      price: price,
      cover: cover,
    };

    const [status, book_id] = await postBook(book, access_token);
    if (status !== 200) {
      setMessage("Ha ocurrido un error");
      return;
    }
    history.push(`/book/${book_id}`);
  };

  return (
    <FormLayout>
      <form className="form_fullscreen" onSubmit={handleFormSubmit}>
        <h2>Publica un libro</h2>

        <label htmlFor="book_name">Título del libro:</label>
        <main className="input_container">
          <input
            type="text"
            name="book_name"
            required
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <label htmlFor="book_name" className="label_name">
            <span className="content_span">Título del libro</span>
          </label>
        </main>

        <label htmlFor="author">Autor:</label>
        <main className="input_container">
          <input
            type="text"
            name="author"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label htmlFor="author" className="label_name">
            <span className="content_span">Autor</span>
          </label>
        </main>

        <label htmlFor="price">Precio:</label>
        <main className="input_container">
          <input
            type="number"
            name="price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="price" className="label_name">
            <span className="content_span">Precio</span>
          </label>
        </main>

        <label htmlFor="cover">Portada:</label>
        <main className="input_container">
          <input type="file" name="cover" required onChange={handleFile} />
        </main>
        <p style={{ color: "red" }}>{message}</p>

        <button type="submit">Publicar</button>
      </form>
    </FormLayout>
  );
}

export default UploadBook;
