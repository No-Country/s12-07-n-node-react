

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';
import useTrendingMovies from '../hooks/useTrendingMovies';

function Carousel() {
	const { trendingData } = useTrendingMovies()
	console.log(trendingData)
	return (
		<Swiper autoplay={true} pagination={{
			clickable: true,
		}} modules={[Pagination]} className="mySwiper w-[330px] rounded-xl " >
			{trendingData?.map((movie, key) => (
				<SwiperSlide className='w-[330px] h-[200px] overflow-hidden rounded-xl' key={key}>
					<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='w-[330px] h-[200px] object-cover' />
				</SwiperSlide>
			)).slice(0, 3)}
		</Swiper >
	);
}

export default Carousel;
