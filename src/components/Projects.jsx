import React from 'react'
import gitHubLogo from '../assets/github-mark-white.png'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'

function Projects() {
    return (
        <section id="projects">
            <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2'>
                <a href='https://github.com/koslinj' target='_blank' rel='noreferrer noopener'>
                    <div className='absolute sm:right-10 right-6 hover:scale-125 transition-all duration-300 cursor-pointer flex flex-col items-center'>
                        <img src={gitHubLogo} className='sm:w-14 w-10'></img>
                        <p className='text-center sm:visible invisible'>My github</p>
                    </div>
                </a>
                <h2 className='title static text-5xl mb-4'>Projects</h2>
                <div className='flex items-center justify-center gap-8 flex-wrap'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='mb-2 text-2xl font-semibold'>Stay On Habit</h2>
                        <div className='rounded-xl p-2 bg-slate-200 shadow-1'>
                            <img src={proj1} className='rounded-xl max-h-[450px] max-w-md object-contain' />
                        </div>
                        <a href='https://github.com/koslinj/StayOnHabit' target='_blank' rel='noreferrer noopener'>
                            <h2 className='mt-2 text-xl hover:scale-125 transition-all duration-300'>Frontend</h2>
                        </a>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
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
                    <div className='flex flex-col justify-center items-center'>
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
                    <div className='flex flex-col justify-center items-center'>
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
        </section >
    )
}

export default Projects