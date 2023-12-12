import axios from 'axios';
import { TRENDING_MOVIES_URL } from '../data/constants';
import { API_URL,API_KEY } from '../data/constants';

export const getTrending = async () => {
	console.log(TRENDING_MOVIES_URL);
	return await axios.get(TRENDING_MOVIES_URL, {
		headers: {
			Authorization: `Bearer ${API_KEY}`,
		},
	});
};

export const getMovieSearch = async (query,page) => {
	return await axios.get(
		`${API_URL}/discover/search?query=${query}&page=${page}`
	);
}
