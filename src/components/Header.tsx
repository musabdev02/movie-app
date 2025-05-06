import { useState, useRef, useEffect } from "react"
// components
import Searchbar from "./header/Searchbar"
// icons
import { Search } from "lucide-react"
import { PanelRight } from 'lucide-react';

const Header = ({ openSidebar }: {openSidebar: React.Dispatch<React.SetStateAction<boolean>>}) => {
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
    <div className="w-full bg-transparent flex justify-between px-4 md:px-12 py-6 text-gray-300 -mb-20 h-[80px]">
        <div className="md:flex gap-8 hidden">
            <p>Movies</p>
            <p>Series</p>
            <p>Documentaries</p>
        </div>
        {/* menu_icon */}
        <div className="md:hidden" onClick={() => openSidebar(true)}>
          <PanelRight size={20}/>
        </div>
        <div className="flex items-center justify-end w-full">
          {
            isSearch ? <Searchbar inputRef={inputRef} />:
            <Search onClick={openSearch} size={20} className="cursor-pointer"/>
          }
        </div>
    </div>
  )
}

export default Header