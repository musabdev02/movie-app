import { Outlet, useLocation } from "react-router-dom"
import { useLayoutEffect, useRef } from "react"
// components
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = () => {
    const location = useLocation();
    const scrollRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(0, 0);
        }
    }, [location.pathname])

    return (
        <div className="flex">
            <Sidebar />
            <div ref={scrollRef} className="w-full bg-blackish overflow-y-auto h-screen">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout