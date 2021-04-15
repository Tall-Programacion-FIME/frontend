import axios from 'axios';
import {BookModel, BookAPIResponse, BookUploadModel} from "../models/book"

const path = process.env.REACT_APP_PRO_MODE;

export async function getBooks(): Promise<BookModel[]> {
  let response = await axios.get<BookAPIResponse>(path + "book/");
  return response.data.items
}

export async function getBook(_id: number): Promise<BookModel> {
  let response = await axios.get<BookModel>(path + "book/" + _id);
  return response.data
}

export async function postBook(data: BookUploadModel, token: string): Promise<number> {
  let form_data = new FormData()
  form_data.append("name", data.name)
  form_data.append("author", data.author)
  form_data.append("price", data.price)
  form_data.append("cover", data.cover)

	let response = await axios.post<BookUploadModel[]>(
	  path + "book/create",
    form_data,
    {headers: {'Authorization': `Bearer ${token}`}}
  );
	return response.status;
}

export async function updateBook(data: BookModel) {
	let response = await axios.put<BookModel[]>(path + "book/" + data.id, data);
	return response.data;
}

export async function deleteBook(_id: number) {
	let response = await axios.delete<BookModel[]>(path + "book/" + _id);
	return response.data;
}

export async function searchBook(query: string) {
  let response = await axios.get<BookModel[]>(
    path + "book/search/",
    {
      params: {
        q: query
      }
    }
  );
  let books: BookModel[] = response.data
  return books
}
