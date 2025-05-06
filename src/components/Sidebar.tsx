import { Link } from 'react-router-dom';
import { Ref } from 'react';
// components
import Sidelist from './sidebar/Sidelist';
// icons

import logo from '../assets/icon.png'


const Sidebar = ({ isOpen, sidebarRef }: { isOpen: boolean, sidebarRef: Ref<HTMLDivElement> | null }) => {
    return (
        <div ref={sidebarRef} className={`${isOpen ? 'translate-x-0': '-translate-x-full'} w-[90%] sm:translate-x-0 transition-all duration-300 ease-in-out fixed z-9 sm:w-[16%] sm:block bg-blackish h-screen p-6 overflow-y-hidden shadow-[2px_0px_90px_0px_rgba(97,0,194,0.4)] sm:relative`}>
            {/* logo */}
            <Link to={"/"} className='flex text-white gap-2 p-2'>
                <img src={logo} alt="logo" className='w-8' />
                <h3 className='font-bold text-2xl'>iPlex</h3>
            </Link>
           <Sidelist />
        </div>
    )
}

export default Sidebar