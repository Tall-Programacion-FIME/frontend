import axios from 'axios';
import {BookModel} from "../models/book"

const path = process.env.REACT_APP_PRO_MODE;

export async function getBooks(): Promise<BookModel[]> {
  let response = await axios.get<BookModel[]>(path + "book/");
  return response.data
}

export async function getBook(_id: number): Promise<BookModel[]> {
  let response = await axios.get<BookModel[]>(path + "book/" + _id);
  return response.data
}

export async function postBook(data: BookModel) {
	let response = await axios.post<BookModel[]>(path + "book/create", data);
	return response.data;
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
