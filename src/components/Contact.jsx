import React from 'react'

function Contact() {
    return (
        <section id="contact">
            <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2 flex flex-col justify-center'>
                <div className='flex justify-center items-center'>
                    <h2 className='title static text-5xl'>Contact</h2>
                </div>
                <div className='flex flex-col items-center p-4'>
                    <input type='text' placeholder='Your Email' className='p-2 bg-fuchsia-200 rounded-xl focus:outline-none text-black text-lg'></input>
                    <textarea
                        className="mt-2 w-full lg:w-3/4 p-2 bg-fuchsia-200 rounded-xl focus:outline-none text-black text-lg resize-none"
                        rows={8}
                        placeholder="Enter your message..."
                    />
                </div>
            </div>
        </section>
    )
}

export default Contact