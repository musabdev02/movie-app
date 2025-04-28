import { SearchMovie } from "./Searchbar"
// helper
import { monthName, truncate } from "../../helper"
interface MovieSearchProp {
  movie: SearchMovie | undefined,
};

const Moviesearch = ({ movie }: MovieSearchProp) => {
  return (
    <div className="flex gap-2 p-2 hover:bg-[#282725] cursor-pointer">
      <div className="w-[25%] md:w-[18%]">
        <img
          src={movie?.poster_path ? `https://image.tmdb.org/t/p/w92/${movie?.poster_path}` : 'https://placehold.co/50x50/png'}
          alt="movie_poster" className="rounded-md w-[100%] h-20 object-cover" loading="lazy" />
      </div>
      <div className="py-3 w-[70%]">
        <h3 className="font-medium" title={movie?.title}>{truncate(movie?.title as string)}</h3>
        <p className="text-gray-400 text-sm">
          {
            movie?.release_date.slice(8) +
            '-' + monthName(`${movie?.release_date.slice(5, 7)}`) +
            '-' + movie?.release_date.slice(0, 4)
          }
        </p>
      </div>
    </div>
  )
}

export default Moviesearch