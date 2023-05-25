import React from 'react'
import developer from '../assets/developer.png'

function Home() {
    return (
        <section id="home">
            <div className='grad mt-24 rounded-[40px] flex justify-around items-center flex-wrap shadow-2'>
                <img src={developer} alt='developer' className='w-32'></img>
                <h1 className='title static text-4xl leading-[4rem]'>Fullstack Developer<br/>Portfolio Website</h1>
            </div>
        </section>
    )
}

export default Home