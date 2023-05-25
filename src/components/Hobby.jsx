import React from 'react'

function Hobby({logo}) {
  return (
    <div className='rounded-full bg-slate-100 w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56 flex justify-center items-center overflow-hidden shadow-2 relative animate-moving-circle'>
        <img src={logo} alt='hobby logo' className='w-16 md:w-28 lg:w-44 object-cover'/>
    </div>
  )
}

export default Hobby