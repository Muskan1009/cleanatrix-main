import React from 'react'
import ContImg from '../assets/contact.webp'

const ContactForm = () => {
    return (

        <section className='flex flex-col xl:flex-row h-max'>

            <form className='w-full xl:w-[50%] flex flex-col gap-5 px-5 sm:px-10 md:px-20 py-10 bg-slate-100'>

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

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510201613!2d76.76357294611861!3d28.64428735586505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1727871355772!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='xl:w-[50%] h-[40vh] xl:h-screen'></iframe>

        </section>
    )
}

export default ContactForm