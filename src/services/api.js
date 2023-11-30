const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTIxMmZjNDE1ZTU3MzE3ZjAxYzNlNWQyZmU4OWY5MCIsInN1YiI6IjY1NjdlN2YzOWFmZmMwMDBlYmNlZjVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NXdEsqc_FoB_0TxGP3fpo_hJct_ry12BX1HK9hcbMQ4';
const API_URL = 'https://api.themoviedb.org/3';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original';

export const getDataSearch = async (search) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
    const response = await fetch(`${API_URL}/search/multi?query=${search}&include_adult=true&language=en-US&page=1`, options);
    const {results} = await response.json();
    return results;
}

export const getDataForAutocomplete = async (search) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
    const response = await fetch(`${API_URL}/search/keyword?query=${search}&page=1`, options);
    const {results} = await response.json();
    return results;
}