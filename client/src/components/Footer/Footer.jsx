import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";
import FooterLinks from './FooterLinks';

const importantLinks = [
    {
        name: "Home",
    },
    {
        name: "About"
    },
    {
        name: "Services"
    },
    {
        name: "Login"
    },
];

const Links = [
    {
        name: "Privacy Policy"
    },
    {
        name: "Services"
    },
    {
        name: "About us"
    },
];


const Footer = () => {
  return (
    <div className='text-white rounded-t-3xl bg-gradient-to-r from-violet-950 to-violet-900'>
      <div className='mx-auto max-w-[1200px] p-4'>
        {/* footer container section */}
        <div className="grid py-10 md:grid-cols-3 gap-6 bg-gray-900 text-gray-300 px-6 rounded-2xl shadow-lg">
            <div className='px-4 py-8'>
                <div className='text-3xl md:text-4xl font-extrabold uppercase tracking-tight bg-gradient-to-r from-cyan-400 via-amber-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg'>
                    <a href="#">
                    Raise <span className='inline-block font-extrabold text-amber-500 hover:text-amber-400 transition-transform transform hover:scale-110'>Up</span>
                    </a>
                </div>
                <p className="leading-relaxed text-sm md:text-base">
                RaiseUp is a modern donation platform designed to connect compassionate donors with individuals and communities in need. The app simplifies the act of giving by making it transparent, secure, and accessible to everyone. Whether it’s contributing to education, healthcare, or community welfare, RaiseUp ensures that every contribution—big or small—creates a meaningful impact. 
                </p>
                <div className="mt-4 flex items-center gap-3 text-sm">
                <span className="text-amber-500 text-lg">
                    <FaLocationArrow />
                </span>
                <p>Gurgaon, Haryana</p>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                <span className="text-amber-500 text-lg">    
                    <FaMobileAlt/>
                </span>    
                <p>+0123456789</p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols3 md:pl-10 col-span-2'>
                <div className='px-4 py-8'>
                    <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'>Important Links</h1>
                    <ul className='flex flex-col gap-3'>
                        <FooterLinks links= {importantLinks}/>
                    </ul>
                </div>
                <div className='px-2 py-8'>
                    <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'>Links</h1>
                    <ul className='flex flex-col gap-3'>
                        <FooterLinks links= {Links}/>
                    </ul>
                </div>
                <div className='px-2 py-8'>
                    <h1 className='mb-3 text-xl font-bold sm:text-left sm:text-xl'>Social Links</h1>
                    <div className='space-x-3'>
                        <div className='flex gap-3 mt-6 items-center'>
                            <a href="#" className='duration-200 hover:scale-105'>
                                <FaInstagram className='text-3xl'/>
                            </a>
                             <a href="#" className='duration-200 hover:scale-105'>
                                <FaFacebook className='text-3xl'/>
                            </a>
                             <a href="#" className='duration-200 hover:scale-105'>
                                <FaLinkedin className='text-3xl'/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        {/* footer copyright section */}
        <div className="bottom-footer bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
            <p className="py-6 text-center text-white text-sm font-medium">
             © {new Date().getFullYear()} All rights reserved.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer
