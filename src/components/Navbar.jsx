import { useEffect, useState } from 'react';
import 'daisyui/dist/full.css';
import { searchIcon, menuIcon, profileIcon, heartIcon } from '../assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import Signup from '../pages/Signup';
import { useAuthContext } from '../hooks/useAuthContext';

const optionsNavbar = [
	{
		id: 1,
		name: 'Género',
		url: '/genre/',
		submenu: [
			{ name: 'Acción', url: '/genre/action' },
			{ name: 'Drama', url: '/genre/drama' },
			{ name: 'Terror', url: '/genre/horror' },
			{ name: 'Romance', url: '/genre/romance' },
		],
	},
	{
		id: 2,
		name: 'Actores',
		url: '/#actores',
	},
	{
		id: 3,
		name: 'Próximos estrenos',
		url: 'proximos-estrenos',
	},
	{
		id: 4,
		name: 'Mi Lista',
		url: 'mi-lista',
	},
];

const Navbar = () => {
	const [signupVisible, setSignupVisible] = useState(false);
	const [menuVisible, setMenuVisible] = useState(false);
	const [sectionCurrent, setSectionCurrent] = useState('home'); // ['generos','ficha','favoritos','home']
	const stylesMenuState = menuVisible ? 'top-11 left-0' : '-top-full left-full';
	const [searchInputActive, setSearchInputActive] = useState(false);
	const [valueSearchTerm, setValueSearchTerm] = useState('');

	const { setTermSearch, termSearch } = useAuthContext();
	const navigate = useNavigate();
	const handleClickMenu = e => {
		console.log(e.target.role);
		if (e.target.role == 'icon-menu') {
			setMenuVisible(!menuVisible);
		}
	};
	const handleClickProfile = () => {
		setMenuVisible(false);
		setSignupVisible(!signupVisible);
	};
	const handleClickSearch = () => {
		setMenuVisible(false);
		console.log(valueSearchTerm);
		if (valueSearchTerm) {
			setTermSearch(valueSearchTerm);
			navigate(`/search`);
			return;
		}
		setSearchInputActive(!searchInputActive);
	};
	const handleKeyPressSearch = e => {
		if (e.key === 'Enter' && valueSearchTerm) {
			setMenuVisible(false);
			setTermSearch(valueSearchTerm);
			navigate(`/search`);
		}
	};
	const handlerClickSection = section => {
		setSectionCurrent(section);
		setMenuVisible(false);
	};
	const handleClickHeart = () => {
		setMenuVisible(false);
	};
	const handleChangeSearch = e => {
		setValueSearchTerm(e.target.value);
		if (e.target.value !== '') {
			setSearchInputActive(true);
		}
	};

	const [isElementShown, setIsElementShown] = useState(false);
	const handleSubMenu = e => {
		console.log(e.target);
		setIsElementShown(!isElementShown);
	};

	const handleResize = () => {
		setMenuVisible(false);
		setSearchInputActive(false);
		setValueSearchTerm('');
		setIsElementShown(false);
	};
	window.addEventListener('resize', handleResize);
	const handleInvalid = event => {
		const input = event.target;
		if (input.value.trim() === '') {
			input.setCustomValidity('Por favor, ingrese un término de búsqueda');
		} else {
			input.setCustomValidity('');
		}
	};

	const handleInput = event => {
		event.target.setCustomValidity('');
	};
	return (
		<header className='fixed top-0 z-50 flex h-[48px] w-full justify-center bg-primary px-4 py-3 text-white lg:h-[72px] lg:bg-primary  lg:px-14 lg:py-4'>
			<div className='flex h-full w-full max-w-[1440px] items-center justify-between'>
				<div className='hidden lg:block'>
					<Link to='/' className='text-xl font-bold uppercase'>
						STREAMVIEW
					</Link>
				</div>
				<div className='cursor-pointer lg:hidden' onClick={handleClickMenu}>
					<img
						className='h-6 w-6 object-cover'
						src={menuIcon}
						role='icon-menu'
						alt='icono de menu'
					/>
				</div>
				<nav
					className={`absolute left-0 lg:relative ${stylesMenuState} lg:inset-0`}
				>
					<ul className='flex flex-col gap-[1px] bg-white lg:flex-row  lg:bg-transparent'>
						{optionsNavbar.map(option => (
							<li
								key={option.id}
								className=' bg-primary px-4
								py-2'
								onClick={() => handlerClickSection(option.name.toLowerCase())}
							>
								{option.submenu && option.submenu.length > 0 ? (
									<div className='w-full'>
										<span
											onClick={handleSubMenu}
											className='cursor-pointer hover:text-tertiary'
										>
											{option.name}
											<span className='hidden px-1 lg:inline-block'>+</span>
										</span>
										<div className={isElementShown ? 'lg:show ' : ' lg:hidden'}>
											<ul
												className='flex
													w-[175px] flex-col gap-[1px]  lg:absolute lg:mt-[23px]  lg:bg-white lg:text-black'
											>
												{option.submenu.map(item => (
													<li
														className='p-2 px-4 hover:text-primary lg:bg-[#D9D9D9]'
														key={item.name}
														onClick={handleSubMenu}
													>
														<Link to={item.url}>{item.name}</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								) : (
									<Link to={option.url} className='hover:text-tertiary'>
										{option.name}
									</Link>
								)}
							</li>
						))}
					</ul>
				</nav>
				<Link
					to={'/'}
					className={`text-white lg:hidden ${
						searchInputActive ? 'hidden' : 'block'
					}`}
				>
					STREAMVIEW
				</Link>
				{/* ICONS */}
				<div
					className={`flex gap-6 lg:w-[30%] ${
						searchInputActive ? 'w-[200px] sm:w-[300px]' : ''
					}`}
				>
					{sectionCurrent === 'favoritos' && (
						<div className='heart'>
							<div className='heart-icon' onClick={handleClickHeart}>
								<img
									className='h-6 w-6 object-cover'
									src={heartIcon}
									alt='Icono de corazon'
								/>
							</div>
						</div>
					)}
					<div className='search w-full overflow-hidden'>
						<form
							className={`search-icon flex w-full items-center justify-end gap-1 rounded-[5px] lg:bg-white lg:p-2 ${
								searchInputActive ? 'bg-white' : 'bg-transparent'
							}`}
							onSubmit={e => e.preventDefault()}
						>
							<input
								type='search'
								id='search'
								required
								className={`w-full border-none bg-transparent py-[2px] pl-3 font-semibold text-black placeholder-white outline-none lg:block lg:flex-1 ${
									searchInputActive ? 'block' : 'hidden'
								}`}
								placeholder='Buscar'
								onChange={handleChangeSearch}
								onKeyDown={handleKeyPressSearch}
								onInvalid={handleInvalid}
								onInput={handleInput}
							/>
							<button>
								<img
									className='h-[1.2rem] w-[1.2rem] cursor-pointer object-cover object-center lg:h-[1.5rem] lg:w-[1.5rem]'
									src={searchIcon}
									alt='icono de lupa'
									onClick={handleClickSearch}
								/>
							</button>
						</form>
					</div>
				</div>
				<div className='user'>
					<div
						className='user-icon cursor-pointer'
						onClick={handleClickProfile}
					>
						<img
							className='h-6 w-6 object-cover lg:h-8 lg:w-8'
							src={profileIcon}
							alt='Icono de usuario'
						/>
					</div>
				</div>
			</div>
			<Signup vis={signupVisible} setVis={setSignupVisible} />
		</header>
	);
};

export default Navbar;
