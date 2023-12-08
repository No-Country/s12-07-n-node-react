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

    console.log('sectionCurrent',sectionCurrent)
    return (
        <header className="w-screen px-4 py-3 fixed top-0 bg-black text-white lg:py-10 lg:px-14 lg:bg-transparent lg:text-black">
            <div className="w-full h-full flex items-center justify-between">
                <div className="hidden lg:block">
                    <h2 className="uppercase font-bold text-xl">Logo</h2>
                </div>
                <div className="lg:hidden cursor-pointer" onClick={handleClickMenu}>
                    <img className="object-cover w-6 h-6" src={menuIcon} alt="icono de menu" />
                </div>
                <nav className={`absolute left-0 lg:relative ${stylesMenuState} lg:inset-0`}>
                    <ul className="font-semibold flex flex-col lg:flex-row gap-[0.13rem] bg-white  lg:bg-transparent">
                        {
                            optionsNavbar.map((option) => (
                                <li
                                    key={option.id}
                                    className="py-2 px-4 bg-black lg:bg-transparent font-semibold hover:text-slate-500"
                                    onClick={() => handlerClickSection(option.name.toLowerCase())}
                                >
                                    <a href={option.url}>{option.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                {
                    sectionCurrent === 'home' &&(
                        <h2 className="text-white lg:hidden">Nombre de la aplicación</h2>
                    )
                }
                <div className="icons flex gap-6">
                    {
                        sectionCurrent === 'favoritos' && (
                            <div className="heart">
                                <div className="heart-icon" onClick={handleClickHeart}>
                                    <img className="object-cover w-6 h-6" src={heartIcon} alt="Icono de corazon" />
                                </div>
                            </div>
                        )
                    }
                    <div className="search lg:hidden">
                        <div className="search-icon cursor-pointer" onClick={handleClickSearch}>
                            <img className="object-cover w-[1.24rem]" src={searchIcon} alt="icono de lupa" />
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-icon cursor-pointer" onClick={handleClickProfile}>
                            <img className="object-cover w-6 h-6 lg:w-8 lg:h-8" src={sizeScreen=='sm'?profileIcon:profileIconBlack} alt="Icono de usuario" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
