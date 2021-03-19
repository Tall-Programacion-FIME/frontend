import axios from 'axios';

const path = process.env.REACT_APP_PRO_MODE;

export async function getBooks() {
	return await axios.get(path + "book/");
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
