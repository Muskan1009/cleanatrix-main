import React from 'react';
import HeroImg from '../assets/hero.png';

import { RiTeamFill, RiPriceTag3Fill } from "react-icons/ri";
import { GiVacuumCleaner, GiConfirmed } from "react-icons/gi"; 

import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

import Serv1 from '../assets/serv1.jpeg';
import Serv2 from '../assets/serv2.webp';
import Serv3 from '../assets/serv3.jpg';

import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

import { Rating } from '@mui/material';

const Home = () => {

    const servicesData = [
        {
            icon: RiTeamFill,
            title: '2M+ People Trusted',
            details: 'We have more than 2M+ people who trust our services.',
            color: '#FF5733'
        },
        {
            icon: GiVacuumCleaner,
            title: 'Over 400+ cleaners',
            details: 'We have over 400+ professional cleaners to help you.',
            color: '#FFC300'
        },
        {
            icon: GiConfirmed,
            title: '100% Satisfaction',
            details: 'We guarantee 100% satisfaction with our services.',
            color: '#28A745'
        },
        {
            icon: RiPriceTag3Fill,
            title: 'Cost Effective',
            details: 'We offer affordable pricing for our services.',
            color: '#2990D5'
        }
    ];

    const listItem = [
        "Kitchen", "Carpet", "Bathrooms", "Seasonal", "Bedrooms & Living Rooms", "Move in/out", "Windows", "Post construction", "Extra Services", "Express"
    ];

    const subServiceData = [
        {
            img: Serv1,
            title: 'Office Cleaning',
            description: 'We provide the best office cleaning services for your office.'
        },
        {
            img: Serv2,
            title: 'Upholstery Cleaning',
            description: 'We provide the best upholstery cleaning services for your house.'
        },
        {
            img: Serv3,
            title: 'House Cleaning',
            description: 'We provide the best house cleaning services for your house.'
        }
    ];

    const testimonialData = [
        {
            name: 'Sarah M',
            rating: 4,
            review: 'Cleanatrix has been taking care of our Airbnb properties for over a year. Their attention to detail and quick turnaround times are unmatched.'
        },
        {
            name: 'John D',
            rating: 4.5,
            review: 'I’ve used Cleanatrix for my office and home cleaning services. They’re reliable, professional, and always leave everything spotless.'
        },
        {
            name: 'Emily R',
            rating: 3.5,
            review: 'Moving was stressful, but Cleanatrix made sure my old apartment was spotless, which helped me get my full security deposit back!'
        }
    ];

    return (
        <>
<section className='xl:mx-0 px-5 lg:px-20 bg-[#2990D5] flex flex-col md:flex-row h-screen md:h-[70vh] justify-end lg:justify-between items-center overflow-hidden'>
    <div className='flex flex-col gap-5 justify-center h-full mb-20 mt-6 md:mt-0 md:mb-8 lg:w-[30%]'>
        <div className='bg-[#8CC63F] text-sm py-3 px-8 font-bold rounded-md text-white w-max'>
            30% OFF FOR NEW CLIENT
        </div>
        <div className='flex flex-col gap-5'>
            <p className='text-5xl lg:text-7xl font-bold text-white flex gap-3'>
                Fresh <span className='text-[#8CC63F]'>&</span> Clean
            </p>
            <p className='lg:text-l text-white'>
                We have the best people and equipment to clean all your needs with our range of awesome services.
            </p>

            <div className='flex flex-row md:flex-col lg:flex-row xl:items-center gap-5 text-white font-semibold text-center'>
                <Link to='/cost-calculator' className='bg-[#F7931E] px-3 lg:px-5 py-3 rounded-md'>
                    Discover Cost
                </Link>
                <Link to='/services' className='bg-[#8CC63F] px-4 lg:px-7 py-3 rounded-lg'>
                    Our Services
                </Link>
            </div>
        </div>
    </div>
    <div className='w-full xl:w-[50%] flex flex-col items-center justify-end md:justify-end h-[100%]'>
        <img src={HeroImg} alt="" className=' object-contain w-max md:w-max h-max' />
    </div>
</section>

            {/* Reasons Why Choose Us */}
            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max md:h-screen flex flex-col bg-[#EAF3FD] gap-10'>
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

            {/* Subservices Section */}
            <section className='xl:mx-24 flex flex-col'>
                <div className='bg-hero h-[30vh] md:h-[60vh] md:rounded-b-2xl'>
                    <div className='h-full bg-black opacity-50 rounded-b-2xl'></div>
                </div>
                <div className='flex flex-col md:flex-row justify-center md:w-[80%] mx-auto md:-mt-72 z-10'>
                    <div className='bg-[#F9A72B] text-white text-xl p-10 md:rounded-l-xl flex flex-col gap-4'>
                        <div className='flex gap-5 items-center'>
                            <FaHome size={80} />
                            <h4 className='text-3xl font-bold'>Residential Cleaning Service</h4>
                        </div>
                        <div>
                            When you work with Cleanatrix cleaning, you can cross a major chore off your list — cleaning your home.
                        </div>
                        <ul className='list-disc pl-5'>
                            {listItem.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-[#2E85CC] text-white text-xl p-10 md:rounded-r-xl flex flex-col gap-4'>
                        <div className='flex gap-5 items-center'>
                            <BsBuildingsFill size={80} />
                            <h4 className='text-3xl font-bold'>Commercial Cleaning Service</h4>
                        </div>
                        <div>
                            We specialize in providing cleaning services tailored to your commercial needs.
                        </div>
                        <ul className='list-disc pl-5'>
                            {listItem.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id='test' className='h-max xl:h-screen px-5 sm:px-10 lg:px-24 py-20 flex flex-col justify-between bg-[url("./assets/testimonial.png")] bg-contain bg-no-repeat bg-left'>
                <div className='flex flex-col items-center'>
                    <p className='text-2xl font-bold text-[#2E85CC]'>Testimonials</p>
                    <p className='text-3xl md:w-[50%] py-5 text-center text-gray-700 font-bold'>
                        What Our Customers Say About Us
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {testimonialData.map((data, index) => (
                        <div key={index} className='p-10 bg-slate-200/90 shadow-xl shadow-black/10 rounded-xl text-black backdrop-blur-sm'>
                            <div className='flex gap-4 items-center mb-4'>
                                <span className='font-bold'>{data.name}</span>
                                <Rating value={data.rating} precision={0.5} readOnly />
                            </div>
                            <p className='text-sm'>{data.review}</p>
                        </div>
                    ))}
                </div>
            </section>

            <ContactForm />
        </>
    );
};

export default Home;
