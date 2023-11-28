import { useState } from "react"
import { searchIcon,menuIcon,profileIcon,heartIcon } from "../assets/icons"

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [sectionCurrent, setSectionCurrent] = useState('home') // ['generos','ficha','favoritos','home']
    const stylesMenuState = menuVisible? 'top-11 left-0':'-top-full left-full'
    const handleClickMenu = () => {
        setMenuVisible(!menuVisible)
    }
    const handleClickProfile = () => {
        setMenuVisible(false)
    }
    const handleClickSearch = () => {
        setMenuVisible(false)
    }
    const handlerClickSection = (section) => {
        setSectionCurrent(section)
        setMenuVisible(false)
    }
    const handleClickHeart = () => {
        setMenuVisible(false)
    }
    return (
        <header className="w-full px-[0.56rem] h-11 fixed bg-black">
            <div className="w-full h-full flex items-center justify-between">
                <div className="lg:hidden" onClick={handleClickMenu}>
                    <img className="object-cover w-6 h-6" src={menuIcon} alt="icono de menu" />
                </div>
                <nav className={`absolute left-0 lg:relative ${stylesMenuState} lg:inset-0`}>
                    <ul className="font-semibold flex flex-col lg:flex-row gap-[0.13rem] bg-white lg:bg-black text-white">
                        <li className="py-2 px-4 bg-black"><a href="#">Sugerencias</a></li>
                        <li className="py-2 px-4 bg-black"><a href="#">Estrenos</a></li>
                        <li className="py-2 px-4 bg-black"><a href="#">Próximamente</a></li>
                        <li className="py-2 px-4 bg-black"
                            onClick={() => handlerClickSection('favoritos')}
                        ><a href="#">Favoritos</a></li>
                        <li className="py-2 px-4 bg-black"><a href="#">Series</a></li>
                    </ul>
                </nav>
                {
                    sectionCurrent === 'home' &&(
                        <h2 className="text-white">Nombre de la aplicación</h2>
                    )
                }
                <div className="icons flex gap-3">
                    {
                        sectionCurrent === 'favoritos' && (
                            <div className="heart">
                                <div className="heart-icon" onClick={handleClickHeart}>
                                    <img className="object-cover w-6 h-6" src={heartIcon} alt="Icono de corazon" />
                                </div>
                            </div>
                        )
                    }
                    <div className="search">
                        <div className="search-icon" onClick={handleClickSearch}>
                            <img className="object-cover w-6 h-6" src={searchIcon} alt="icono de lupa" />
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-icon" onClick={handleClickProfile}>
                            <img className="object-cover w-6 h-6" src={profileIcon} alt="Icono de usuario" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar