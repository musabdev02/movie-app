import { Outlet, useLocation  } from "react-router-dom"
import { useLayoutEffect, useRef, useState } from "react"
// components
import Header from "./Header"
import Sidebarlayout from "./layout/Sidebarlayout"

const Layout = () => {
    const location = useLocation();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, 0);
        }
    }, [location.pathname]);

    return (
        <div className="flex">
          <Sidebarlayout setSidebar={setIsSidebarOpen} isSidebar={isSidebarOpen}/>
            <div ref={scrollRef} className="w-full bg-blackish overflow-y-auto h-screen">
                <Header openSidebar={setIsSidebarOpen}/>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout