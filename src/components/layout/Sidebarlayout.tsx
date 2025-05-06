import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
// components
import Sidebar from "../Sidebar";

const Sidebarlayout = ({ setSidebar, isSidebar }: { setSidebar: React.Dispatch<React.SetStateAction<boolean>>, isSidebar: boolean }) => {
    const location = useLocation();
    const sidebarRef = useRef<HTMLDivElement>(null);


    useEffect(() =>{
        setSidebar(false);
    }, [location.pathname, setSidebar]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
          if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            setSidebar(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [setSidebar]);


    return (
        <Sidebar isOpen={isSidebar} sidebarRef={sidebarRef}/>
    )
}

export default Sidebarlayout