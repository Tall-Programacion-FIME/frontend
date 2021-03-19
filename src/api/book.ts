import axios from 'axios';
import {BookModel} from "../models/book"

const path = process.env.REACT_APP_PRO_MODE;

export async function getBooks(): Promise<BookModel[]> {
  let books: BookModel[]
  let response = await axios.get<BookModel[]>(path + "book/");
  books = response.data
  return books
}

export async function searchBook(query: string) {
  return await axios.get(
    path + "book/search/",
    {
      params: {
        q: query
      }
    }
  );
}

/*

export async function postBook(info: any) {
	let book = info
	await axios.post(book, path + "book/");
}

*/
