import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
// icons
import { House, Heart, TrendingUp, Calendar } from 'lucide-react';
import logo from '../assets/icon.png'
type SidebarItem = {
    title: string;
    destination: string;
    icon: React.ElementType;
};

const sideLinks: SidebarItem[] = [
    {
        title: "Home",
        destination: "/",
        icon: House,
    },
    {
        title: "Favorites",
        destination: "/favorites",
        icon: Heart,
    },
    {
        title: "Trending",
        destination: "/trending",
        icon: TrendingUp,
    },
    {
        title: "Coming Soon",
        destination: "/upcoming",
        icon: Calendar,
    }
];

const Sidebar = () => {
    const [active, setActive] = useState<string>('home');
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname.slice(1))
    }, [location.pathname]);

    return (
        <div className="w-[16%] hidden sm:block bg-blackish h-screen p-6 overflow-y-hidden shadow-[2px_0px_90px_0px_rgba(97,0,194,0.4)] relative">
            {/* logo */}
            <Link to={"/"} className='flex text-white gap-2 p-2'>
                <img src={logo} alt="logo" className='w-8'/>
                <h3 className='font-bold text-2xl'>Watch</h3>
            </Link>
            {/* list */}
            <div className='mt-10 text-white flex flex-col gap-7 p-2'>
                {
                    sideLinks.map((item) => (
                        <Link key={item.destination} to={item.destination} onClick={() => setActive(item.title)} className={`focus:text-white hover:text-white flex items-center gap-2 text-gray-400
                         ${active.toLowerCase() === item.destination.slice(1) && 'text-white'}`}>
                            <item.icon size={20}/>
                            <p className='text-md'>{item.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar