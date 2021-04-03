import {LoginModel} from '../models/user';
import jwt_decode from "jwt-decode";
import {refreshToken} from '../api/auth'

const refresh = (access_token:string, refresh_token: string) => {
	let jwt: any = jwt_decode(access_token);
	let current_time = Date.now() / 1000;
	if ( jwt.exp < current_time) {
		refreshToken(refresh_token).then(data => console.log(data));
	}

} 

export default refresh
