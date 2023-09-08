import mysqlLogo from '../assets/mysql.png';
import javaLogo from '../assets/java.png'
import cplusplusLogo from '../assets/c++.png';
import reactLogo from '../assets/react.png';
import figmaLogo from '../assets/figma.png'
import javaFXLogo from '../assets/JavaFX.png'
import springLogo from '../assets/spring.png'
import cLogo from '../assets/c.png'
import mongoDBLogo from '../assets/MongoDB.png'
import nextLogo from '../assets/next.png'
import tailwindLogo from '../assets/tailwind.png'
import expressLogo from '../assets/express.png'
import React, { useRef } from 'react'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const mainTechLogos = [nextLogo, reactLogo, tailwindLogo, expressLogo, javaLogo, mysqlLogo];
const sideTechLogos = [cLogo, cplusplusLogo, mongoDBLogo, figmaLogo, javaFXLogo, springLogo];

function TechStack() {
    let scope = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            let tl = gsap.timeline({
                defaults: { duration: 0.9 },
                scrollTrigger: {
                    trigger: '.techstack-container',
                    start: 'top 50%',
                    end: 'center 20%',
                    toggleActions: 'restart none none reverse',
                    markers: true
                },
            })
            tl.from('.techstack-container', {
                x: 1500,
                opacity: 0,
                ease: "back.out(1.3)"
            })
                .from('.heading', {
                    x: 300,
                    y: 150,
                    rotateZ: 90,
                    scale: 2,
                    opacity: 0,
                }, "-=0.6")
                .from('.little-heading', {
                    x: -800,
                    opacity: 0,
                    stagger: 1,
                }, "-=0.8")
                .from('.logo', {
                    y: 200,
                    opacity: 0,
                    stagger: 0.1,
                }, "-=1")
        }, scope); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <div ref={scope}>
            <section id="techstack" className='techstack-container'>
                <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2 flex justify-center items-center flex-wrap gap-8'>
                    <div className='lg:basis-[20%] lg:hidden flex justify-center items-center'>
                        <h2 className='title static text-5xl heading'>Tech<br />stack</h2>
                    </div>
                    <div className='lg:basis-[70%] flex flex-col items-center'>
                        <h2 className='title static text-3xl little-heading'>I mainly use</h2>
                        <div className='flex flex-wrap gap-8 justify-center overflow-hidden'>
                            {mainTechLogos.map((item, i) => (
                                <div key={i} className='logo rounded-xl p-2 flex justify-center align-center bg-slate-200 shadow-1'>
                                    <img src={item} className='h-28 max-w-[240px] object-contain overflow-visible' />
                                </div>
                            ))}
                        </div>
                        <h2 className='title static mt-8 text-3xl little-heading'>but also tried</h2>
                        <div className='flex flex-wrap gap-8 justify-center overflow-hidden'>
                            {sideTechLogos.map((item, i) => (
                                <div key={i} className='logo rounded-xl p-2 flex justify-center align-center bg-slate-200 shadow-1'>
                                    <img src={item} className='h-16 max-w-[240px] object-contain overflow-visible' />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='hidden lg:flex lg:basis-[20%] justify-center items-center'>
                        <h2 className='title static text-5xl heading'>Tech<br />stack</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TechStack