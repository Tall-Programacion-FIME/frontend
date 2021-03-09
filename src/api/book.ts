import axios from 'axios';
	
const path = process.env.REACT_APP_PRO_MODE; 

export async function getBooks() {
	let books = await axios.get(path + "book/");
	return books;
}
