import Loading from "./Loading"

interface infiniteScrollProps {
    loaderRef: React.RefObject<HTMLDivElement | null>,
    isFetchingNextPage: boolean | undefined,
    hasNextPage: boolean | undefined

};
const InfiniteScroll = ({ loaderRef, isFetchingNextPage, hasNextPage }: infiniteScrollProps) => {
    return (
        <div ref={loaderRef} className="text-center text-white py-8 w-full mx-auto">
            {isFetchingNextPage
                ? <Loading />
                : hasNextPage
                    ? <p>Scroll to load more...</p>
                    : <p>No more movies</p>}
        </div>
    )
}

export default InfiniteScroll