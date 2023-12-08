import { useEffect, useState } from 'react';
import {
	searchIcon,
	menuIcon,
	profileIcon,
	profileIconBlack,
	heartIcon,
} from '../assets/icons';
import { Link } from 'react-router-dom';

const optionsNavbar = [
	{
		id: 1,
		name: 'Sugerencias',
		url: '#suggest',
	},
	{
		id: 2,
		name: 'Estrenos',
		url: '#new',
	},
	{
		id: 3,
		name: 'Próximamente',
		url: '#next',
	},
	{
		id: 4,
		name: 'Favoritos',
		url: '#favorites',
	},
	{
		id: 5,
		name: 'Series',
		url: '#series',
	},
];

const Navbar = () => {
	const [menuVisible, setMenuVisible] = useState(false);
	const [sizeScreen, setSizeScreen] = useState('lg'); // ['lg','sm'
	const [sectionCurrent, setSectionCurrent] = useState('home'); // ['generos','ficha','favoritos','home']
	const stylesMenuState = menuVisible ? 'top-11 left-0' : '-top-full left-full';
	const handleClickMenu = () => {
		setMenuVisible(!menuVisible);
	};
	const handleClickProfile = () => {
		setMenuVisible(false);
	};
	const handleClickSearch = () => {
		setMenuVisible(false);
	};
	const handlerClickSection = section => {
		setSectionCurrent(section);
		setMenuVisible(false);
	};
	const handleClickHeart = () => {
		setMenuVisible(false);
	};

	const handleResize = () => {
		const { innerWidth } = window;
		if (innerWidth < 1024) {
			setSizeScreen('sm');
		} else {
			setSizeScreen('lg');
		}
	};
	window.addEventListener('resize', handleResize);
	useEffect(() => {
		handleResize();
	}, []);

	return (
		<header className="fixed z-50 top-0 w-full flex justify-center  px-4 py-3 text-white bg-[#50075D] lg:bg-[#50075D] lg:px-14 lg:py-4 ">
			<div className="flex max-w-[1440px] items-center justify-between w-full h-full">
				<div className="hidden lg:block">
					<Link to='/' className="text-xl font-bold uppercase">Logo</Link>
				</div>
				<div className="cursor-pointer lg:hidden" onClick={handleClickMenu}>
					<img
						className="object-cover w-6 h-6"
						src={menuIcon}
						alt="icono de menu"
					/>
				</div>
				<nav
					className={`absolute left-0 lg:relative ${stylesMenuState} lg:inset-0`}
				>
					<ul className="flex flex-col gap-[0.13rem] bg-white font-semibold lg:flex-row  lg:bg-transparent">
						{optionsNavbar.map(option => (
							<li
								key={option.id}
								className="px-4 py-2 font-semibold bg-black hover:text-slate-500 lg:bg-transparent"
								onClick={() => handlerClickSection(option.name.toLowerCase())}
							>
								<a href={option.url}>{option.name}</a>
							</li>
						))}
					</ul>
				</nav>
				{sectionCurrent === 'home' && (
					<h2 className="text-white lg:hidden">Nombre de la aplicación</h2>
				)}
				<div className="flex gap-6 icons">
					{sectionCurrent === 'favoritos' && (
						<div className="heart">
							<div className="heart-icon" onClick={handleClickHeart}>
								<img
									className="object-cover w-6 h-6"
									src={heartIcon}
									alt="Icono de corazon"
								/>
							</div>
						</div>
					)}
					<div className="search lg:hidden">
						<div
							className="cursor-pointer search-icon"
							onClick={handleClickSearch}
						>
							<img
								className="w-[1.24rem] object-cover"
								src={searchIcon}
								alt="icono de lupa"
							/>
						</div>
					</div>
					<div className="user">
						<div
							className="cursor-pointer user-icon"
							onClick={handleClickProfile}
						>
							<img
								className="object-cover w-6 h-6 lg:h-8 lg:w-8"
								src={profileIcon}
								alt="Icono de usuario"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
