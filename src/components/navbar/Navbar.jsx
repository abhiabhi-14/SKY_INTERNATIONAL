import React, { useState, useEffect } from 'react';
import {Link , NavLink} from 'react-router-dom';
import menu from '../../assets/menu.png'
import cross from '../../assets/close.png'
import line from '../../assets/line2.png'

function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if(currentScroll <= 100 || currentScroll === 0 )  setShowNavbar(false);
            else setShowNavbar(true)
    
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ showNavbar]);

    const handleClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='relative z-[100]'>
            <div className={`Navbar border-b-transparent rounded-b-md fixed w-full h-16 top-0 left-0 bg grid grid-cols-10 transition-transform duration-300 ease-in-out  ${showNavbar ?'bg-white text-black' : 'text-white bg-opacity-15'}`}>

                <div className='logo col-start-2 flex items-center'>
                    <h1 className='font-extrabold text-2xl'>LOGO.</h1>
                </div>

                <div className='links col-start-5 col-span-3 flex justify-between items-center'>
                    <div className='hidden md:h-full md:w-full md:flex md:justify-center md:items-center md:hover:scale-110 '>
                        <NavLink to='/' className={({isActive}) => ` font-bold ${isActive?' scale:125 text-blue-600  font-extrabold':'scale-100'}`}>HOME
                        <div className={({isActive})=>`h-5 w-1 p-0 m-0 ${isActive == true ? 'translate-x-0' : '-translate-x-40'}`}></div>
                        </NavLink>
                    </div>
                    <div className='hidden md:h-full md:w-full md:flex md:justify-center md:items-center md:hover:scale-110 '>
                        <NavLink to='/AboutPage' className={({isActive}) => ` font-bold ${isActive?' scale:125 text-blue-600 font-extrabold':'scale-100'}`}>ABOUT</NavLink>
                    </div>
                    <div className='hidden md:h-full md:w-full md:flex md:justify-center md:items-center md:hover:scale-110 '>
                        <NavLink to='/ProductPage' className={({isActive}) => ` font-bold ${isActive?' scale:125 text-blue-600 font-extrabold':'scale-100'}`}>PRODUCT</NavLink>
                    </div>
                    <div className='hidden md:h-full md:w-full md:flex md:justify-center md:items-center md:hover:scale-110 '>
                        <NavLink to='/ContactPage' className={({isActive}) => ` font-bold ${isActive?' scale:125 text-blue-600 font-extrabold':'scale-100'}`}>CONTACT</NavLink>
                    </div>
                </div>

                <button
                    className={`border-none h-8 w-8 border col-start-9 md:hidden fixed top-4 hover:scale-105 ${showMenu?'hidden':''}`}
                    onClick={handleClick}>
                    <img src={menu} alt="Menu" />
                </button>

                
                <div className={`md:hidden  fixed  flex justify-around items-center flex-col duration-500 bg-white shadow-lg w-full h-[300px] transform ease-in-out ${showMenu ? ' translate-x-0' : 'translate-x-full'}  ${showNavbar?'invert-0':'bg-opacity-25 backdrop-blur-lg'}`}>

                    <div className='hover:scale-110 h-full w-screen flex items-center justify-center '>
                    <NavLink to='/' onClick={handleClick}>HOME</NavLink>
                    </div>
                    <div className='hover:scale-110 h-full w-screen flex items-center justify-center '>
                    <NavLink to='/AboutPage' onClick={handleClick}>ABOUT</NavLink>
                    </div>
                    <div className='hover:scale-110 h-full w-screen flex items-center justify-center '>
                    <NavLink to='/ProductPage' onClick={handleClick}>PRODUCT</NavLink>
                    </div>
                    <div className='hover:scale-110 h-full w-screen flex items-center justify-center '>
                    <NavLink to='/ContactPage' onClick={handleClick}>CONTACT</NavLink>
                    </div>
                    <div 
                    className='w-10 h-10 fixed top-3 right-12 border rounded-full bg-opacity-35 backdrop-blur-lg bg-white flex justify-center items-center shadow-xl hover:scale-110 '
                    onClick={handleClick}
                    >
                    <img 
                    src={cross}
                    className='w-3 h-3 '
                    />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Navbar;


