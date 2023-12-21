import { useEffect, useState } from 'react';
import {
	likeIcon,
	likeIconActive,
	tagIcon,
	bellIcon,
	playIcon,
} from '../assets/icons';
import { getDetailMovie } from '../services/movies';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import axios from 'axios';

const TechSheet = () => {
	const [dataMovie, setDataMovie] = useState({});
	const [trailer, setTrailer] = useState('');
	const [likedCountMedia, setLikedCountMedia] = useState([0, 0]);
	const [likedContentForUser, setLikedContentForUser] = useState(false);
	const [dislikedContentForUser, setDislikedContentForUser] = useState(false);
	const { id, type } = useParams();
	const { auth } = useAuthContext();
	const [logoPlatforms, setLogoPlatforms] = useState({
		netflix: 'https://i.imgur.com/2WZw4uX.png',
		disney: 'https://i.imgur.com/2WZw4uX.png',
		amazon: 'https://i.imgur.com/2WZw4uX.png',
		hbo: 'https://i.imgur.com/2WZw4uX.png',
	});
	useEffect(() => {
		const getInfo = async () => {
			const data = await getDetailMovie(id, type);
			setDataMovie(data.data.data[0]);
			console.log('trailer: ', data.data.data.Trailer);
			setLikedCountMedia([
				data.data.data[0].vote_average,
				data.data.data[0].vote_count,
			]);
			setTrailer(data.data.data.Trailer);
		};
		getInfo();
	}, [id, type]);
	const handleClickedLike = () => {
		if (!auth) return alert('Debes iniciar sesión para dar like');
		setLikedContentForUser(!likedContentForUser);
		if (dislikedContentForUser) {
			setDislikedContentForUser(!dislikedContentForUser);
		}
		if (likedContentForUser) {
			likedCountMedia[1]--;
		} else {
			likedCountMedia[1]++;
		}
	};
	const handleClickedDislike = () => {
		if (!auth) return alert('Debes iniciar sesión para dar dislike');
		setDislikedContentForUser(!dislikedContentForUser);
		if (likedContentForUser) {
			setLikedContentForUser(!likedContentForUser);
		}
	};

	const handleClickList = async () => {
		if (!auth) return alert('Debes iniciar sesión para guardar en la Lista');
		const itemList = {
			contentId: dataMovie.id,
			imageURL: dataMovie.poster_path,
			contentName: (dataMovie.first_air_date ? dataMovie.name : dataMovie.title),
			media_type: type,
		}
		console.log(itemList)
		try{
			const response = await axios.post(`https://streamview.onrender.com/api/v1/favourites`, itemList, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					
					'Authorization': `${localStorage.getItem("Token")}`,
				},
			})
			console.log(response)
		}catch(error){
			console.log("Hubo un problema guardando el item ", error)
		}
	}

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
					<a href='#' onClick={handleClickedLike}>
						<img
							src={likedContentForUser ? likeIconActive : likeIcon}
							alt=''
							className='h-12 w-12 active:scale-90'
						/>
						<p className='text-center text-[14px] text-black'>
							{likedCountMedia[1]}
						</p>
					</a>
					<a href='#' onClick={handleClickedDislike}>
						<img
							src={dislikedContentForUser ? likeIconActive : likeIcon}
							alt=''
							className='h-12 w-12 rotate-180'
						/>
					</a>
					<a href='#' onClick={handleClickList} className='pt-[0.41rem]'>
						<img
							src={tagIcon}
							alt=''
							className='h-8 w-8 object-contain object-center'
						/>
					</a>
					<a href='#' className='pt-[0.41rem]'>
						<img src={bellIcon} alt='' className='h-8 w-8' />
					</a>
				</div>
			</div>
			<section className='lg:mb-20 lg:flex-[2.5] 2xl:mb-16'>
				<div className='flex items-center justify-center gap-8 py-4 text-black lg:justify-start'>
					<div className='hidden items-center gap-12 lg:flex'>
						<h2 className='max-w-[500px] text-4xl font-bold text-white'>
							{dataMovie.first_air_date ? dataMovie.name : dataMovie.title}
						</h2>
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
						href={trailer || ''}
						className={`border-gradient-rounded relative my-3 flex h-fit w-fit items-center justify-center gap-4 rounded-md px-8 py-3 text-black ${
							!trailer && 'group  cursor-not-allowed'
						}`}
						target={trailer ? '_blank' : ''}
						rel={trailer ? 'noreferrer' : ''}
						onClick={e => {
							if (!trailer) {
								e.preventDefault();
							}
						}}
					>
						<p className='absolute -top-6 hidden font-bold text-white group-hover:block'>
							Trailer no disponible
						</p>
						<img src={playIcon} className='w-6' alt='' />
						<p className='font-semibold uppercase'>Ver trailer</p>
					</a>
				</div>
				<div className='rounded-[0.32rem] bg-[#D9D9D9] p-4 lg:p-12'>
					<div className='flex items-start justify-between lg:hidden'>
						<a href='#' className='flex flex-col items-center'>
							<img
								src={likedContentForUser ? likeIconActive : likeIcon}
								alt=''
								className='h-12 w-12'
							/>
							<p className='text-center text-[13px] text-black'>
								{likedCountMedia[1]}
							</p>
						</a>
						<a href='#' onClick={handleClickedDislike}>
							<img
								src={dislikedContentForUser ? likeIcon : likeIconActive}
								alt=''
								className='h-12 w-12 rotate-180'
							/>
						</a>
						<a href='#' className='pt-[0.41rem]'>
							<img src={tagIcon} alt='' className='h-8 w-8' />
						</a>
						<a href='#' className='pt-[0.41rem]'>
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
					<div className='flex flex-col gap-6 text-black lg:gap-9'>
						<div>
							<h3 className='text-md font-semibold'>SINOPSIS</h3>
							<p className='text-sm font-semibold text-black'>
								{dataMovie?.overview ||
									'No hay sinopsis disponible para esta película'}
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
