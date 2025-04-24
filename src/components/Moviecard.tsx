
const Moviecard = () => {
    return (
        <div className="w-73 h-[460px] rounded-lg overflow-hidden relative">
            <img src="https://image.tmdb.org/t/p/w500/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg"
                className="w-full h-full"
            ></img>
            <div className="bg-gradient-to-br from-white to-gray-400 shadow-md border border-gray-200 backdrop-blur-lg
      absolute w-full p-4 bottom-0 rounded-b-lg opacity-90">
                <h3 className="font-medium text-lg">A Minecraft Movie </h3>
                <div className="flex gap-2 mt-1 text-sm text-gray-700 font-medium">
                    <p>2022 |</p>
                    <p>Action Comedy</p>
                </div>
            </div>
        </div>
    )
}

export default Moviecard