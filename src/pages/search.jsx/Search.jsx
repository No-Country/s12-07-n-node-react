/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import SkeletonGrid from '../../components/SkeletonGrid';
import { useNavigate } from 'react-router';
import { getMovieSearch } from '../../services/movies';
import { useAuthContext } from '../../hooks/useAuthContext';

const Search = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [validSearchResults, setValidSearchResults] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const { termSearch } = useAuthContext();
	useEffect(() => {
		if (!termSearch) {
			navigate('/');
			return;
		}
		setIsLoading(true);
		const getSearchResults = async () => {
			const results = await getMovieSearch(termSearch, 1);
			setSearchResults(results.data.data);
		};
		getSearchResults();
		console.log(searchResults);
	}, [termSearch]);

	useEffect(() => {
		if (searchResults.length === 0) return;
		const validResults = searchResults.filter(
			movie => movie.poster_path.split('/')[7]
		);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		setValidSearchResults(validResults);
	}, [searchResults]);

	// console.log(validSearchResults);
	return (
		<section className='mx-auto mt-[48px] max-w-[1440px] px-4 md:px-8 md:pt-6 lg:mt-[72px] lg:px-10 lg:pt-10'>
			{validSearchResults.length === 0 ? (
				<div className='py-7 text-white'>
					<h2 className='font-bold lg:text-xl'>
						No se encontraron resultados para: {termSearch}
					</h2>
				</div>
			) : (
				<div>
					<div className='py-7 text-white'>
						<h2 className='font-bold lg:text-xl'>
							Resultados de búsqueda para: {termSearch}
						</h2>
						<p>{validSearchResults.length} títulos ordenados por popularidad</p>
					</div>
					{isLoading ? <SkeletonGrid /> : ''}
					<div className='grid grid-cols-3 gap-x-2 gap-y-[3rem] pb-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-[2rem] xl:gap-x-[3rem] xl:gap-y-[4rem]'>
						{validSearchResults.map((result, idx) => {
							return (
								<div
									key={result.id}
									className={`${
										result.poster_path.split('/')[7] ? '' : 'hidden'
									} ease cursor-pointer transition-all duration-100 hover:opacity-70 id-${
										result.id
									}`}
									onClick={() =>
										navigate(`/detail/${result.media_type}/${result.id}`)
									}
								>
									{result.poster_path.split('/')[7] ? (
										<img
											className='h-full w-full object-cover object-center'
											src={result.poster_path}
											alt=''
											loading={idx <= 10 ? 'eager' : 'lazy'}
										/>
									) : (
										''
									)}
								</div>
							);
						})}
					</div>
				</div>
			)}
		</section>
	);
};

export default Search;
