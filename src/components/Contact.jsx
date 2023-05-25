import React, { useState } from 'react'
import axios from '../axios'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [info, setInfo] = useState('')
    const [success, setSuccess] = useState(false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = (email) => {
        return emailRegex.test(email);
    };


    async function sendEmail(e) {
        e.preventDefault()

        const isValid = isValidEmail(email);
        if (!isValid) {
            setInfo('Invalid email!')
            return
        }

        let data = {
            service_id: import.meta.env.VITE_SERVICE_ID,
            template_id: import.meta.env.VITE_TEMPLATE_ID,
            user_id: import.meta.env.VITE_PUBLIC_KEY,
            template_params: {
                'name': name,
                'email': email,
                'message': message,
            }
        }
        try {
            const res = await axios.post('/', data);
            console.log(res.data);
            setInfo('Successfully sent!')
            setSuccess(true)
        } catch (e) {
            console.log(e)
            setInfo('Server failed!')
        }

    }

    return (
        <section id="contact">
            <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2 flex flex-col justify-center'>
                <div className='flex justify-center items-center'>
                    <h2 className='title static text-5xl'>Contact</h2>
                </div>
                <form onSubmit={sendEmail} className='flex flex-col items-center p-4'>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='lg:w-3/5 mb-4 shadow-1 p-2 bg-fuchsia-200 rounded-xl w-72 focus:outline-none text-black text-lg'></input>
                    <input type='text' value={email} onChange={(e) => { setEmail(e.target.value); setInfo(''); setSuccess(false) }} placeholder='Your Email' className='lg:w-3/5 shadow-1 p-2 bg-fuchsia-200 rounded-xl w-72 focus:outline-none text-black text-lg'></input>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="mt-4 w-full lg:w-3/5 p-2 bg-fuchsia-200 rounded-xl focus:outline-none text-black text-lg resize-none shadow-1"
                        rows={8}
                        placeholder="Enter your message..."
                    />
                    <input
                        type='submit'
                        value='Send'
                        className='mt-6 text-3xl rounded-xl bg-gradient-to-r from-pink-400 to-violet-400 py-6 px-12 shadow-1 text-black font-title font-bold italic tracking-widest hover:scale-118 hover:rotate-3 transition-all duration-500' />
                    <h1 className={`${info ? (success ? 'opacity-100 scale-100 text-green-500' : 'opacity-100 scale-100 text-red-500') : 'scale-50 opacity-0'} text-3xl mt-8 font-title tracking-widest transition-all duration-500`}>{info}</h1>
                </form>
            </div>
        </section>
    )
}

export default Contact