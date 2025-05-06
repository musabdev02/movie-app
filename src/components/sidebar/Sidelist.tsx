import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// icons
import { House, Heart, TrendingUp, Calendar } from 'lucide-react';
// type
import { SidebarItem } from '../../types';

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

const Sidelist = () => {
    const [active, setActive] = useState<string>('home');
    const location = useLocation();

    useEffect(() => {
        setActive(location.pathname.slice(1))
    }, [location.pathname]);


    return (
        <div className='mt-10 text-white flex flex-col gap-7 p-2'>
            {
                sideLinks.map((item) => (
                    <Link key={item.destination} to={item.destination} onClick={() => setActive(item.title)} className={`focus:text-white hover:text-white flex items-center gap-2 text-gray-400
             ${active.toLowerCase() === item.destination.slice(1) && 'text-white'}`}>
                        <item.icon size={20} />
                        <p className='text-md'>{item.title}</p>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidelist