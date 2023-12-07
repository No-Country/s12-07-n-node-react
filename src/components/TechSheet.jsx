import {
	likeIcon,
	dislikeIcon,
	tagIcon,
	bellIcon,
	playIcon,
} from '../assets/icons';

const TechSheet = () => {
	const dataExample = {
		title: 'Loki ',
		imgCover:
			'https://elcomercio.pe/resizer/b0JhIoRba8vhwoCG4c3tkfdvHuw=/400x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YH52SIXPWZFNJH2UFT2TNT66HM.jpg',
		sinopsis:
			"Loki es llevado ante la misteriosa organización llamada AVT (Autoridad de Variación Temporal) después de los acontecimientos ocurridos en 'Avengers: Endgame (2019)' y se le da a elegir enfrentarse a ser borrado de la existencia debido a que es una 'variante de tiempo' o ayudar a arreglar la línea de tiempo y detener una amenaza mayor.",
		cast: [
			{
				name: 'Tom Hiddleston',
				character: 'Loki Laufeyson',
			},
			{
				name: 'Sophia Di Martino',
				character: 'Sylvie / The Variant',
			},
			{
				name: 'Wunmi Mosaku',
				character: 'Hunter B-15',
			},
			{
				name: 'Eugene Cordero',
				character: 'Casey',
			},
			{
				name: 'Ke Huy Quan',
				character: "Ouroboros 'OB'",
			},
			{
				name: 'Owen Wilson',
				character: 'Mobius M. Mobius',
			},
		],
		platform: 'Disney+',
		liked: false,
	};
	return (
		<main className='mx-auto mt-[48px] flex h-full w-full max-w-[1440px] flex-col items-center px-6 py-10 font-roboto md:px-12 lg:mt-[72px] lg:flex-row lg:items-center lg:gap-10 lg:px-14 lg:py-[2rem] xl:gap-20 xl:py-[5rem]'>
			<div className='lg:flex-[1.7] xl:flex-[1.1]'>
				<figure className='w-full'>
					<img
						src={dataExample.imgCover}
						alt='foto de pelicula'
						className='w-full'
					/>
				</figure>
				<div className='mx-5 my-5 hidden items-center justify-center gap-3 bg-[#D9D9D9] p-2 lg:flex'>
					<a href='#'>
						<img src={likeIcon} alt='' className='h-8 w-8' />
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
						<h2 className='text-4xl font-bold text-white'>
							{dataExample.title}
						</h2>
						<a href='https://www.disneyplus.com/es-419/series/loki/6pARMvILBGzF'>
							<figure>
								<img
									src='https://sm.ign.com/ign_latam/cover/d/disney-plu/disney-plus_sxyh.jpg'
									className='w-16 rounded-lg'
									alt=''
								/>
							</figure>
						</a>
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
						<a href='#'>
							<img src={likeIcon} alt='' className='h-8 w-8' />
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
						<a href='#'>
							<figure>
								<img
									src='https://sm.ign.com/ign_latam/cover/d/disney-plu/disney-plus_sxyh.jpg'
									className='w-16 rounded-lg'
									alt=''
								/>
							</figure>
						</a>
					</div>
					<div className='flex flex-col gap-6 lg:gap-9'>
						<div>
							<h3 className='text-md font-semibold'>SINOPSIS</h3>
							<p className='text-sm font-semibold text-black'>
								{dataExample.sinopsis}
							</p>
						</div>
						{/* cast */}
						<div>
							<h3 className='text-md font-bold'>CAST</h3>
							{dataExample.cast.map((item, index) => (
								<p
									key={index}
									className='mb-1 flex w-full text-sm font-semibold'
								>
									{item.name + ': '}
									{item.character}
								</p>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default TechSheet;
