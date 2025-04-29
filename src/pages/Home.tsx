const API_KEY = import.meta.env.VITE_API_KEY;
import { useEffect, useMemo, useRef } from "react";
// component
import HeroCard from "../components/home/HeroCard"
import Moviecard from "../components/Moviecard"
import ErrorDisplay from "../components/ui/ErrorDisplay";
import Loading from "../components/ui/Loading";
// queries
import { useInfiniteQuery } from "@tanstack/react-query";

export type Movie = {
  id: number;
  title: string;
  backdrop_path: string;
  poster_path?: string
  release_date: string;
};
const Home = () => {
  
  const fetchMovies = async ({ pageParam = 1 }): Promise<{ results: Movie[], page: number, total_pages: number }> => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageParam}`);
    if (!res.ok) throw new Error('Network error');
    return res.json();
  };
  
    const {
      data,
      error,
      isLoading,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage
    } = useInfiniteQuery({
      queryKey: ['playingMovies'],
      queryFn: fetchMovies,
      getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.total_pages) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      initialPageParam: 1,
    });
  
    const loaderRef = useRef(null);
  

    useEffect(() => {
      const target = loaderRef.current;
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 1 }
      );
  
      if (target) {
        observer.observe(target);
      }
  
      return () => {
        if (target) observer.unobserve(target);
      };
    }, [fetchNextPage, hasNextPage]);
  
    const flatMovies = useMemo(() => {
      return data?.pages.flatMap((page) => page.results) || [];
    }, [data]);
  
    const [featuredMovie, restMovies]: [Movie | undefined, Movie[]] = useMemo(() => {
      if (flatMovies.length) {
        return [flatMovies[0], flatMovies.slice(1)];
      }
      return [undefined, []];
    }, [flatMovies]);
  
    if (isLoading) return <Loading />;
    if (error) return <ErrorDisplay message={(error as Error).message} />;
  
    return (
      <div className="min-h-screen">
        <HeroCard featured={featuredMovie} />
        <div className="p-4 md:p-6 flex flex-wrap gap-2 md:gap-6">
          {restMovies.map((item) => (
            <Moviecard key={item.id} movie={item} />
          ))}
        </div>
  
        <div ref={loaderRef} className="text-center py-8">
          {isFetchingNextPage
            ? <p className="text-white">Loading more...</p>
            : hasNextPage
              ? <p>Scroll to load more...</p>
              : <p>No more movies</p>}
        </div>
      </div>
    );
  };

export default Home