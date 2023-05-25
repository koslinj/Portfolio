import React from 'react'
import { Link } from 'react-scroll';

function NavDesktop() {
    return (
        <nav className='hidden lg:block fixed z-10 top-0 left-0 bg-gradient-to-b from-violet-950 to to-slate-800 w-full rounded-b-xl shadow-1'>
            <h2 className='title'>Jan Koślin</h2>
            <ul className='flex flex-row justify-end items-center gap-12 p-4 h-14'>
            <li className='hover:scale-125 nav-elem'>
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                    >
                        Home
                    </Link>
                </li>
                <li className='hover:scale-125 nav-elem'>
                    <Link
                        to="aboutme"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        About me
                    </Link>
                </li>
                <li className='hover:scale-125 nav-elem'>
                    <Link
                        to="hobbies"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Hobbies
                    </Link>
                </li>
                <li className='hover:scale-125 nav-elem'>
                    <Link
                        to="techstack"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Tech stack
                    </Link>
                </li>
                <li className='hover:scale-125 nav-elem'>
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        Projects
                    </Link>
                </li>
                <li className='hover:scale-125 nav-elem'>
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