import {  useLocation, useNavigate } from "react-router-dom";
// helper
import { monthName } from "../../helper"
// type
import { Genre } from "../../types";
// icons
import { ChevronLeft } from 'lucide-react';

interface MainHeroProps {
    poster_path: string,
    title: string,
    runtime: number,
    vote_average: number,
    tagline: string,
    backdrop_path: string,
    overview: string,
    release_date: string,
    genres: Genre[]
}


const convertRuntime = (time: number): string => {
    const num: number = time;
    const hour: number = Math.floor(num / 60);
    const minute: number = num % 60;
    return `0${hour},${minute >= 9 ? minute : `0${minute}`}m`
}

const getRating = (vote: number): string => {
    const voteAverage: number = vote;
    const percentage: number = (voteAverage / 10) * 100;
    return `${percentage.toFixed(0)}%`;
};


const Mainhero = ({ poster_path, title, tagline, backdrop_path, overview, release_date, genres, runtime, vote_average }: MainHeroProps) => {
    const locatoin = useLocation();
    const navigate = useNavigate();
    const goBackToPreviousPage = (): void => {navigate(locatoin.state);};


    return (
        <div className="relative h-[650px] bg-cover bg-center"
            style={{ backgroundImage: ` url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}')`, }}>

            <div className="absolute inset-0 bg-gray-900/70"></div>
            <div className="relative z-10 flex justify-center items-center gap-4 h-full text-white p-4">
                <div onClick={goBackToPreviousPage} className="absolute left-20 top-12 text-white z-10 flex items-center cursor-pointer">
                    <ChevronLeft />
                    <h5>Back</h5>
                </div>
                <img src={poster_path.startsWith('/') ? `https://media.themoviedb.org/t/p/w300${poster_path}` : `${poster_path}`} alt="poster" className="rounded-md" />
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
                            <p>{convertRuntime(runtime)}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                        <h3 className="font-bold text-lg">Rating</h3>
                        <h3 className="rounded-full bg-gradient-to-br from-white to-purple-300 shadow-md border border-gray-700 backdrop-blur-lg  text-[#6100C2] p-3 text-lg">{getRating(vote_average)}</h3>
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