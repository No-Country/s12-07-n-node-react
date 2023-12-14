import { useState } from 'react';
import {
	searchIcon,
	menuIcon,
	profileIcon,
	heartIcon,
} from '../assets/icons';
import { Link, useNavigate } from 'react-router-dom';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

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
	const [perfilMenuVisible, setPerfilMenuVisible] = useState(false);
	const [signinVisible, setSigninVisible] = useState(false);
	const [signupVisible, setSignupVisible] = useState(false);
	const [menuVisible, setMenuVisible] = useState(false);
	const [sectionCurrent, setSectionCurrent] = useState('home'); // ['generos','ficha','favoritos','home']
	const stylesMenuState = menuVisible ? 'top-11 left-0' : '-top-full left-full';
	const stylePerfilState = perfilMenuVisible ? '' : 'hidden';
	const [searchInputActive, setSearchInputActive] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const navigate = useNavigate();
	const handleClickMenu = () => {
		setMenuVisible(!menuVisible);
	};
	const handleClickProfile = () => {
		setMenuVisible(false);
		setPerfilMenuVisible(!perfilMenuVisible);
	};
	const handleClickSearch = () => {
		setMenuVisible(false);
		if (searchTerm) {
			navigate(`/search`);
			return;
		}
		setSearchInputActive(!searchInputActive);
	};
	const handlerClickSection = section => {
		setSectionCurrent(section);
		setMenuVisible(false);
	};
	const handleClickHeart = () => {
		setMenuVisible(false);
	};
	const handleChangeSearch = e => {
		setSearchTerm(e.target.value);
	}
	const handleClickSignup = () => {
		setSignupVisible(!signupVisible)
	}
	const handleClickSignin = () => {
		setSigninVisible(!signinVisible)
	}
	return (
		<header className="fixed z-50 top-0 w-full flex justify-center px-4 py-3 text-white bg-[#50075D] lg:bg-[#50075D] lg:px-14 lg:py-4  h-[48px] lg:h-[72px]">
			<div className="flex max-w-[1440px] items-center justify-between w-full h-full">
				<div className="hidden lg:block">
					<Link to='/' className="text-xl font-bold uppercase">STREAMVIEW</Link>
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
								className="px-4 py-2 font-semibold bg-[#50075D] hover:text-slate-500 lg:bg-transparent"
								onClick={() => handlerClickSection(option.name.toLowerCase())}
							>
								<a href={option.url}>{option.name}</a>
							</li>
						))}
					</ul>
				</nav>
				<h2 className={`text-white lg:hidden ${searchInputActive ? 'hidden' : 'block'}`}>Nombre de la aplicación</h2>
				{/* ICONS */}
				<div className={`flex gap-6 lg:w-[30%] ${searchInputActive?'w-[200px] sm:w-[300px]':''}`}>
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
					<div className="search w-full overflow-hidden">
						<div
							className={`search-icon flex items-center gap-1 lg:bg-white lg:p-2 rounded-[5px] w-full justify-end ${searchInputActive ? 'bg-white' : 'bg-transparent'}`}
						>
							<input
								type="search"
								className={`lg:block bg-transparent border-none outline-none text-black placeholder-white font-semibold lg:flex-1 pl-3 py-[2px] w-full ${searchInputActive ? 'block' : 'hidden'}`}
								placeholder="Buscar"
								value={searchTerm}
								onChange={handleChangeSearch}
							/>
							<img
								className="w-[1.2rem] h-[1.2rem] lg:w-[1.5rem] lg:h-[1.5rem] object-cover object-center cursor-pointer"
								src={searchIcon}
								alt="icono de lupa"
								onClick={handleClickSearch}
							/>
						</div>
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

				<div className={`absolute ${stylePerfilState} top-11 lg:top-[72px] right-0`}>
					<ul className="flex flex-col gap-[0.13rem] bg-white font-semibold">
						<li className="px-4 py-2 font-semibold bg-[#50075D] hover:text-slate-500">
							<button
							onClick={handleClickSignin}
							>
							Iniciar Sesion
							</button>
						</li>
						<li className="px-4 py-2 font-semibold bg-[#50075D] hover:text-slate-500">
							<button
							onClick={handleClickSignup}
							>
							Registrarse
							</button>
						</li>
						<li className="px-4 py-2 font-semibold bg-[#50075D] hover:text-slate-500">
							<button>Perfil</button>
						</li>
					</ul>
				</div>

			</div>
			<Signup vis={signupVisible} setVis={setSignupVisible}/>
			<Signin vis={signinVisible} setVis={setSigninVisible}/>
		</header>
	);
};

export default Navbar;
