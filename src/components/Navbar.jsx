import { useEffect, useState } from "react"
import { searchIcon,menuIcon,profileIcon,profileIconBlack,heartIcon } from "../assets/icons"
import { getDataSearch,IMAGE_URL } from "../services/api"
const optionsNavbar = [
    {
        id: 1,
        name: 'Sugerencias',
        url: '#suggest'
    },
    {
        id: 2,
        name: 'Estrenos',
        url: '#new'
    },
    {
        id: 3,
        name: 'Próximamente',
        url: '#next'
    },
    {
        id: 4,
        name: 'Favoritos',
        url: '#favorites'
    },
    {
        id: 5,
        name: 'Series',
        url: '#series'
    }
]

const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false)
    const [activeSearch, setActiveSearch] = useState(false)
    const [sizeScreen, setSizeScreen] = useState('lg') // ['lg','sm'
    const [sectionCurrent, setSectionCurrent] = useState('home') // ['generos','ficha','favoritos','home']
    const stylesMenuState = menuVisible? 'top-11 left-0':'-top-11 -left-full'
    
    const [resultsSearch, setResultsSearch] = useState([])
    const [resultsAutocomplete, setResultsAutocomplete] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchEjecuted, setSearchEjecuted] = useState(false)
    const handleChangeSearch = (e) => {
        const { value } = e.target
        setSearchTerm(value)
    }
    const handleClickMenu = () => {
        setMenuVisible(!menuVisible)
    }
    const handleClickProfile = () => {
        setMenuVisible(false)
    }
    const handleClickSearch = async() => {
        if(activeSearch){
            if(searchTerm.length === 0) return; // si no hay nada en el input no se ejecuta la busqueda
            setActiveSearch(true)
            const data = await getDataSearch(searchTerm)
            setResultsSearch(data)
        }
        setMenuVisible(false)
        setActiveSearch(true)
    }
    const handleSearchTerm =async () => {
        setSearchEjecuted(true)
        if(searchTerm.length === 0) return; // si no hay nada en el input no se ejecuta la busqueda
        const data = await getDataSearch(searchTerm)
        console.log(data)
        setResultsSearch(data)
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            handleSearchTerm()
        }
    }
        
    const handlerClickSection = (section) => {
        setSectionCurrent(section)
        setMenuVisible(false)
    }
    const handleClickHeart = () => {
        setMenuVisible(false)
    }
    // extraer al context
    const handleResize = () => {
        const { innerWidth } = window
        if(innerWidth < 1024){
            setSizeScreen('sm')
        }
        else{
            setSizeScreen('lg')
        }
    }
    window.addEventListener('resize', handleResize)
    useEffect(() => {
        handleResize()
    }, [])

    return (

        <header className="w-screen px-4 py-3 fixed bg-[#50075D] text-white lg:py-10 lg:px-14 lg:bg-transparent lg:text-black">

            <div className="w-full h-full flex items-center justify-between">
                <div className="hidden lg:block">
                    <h2 className="uppercase font-bold text-xl">Logo</h2>
                </div>
                <div className="menu-icon lg:hidden cursor-pointer" onClick={handleClickMenu}>
                    <img className="object-cover w-6 h-6" src={menuIcon} alt="icono de menu" />
                </div>
                <nav className={`w-fit z-50 absolute lg:relative ${stylesMenuState} duration-50 lg:inset-0`}>
                    <ul className="font-semibold flex flex-col lg:flex-row gap-[0.13rem] bg-white  lg:bg-transparent">
                        {
                            optionsNavbar.map((option) => (

                                <li 
                                    key={option.id} 
                                    className="py-2 px-4 bg-[#50075D] lg:bg-transparent font-semibold hover:text-slate-500"

                                    onClick={() => handlerClickSection(option.name.toLowerCase())}
                                >
                                    <a href={option.url}>{option.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                {
                    (sectionCurrent === 'home' && !activeSearch) ?(
                        <h2 className="text-white lg:hidden uppercase">Stream View</h2>
                    ):(
                        <div className="rounded-lg bg-white">
                            <input 
                                className="search-input text-black bg-transparent outline-none px-2 lg:px-4 lg:py-2 w-full lg:w-80" 
                                type="text" 
                                placeholder="Buscar" 
                                onKeyDown={handleKeyPress}
                                onChange={handleChangeSearch}
                                onClick={()=>setMenuVisible(false)}
                            />
                            {
                                resultsAutocomplete.length > 0 && (
                                    <ul className="absolute left-0 top-full w-full bg-white z-20">
                                        {
                                            resultsAutocomplete.slice(0,5).map((result) => (
                                                <li key={result.id} className="text-black py-2 px-4 hover:bg-gray-200">
                                                    <a href="#">{result.title || result.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                            }
                        </div>
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
                    <div className="search flex items-center">
                        <div className="search-icon cursor-pointer " onClick={handleClickSearch}>
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
            <div className="w-full left-0 absolute top-full">
                <div className="relative">
                    <div className="bg-slate-300 opacity-80  w-full h-full absolute top-0 left-0 z-10"></div>
                    {
                        // show 3 results max
                        (activeSearch && resultsSearch.length > 0)? (
                            <div className="relative z-20">
                                <ul className="flex flex-col gap-3 px-6 py-4 lg:px-14">
                                    {
                                        resultsSearch.slice(0,3).map((result) => (
                                            <li key={result.id} className="flex gap-2 items-center">
                                                {
                                                    result?.poster_path ? (
                                                        <img className="object-cover w-[3.7rem] lg:w-[7rem]" src={`${IMAGE_URL}${result?.poster_path}`} alt="poster" />
                                                    ):(
                                                        <div className="w-[3.7rem] h-[5.5rem] lg:h-[10rem] lg:w-[7rem] bg-gray-300 grid items-center text-center">
                                                            <p>Not found</p>
                                                        </div>
                                                    )
                                                }
                                                <div className="flex flex-col">
                                                    <h2 className="text-black font-bold">{result.title || result.name}</h2>
                                                    <p className="text-gray-500">{result.release_date || result.first_air_date}</p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ):(
                            <div>
                                {
                                    searchTerm.length>0 && searchEjecuted && (
                                        <h3 className="py-4 font-bold text-center text-xl text-black lg:text-white">
                                            No se encontraron resultados
                                        </h3>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Navbar