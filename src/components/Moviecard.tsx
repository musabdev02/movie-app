// helper
import { truncate } from "../helper"
const Moviecard = () => {
    return (
        <div className="w-73 h-[460px] rounded-lg overflow-hidden relative">
            <img src="https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
                className="w-full h-full"
            ></img>
            <div className="bg-gradient-to-br from-white to-gray-400 shadow-md border border-gray-200 backdrop-blur-lg
      absolute w-full p-4 bottom-0 rounded-b-lg opacity-90">
                <h3 title="Peter Pan's Neverland Nightmare" className="font-medium text-lg leading-6 text-gray-800">{truncate("Peter Pan's Neverland Nightmare")}</h3>
                <div className="flex gap-2 mt-2 text-sm text-gray-700 font-medium">
                    <p>2022 |</p>
                    <p>Action Comedy</p>
                </div>
            </div>
        </div>
    )
}

export default Moviecard