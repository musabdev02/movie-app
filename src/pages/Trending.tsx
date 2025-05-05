// components
import Ftu from "../components/Ftu"
import Moviecard from "../components/Moviecard"
import ErrorDisplay from "../components/ui/ErrorDisplay";
import Loading from "../components/ui/Loading";
import InfiniteScroll from "../components/ui/InfiniteScroll";
// hook
import useFetchMovies from "../hooks/useFetchMovies";

const Trending = () => {
    const {
        movies,
        error,
        isLoading,
        loaderRef,
        isFetchingNextPage,
        hasNextPage
    } = useFetchMovies({ endPoint: "popular" });

    if (isLoading) return <Loading />

    if (error) return <ErrorDisplay message={error.message} />


    return (
        <Ftu heading="Trending at this moment">
            {movies?.map(item => <Moviecard key={item.id} movie={item} />)}
            <InfiniteScroll loaderRef={loaderRef} isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} />
        </Ftu>
    )
}

export default Trending