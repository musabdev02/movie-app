import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAlert } from "../context/AlertContext"
// components
import Button from "./ui/Button"
// type
import { Movie, FavoritesItems } from "../types"
// helper
import { monthName, truncate } from "../helper"

interface MovieCardProps {
    movie: Movie | undefined
};


const Moviecard = ({ movie }: MovieCardProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as FavoritesItems[];
        setIsFavorite(favorites.some((item: FavoritesItems) => item?.id === movie?.id));
    }, [movie]);


    const toggleFavorite = (): void => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as FavoritesItems[];
        if (favorites.some((item: FavoritesItems) => item.id === movie?.id)) {
            const newFavorites = favorites.filter(item => item.id !== movie?.id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(false);
            showAlert("Removed from favorite", 'error', 2000);
        } else {
            favorites.push({
                id: movie?.id,
                title: movie?.title,
                poster_path: movie?.poster_path,
                release_date: movie?.release_date
            });
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
            showAlert("Added to favorite", 'success', 2000);
        }
    };
    const navigateToMovie = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        const target = e.target as HTMLElement;
        if (
            target.closest('button') ||
            target.closest('svg') ||
            target.closest('path')
        ) {
            
            return;
        }
    
        navigate(`/movie/${movie?.id}`);
    };

    return (
        <div onClick={(e) => navigateToMovie(e)} className="w-[48%] sm:w-[32%] md:w-[48%] h-[250px] sm:h-[320px] md:h-[400px] lg:w-73 lg:h-[460px] rounded-lg overflow-hidden relative cursor-pointer">
            <img loading="lazy" alt={movie?.title} src={movie?.poster_path ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}` : `https://placehold.co/310x480?text=Not Found&?font=poppins`}
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
                    isFavorite ? <Button varient="secondary" text="clear" /> :
                        <Button varient="secondary" size="regular" text="Add to faviorate" />
                }
            </div>
        </div>
    )
}

export default Moviecard