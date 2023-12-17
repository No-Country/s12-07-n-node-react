import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetailActor } from '../../services/movies';
const Actor = () => {
	const [dataActor, setDataActor] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const fetchActor = async () => {
			const actor = await getDetailActor(id);
			setDataActor(actor.data.data[0]);
		};
		fetchActor();
	}, [id]);
	return (
		<main className='mx-auto mt-[48px] max-w-[1440px] overflow-hidden px-4 md:px-8 md:pt-6 lg:mt-[72px] lg:px-10 lg:pt-10'>
			<div className='flex w-full flex-col items-end justify-between gap-[3rem] lg:h-[500px] lg:flex-row'>
				<figure className='h-full flex-[1]'>
					{dataActor?.profile_path?.split('/')[7] ? (
						<img
							src={dataActor.profile_path}
							alt={dataActor.name}
							className='h-full w-full object-cover'
						/>
					) : (
						<img
							src='https://via.placeholder.com/300x450/000000/FFFFFF/?text=Sin%20imagen'
							alt={dataActor.name}
							className='h-full w-full object-cover'
						/>
					)}
				</figure>
				<div className='flex h-full flex-[2.7] flex-col justify-end gap-10'>
					<h2 className='text-[3.5rem] text-white'>{dataActor.name}</h2>
					<div className='rounded-sm bg-[#D9D9D9] p-[1rem] font-semibold text-black lg:p-[3rem]'>
						<p>
							{dataActor.biography
								? dataActor.biography.split('').slice(0, 750).join('') + '... '
								: 'Biografía no disponible'}
							<a
								href={
									dataActor.name
										? `https://es.wikipedia.org/wiki/${dataActor?.name
												.split(' ')
												.join('_')}`
										: ''
								}
								className='text-slate-800 underline'
							>
								Wikipedia
							</a>
						</p>
						<p>
							Nacimiento:{' '}
							{dataActor.birthday
								? `${new Intl.DateTimeFormat('es-ES', {
										day: 'numeric',
										month: 'long',
										year: 'numeric',
								  }).format(new Date(dataActor.birthday))} (edad ${
										new Date().getFullYear() - dataActor.birthday.split('-')[0]
								  } años), ${dataActor.place_of_birth}`
								: 'Fecha de nacimiento no disponible'}
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Actor;
