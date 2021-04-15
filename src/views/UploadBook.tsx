import {useState, ChangeEvent} from "react";

function UploadBook() {
  const FILE_EXTENSIONS = ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "webp"]

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

  return (
    <div className="home-head">
      <h1>{bookName}</h1>
      <form>
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
