const API_KEY = import.meta.env.VITE_API_KEY;
import { Ref, useEffect, useState } from "react";
// component
import Moviesearch from "./Moviesearch"
import Loading from "../ui/Loading"

// queries
import { useQuery } from "@tanstack/react-query"


export type SearchMovie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Searchbar = ({ inputRef }: {inputRef: Ref<HTMLInputElement>}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  

  const handleRq = async ({ signal }: {signal: AbortSignal | null}): Promise<SearchMovie[]> => {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchTerm)}&api_key=${API_KEY}`, { signal })
    const data = await res.json();
    return data.results as SearchMovie[];
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);
  
  const { data, isLoading } = useQuery<SearchMovie[]>({
    queryKey: ['searchMovies', debouncedSearchTerm],
    queryFn: handleRq,
    staleTime: 5 * 60 * 1000,
    enabled: debouncedSearchTerm.trim() !== "",
  });
  

  return (
    <div className="relative z-9">
      <div>
        <input ref={inputRef} onChange={(e) => setSearchTerm(e.target.value)} type="search" placeholder="Search Movies..." autoCorrect="false" className="outline-none border border-gray-600  px-4 py-2  bg-blackish rounded-t-md"/>
      </div>
      <div className={`w-full ${debouncedSearchTerm.length > 0 ? 'block': 'hidden'} bg-blackish h-96 rounded-b-md absolute border border-gray-700 overflow-y-auto`}>
        {
          isLoading && <Loading />
        }
        {
          data && data?.map(item => <Moviesearch key={item.id} movie={item}/>)
        }
      </div>
    </div>
  )
}

export default Searchbar