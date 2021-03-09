import axios from 'axios';
	
const path = process.env.REACT_APP_PRO_MODE; 

export async function user() {
	let user = await axios.get(path + "");
	console.log(user);

	return user;
}
