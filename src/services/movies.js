import axios from 'axios';
import { API_URL, API_KEY } from '../data/constants';

export const getTop10 = async path => {
	return await axios.get(`${API_URL}/trending/${path}`, {
		headers: {
			Authorization: `Bearer ${API_KEY}`,
		},
	});
};

export const getMovieSearch = async (query, page) => {
	return await axios.get(
		`${API_URL}/discover/search?query=${query}&page=${page}`
	);
};
export const getPlatform = async path => {
	return await axios.get(`${API_URL}/discover/filter/platform/${path}`);
};

export const getGenreFilter = async path => {
	return await axios.get(`${API_URL}/discover/filter/genre/${path}`);
};

export const getDetailMovie = async (id, mType) => {
	return await axios.get(`${API_URL}/discover/detail/${mType}/${id}`);
};
