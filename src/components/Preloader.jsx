import React, { useEffect } from 'react';
import useTrendingMovies from '../hooks/useTrendingMovies';

const Preloader = () => {
	const { trendingData, trendingLoading, trendingError } = useTrendingMovies();
	useEffect(() => {
		// Code to run after component mounts or when dependencies change

		return () => {
			// Code to run before component unmounts or when dependencies change
		};
	}, [trendingLoading]);
	return (
		<div
			className='radial-progress'
			style={{ '--value': 70 }}
			role='progressbar'
		>
			70%
		</div>
	);
};

export default Preloader;
