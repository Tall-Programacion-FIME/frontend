import axios from 'axios';
import {BookModel} from "../models/book"

const path = process.env.REACT_APP_PRO_MODE;

export async function getBooks(): Promise<BookModel[]> {
  let response = await axios.get<BookModel[]>(path + "book/");
  return response.data
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
