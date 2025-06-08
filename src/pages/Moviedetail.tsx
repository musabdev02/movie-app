const API_KEY = import.meta.env.VITE_API_KEY
import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom"
// components
import Mainhero from "../components/moviedetail/Mainhero";
const Credits = lazy(() => import('../components/moviedetail/Credits'));
import Movielayout from "../components/Movielayout";
import Loading from "../components/ui/Loading";
import ErrorDisplay from "../components/ui/ErrorDisplay";
import Details from "../components/moviedetail/Details";
// query
import { useQuery } from "@tanstack/react-query";
// type
import { HeroDetails } from "../types";

// images
import posterPlaceholder from '/poster_placeholder.svg'



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
        poster_path: data?.poster_path || posterPlaceholder,
        backdrop_path: data?.backdrop_path || "",
        title: data?.title || "No title",
        tagline: data?.tagline || "No tagline",
        overview: data?.overview || "No Overview",
        runtime: data?.runtime || 0,
        vote_average: data?.vote_average || 0,
        release_date: data?.release_date || "Unknown",
        genres: data?.genres || [],
    };

    return (
        <div className="bg-blackish pb-10">
            <Mainhero {...mainHeroData}/>
            <div className="mt-8 sm:max-w-[65%] mx-auto flex flex-col-reverse sm:flex-row gap-4">
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
               {data && <Details data={data}/>}
            </div>
        </div>
    )
}

export default Moviedetail