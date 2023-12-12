/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import {getMovieSearch} from "../../services/movies";


const Search = ({searchTerm='loki'}) => {
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getSearchResults = async () => {
            const results = await getMovieSearch(searchTerm, 1);
            setSearchResults(results.data.data);
        }
        getSearchResults();
    }, [searchTerm])
    console.log(searchResults);
    return (
        <section className="max-w-[1440px] mx-auto mt-[48px] lg:mt-[72px] px-4 md:px-8 lg:px-10 md:pt-6 lg:pt-10">
            <div className="py-7 text-white">
                <h2 className="font-bold lg:text-xl">Resultados de búsqueda para: {searchTerm}</h2>
                <p>
                    {searchResults.filter(movie => movie.poster_path.split('/')[7]).length} títulos ordenados por popularidad
                </p>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 lg:gap-x-[2rem] xl:gap-x-[3rem] xl:gap-y-[4rem] gap-y-[3rem] pb-10">
                {
                    searchResults.map((result) => {
                        return (
                            <div
                                key={result.id}
                                className={`${result.poster_path.split('/')[7] ? '' : 'hidden'} cursor-pointer hover:opacity-70 transition-all duration-100 ease`}
                                onClick={() => navigate(`/detail`)}
                            >
                                {
                                    result.poster_path.split('/')[7] ? <img className="w-full h-full object-cover object-center" src={result.poster_path} alt="" /> : ''
                                }
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Search
