import React, { useRef } from 'react'
import developer from '../assets/developer.png'
import { useLayoutEffect } from "react";
import { gsap } from "gsap-trial";
import { Power3 } from 'gsap-trial';

function Home() {
    let scope = useRef(null)
    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            let tl = gsap.timeline({delay: 0.2, defaults: {duration: 1.5, ease: Power3.easeOut}})
            tl.from('.home-container', {
                x: 1500,
                opacity: 0,
            })
            .from('.image', {
                y: 100,
                rotateZ: 90,
                scale: 2,
                opacity: 0,
            }, 0.2)
            .from('.text1', {
                y: 150,
                duration: 1,
                ease: "back.out(1.5)"
            },'-=1')
            .from('.text2', {
                y: 150,
                duration: 1,
                ease: "back.out(1.5)"
            }, "-=0.5");
        }, scope); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);
    return (
        <div ref={scope}>
            <section id="home" className='home-container overflow-hidden'>
                <div className='grad mt-24 rounded-[40px] flex justify-around items-center flex-wrap shadow-2'>
                    <img src={developer} alt='developer' className='w-32 image'></img>
                    <div>
                        <div className='overflow-hidden'>
                            <h1 className='title static text-4xl leading-[3.5rem] text1'>Fullstack Developer</h1>
                        </div>
                        <div className='overflow-hidden'>
                            <h1 className='title static text-4xl leading-[3.5rem] text2'>Portfolio Website</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home