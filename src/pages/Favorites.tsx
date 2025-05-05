// components
import Ftu from "../components/Ftu"
import Moviecard from "../components/Moviecard";
// icons
import { TreePalm, Heart } from 'lucide-react';
// type
import { Movie } from "../types";

const Favourites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || '[]');
  return (
    <Ftu heading="Your Favorites">
      {
        favorites.length > 0 ? favorites.map((item: Movie) => <Moviecard key={item.id} movie={item} />) :
          <div className="w-full h-[60vh] flex items-center justify-center flex-col gap-3 text-gray-400">
            <TreePalm size={99} className="text-gray-400" />
            <h3 className="font-medium text-xl">No Favorites Found</h3>
            <p className="w-[100%] md:w-[25%] text-center mx-auto">You haven't saved any movies as favorites yet. To add a film to your personal collection, simply click the <Heart size={18} className="inline-block text-purple-400" /> icon.</p>
          </div>
      }
    </Ftu>
  )
}

export default Favourites