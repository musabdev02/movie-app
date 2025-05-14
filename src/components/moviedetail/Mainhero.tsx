// component
import Button from "../ui/Button"

import { monthName } from "../../helper"
// type
import { Genre } from "../../types";

interface MainHeroProps {
    poster_path: string,
    title: string,
    tagline: string,
    backdrop_path: string,
    overview: string,
    release_date: string,
    genres: Genre[]
}



const Mainhero = ({ poster_path, title, tagline, backdrop_path, overview, release_date, genres }: MainHeroProps) => {
    
    return (
        <div className="relative h-[650px] bg-cover bg-center"
            style={{ backgroundImage: ` url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}')`, }}>
            <div className="absolute inset-0 bg-gray-900/70"></div>

            <div className="relative z-10 flex justify-center items-center gap-4 h-full text-white p-4">

                <img src={poster_path.startsWith('/') ? `https://media.themoviedb.org/t/p/w300${poster_path}` : `${poster_path}`}  alt="poster" className="rounded-md" />
                <div className="w-[50%] flex flex-col gap-8">
                    <div>
                        <h3 className="text-4xl font-bold">{title}</h3>
                        <h5 className="text-gray-200 mb-4">`{tagline}`</h5>
                        <div className="flex gap-3 mt-2">
                            <p className="border px-2 py-1 text-xs">16</p>
                            <p>{
                               release_date ? release_date.slice(8) +
                                '/' + monthName(`${release_date.slice(5, 7)}`).slice(0, 3) +
                                '/' + release_date.slice(0, 4) : "-"
                            }</p>
                            <p>{genres.slice(0, 2).map(g => g.name).join('/')}</p>
                            <p>01,49m</p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <h3>Add to Favorite</h3>
                        <Button varient="secondary" text="add to favorite" />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">Overview</h4>
                        <p className="">{overview}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Mainhero