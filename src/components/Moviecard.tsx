// components
import Button from "./ui/Button"
// type
import { Movie } from "../pages/Home"
// helper
import { monthName, truncate } from "../helper"

interface MovieCardProps {
    movie: Movie | undefined
}


const Moviecard = ({ movie }: MovieCardProps) => {
    return (
        <div className="w-73 h-[460px] rounded-lg overflow-hidden relative">
            <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                className="w-full h-full"
            ></img>
            <div className="bg-gradient-to-br from-white to-gray-400 shadow-md border border-gray-200 backdrop-blur-lg
      absolute w-full p-4 bottom-0 rounded-b-lg opacity-90">
                <h3 title={`${movie?.title}`} className="font-medium text-lg leading-6 text-gray-800">
                    {truncate(`${movie?.title}`)}</h3>
                <div className="flex gap-2 mt-2 text-sm text-gray-700 font-medium">
                    <p>
                        {
                            movie?.release_date.slice(8) +
                            '-' + monthName(`${movie?.release_date.slice(5, 7)}`)+
                            '-' + movie?.release_date.slice(0, 4)
                        }
                    </p>
                </div>
            </div>
            <div className="absolute top-2 right-2">
                <Button varient="secondary" size="regular" text="Add to faviorate"/>
            </div>
        </div>
    )
}

export default Moviecard