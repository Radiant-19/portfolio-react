import React, { useState, useEffect }  from 'react'
import Hamburger from 'hamburger-react'
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram} from "react-icons/ai";
function Navbar() {
    const [isOpen, setOpen] = useState(false)
    const [isTopOfPage, setIsTpOfPage] = useState(true);

    useEffect (() =>{
        const handleScroll = ()=>{
        if(window.scrollY === 0){ 
            setIsTpOfPage(true)
            console.log(isTopOfPage)
        };
        if(window.scrollY !== 0) setIsTpOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <section className='navbar'>
    <div className={` ${isTopOfPage ? "": "bg-[#0d0a16]"} md:px-16 sm:px-8 z-40 w-full fixed top-0 pt-5 pb-5 transition duration-300`}>
        <nav className='flex border py-1 bg-gradient-to-bl from-blue-950 to-black border-gray-400 rounded-2xl px-4 items-center justify-between'>
            <a className="logo w-28 flex" href='/'>
                <img  src='/arvind-logo.png' width={70} height={50} alt="" />
            </a>
            <div className={`nav-list lg:block absolute right-10 lg:relative lg:top-0 transition-all duration-100 ease-in ${isOpen ? "top-[50px]":"top-[-100px]"}`}>
                <ul className={`flex text-gray-300  ${isOpen? "flex-col space-y-5": "flex-row space-x-6"}`}>
                    <li className='hover:text-[#5b84a7] transition-all duration-200 ease-in cursor-pointer'><a href="#about">About</a></li>
                    <li className='hover:text-[#5b84a7] transition-all duration-200 ease-in cursor-pointer'><a href="#projects">Projects</a></li>
                    <li className='hover:text-[#5b84a7] transition-all duration-200 ease-in cursor-pointer'><a href="#technologies">Technologies</a></li>
                    <li className='hover:text-[#5b84a7] transition-all duration-200 ease-in cursor-pointer'><a href="#contact">Contact Me</a></li>
                    <li className='hover:text-blue-300 transition-all duration-200 ease-in cursor-pointer '>
                        <AiFillGithub size={24} onClick={() => window.open("https://github.com/Radiant-19", '_blank')}>
                            
                        </AiFillGithub>
                    </li>
                    <li className='hover:text-blue-300 transition-all duration-200 ease-in cursor-pointer '>
                        <AiFillLinkedin size={24} onClick={()=> window.open("https://www.linkedin.com/in/arvind-manavalan-v-240200269/",'_blank')}>
                        
                        </AiFillLinkedin>
                    </li>
                    <li className='hover:text-blue-300 transition-all duration-200 ease-in cursor-pointer '>
                        <AiFillInstagram size={24} onClick={()=> window.open("https://www.instagram.com/arvindmanavalan19/",'_blank')}>
                           
                        </AiFillInstagram>
                    </li>
                </ul>
            </div>
            <div className='lg:hidden block'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
        </nav>
    </div>
    </section>
  )
}

export default Navbar