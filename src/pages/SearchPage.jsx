import { getDataSearch,IMAGE_URL } from "../services/api"

const SearchPage = () => {
    // const { search } = useParams()
    const searchTerm = 'fast and furious';
    return (
        <section>
            <h2 className="font-bold text-black">
                {searchTerm}
            </h2>
            <div className="cards p-2">
                
            </div>
        </section>
    )
}

export default SearchPage