// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import useTrendingMovies from '../hooks/useTrendingMovies';
import { Link } from 'react-router-dom';

function Carousel() {
	const { trendingData } = useTrendingMovies('upcoming')
	return (
		<Swiper navigation slidesPerView={1} autoplay={true} pagination={{
			clickable: true,
		}} modules={[Pagination, Navigation]} className="mySwiper min-w-[330px] max-w-full rounded-xl " >
			{trendingData?.map((movie, key) => (
				<SwiperSlide key={key} className='min-w-[330px] max-w-[1440px] aspect-[1.65] lg:aspect-[2.689] overflow-hidden rounded-xl'>
					<Link to='detail'>
						<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className='object-cover w-full h-full' />
					</Link>
				</SwiperSlide>

			)).slice(7, 10)}
		</Swiper >
	);
}

export default Carousel;
