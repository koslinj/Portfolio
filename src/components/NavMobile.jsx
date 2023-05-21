import React, { useState } from 'react'
import { Link } from 'react-scroll';
import HamburgerMenu from './HamburgerMenu'

function NavMobile() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const hideMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`block md:hidden fixed z-10 top-0 bg-gradient-to-b from-violet-950 to to-slate-800 left-0 w-full rounded-b-xl shadow-1`}>
            <button
                type="button"
                className={`fixed top-0 right-0 p-2 rounded-md text-white hover:scale-125 transition-all duration-300 ${isMenuOpen ? 'transform rotate-90' : ''}`}
                onClick={toggleMenu}
            >
                <HamburgerMenu isMenuOpen={isMenuOpen} />
            </button>
            <h2 className='title'>Jan Koślin</h2>
            <ul className={`transition-all duration-500 ${isMenuOpen ? 'mt-14 flex flex-col justify-around items-center h-32' : 'h-14'}`}>
                <li className={`nav-elem ${isMenuOpen ? 'translate-y-0 hover:scale-125' : '-translate-y-32'}`}>
                    <Link
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={-120}
                        duration={500}
                    >
                        <button onClick={hideMenu}>About me</button>
                    </Link>
                </li>
                <li className={`nav-elem ${isMenuOpen ? 'translate-y-0 hover:scale-125' : '-translate-y-32'}`}>
                    <Link
                        to="techstack"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <button onClick={hideMenu}>Tech stack</button>
                    </Link>
                </li>
                <li className={`nav-elem ${isMenuOpen ? 'translate-y-0 hover:scale-125' : '-translate-y-32'}`}>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <button onClick={hideMenu}>Projects</button>
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default NavMobile