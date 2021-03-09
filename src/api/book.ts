import axios from 'axios';

const path = process.env.REACT_APP_PRO_MODE; 

export async function getBooks() {
	let books = await axios.get(path + "book/");
	return books;
}

/*

export async function postBook(info: any) {
	let book = info
	await axios.post(book, path + "book/");
}

*/
