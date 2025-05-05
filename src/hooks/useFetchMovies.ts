const API_KEY = import.meta.env.VITE_API_KEY;
import { useRef, useEffect, useMemo } from "react";
// react query
import { useInfiniteQuery } from "@tanstack/react-query";
// type
import { Movie } from "../types";

const BASE_URL = 'https://api.themoviedb.org/3/movie';


const useFetchMovies = ({ endPoint }: { endPoint: string }) => {

    const fetchMovies = async ({ pageParam = 1 }): Promise<{ results: Movie[], page: number, total_pages: number }> => {
        const res = await fetch(`${BASE_URL}/${endPoint}?api_key=${API_KEY}&language=en-US&page=${pageParam}`);
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
        queryKey: [endPoint as string],
        queryFn: fetchMovies,
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

    return { movies: flatMovies, loaderRef, error, isLoading, isFetchingNextPage, hasNextPage }

};

export default useFetchMovies