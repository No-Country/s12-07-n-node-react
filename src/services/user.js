import axios from 'axios';
import { API_URL} from '../data/constants';

export const postItemList = async (movie) => {
    const response = await axios.post(`${API_URL}/api/v1/discover/favourites`, movie, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("Token")}`,
        },
    })
    return response
}

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/v1/auth/register`, userData, {
					headers: {
						'Content-Type': 'application/json',
					},
					});
    return response
}

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, userData, {
				headers: {
					'Content-Type': 'application/json',
				},
				});
    return response
}

export const authUser = async () => {
    return await axios.get('https://streamview.onrender.com/api/v1/auth/session',{
			headers: {
				'Authorization': `Bearer ${localStorage.getItem("Token")}`
			},
			})
    
}