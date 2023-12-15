import { useEffect, useState } from 'react';
import {
	likeIcon,
	dislikeIcon,
	tagIcon,
	bellIcon,
	playIcon,
} from '../assets/icons';
import { getDetailMovie } from '../services/movies';
import { useParams } from 'react-router-dom';

const TechSheet = () => {
	const [dataMovie, setDataMovie] = useState({});
	const [likedMedia, setLikedMedia] = useState([0, 0]);
	const { id, type } = useParams();

	useEffect(() => {
		const getInfo = async () => {
			const data = await getDetailMovie(id, type);
			setDataMovie(data.data.data[0]);
			console.log(data.data.data[0]);
			setLikedMedia([
				data.data.data[0].vote_average,
				data.data.data[0].vote_count,
			]);
		};
		getInfo();
	}, [id, type]);

	return (
		<main className='mx-auto mt-[48px] flex h-full w-full max-w-[1440px] flex-col items-center px-6 py-10 font-roboto md:px-12 lg:mt-[72px] lg:flex-row lg:items-center lg:gap-10 lg:px-14 lg:py-[2rem] xl:gap-20 xl:py-[5rem]'>
			<div className='lg:flex-[1.7] xl:flex-[1.1]'>
				<figure className='w-full'>
					<img
						src={dataMovie.poster_path}
						alt='foto de pelicula'
						className='w-full'
					/>
				</figure>
				<div className='mx-5 my-5 hidden items-start justify-center gap-3 bg-[#D9D9D9] p-2 lg:flex'>
					<a href='#'>
						<img src={likeIcon} alt='' className='h-8 w-8' />
						<p className='text-center text-[14px]'>{likedMedia[1]}</p>
					</a>
					<a href='#'>
						<img src={dislikeIcon} alt='' className='h-8 w-8' />
					</a>
					<a href='#'>
						<img src={tagIcon} alt='' className='h-8 w-8' />
					</a>
					<a href='#'>
						<img src={bellIcon} alt='' className='h-8 w-8' />
					</a>
				</div>
			</div>
			<section className='lg:mb-20 lg:flex-[2.5] 2xl:mb-16'>
				<div className='flex items-center justify-center gap-8 py-4 lg:justify-start'>
					<div className='hidden items-center gap-12 lg:flex'>
						<h2 className='text-4xl font-bold text-white'>{dataMovie.title}</h2>
						<div>
							<figure>
								<img
									src='https://sm.ign.com/ign_latam/cover/d/disney-plu/disney-plus_sxyh.jpg'
									className='w-16 rounded-lg'
									alt=''
								/>
							</figure>
						</div>
					</div>
					<a
						href='https://www.youtube.com/watch?v=fM7v_IFaH1g'
						className='border-gradient-rounded my-3 flex h-fit w-fit items-center justify-center gap-4 rounded-md px-8 py-3 text-black'
						target='_blank'
						rel='noreferrer'
					>
						<img src={playIcon} className='w-6' alt='' />
						<p className='font-semibold uppercase'>Ver trailer</p>
					</a>
				</div>
				<div className='rounded-[0.32rem] bg-[#D9D9D9] p-4 lg:p-12'>
					<div className='flex items-start justify-between lg:hidden'>
						<a href='#' className='flex flex-col items-center'>
							<img src={likeIcon} alt='' className='h-8 w-8' />
							<p className='text-center text-[13px]'>{likedMedia[1]}</p>
						</a>
						<a href='#'>
							<img src={dislikeIcon} alt='' className='h-8 w-8' />
						</a>
						<a href='#'>
							<img src={tagIcon} alt='' className='h-8 w-8' />
						</a>
						<a href='#'>
							<img src={bellIcon} alt='' className='h-8 w-8' />
						</a>
						<div>
							<figure>
								<img
									src='https://sm.ign.com/ign_latam/cover/d/disney-plu/disney-plus_sxyh.jpg'
									className='w-16 rounded-lg'
									alt=''
								/>
							</figure>
						</div>
					</div>
					<div className='flex flex-col gap-6 lg:gap-9'>
						<div>
							<h3 className='text-md font-semibold'>SINOPSIS</h3>
							<p className='text-sm font-semibold text-black'>
								{dataMovie.overview}
							</p>
						</div>
						{/* cast */}
						<div>
							<h3 className='text-md font-bold'>CAST</h3>
							{dataMovie?.credits?.cast.map((item, index) => {
								if (index < 7) {
									return (
										<p
											key={index}
											className='mb-1 flex w-full text-sm font-semibold'
										>
											{item.name + ': '}
											{item.character}
										</p>
									);
								}
							})}
							{dataMovie?.credits?.cast.length > 7 && (
								<p className='text-sm font-semibold italic text-slate-600'>
									{dataMovie?.credits?.cast.length - 7} más
								</p>
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default TechSheet;
