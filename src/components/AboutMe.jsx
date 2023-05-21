import React from 'react'

function AboutMe() {
    return (
        <section id="aboutme">
            <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 sm:p-8 shadow-2 flex justify-center items-center flex-wrap gap-8'>
                <div className='lg:basis-[30%] flex justify-center items-center'>
                    <h2 className='title static text-5xl'>About<br />me</h2>
                </div>
                <p className='lg:basis-[64%] text-lg leading-10 italic'>My name is Jan and I am 21 years old.<br />Currently I am living in Lodz in Poland but i am looking forward to move to Warsaw.<br />I am Computer Science student at Lodz University of Technology.<br />I am a type of person that likes to learn new stuff and is very ambitious.<br />I can surely admit that I am determined in achieving my goals.</p>
            </div>
        </section>
    )
}

export default AboutMe