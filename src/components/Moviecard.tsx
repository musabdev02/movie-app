import { useEffect, useState } from "react"
// components
import Button from "./ui/Button"
// type
import { Movie } from "../pages/Home"
// helper
import { monthName, truncate } from "../helper"

interface MovieCardProps {
    movie: Movie | undefined
};

export interface FavoritesItems {
    id: number | undefined;
    title: string | undefined;
    poster_path: string | undefined;
    release_date: string | undefined;
}

const Moviecard = ({ movie }: MovieCardProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as FavoritesItems[];
        setIsFavorite(favorites.some((item: FavoritesItems) => item?.id === movie?.id));
    }, [movie]);


    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as FavoritesItems[];
        if (favorites.some((item: FavoritesItems) => item.id === movie?.id)) {
            const newFavorites = favorites.filter(item => item.id !== movie?.id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(false);
        }else{
            favorites.push({
                id: movie?.id,
                title: movie?.title,
                poster_path: movie?.poster_path,
                release_date: movie?.release_date
            });
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
        }
    };

    return (
        <div className="w-[48%] h-[250px] md:w-73 md:h-[460px] rounded-lg overflow-hidden relative">
            <img loading="lazy" src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : `https://placehold.co/310x480?text=Not Found&?font=poppins`}
                className="w-full h-full object-cover"
            ></img>
            <div className="bg-gradient-to-br from-white to-gray-400 shadow-md border border-gray-200 backdrop-blur-lg
      absolute w-full p-4 bottom-0 rounded-b-lg opacity-90">
                <h3 title={`${movie?.title}`} className="font-medium text-sm md:text-lg leading-4 md:leading-6 text-gray-800">
                    {truncate(`${movie?.title}`)}</h3>
                <div className="hidden md:flex gap-2 mt-2 text-sm text-gray-700 font-medium">
                    <p>
                        {
                            movie?.release_date.slice(8) +
                            '-' + monthName(`${movie?.release_date.slice(5, 7)}`) +
                            '-' + movie?.release_date.slice(0, 4)
                        }
                    </p>
                </div>
            </div>
            <div className="absolute top-2 right-2" onClick={toggleFavorite}>
                {
                    isFavorite ? <Button varient="primary" text="Clear" />:
                    <Button varient="secondary" size="regular" text="Add to faviorate" />
                }
            </div>
        </div>
    )
}

export default Moviecard