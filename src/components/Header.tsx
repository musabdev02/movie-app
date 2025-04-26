import { useState, useRef, useEffect } from "react"
// components
import Searchbar from "./header/Searchbar"
// icons
import { Search, Bell } from "lucide-react"

const Header = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const openSearch = () => {
    setIsSearch(true)
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-transparent flex justify-between px-12 py-4 text-gray-300 -mb-20">
        <div className="flex gap-8">
            <p>Movies</p>
            <p>Series</p>
            <p>Documentaries</p>
        </div>
        <div className="flex items-center gap-6">
          {
            isSearch ? <Searchbar inputRef={inputRef} />:
            <Search onClick={openSearch} size={20} className="cursor-pointer"/>
          }
            
            <Bell size={20}/>
        </div>
    </div>
  )
}

export default Header