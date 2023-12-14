import Title2 from '../../components/Title2';
import Carousel from '../../components/Carousel';
import Amazon from '../../assets/icons/Amazon.png';
import Netflix from '../../assets/icons/netflix.png';
import HBO from '../../assets/icons/HBO.png';
import Disney from '../../assets/icons/disney.png';
import CarouselItem from '../../components/CarouselItem';

function Home() {
	return (
		<main className='mx-auto  max-w-[1440px] px-4 py-4  2xl:px-0'>
			<section>
				<Carousel />
			</section>
			<div className='flex justify-evenly gap-4 py-4'>
				<img src={Amazon} className='w-[120px] rounded-xl' alt='' />
				<img src={Netflix} className='w-[120px] rounded-xl' alt='' />
				<img src={HBO} className='w-[120px] rounded-xl' alt='' />
				<img src={Disney} className='w-[120px] rounded-xl' alt='' />
			</div>
			<section>
				<Title2 title='Disney +' />
				<CarouselItem />
				<Title2 title='Netflix' />
				<CarouselItem />
				<Title2 title='HBO' />
				<CarouselItem />
				<Title2 title='Prime Video' />
				<CarouselItem />
			</section>
		</main>
	);
}

export default Home;
