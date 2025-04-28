// components
import Button from "../ui/Button"
// types
import { Movie } from "../../pages/Home";
// helper
import { monthName } from "../../helper";

interface HeroCardProps {
    featured: Movie | undefined;
}

const HeroCard = ({ featured }: HeroCardProps) => {
    if(!featured) return null;
    return (
        <div className="w-full h-[550px] md:h-[500px] bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${featured?.backdrop_path}')`,
            }}
        >
            <div className="flex flex-col justify-end h-full gap-3 text-white p-6 md:p-12">
                <h2 className="text-5xl md:text-6xl font-bold">{featured?.title}</h2>
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
                    <Button text="Learn More" varient="primary" />
                    <Button text="Add to favorite" varient="secondary" />
                </div>
            </div>
        </div>
    )
}

export default HeroCard