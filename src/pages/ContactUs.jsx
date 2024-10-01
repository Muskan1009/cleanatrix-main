import React from 'react'
import ContImg from '../assets/contact.webp'

import { FcClock } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

import BgImg from '../assets/about.jpg'
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {

    const topData = [
        {
            title: 'Office Time',
            details: 'Sun - Mon 9 am - 6 pm',
            icon: FcClock
        },
        {
            title: 'Email Address',
            details: 'info@cleanatrix.com',
            icon: CiMail
        },
        {
            title: 'Location',
            details: '5000 Thayer Center STE C, Oakland, MD',
            icon: CiLocationOn
        }
    ]

    return (
        <>
            <section className='flex h-[30vh] md:h-[50vh] xl:h-[60vh] relative justify-center items-center xl:mx-0'>

                <img className='h-full w-full object-cover brightness-50' src={BgImg} alt="" />
                <div className='flex flex-col w-full text-white absolute items-center font-bold'>
                    <div className='text-6xl'>Our Contacts Info</div>
                    <div className='text-xl'>Home / Contacts</div>
                </div>

            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4">

                    <h2 className="text-4xl font-bold text-gray-800  text-center">Contact Information</h2>
                    <p className="mt-4 text-lg text-gray-600  text-center">
                        Whether you’re looking to schedule a service, request a quote, or ask a question, our friendly team is here to help.
                    </p>

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-center bg-[#EAF3FD] p-6 rounded-lg shadow-lg">
                            <FaPhone className="text-4xl text-[#1F2A59] mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                                <p className="mt-1 text-gray-600">931-488-8068</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#EAF3FD] p-6 rounded-lg shadow-lg">
                            <FaEnvelope className="text-4xl text-[#1F2A59] mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                                <p className="mt-1 text-gray-600">info@cleanatrix.com</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-[#EAF3FD] p-6 rounded-lg shadow-lg">
                            <FaMapMarkerAlt className="text-4xl text-[#1F2A59] mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">Address</h3>
                                <p className="mt-1 text-gray-600">5000 Thayer Center STE C, Oakland, MD</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <ContactForm />

        </>
    )
}

export default ContactUs