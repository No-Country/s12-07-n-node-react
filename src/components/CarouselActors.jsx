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
import { act } from 'react-dom/test-utils';

function CarouselActors({ path }) {
	const { trendingData } = useTrendingMovies(path);
	return (
		<Swiper
			slidesPerGroup={2}
			speed={500}
			slidesPerView='auto'
			breakpoints={{
				768: {
					slidesPerGroup: 3,
					speed: 800,
				},
				1024: {
					slidesPerGroup: 4,
					speed: 1000,
				},
			}}
			spaceBetween={24}
			navigation
			autoplay={true}
			modules={[Navigation]}
			className='mySwiper my-4 w-full rounded-xl '
		>
			{trendingData?.map((actor, key) => (
				<SwiperSlide
					key={key}
					className='aspect-[1] w-[136px] overflow-hidden lg:w-[190px]'
				>
					<Link
						to={`actor/${actor.id}`}
						className='flex h-full w-full flex-col items-center justify-center gap-2'
					>
						<img
							src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
							className='h-[calc(100%-32px)]  w-[calc(100%-32px)] rounded-full object-cover'
						/>
						<h1 className='text-md text-center text-white'>{actor.name}</h1>
					</Link>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default CarouselActors;
