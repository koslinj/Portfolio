import React from 'react'
import mysqlLogo from '../assets/mysql.png';
import javaLogo from '../assets/java.png'
import cplusplusLogo from '../assets/c++.png';
import reactLogo from '../assets/react.png';
import nodeLogo from '../assets/node.png'
import figmaLogo from '../assets/figma.png'
import javaFXLogo from '../assets/JavaFX.png'
import springLogo from '../assets/spring.png'
import cLogo from '../assets/c.png'
import mongoDBLogo from '../assets/MongoDB.png'

const mainTechLogos = [reactLogo, nodeLogo, javaLogo, mysqlLogo, cLogo];
const sideTechLogos = [cplusplusLogo, mongoDBLogo, figmaLogo, javaFXLogo, springLogo];

function TechStack() {

    return (
        <section id="techstack">
            <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-8 shadow-2 flex justify-center items-center flex-wrap gap-8'>
                <div className='lg:basis-[70%] flex flex-col items-center'>
                    <h2 className='title static text-3xl'>I mainly use</h2>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        {mainTechLogos.map((item,i) => (
                            <div key={i} className='hover:scale-118 transition-all duration-500 rounded-xl p-4 flex justify-center align-center bg-slate-200 shadow-1'>
                                <img src={item} className='h-20 overflow-visible' />
                            </div>
                        ))}
                    </div>
                    <h2 className='title static mt-8 text-3xl'>but also tried</h2>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        {sideTechLogos.map((item,i) => (
                            <div key={i} className='hover:scale-118 transition-all duration-500 rounded-xl p-2 flex justify-center align-center bg-slate-200 shadow-1'>
                                <img src={item} className='h-14 overflow-visible' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='lg:basis-[20%] flex justify-center items-center'>
                    <h2 className='title static text-5xl'>Tech<br />stack</h2>
                </div>
            </div>
        </section>
    )
}

export default TechStack