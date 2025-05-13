const API_KEY = import.meta.env.VITE_API_KEY
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom"
// components
import Mainhero from "../components/moviedetail/Mainhero";
const Credits = lazy(() => import('../components/moviedetail/Credits'));
// icons
import { Earth } from 'lucide-react';
// query
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/ui/Loading";
import ErrorDisplay from "../components/ui/ErrorDisplay";
// type
import { HeroDetails } from "../types";
import Movielayout from "../components/Movielayout";



const Moviedetail = () => {
    const { id } = useParams();

    const handleRq = async (): Promise<HeroDetails> => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
        if (!res.ok) throw new Error('Network error');
        return res.json();
    }


    const { data, error, isLoading } = useQuery<HeroDetails>({
        queryKey: [id as string],
        queryFn: handleRq,
    });

    if (isLoading)return <Movielayout><Loading /></Movielayout> 
    if (error) return <Movielayout><ErrorDisplay message={error.message} /></Movielayout> 

    const mainHeroData = {
        poster_path: data?.poster_path || "https://placehold.co/310x480?text=Not Found&?font=poppins",
        backdrop_path: data?.backdrop_path || "",
        title: data?.title || "No title",
        tagline: data?.tagline || "No tagline",
        overview: data?.overview || "No Overview",
        release_date: data?.release_date || "Unknown",
        genres: data?.genres || [],
    };


    return (
        <div className="bg-blackish pb-10">
            <Mainhero {...mainHeroData}/>
            <div className="mt-8 max-w-[65%] mx-auto flex gap-4">
                {/* left */}
                <div className="text-white w-fit px-4 min-w-[75%]">
                    {/* cast */}
                    <div>
                        <h4 className="font-bold text-xl">Top Billed Cast</h4>
                        <Suspense fallback="loading..">
                            <Credits id={data?.id || 0} />
                        </Suspense>
                    </div>
                </div>
                {/* right */}
                <div className="py-8 px-4 text-white">
                    <a href={data?.homepage || '#'} target="_blank" className="flex gap-2 items-center text-blue-400 hover:underline"> <Earth size={18} />Vist Homepage</a>
                    <div className="mt-8 flex flex-col gap-6">
                        <div>
                            <h4 className="font-medium text-sm text-gray-400">Status</h4>
                            <p>{data?.status}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-gray-400">Original Language</h4>
                            <p>{data?.spoken_languages.map(item => item.english_name)}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-gray-400">Other Languages</h4>
                            <p>English, Hindi</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-gray-400">Budget</h4>
                            <p>{data?.budget ? `$${Number(data.budget).toLocaleString()}`: "-"}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-gray-400">Revenue</h4>
                            <p>{data?.revenue ? `$${Number(data.revenue).toLocaleString()}`: "-"}</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-sm text-gray-400">Keywords</h4>
                            <div className="flex mt-2 gap-2 flex-wrap">
                                <p className="text-xs bg-gray-800 p-2 rounded-sm text-gray-300">missing child</p>
                                <p className="text-xs bg-gray-800 p-2 rounded-sm text-gray-300">consulate</p>
                                <p className="text-xs bg-gray-800 p-2 rounded-sm text-gray-300">conspiracy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moviedetail