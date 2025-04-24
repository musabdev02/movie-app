import { Link } from 'react-router-dom';
// icons
import { Coffee, House, Heart, TrendingUp, Calendar } from 'lucide-react';

type SidebarItem = {
    title: string;
    destination: string;
    icon: React.RefAttributes<SVGAElement>;
};

const sideLinks: SidebarItem[] = [
    {
        title: "Home",
        destination: "/",
        icon: <House size={20} />,
    },
    {
        title: "Favourites",
        destination: "/favourites",
        icon: <Heart size={20}/>,
    },
    {
        title: "Trending",
        destination: "/trending",
        icon: <TrendingUp size={20}/>,
    },
    {
        title: "Coming Soon",
        destination: "/upcoming",
        icon: <Calendar size={18}/>,
    }
];

const Sidebar = () => {

    return (
        <div className="w-[16%] bg-[#21201e] h-screen p-6">
            {/* logo */}
            <div className='flex text-white gap-2 p-2'>
                <Coffee size={30} />
                <h3 className='font-bold text-2xl'>Watch</h3>
            </div>
            {/* list */}
            <div className='mt-10 text-white flex flex-col gap-7 p-2'>
                {
                    sideLinks.map((item) => (
                        <Link key={item.destination} to={item.destination} className='flex items-center gap-2 text-gray-200'>
                            {item.icon}
                            <p className='text-md'>{item.title}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar