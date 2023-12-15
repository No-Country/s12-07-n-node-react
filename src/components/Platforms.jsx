import CarouselItem from './CarouselItem';
import Title2 from './Title2';

export default function Platforms({ title, path }) {
	return (
		<div className='pb-10'>
			<div className='mb-6 flex items-center justify-start gap-2 text-lg'>
				<Title2 title={title} />
				{title !== 'Proximos Estrenos' && title !== 'Mi Lista' && (
					<h1 className='bg-[#F80202] px-4 py-2 text-[20px] font-[500] text-white'>
						TOP 10
					</h1>
				)}
			</div>
			<CarouselItem path={path} />
		</div>
	);
}
