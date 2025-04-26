import { useState } from "react"
// components
import Searchbar from "./header/Searchbar"
// icons
import { Search, Bell } from "lucide-react"

const Header = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const openSearch = () => {
    setIsSearch(true)
  };
  return (
    <div className="w-full bg-transparent flex justify-between px-12 py-4 text-gray-300 -mb-20">
        <div className="flex gap-8">
            <p>Movies</p>
            <p>Series</p>
            <p>Documentaries</p>
        </div>
        <div className="flex items-center gap-6">
          {
            isSearch ? <Searchbar />:
            <Search onClick={openSearch} size={20} className="cursor-pointer"/>
          }
            
            <Bell size={20}/>
        </div>
    </div>
  )
}

export default Header