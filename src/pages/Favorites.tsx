// components
import Ftu from "../components/Ftu"
import Moviecard from "../components/Moviecard";
// type
import { Movie } from "./Home";

const Favourites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || '[]');
  console.log(favorites)
  return (
    <Ftu heading="Your Favorites">
      {favorites.map((item: Movie) => <Moviecard key={item.id} movie={item} />)}
    </Ftu>
  )
}

export default Favourites