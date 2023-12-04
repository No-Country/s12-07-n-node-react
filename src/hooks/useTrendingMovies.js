
import { useState, useEffect } from 'react';
import { getTrending } from '../services/movies';

const useTrendingMovies = () => {
  const [trendingData, setTrendingData] = useState(null);
  const [trendingLoading, setTrendingLoading] = useState(true);
  const [trendingError, setTrendingError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTrending();
        if (response.statusText !== "OK") {
          throw new Error(`Error: ${response.status}`);
        }
        setTrendingData(response.data.results);
      } catch (error) {
        setTrendingError(error.message);
      } finally {
        setTrendingLoading(false);
      }
    };
    fetchData();
  }, []);

  return { trendingData, trendingLoading, trendingError };
};

export default useTrendingMovies;
