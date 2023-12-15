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
	const { trendingData } = useTrendingMovies('upcoming');
	return (
		<Swiper
			loop
			navigation
			slidesPerView={1}
			autoplay={true}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination, Navigation]}
			className='mySwiper mt-10 min-w-[330px] max-w-full rounded-xl '
		>
			{trendingData
				?.map((movie, key) => (
					<SwiperSlide
						key={key}
						className='aspect-[1.65] min-w-[330px] max-w-[1440px] overflow-hidden rounded-xl lg:aspect-[2.689]'
					>
						<Link to='detail'>
							<img
								src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
								className='h-full w-full object-cover'
							/>
						</Link>
					</SwiperSlide>
				))
				.slice(7, 10)}
		</Swiper>
	);
}

export default Carousel;
