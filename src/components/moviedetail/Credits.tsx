const API_KEY = import.meta.env.VITE_API_KEY
// components
import Singlecast from "./Singlecast"

// quries
import { useQuery } from "@tanstack/react-query"
import ErrorDisplay from "../ui/ErrorDisplay";

// type
import { CreditItems } from "../../types";

const Credits = ({ id }: { id: number }) => {

    const handleRq = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
        if (!res.ok) throw new Error('Network error');
        return res.json();
    };

    const { data, error } = useQuery({
        queryKey: ['credits'],
        queryFn: handleRq,
    });

    if(error) return <ErrorDisplay message={error.message}/>



    return (
        <div className="mt-4 flex gap-4 flex-wrap sm:flex-nowrap">

            {
              data &&  data?.cast.slice(0, 5).map((item: CreditItems) => <Singlecast key={item.id} name={item?.name} profile_path={item?.profile_path} character={item?.character}/>)
                
            }
        </div>
    )
}

export default Credits