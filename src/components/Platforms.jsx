import CarouselItem from "./CarouselItem";
import Title2 from "./Title2";


export default function Platforms({ title, path }) {
    return (
        <div>
            <div className="flex items-center justify-start gap-2 text-lg">
                <Title2 title={title} />
                <h1 className="px-4 py-2 bg-[#F80202] font-[500] text-[20px] text-white">TOP 10</h1>
            </div>
            <CarouselItem path={path} />
        </div>
    )
}
