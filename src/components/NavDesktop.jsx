import React from 'react'
import { Link } from 'react-scroll';

function NavDesktop() {
    return (
        <nav className='hidden md:block fixed top-0 left-0 bg-gradient-to-b from-violet-950 to to-slate-800 w-full rounded-b-xl shadow-1'>
            <h2 className='title'>Jan Koślin</h2>
            <ul className='flex flex-row justify-end items-center gap-12 p-4 h-14'>
                <li className='transition-all duration-300 nav-elem'>
                    <Link
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='transition-all duration-300 nav-elem'>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About
                    </Link>
                </li>
                <li className='transition-all duration-300 nav-elem'>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavDesktop