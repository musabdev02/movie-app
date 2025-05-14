import { Link } from "react-router-dom";
// components
import Button from "../ui/Button"
// types
import { Movie } from "../../types";
// helper
import { monthName } from "../../helper";

interface HeroCardProps {
    featured: Movie | undefined;
}

const HeroCard = ({ featured }: HeroCardProps) => {
    if(!featured) return null;
    return (
        <div className="relative w-full h-[330px] md:h-[400px] lg:h-[550px] bg-no-repeat bg-cover bg-center "
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${featured?.backdrop_path}')`,
            }}
        >
            <div className="absolute inset-0 bg-gray-900/40"></div>

            <div className="relative z-10 flex flex-col justify-end h-full gap-3 text-white p-6 md:p-12">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">{featured?.title}</h2>
                <div className="flex gap-2 text-gray-300">
                    <p>
                        {
                           featured?.release_date.slice(8) +
                           '-' + monthName(`${featured?.release_date.slice(5, 7)}`)+
                           '-' + featured?.release_date.slice(0, 4)
                        }
                    </p>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <Link to={`/movie/${featured.id}`}><Button text="Learn More" varient="primary" /></Link>  
                    <Button text="Add to favorite" varient="secondary" />
                </div>
            </div>
        </div>
    )
}

export default HeroCard