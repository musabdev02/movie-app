import { useMemo } from "react";
// component
import HeroCard from "../components/home/HeroCard"
import Moviecard from "../components/Moviecard"
import ErrorDisplay from "../components/ui/ErrorDisplay";
import Loading from "../components/ui/Loading";
import InfiniteScroll from "../components/ui/InfiniteScroll";
// hook
import useFetchMovies from "../hooks/useFetchMovies";
// type
import { Movie } from "../types";

const Home = () => {
  const {
    movies,
    error,
    isLoading,
    loaderRef,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useFetchMovies({ endPoint: "now_playing" });


  const [featuredMovie, restMovies]: [Movie | undefined, Movie[]] = useMemo(() => {
    if (movies.length) {
      return [movies[0], movies.slice(1)];
    }
    return [undefined, []];
  }, [movies]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay message={(error as Error).message} onClick={() => refetch()} />;

  return (
    <div className="min-h-screen">
      <HeroCard featured={featuredMovie} />

      <div className="p-4 md:p-6 flex flex-wrap gap-2 lg:gap-6">
        {restMovies.map((item) => (
          <Moviecard key={item.id} movie={item} />
        ))}
      </div>

      <InfiniteScroll loaderRef={loaderRef} isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} />

    </div>
  );
};

export default Home