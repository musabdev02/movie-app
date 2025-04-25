const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useMemo, useState } from "react";
// component
import HeroCard from "../components/home/HeroCard"
import Moviecard from "../components/Moviecard"
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
  const [HeroMovie, setHeroMovie] = useState<Movie>()

  const handleRq = async (): Promise<Movie[]> => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    return data.results as Movie[];
  };
  
  const { data } = useQuery<Movie[]>({
    queryKey: ['playingMovies'],
    queryFn: handleRq,
  });

  const [featuredMovie, restMovies]: [Movie | undefined, Movie[]] = useMemo(() => {
    if (data?.length) {
      return [data[0], data.slice(1)];
    }
  
    return [undefined, []];
  }, [data]);

  useEffect(() => {
    if (!featuredMovie) return;
    const { title, id, release_date, backdrop_path } = featuredMovie;

    console.log(featuredMovie)
    setHeroMovie({
      title,
      id,
      backdrop_path,
      release_date,
    });
  }, [featuredMovie]);

  return (
    <>
      <HeroCard featured={HeroMovie}/>
      <div className="p-6 flex flex-wrap gap-6">
        {restMovies.map((item) => <Moviecard key={item?.id} movie={item}/>)}
      </div>
    </>
  )
}

export default Home