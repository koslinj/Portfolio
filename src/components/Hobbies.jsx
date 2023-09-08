import runningLogo from '../assets/running.png'
import computerLogo from '../assets/computer.png'
import musicLogo from '../assets/music.png'
import Hobby from './Hobby'
import React, { useRef } from 'react'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const hobbiesLogos = [runningLogo, computerLogo, musicLogo]

function Hobbies() {
    let scope = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            let tl = gsap.timeline({
                delay: 0.3,
                defaults: { duration: 0.9 },
                scrollTrigger: {
                    trigger: '.hobbies-container',
                    start: 'center 92%',
                    end: 'center 50%',
                    toggleActions: 'restart none none reverse',
                    markers: true
                },
            })
            tl.from('.hobbies-container', {
                opacity: 0,
            })
                .from('.heading', {
                    y: 180,
                }, "-=0.6")
                .from('.little-heading', {
                    x: -800,
                    opacity: 0,
                    stagger: 0.3,
                }, "-=0.6")
                .from('.description', {
                    x: -800,
                    opacity: 0,
                    stagger: 0.3,
                }, "-=0.6")
                .from('.logo', {
                    opacity: 0,
                    duration: 1,
                    stagger: 0.3,
                }, "-=0.6")
        }, scope); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <div ref={scope}>
            <section id="hobbies" className='hobbies-container'>
                <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2 flex flex-col justify-center items-center gap-8 flex-wrap mb-24 lg:mb-44'>
                    <div className='flex justify-center items-center overflow-hidden'>
                        <h2 className='title static text-5xl heading'>My Hobbies</h2>
                    </div>
                    <div className='flex w-full justify-around items-start flex-wrap gap-4'>
                        <div className='overflow-hidden'>
                            <h1 className='text-center title static little-heading'>Running</h1>
                            <p className='text-lg leading-10 italic w-96 description'>Running is not only a physical activity for me but a way to clear my mind and find inspiration. Running forces me to push my limits, reflecting my determination in both life and software development.</p>
                        </div>
                        <div className='overflow-hidden'>
                            <h1 className='text-center title static little-heading'>Software Development</h1>
                            <p className='text-lg leading-10 italic w-96 description'>Building innovative solutions and crafting elegant code is my passion. Through software development, I transform ideas into tangible products. It's a creative journey that allows me to continuously learn and grow</p>
                        </div>
                        <div className='overflow-hidden'>
                            <h1 className='text-center title static little-heading'>Music</h1>
                            <p className='text-lg leading-10 italic w-96 description'>Music fuels my creativity and provides a much-needed balance to my technical pursuits. It reminds me of the importance of harmony and the power of expression.</p>
                        </div>
                    </div>
                    <div className='flex w-full justify-around items-center flex-wrap gap-4 h-10 md:h-20 lg:h-32'>
                        {hobbiesLogos.map((item, i) => <Hobby key={i} logo={item} />)}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hobbies