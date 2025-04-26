const API_KEY = import.meta.env.VITE_API_KEY;
import { useMemo } from "react";
// component
import HeroCard from "../components/home/HeroCard"
import Moviecard from "../components/Moviecard"
import ErrorDisplay from "../components/ui/ErrorDisplay";
import Loading from "../components/ui/Loading";
// queries
import { useQuery } from "@tanstack/react-query";

export type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path?: string
  release_date: string;
};
const Home = () => {

  const handleRq = async (): Promise<Movie[]> => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.results as Movie[];
  };

  const { data, error, isLoading } = useQuery<Movie[]>({
    queryKey: ['playingMovies'],
    queryFn: handleRq,
  });

  const [featuredMovie, restMovies]: [Movie | undefined, Movie[]] = useMemo(() => {
    if (data?.length) {
      return [data[0], data.slice(1)];
    }

    return [undefined, []];
  }, [data]);

  if (isLoading) {
    return <Loading />
  };
  if (error) {
    return <ErrorDisplay message={error.message} />
  };


  return (
    <>
      <HeroCard featured={featuredMovie} />
      <div className="p-6 flex flex-wrap gap-6">
        {restMovies.map((item) => <Moviecard key={item?.id} movie={item} />)}
      </div>
    </>
  )
}

export default Home