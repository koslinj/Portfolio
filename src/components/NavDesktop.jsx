import { Link } from 'react-scroll';
import React, { useRef } from 'react'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from 'gsap';

function NavDesktop() {
    let scope = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            gsap.from('.navbar-container', {
                y: -80,
                scale: 2.5,
                opacity: 0,
                duration: 1.4,
                delay: 0.2,
                ease: Power3.easeOut
            })
        }, scope); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <div ref={scope}>
            <nav className='navbar-container hidden lg:block fixed z-10 top-0 left-0 bg-gradient-to-b from-violet-950 to to-slate-800 w-full rounded-b-xl shadow-1'>
                <h2 className='title'>Jan Koślin</h2>
                <ul className='flex flex-row justify-end items-center gap-12 p-4 h-14'>
                    <li className='hover:scale-125 nav-elem'>
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-150}
                            duration={1500}
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
                            duration={1500}
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
                            duration={1500}
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
                            duration={1500}
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
                            duration={1500}
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
                            duration={1500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavDesktop