import React, { useRef } from 'react'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from 'gsap';

function AboutMe() {
    let scope = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            let tl = gsap.timeline({ delay: 1.7, defaults: { duration: 1.5, ease: Power3.easeOut } })
            tl.from('.aboutme-container', {
                x: -1200,
                opacity: 0,
            })
                .from('.title', {
                    y: 100,
                    rotateZ: -120,
                    scale: 2,
                    opacity: 0,
                }, 0.3)
                .from('.text-line', {
                    y: 100,
                    scaleX: 0.1,
                    opacity: 0,
                    stagger: 0.4
                }, 0.6)
        }, scope); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <div ref={scope}>
            <section id="aboutme" className='aboutme-container overflow-hidden'>
                <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2 flex justify-center items-center flex-wrap gap-8'>
                    <div className='lg:basis-[30%] flex justify-center items-center'>
                        <h2 className='title static text-5xl'>About<br />me</h2>
                    </div>
                    <p className='lg:basis-[64%] text-lg leading-10 italic'>
                        <div className='overflow-hidden'>
                            <p className='text-line'>My name is Jan and I am 21 years old.<br /></p>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='text-line'>Currently I am living in Lodz in Poland but i am looking forward to move to Warsaw.<br /></p>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='text-line'>I am Computer Science student at Lodz University of Technology.<br /></p>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='text-line'>I am a type of person that likes to learn new stuff and is very ambitious.<br /></p>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='text-line'>I can surely admit that I am determined in achieving my goals.</p>
                        </div>

                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutMe