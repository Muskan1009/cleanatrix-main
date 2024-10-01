import React from 'react'
import ContImg from '../assets/contact.webp'

const ContactForm = () => {
    return (
        <section className='flex h-max md:h-screen'>
            <div className='bg-gradient-to-t from-[#312C2B] to-[#6D6C6D] p-12 xl:block hidden' />

            <form className='w-full lg:w-[60%] xl:w-full flex flex-col gap-5 px-5 sm:px-10 md:px-20 py-10 bg-slate-100'>

                <div className='text-4xl font-bold '>
                    Contact Us
                </div>

                <p>
                    We are always ready to help you. There are many ways to contact us. You may drop us a line, give us a call or send an email, choose what suits you the most.
                </p>

                <input type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Name' />

                <input type="email" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Email' />

                <input type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Contact No' />

                <input type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' placeholder='Service Type' />

                <textarea type="text" className='w-full px-6 py-2 text-lg outline-none border-[3px] rounded-lg focus:border-[#6B6869] duration-300' rows={5} placeholder='Message' />

                <button className='bg-[#F7931E] text-lg text-white font-medium py-2 px-10 w-max rounded-lg'>
                    Submit Now
                </button>

            </form>

            <img src={ContImg} alt="" className='lg:block hidden lg:w-[40%] object-cover' />
        </section>
    )
}

export default ContactForm