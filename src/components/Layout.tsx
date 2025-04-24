import { Outlet } from "react-router-dom"
// components
import Sidebar from "./Sidebar"
import Header from "./Header"

const Layout = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="w-full bg-blackish overflow-y-auto h-screen">
                <Header />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout