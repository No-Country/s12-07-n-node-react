import Carousel from '../../components/Carousel';
import Amazon from '../../assets/icons/Amazon.png';
import Netflix from '../../assets/icons/netflix.png';
import HBO from '../../assets/icons/HBO.png';
import Disney from '../../assets/icons/disney.png';
import Platforms from '../../components/Platforms';
import Title2 from '../../components/Title2';
import CarouselActors from '../../components/CarouselActors';
import useTrendingMovies from '../../hooks/useTrendingMovies';
import { Link } from 'react-router-dom';
import Preloader from '../../components/preloader/Preloader';

function Home() {
	const { trendingLoading } = useTrendingMovies('/');
	return (
		<main className='mx-auto mt-[48px] max-w-[1440px] px-4 py-4 lg:mt-[72px] 2xl:px-0'>
			{trendingLoading ? (
				<Preloader />
			) : (
				<div>
					<section>
						<Carousel />
					</section>
					<div className='flex justify-evenly gap-4 pb-14 pt-10'>
						<Link to='/platform/disney'>
							<img
								src={Disney}
								className='w-[120px] rounded-xl'
								alt='disney+'
							/>
						</Link>
						<Link to='/platform/netflix'>
							<img
								src={Netflix}
								className='w-[120px] rounded-xl'
								alt='netflix'
							/>
						</Link>
						<Link to='/platform/hbomax'>
							<img src={HBO} className='w-[120px] rounded-xl' alt='hbo' />
						</Link>
						<Link to='/platform/prime'>
							<img
								src={Amazon}
								className='w-[120px] rounded-xl'
								alt='amazonVideo'
							/>
						</Link>
					</div>
					<section>
						<Platforms title='Disney +' path='disney' />
						<Platforms title='HBO Max' path='hbomax' />
						<Platforms title='Prime Video +' path='prime' />
						<Platforms title='Netflix' path='netflix' />
						<Platforms title='Acción' path='genre/action' />
						<Platforms title='Drama' path='genre/drama' />
						<Platforms title='Terror' path='genre/horror' />
						<Platforms title='Romance' path='genre/romance' />
						<div className='pb-10'>
							<div className='text-lg'>
								<Title2 title='Actores' />
							</div>
							<CarouselActors path='actors' />
						</div>
						<Platforms title='Proximos Estrenos' path='upcoming' />
						<Platforms title='Mi Lista' path='genre/horror' />
						{/*         <Platforms title='Series' path='genre/romance' />

        <Platforms title='pelicula' path='genre/romance' /> */}
					</section>
				</div>
			)}
		</main>
	);
}

export default Home;
