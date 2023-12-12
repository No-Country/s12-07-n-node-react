export const API_KEY = import.meta.env.VITE_TOKEN;
export const API_URL = import.meta.env.VITE_API_URL;
export const TRENDING_MOVIES_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
export const POPULAR_MOVIES_URL = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
