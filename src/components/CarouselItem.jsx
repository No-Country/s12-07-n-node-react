// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Navigation } from 'swiper/modules';
import useTrendingMovies from '../hooks/useTrendingMovies';
import { Link } from 'react-router-dom';

function CarouselItem({ path }) {
	const { trendingData } = useTrendingMovies(path)

	return (
		<Swiper slidesPerGroup={2}
			speed={500} slidesPerView='auto'
			breakpoints={{
				768: {
					slidesPerGroup: 3,
					speed: 800
				},
				1024: {
					slidesPerGroup: 4,
					speed: 1000
				}
			}}
			spaceBetween={24} navigation autoplay={true} modules={[Navigation]} className="w-full my-4 mySwiper rounded-xl " >
			{trendingData?.map((movie, key) => (
				<SwiperSlide key={key} className='w-[136px] lg:w-[190px] aspect-[0.78] overflow-hidden rounded-xl'>
					<Link to='detail'>
						<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='object-cover w-full h-full' />
					</Link>
				</SwiperSlide>
			))}
		</Swiper >
	);
}

export default CarouselItem;
