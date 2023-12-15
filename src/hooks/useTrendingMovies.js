import { useState, useEffect } from 'react';
import { getTop10 } from '../services/movies';

const useTrendingMovies = path => {
	const [trendingData, setTrendingData] = useState(null);
	const [trendingLoading, setTrendingLoading] = useState(true);
	const [trendingError, setTrendingError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getTop10(path);
				/*         if (response.statusText !== "OK") {
          throw new Error(`Error: ${response.status}`);
        } */
				setTrendingData(response.data);
			} catch (error) {
				setTrendingError(error.message);
			} finally {
				setTrendingLoading(false);
			}
		};
		fetchData();
	}, [path]);

	return { trendingData, trendingLoading, trendingError };
};

export default useTrendingMovies;
