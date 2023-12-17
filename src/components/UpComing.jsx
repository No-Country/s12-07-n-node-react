import { useNavigate } from 'react-router-dom';
import useTrendingMovies from '../hooks/useTrendingMovies';

const UpComing = () => {
	const navigate = useNavigate();
	const { trendingData } = useTrendingMovies('upcoming');

	return (
		<section className='mx-auto mt-[48px] max-w-[1440px] px-4 md:px-8 md:pt-6 lg:mt-[72px] lg:px-10 lg:pt-10'>
			<div>
				<div className='pb-7 pt-7 text-white lg:pt-0'>
					<h2 className='font-bold capitalize lg:text-xl'>Próximos Estrenos</h2>
					<h2>PELICULAS</h2>
				</div>
				<div className='grid grid-cols-3 gap-x-2 gap-y-[3rem] pb-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-[2rem] xl:gap-x-[3rem] xl:gap-y-[4rem]'>
					{trendingData
						?.filter(result => result.release_date)
						.map(result => {
							return (
								<div
									key={result.id}
									className={`${
										result.poster_path.split('/')[7] ? '' : 'hidden'
									} ease cursor-pointer transition-all duration-100 hover:opacity-70`}
									onClick={() => navigate(`/detail/movie/${result.id}`)}
								>
									{result.poster_path.split('/')[7] ? (
										<img
											className='h-full w-full object-cover object-center'
											src={result.poster_path}
											alt=''
										/>
									) : (
										''
									)}
								</div>
							);
						})}
				</div>
				<h2 className='mb-4 text-white'>SERIES</h2>
				<div className='grid grid-cols-3 gap-x-2 gap-y-[3rem] pb-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-[2rem] xl:gap-x-[3rem] xl:gap-y-[4rem]'>
					{trendingData
						?.filter(result => result.first_air_date)
						.map(result => {
							return (
								<div
									key={result.id}
									className={`${
										result.poster_path.split('/')[7] ? '' : 'hidden'
									} ease cursor-pointer transition-all duration-100 hover:opacity-70`}
									onClick={() => navigate(`/detail/tv/${result.id}`)}
								>
									{result.poster_path.split('/')[7] ? (
										<img
											className='h-full w-full object-cover object-center'
											src={result.poster_path}
											alt=''
										/>
									) : (
										''
									)}
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
};

export default UpComing;
