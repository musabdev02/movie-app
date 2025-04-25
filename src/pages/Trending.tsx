const API_KEY = import.meta.env.VITE_API_KEY;
// components
import Ftu from "../components/Ftu"
import Moviecard from "../components/Moviecard"
// type
import { Movie } from "./Home";
// queries
import { useQuery } from "@tanstack/react-query";



const Trending = () => {

    const handleRq = async (): Promise<Movie[]> => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        return data.results as Movie[];
    };

    const { data } = useQuery<Movie[]>({
        queryKey: ['trendingMovies'],
        queryFn: handleRq,
    });

    return (
        <Ftu heading="Trending at this moment">
            {data?.map(item => <Moviecard key={item.id} movie={item} />)}
        </Ftu>
    )
}

export default Trending