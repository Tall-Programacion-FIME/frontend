import axios from 'axios';
	
const path = process.env.REACT_APP_PRO_MODE; 

export async function user() {
	let books = await axios.get(path + "book/");
	console.log(books);

	return books;
}
