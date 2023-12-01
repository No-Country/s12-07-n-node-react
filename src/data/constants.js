export const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;
export const TRENDING_MOVIES_URL = `${API_URL}/trending/all/day?api_key=${API_KEY}`
