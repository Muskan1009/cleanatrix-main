import React, { useState } from 'react';

import { RiTeamFill, RiPriceTag3Fill } from "react-icons/ri";
import { GiVacuumCleaner, GiConfirmed } from "react-icons/gi";
import { FaCalendarAlt, FaLeaf } from "react-icons/fa"; // Make sure to import FaLeaf correctly
import { IoHome } from "react-icons/io5";
import { IoIosPeople } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { FaTasks } from "react-icons/fa";

import BgImg from '../assets/about.jpg'

import Patrik from '../assets/teams/patrik.png'
import Elda from '../assets/Elda.jpeg'
import Marc from '../assets/Marc.jpeg'

const About = () => {

    const servicesData = [
        {
            icon: RiTeamFill,
            title: '2M+ People Trusted',
            details: 'We have more than 2M+ people who trust our services.',
            color: '#FF5733' // add color to icon
        },
        {
            icon: GiVacuumCleaner,
            title: 'Over 400+ cleaners',
            details: 'We have over 400+ professional cleaners to help you.',
            color: '#FFC300' // add color to icon
        },
        {
            icon: GiConfirmed,
            title: '100% Satisfaction',
            details: 'We guarantee 100% satisfaction with our services.',
            color: '#28A745' // add color to icon
        },
        {
            icon: RiPriceTag3Fill,
            title: 'Cost Effective',
            details: 'We offer affordable pricing for our services.',
            color: '#2990D5' // add color to icon
        }
    ]

    const servicesData2 = [
        {
            icon: FaCalendarAlt,
            title: 'Easy Online Scheduling Just Few Clicks',
            details: 'Few clicks are enough'
        },
        {
            icon: FaLeaf,
            title: 'Cleaning With Care And Eco-Friendly Products',
            details: 'We have over 400+ cleaners to help you with these products'
        },
        {
            icon: IoHome,
            title: 'Enjoy Cleanliness And Shine Around You',
            details: 'We guarantee 100% satisfaction with our services'
        }
    ]

    const servicesData3 = [
        {
            icon: IoIosPeople,
            title: '1988',
            details: 'Happy Client'
        },
        {
            icon: AiFillLike,
            title: '999',
            details: 'Service Guarantee'
        },
        {
            icon: IoIosPerson,
            title: '144',
            details: 'Total Cleaners'
        },
        {
            icon: FaTasks,
            title: '180',
            details: 'Cleans Completed'
        }
    ]

    const faqs = [
        {
            "question": "What areas do you service?",
            "answer": "We proudly serve the DMV area, including Washington, DC, Maryland, and Northern Virginia."
        },
        {
            "question": "What cleaning products do you use?",
            "answer": "We use eco-friendly and non-toxic cleaning products to ensure safety and health for your family, pets, and the environment."
        },
        {
            "question": "How do I schedule a cleaning service?",
            "answer": "You can contact us via phone at 931-488-8068 or email us at info@cleanatrix.com to schedule your cleaning service. We also offer easy online booking."
        },
        {
            "question": "Do you offer same-day cleaning services?",
            "answer": "Yes, we offer same-day cleaning services based on availability. Please contact us to check availability."
        },
        {
            "question": "Are your cleaners insured?",
            "answer": "Yes, all of our cleaners are fully insured and trained to meet industry standards."
        },
        {
            "question": "Do you offer customized cleaning packages?",
            "answer": "Absolutely! We can tailor our cleaning services to meet your specific needs and preferences."
        }
    ]
    
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        // If the clicked FAQ is already open, close it; otherwise, open it
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <section className='flex h-[30vh] md:h-[50vh] xl:h-[60vh] relative justify-center items-center lg:mx-0'>

                <img className='h-full w-full object-cover brightness-50' src={BgImg} alt="" />
                <div className='flex flex-col w-full text-white absolute items-center font-bold'>
                    <div className='text-xl lg:text-6xl'>About Our Company</div>
                    <div className='text-xl lg:text-xl'>Home / About Us</div>
                </div>

            </section>

            <section className='bg-slate-400 h-max xl:h-screen py-10 px-5 flex flex-col gap-3 justify-around'>

                <div className=' text-white flex flex-col items-center gap-2 lg:gap-5'>
                    <div className='text-4xl font-bold text-white'>This Is How We Work</div>
                    <div className='text-xl md:text-2xl font-normal text-center'>"It is as Easy as 1-2-3"</div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 md:px-10 '>

                    {
                        servicesData2.map((data, index) => {
                            return (
                                <div key={index} className='bg-white rounded-lg py-20 px-10 flex flex-col justify-center text-center items-center gap-4'>
                                    <data.icon size={50} className='bg-[#8BC53E] rounded-xl text-white p-2' />
                                    <h4 className='font-bold text-2xl w-[90%]'>{data.title}</h4>
                                    <p>{data.details}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </section>
            {/* Reasons Why Choose Us */}
            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max flex flex-col bg-[#EAF3FD] gap-10'>
                <div className='text-center text-3xl xl:text-3xl font-bold'>
                    ✨Our Introduction✨
                </div>
                <div className='text-center text-[#2990D5] text-3xl xl:text-5xl font-bold'>
                    Reasons Why People Choose Us
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:mt-10 xl:grid-cols-4 gap-10'>
                    {servicesData.map((data, index) => (
                        <div key={index} className='bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2 hover:shadow-lg transition-shadow'>
                            <data.icon size={50} color={data.color} />
                            <h4 className='font-bold text-2xl'>{data.title}</h4>
                            <p>{data.details}</p>
                        </div>
                    ))}
                </div>
                <div className='text-center text-sm xl:text-xl font-normal xl:mt-6'>
                    "We help clean all your needs with our various Skills and Range of awesome Services."
                </div>
            </section>

            <section className='bg-slate-400 h-max xl:h-screen py-10 flex flex-col gap-5 justify-around'>

                <div className='text-white flex flex-col items-center gap-2 lg:gap-2'>
                    <div className='text-6xl font-bold text-center'>Our best achievement</div>
                    <div className='text-xl md:text-2xl font-normal text-center'>We feel very proud for our great achievement</div>
                </div>

                <div className='mt-0 grid px-5 md:px-20 md:grid-cols-2 xl:grid-cols-4 gap-5'>

                    {
                        servicesData3.map((data, index) => {
                            return (
                                <div key={index} className='bg-white rounded-lg py-20 px-10 flex flex-col justify-center text-center items-center gap-4 duration-300'>
                                    <data.icon size={60} className='bg-[#F7931D] rounded-xl text-white p-2' />
                                    <div className='flex flex-col gap-1.5 items-center'>
                                        <h4 className='font-bold text-2xl w-[90%]'>{data.title}</h4>
                                        <p className='font-bold text-xl'>{data.details}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>

            <section className='bg-slate-100 h-max xl:h-screen px-5 py-10 flex flex-col gap-5 justify-around'>

                <h2 className='text-center text-6xl font-bold text-gray-800'>Meet Our Founders</h2>

                <div className='flex flex-wrap justify-center gap-8 mt-8 xl:mt-2'>
                    {/* Patrick Georges */}
                    <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 lg:w-1/4'>
                        <img src={Patrik} alt='Patrick Georges' className='rounded-full h-32 w-32 mx-auto mb-4 object-cover' />
                        <h3 className='text-center text-xl font-semibold text-gray-900'>Patrick Georges</h3>
                        <p className='text-center text-gray-600 mt-2'>
                            Patrick Georges, a co-founder of Cleanatrix, LLC, is dedicated to ensuring that every space we clean meets the highest standards of cleanliness and safety.
                        </p>
                    </div>
                    {/* Marc Georges */}
                    <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 lg:w-1/4'>
                        <img src={Marc} alt='Marc Georges' className='rounded-full h-32 w-32 mx-auto mb-4 bg-slate-200' />
                        <h3 className='text-center text-xl font-semibold text-gray-900'>Marc Georges</h3>
                        <p className='text-center text-gray-600 mt-2'>
                            Co-founder of Cleanatrix, LLC, Marc Georges has over 3 years of experience in the cleaning industry, ensuring the highest quality service for all clients.
                        </p>
                    </div>
                    {/* Elda Tislin */}
                    <div className='bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 lg:w-1/4'>
                        <img src={Elda} alt='Elda Tislin' className='rounded-full h-32 w-32 mx-auto mb-4 bg-slate-200' />
                        <h3 className='text-center text-xl font-semibold text-gray-900'>Elda Tislin</h3>
                        <p className='text-center text-gray-600 mt-2'>
                            As co-founder of Cleanatrix, LLC, Elda Tislin brings passion and expertise to ensure client satisfaction with every cleaning project.
                        </p>
                    </div>
                </div>
            </section>

            <section id='faq' className='bg-slate-200 h-max py-10 flex flex-col gap-5 justify-center items-center'>
                <div className='text-3xl font-bold text-gray-800 text-center'>FAQ</div>
                <div className='flex flex-col w-full md:w-2/3 lg:w-1/2'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='bg-white shadow-md rounded-md my-2'>
                            <div 
                                className='flex justify-between items-center p-4 cursor-pointer'
                                onClick={() => toggleFAQ(index)}
                            >
                                <h4 className='text-lg font-bold'>{faq.question}</h4>
                                <span className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {/* Icon for toggle */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </div>
                            {openIndex === index && (
                                <div className='p-4 text-gray-600'>{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default About