
// icons
import { Search, Bell } from "lucide-react"
const Header = () => {
  return (
    <div className="w-full bg-transparent flex justify-between px-12 py-7 text-gray-300 -mb-20">
        <div className="flex gap-8">
            <p>Movies</p>
            <p>Series</p>
            <p>Documentaries</p>
        </div>
        <div className="flex gap-6">
            <Search size={20}/>
            <Bell size={20}/>
        </div>
    </div>
  )
}

export default Header