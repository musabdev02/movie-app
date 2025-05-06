// components
import Ftu from "../components/Ftu";
import Moviecard from "../components/Moviecard";
import Loading from "../components/ui/Loading";
import ErrorDisplay from "../components/ui/ErrorDisplay";
import InfiniteScroll from "../components/ui/InfiniteScroll";
// hook
import useFetchMovies from "../hooks/useFetchMovies";

const Upcoming = () => {
    const {
        movies,
        error,
        isLoading,
        loaderRef,
        isFetchingNextPage,
        hasNextPage,
        refetch,
    } = useFetchMovies({ endPoint: "upcoming" });

    if (isLoading) return <Loading />;
    if (error) return <ErrorDisplay message={error.message} onClick={() => refetch()}/>;


    return (
        <Ftu heading="Upcoming shows">
            {movies.map(item => <Moviecard key={item.id} movie={item} />)}
            <InfiniteScroll loaderRef={loaderRef} isFetchingNextPage={isFetchingNextPage} hasNextPage={hasNextPage} />
        </Ftu>
    )
}

export default Upcoming