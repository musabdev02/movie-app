const API_KEY = import.meta.env.VITE_API_KEY;
// components
import Ftu from "../components/Ftu";
import Moviecard from "../components/Moviecard";
import Loading from "../components/ui/Loading";
import ErrorDisplay from "../components/ui/ErrorDisplay";
// types
import { Movie } from "./Home";
// queries
import { useQuery } from "@tanstack/react-query";

const Upcoming = () => {

    const handleRq = async (): Promise<Movie[]> => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        return data.results as Movie[];
    };

    const { data, isLoading, error } = useQuery<Movie[]>({
        queryKey: ['upcomingMovies'],
        queryFn: handleRq,
    });

    if(isLoading){
        return <Loading />
    }
    if(error){
        return <ErrorDisplay message={error.message}/>
    }

    return (
        <Ftu heading="Upcoming shows">
            {data?.map(item => <Moviecard key={item.id} movie={item} />)}
        </Ftu>
    )
}

export default Upcoming