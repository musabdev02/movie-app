const API_KEY = import.meta.env.VITE_API_KEY;
import { useRef, useEffect, useMemo } from "react";
// components
import Ftu from "../components/Ftu"
import Moviecard from "../components/Moviecard"
import ErrorDisplay from "../components/ui/ErrorDisplay";
import Loading from "../components/ui/Loading";
// type
import { Movie } from "./Home";
// queries
import { useInfiniteQuery } from "@tanstack/react-query";



const Trending = () => {

    const handleRq = async ({ pageParam = 1 }): Promise<{ results: Movie[], page: number, total_pages: number }> => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageParam}`)
        if (!res.ok) throw new Error('Network error');
        return res.json();
    };


    const { data, error, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['trendingMovies'],
        queryFn: handleRq,
        getNextPageParam: (lastPage) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });

    const loaderRef = useRef<HTMLDivElement | null>(null);

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

    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <ErrorDisplay message={error.message} />
    }

    return (
        <Ftu heading="Trending at this moment">
            {flatMovies?.map(item => <Moviecard key={item.id} movie={item} />)}
            <div ref={loaderRef} className="text-center text-white py-8 w-full mx-auto">
                {isFetchingNextPage
                    ? <Loading />
                    : hasNextPage
                        ? <p>Scroll to load more...</p>
                        : <p>No more movies</p> }
            </div>
        </Ftu>
    )
}

export default Trending