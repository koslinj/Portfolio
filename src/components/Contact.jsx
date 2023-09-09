import axios from '../axios'
import React, { useRef, useState } from 'react'
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [info, setInfo] = useState('')
    const [pending, setPending] = useState(false)
    const [success, setSuccess] = useState(false)
    let scope = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {

            let tl = gsap.timeline({
                defaults: { duration: 0.9, ease: Power3.easeOut },
                scrollTrigger: {
                    trigger: '.contact-container',
                    start: 'top 80%',
                    end: 'center 20%',
                    toggleActions: 'play none none reverse',
                },
            })
            tl.from('.contact-container', {
                x: 1600,
                scale: 0.1,
                rotate: 30,
                opacity: 0,
                ease: "back.out(1.3)"
            })
                .from('.heading', {
                    x: 2000,
                    y: 200,
                    rotate: 90,
                    scale: 0.5,
                    opacity: 0,
                }, "-=0.6")
                .from('.input', {
                    x: 2000,
                    y: 100,
                    rotate: 30,
                    scale: 0.1,
                    opacity: 0,
                    stagger: .3
                }, "-=0.4")

        }, scope); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = (email) => {
        return emailRegex.test(email);
    };


    async function sendEmail(e) {
        e.preventDefault()
        setPending(true)
        const isValid = isValidEmail(email);
        if (!isValid) {
            setInfo('Invalid email!')
            setPending(false)
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
            setPending(false)
            setInfo('Successfully sent!')
            setSuccess(true)
        } catch (e) {
            console.log(e)
            setPending(false)
            setInfo('Server failed!')
        }

    }

    return (
        <div ref={scope}>
            <section id="contact" className='contact-container'>
                <div className='grad min-h-52 mt-24 rounded-tr-[40px] rounded-bl-[40px] p-4 shadow-2 flex flex-col justify-center'>
                    <div className='flex justify-center items-center'>
                        <h2 className='title static text-5xl heading'>Contact</h2>
                    </div>
                    <form onSubmit={sendEmail} className='flex flex-col items-center p-4'>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='input lg:w-3/5 mb-4 shadow-1 p-2 bg-fuchsia-200 rounded-xl w-72 focus:outline-none text-black text-lg'></input>
                        <input type='text' value={email} onChange={(e) => { setEmail(e.target.value); setInfo(''); setSuccess(false) }} placeholder='Your Email' className='input lg:w-3/5 shadow-1 p-2 bg-fuchsia-200 rounded-xl w-72 focus:outline-none text-black text-lg'></input>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="input mt-4 w-full lg:w-3/5 p-2 bg-fuchsia-200 rounded-xl focus:outline-none text-black text-lg resize-none shadow-1"
                            rows={8}
                            placeholder="Enter your message..."
                        />
                        <div className='input'>
                            <input
                                type='submit'
                                value='Send'
                                className='mt-6 text-3xl rounded-xl bg-gradient-to-r from-pink-400 to-violet-400 py-6 px-12 shadow-1 text-black font-title font-bold italic tracking-widest hover:scale-118 hover:rotate-3 transition-all duration-500'
                            />
                        </div>
                        {pending && <h1 className={`text-2xl m-2 font-title tracking-widest`}>Loading...</h1>}
                        <h1 className={`${info ? (success ? 'opacity-100 scale-100 text-green-500' : 'opacity-100 scale-100 text-red-500') : 'scale-50 opacity-0'} text-3xl mt-8 font-title tracking-widest transition-all duration-500`}>{info}</h1>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact