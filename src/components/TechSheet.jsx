import {
	likeIcon,
	dislikeIcon,
	tagIcon,
	bellIcon,
	playIcon,
} from '../assets/icons';

const TechSheet = () => {
	const dataExample = {
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
	};
	return (
		<section className='my-8 flex flex-col items-center px-6'>
			<figure className='px-2'>
				<img src={dataExample.imgCover} alt='foto de pelicula' />
			</figure>
			<a
				href='#'
				className='my-3 flex h-fit w-fit items-center justify-center gap-4 rounded-md border-[1px] border-[#4C4545] bg-[#ABA8AB] px-8 py-3 text-black'
			>
				<img src={playIcon} className='w-6' alt='' />
				<p className='font-semibold uppercase'>Ver trailer</p>
			</a>
			<section className='rounded-[0.32rem] bg-white p-4'>
				<div className='flex items-start justify-between'>
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
				<div>
					<div className='py-6'>
						<h3 className='font-bold'>SINOPSIS</h3>
						<p className='text-sm'>{dataExample.sinopsis}</p>
					</div>
					{/* cast */}
					<div>
						<h3 className='font-bold'>CAST</h3>
						{dataExample.cast.map((item, index) => (
							<p key={index} className='mb-1 flex w-full text-sm'>
								<strong className='font-bold'>{item.name + ': '} </strong>
								<p>{item.character}</p>
							</p>
						))}
					</div>
				</div>
			</section>
		</section>
	);
};

export default TechSheet;
