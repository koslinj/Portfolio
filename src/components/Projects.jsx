import gitHubLogo from '../assets/github-mark-white.png'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import React, { useRef } from 'react'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
    let scope = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {

            let tl = gsap.timeline({
                defaults: { duration: 0.9, ease: Power3.easeOut },
                scrollTrigger: {
                    trigger: '.projects-container',
                    start: 'top 50%',
                    end: 'center 20%',
                    toggleActions: 'play none none reverse',
                },
            })
            tl.from('.projects-container', {
                x:-1300,
                opacity: 0,
                ease: "back.out(1.3)"
            })
                .from('.heading', {
                    x: -500,
                    y: 50,
                    rotateZ: -90,
                    scale: 2,
                    opacity: 0,
                }, "-=0.6")
                .from('.logo', {
                    y: 100,
                    rotate: -200,
                    scale: 1.5,
                    opacity: 0,
                }, "-=0.7")
                .from('.project', {
                    x: -1500,
                    scale: 0.1,
                    opacity: 0,
                    stagger: .4,
                }, "-=0.8")

        }, scope); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <div ref={scope}>
            <section id="projects" className='projects-container overflow-hidden'>
                <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2'>
                    <a href='https://github.com/koslinj' target='_blank' rel='noreferrer noopener'>
                        <div className='absolute sm:right-10 right-6 hover:scale-125 transition-all duration-300 cursor-pointer z-20'>
                            <div className='logo flex flex-col items-center'>
                                <img src={gitHubLogo} className='sm:w-14 w-10'></img>
                                <p className='text-center sm:visible invisible'>My github</p>
                            </div>
                        </div>
                    </a>
                    <h2 className='title static text-5xl mb-4 heading'>Projects</h2>
                    <div className='flex items-center justify-center gap-8 flex-wrap'>
                        <div className='flex flex-col justify-center items-center project'>
                            <h2 className='mb-2 text-2xl font-semibold'>Stay On Habit</h2>
                            <div className='rounded-xl p-2 bg-slate-200 shadow-1'>
                                <img src={proj1} className='rounded-xl max-h-[450px] max-w-md object-contain' />
                            </div>
                            <a href='https://github.com/koslinj/StayOnHabit' target='_blank' rel='noreferrer noopener'>
                                <h2 className='mt-2 text-xl hover:scale-125 transition-all duration-300'>Frontend</h2>
                            </a>
                        </div>
                        <div className='flex flex-col justify-center items-center project'>
                            <h2 className='mb-2 text-2xl font-semibold'>"Progress You"</h2>
                            <div className='rounded-xl p-2 bg-slate-200 shadow-1'>
                                <img src={proj2} className='rounded-xl max-h-[450px] max-w-md object-contain' />
                            </div>
                            <div className='flex mt-2'>
                                <a href='https://github.com/koslinj/progress-you' target='_blank' rel='noreferrer noopener' className='ml-10'>
                                    <h2 className='text-xl hover:scale-125 transition-all duration-300'>Frontend</h2>
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center project'>
                            <h2 className='mb-2 text-2xl font-semibold'>"Monopoly" like game</h2>
                            <div className='rounded-xl p-2 bg-slate-200 shadow-1'>
                                <img src={proj3} className='rounded-xl max-h-[450px] max-w-md object-contain' />
                            </div>
                            <div className='flex mt-2'>
                                <a href='https://github.com/koslinj/Sesjopoli_serwer' target='_blank' rel='noreferrer noopener'>
                                    <h2 className='text-xl hover:scale-125 transition-all duration-300'>Server</h2>
                                </a>
                                <a href='https://github.com/b4rtm/Sesjopoli' target='_blank' rel='noreferrer noopener' className='ml-10'>
                                    <h2 className='text-xl hover:scale-125 transition-all duration-300'>Client</h2>
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center project'>
                            <h2 className='mb-2 text-2xl font-semibold'>Fullstack Gym App</h2>
                            <div className='rounded-xl p-2 bg-slate-200 shadow-1'>
                                <img src={proj4} className='rounded-xl max-h-[450px] max-w-md object-contain' />
                            </div>
                            <div className='flex mt-2'>
                                <a href='https://github.com/koslinj/GymApp-backend' target='_blank' rel='noreferrer noopener'>
                                    <h2 className='text-xl hover:scale-125 transition-all duration-300'>Server</h2>
                                </a>
                                <a href='https://github.com/koslinj/GymApp-frontend' target='_blank' rel='noreferrer noopener' className='ml-10'>
                                    <h2 className='text-xl hover:scale-125 transition-all duration-300'>Client</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects