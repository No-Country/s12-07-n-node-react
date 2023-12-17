/* import Title2 from '../components/Title2';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useTrendingMovies from '../hooks/useTrendingMovies';

function Home() {
	const { trendingData } = useTrendingMovies();

	return (
		<>
			<section>
				<Title2 title='Disney +' />
				{trendingData && (
					<Carousel>
						{trendingData.map(item => (
							<CarouselItem
								key={item.id}
								poster={
									item.poster_path
										? `https://image.tmdb.org/t/p/original${item.poster_path}`
										: ''
								}
							/>
						))}
					</Carousel>
				)}
			</section>
			<section>
				<Title2 title='Netflix' />
			</section>
		</>
	);
}

export default Home; */
