import React,{useState,useEffect} from 'react';
import { FaCaretDown } from "react-icons/fa";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    ); 
    const [showMenu, setShowMenu] = useState(false);
    const element = document.documentElement;

    const toggleMenu = ()=>{
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    },[theme]);
    return (
    <>
      <nav className='bg-gradient-to-r from-cyan-800 via-cyan-900 to-cyan-800 bg-opacity-95 backdrop-blur-md text-white fixed top-0 left-0 w-full border-b border-cyan-400/20 shadow-md z-50'>
        <div className="container">
            <div className='flex items-center justify-between h-[72px] py-2'>
                {/* logo section */}
                <div className='text-3xl md:text-4xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-cyan-400 via-amber-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg'>
                    <a href="#">
                    Raise <span className='inline-block font-extrabold text-amber-500 hover:text-amber-400 transition-transform transform hover:scale-110'>Up</span>
                    </a>
                </div>
                {/* desktop menu section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-8 text-sm font-medium uppercase'>
                        <li className='group relative cursor-pointer'>
                            <a href="#" className='flex items-center gap-[2px] h-[72px] hover:text-amber-400 transition-colors'>Home{""} 
                                <span>
                                    <FaCaretDown className='group-hover:rotate-180 transition-all duration-200'/>
                                </span>
                            </a>
                            {/* dropdown section */}
                            <div className='absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-lg p-3 text-black rounded-md group-hover:block group-hover:scale-100 scale-95 transition-transform'>
                                <ul className='space-y-2 text-sm'>
                                    <li className='p-2 rounded-md hover:bg-cyan-500 hover:text-white transition'>Services</li>
                                    <li className='p-2 rounded-md hover:bg-cyan-500 hover:text-white transition'>About us</li>
                                    <li className='p-2 rounded-md hover:bg-cyan-500 hover:text-white transition'>Privacy Policy</li>
                                </ul>
                            </div>
                        </li>
                        <li className='hover:text-amber-400 transition-colors cursor-pointer'>About us</li>
                        <li>   
                            <div className='flex items-center gap-4'>
                                {/* icon here */}
                                <div>
                                    <BiPhoneCall className='text-2xl h-[40px] w-[40px] rounded-full text-white bg-amber-600 hover:bg-amber-500 transition p-2' />
                                </div>
                                {/* Mobile no. */}
                                <div>
                                    <p className="text-xs text-gray-300">Talk to us</p>
                                    <p className="text-sm font-semibold">+91 1234567890</p>
                                </div>
                            </div>
                        </li>
                        {/* Light and Dark mode switcher */}
                        {theme === "dark" ? (
                            <BiSolidSun className='text-2xl cursor-pointer hover:rotate-180 transition-transform duration-500' onClick={()=> setTheme("light")}
                            />
                        ): (<BiSolidMoon className='text-2xl cursor-pointer hover:rotate-180 transition-transform duration-500' onClick={()=> setTheme("dark")}/>
                        )}
                    </ul>
                </div>
                {/* Mobile menu section */}
                <div className='md:hidden flex items-center gap-4'>
                    {theme === "dark" ? (
                            <BiSolidSun className='text-2xl cursor-pointer hover:rotate-180 transition-transform duration-500' onClick={()=> setTheme("light")}
                            />
                    ): (<BiSolidMoon className='text-2xl cursor-pointer hover:rotate-180 transition-transform duration-500' onClick={()=> setTheme("dark")}/>
                    )}
                    {showMenu ? (
                        <HiMenuAlt1
                            onClick={toggleMenu}
                            className='cursor-pointer text-white hover:scale-110 transition-transform'
                            size={30}
                        />    
                    ): (
                        <HiMenuAlt3
                            onClick={toggleMenu}
                            className='cursor-pointer text-white hover:scale-110 transition-transform'
                            size={30}   
                        />         
                    )}
                </div>
            </div>
        </div>
      </nav>
      {/*Mobile side Menu component */}
      <ResponsiveMenu showMenu={showMenu}/>
    </>
  )
}

export default Navbar
