import React from 'react'
import runningLogo from '../assets/running.png'
import computerLogo from '../assets/computer.png'
import musicLogo from '../assets/music.png'
import Hobby from './Hobby'

const hobbiesLogos = [runningLogo, computerLogo, musicLogo]

function Hobbies() {
    return (
        <section id="hobbies">
            <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2 flex flex-col justify-center items-center gap-8 flex-wrap mb-24 lg:mb-44'>
                <div className='flex justify-center items-center'>
                    <h2 className='title static text-5xl'>My Hobbies</h2>
                </div>
                <div className='flex w-full justify-around items-start flex-wrap gap-4'>
                    <div>
                        <h1 className='text-center title static'>Running</h1>
                        <p className='text-lg leading-10 italic w-96'>Running is not only a physical activity for me but a way to clear my mind and find inspiration. Running forces me to push my limits, reflecting my determination in both life and software development.</p>
                    </div>
                    <div>
                        <h1 className='text-center title static'>Software Development</h1>
                        <p className='text-lg leading-10 italic w-96'>Building innovative solutions and crafting elegant code is my passion. Through software development, I transform ideas into tangible products. It's a creative journey that allows me to continuously learn and grow</p>
                    </div>
                    <div>
                        <h1 className='text-center title static'>Music</h1>
                        <p className='text-lg leading-10 italic w-96'>Music fuels my creativity and provides a much-needed balance to my technical pursuits. It reminds me of the importance of harmony and the power of expression.</p>
                    </div>
                </div>
                <div className='flex w-full justify-around items-center flex-wrap gap-4 h-10 md:h-20 lg:h-32'>
                    {hobbiesLogos.map((item, i) => <Hobby key={i} logo={item} />)}
                </div>
            </div>
        </section>
    )
}

export default Hobbies