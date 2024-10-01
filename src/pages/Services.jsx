import React from 'react'
import Servimg from '../assets/about.jpg'

import Airbnb from '../assets/Airbnb.jpg'
import Resident from '../assets/Resident.jpg'
import Comm from '../assets/Comm.jpg'
import Post from '../assets/Post.jpg'
import Move from '../assets/move.jpg'
import Appart from '../assets/Appart.jpg'

import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ContactForm from '../components/ContactForm'
import { useNavigate } from 'react-router-dom'

const stripePromise = loadStripe('pk_test_51PZIArG5MT11KApvXJgAFIKzv4iLzN2ca8IGOPmcwUQ8je8kiuUmqWEJKlWYP3D8CYUHfPKvr1uNswIav8LyAATs00f6EMku9m');

const ServiceCard = ({ data }) => {

    const navigate = useNavigate()

    // const handleCheckout = async () => {

    //     const stripe = await stripePromise;

    //     // Redirect to Checkout with the sessionId from Stripe
    //     const { error } = await stripe.redirectToCheckout({
    //         lineItems: [
    //             {
    //                 price: data.priceID,
    //                 quantity: 1,
    //             },
    //         ],
    //         mode: "payment",
    //         successUrl: window.location.origin + "/success",
    //         cancelUrl: window.location.origin + "/cancel",
    //     });

    //     if (error) {
    //         console.error("Stripe Checkout Error:", error);
    //     }
    // };

    const handleCheckout = () => {
        navigate('/cost-calculator')
    }

    return (
        <div className='flex flex-col gap-3 bg-[#EAF3FD] p-5 rounded-lg justify-between'>
            <div className='flex flex-col gap-3'>
                <img src={data.img} alt="" className='w-full h-72 object-cover rounded-lg' />
                <h4 className='font-bold text-center text-xl'>{data.title}</h4>
                <p className='text-l text-center'>{data.description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-6">
                {/* <h4 className='font-semibold text-center text-xl'>Price- {data.price} USD</h4> */}
                <button onClick={handleCheckout} className=' lg:mx-20 bg-[#00369a] text-white py-3 rounded-lg hover:bg-[#002a78] transition duration-300 ease-in-out'>
                    Calculate Cost
                </button>
            </div>
        </div>
    )
}

const Services = () => {

    const ServiceCards = [
        {
            id: 1,
            img: Airbnb,
            title: 'Airbnb Cleaning Services',
            description: 'Ensure your guests have a spotless stay with our reliable and fast Airbnb cleaning solutions. We help you maintain great reviews by providing top-notch cleaning services.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            id: 2,
            img: Resident,
            title: 'Residential Cleaning Services',
            description: 'Keep your home sparkling clean with our tailored cleaning packages. We offer deep cleaning, regular housekeeping, and seasonal cleaning for houses, apartments, and condos.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            id: 3,
            img: Comm,
            title: 'Commercial Cleaning Services',
            description: 'We provide reliable cleaning services for offices, retail spaces, and other commercial properties, ensuring a clean and hygienic workspace for your employees and customers.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            id: 4,
            img: Post,
            title: 'Post-Construction Cleaning',
            description: 'Our post-construction cleaning service removes dust, debris, and other materials after construction, ensuring your newly built or renovated space is spotless and ready for use.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            id: 5,
            img: Move,
            title: 'Move-In/Move-Out Cleaning',
            description: 'Moving is stressful enough without worrying about cleaning. Our move-in/move-out cleaning service ensures your old or new home is spotless and ready for the next stage.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            id: 6,
            img: Appart,
            title: 'Apartment Cleaning Services',
            description: 'Our apartment cleaning service offers both regular cleaning and deep cleaning options. We ensure your apartment stays fresh, clean, and inviting for you and your guests.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        }
    ];


    const SubServiceData = [
        {
            img: Airbnb,
            title: 'Office Cleaning',
            description: 'Ensure your clients have a spotless stay with our reliable and fast pffice cleaning solutions.'
        },
        {
            img: Resident,
            title: 'House Cleaning',
            description: 'Keep your home clean and organized with our customized cleaning plans. We offer regular and deep cleaning services for houses, apartments, and condos.'
        },
        {
            img: Comm,
            title: 'Upholstery Cleaning',
            description: 'We provide cleaning services for offices, retail spaces, and other commercial properties, creating a clean and welcoming environment for your employees and customers.'
        }
    ]

    const listItem = [
        "Kitchen", "Carpet", "Bathrooms", "Seasonal", "Bedrooms & Living Rooms", "Move in/out", "Windows", "Post construction", "Extra Services", "Express"
    ]

    return (
        <>
            <section className='xl:mx-0 flex h-[30vh] md:h-[50vh] xl:h-[60vh] relative justify-center items-center'>

                <img className='h-full w-full object-cover brightness-50' src={Servimg} alt="" />
                <div className='flex flex-col w-full text-white absolute items-center font-bold'>
                    <div className='text-xl lg:text-6xl'>About Our Services</div>
                    <div className='text-xl lg:text-xl'>Home / Services</div>
                </div>

            </section>

            <section className='px-5 md:px-24 py-10 h-max flex flex-col justify-around'>

                <div className='py-10 flex flex-col items-center'>
                    <p className='text-3xl text-center font-bold text-[#00369a]'>
                        Professional Cleaning Services Tailored to Your Needs
                    </p>
                    <p className='text-xl w-[80%] py-5 text-center text-black-700'>
                        At Cleanatrix, LLC, we offer a wide range of cleaning services to ensure your home, office, or Airbnb property is pristine. Our services include:
                    </p>
                </div>


                <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10'>
                    {
                        ServiceCards.map((data, index) => {
                            return (
                                <ServiceCard data={data} key={index} />
                            );
                        })
                    }
                </div>

            </section>

            {/* <section className='xl:mx-24 flex flex-col'>

                <div className='bg-hero h-[30vh] md:h-[60vh] md:rounded-b-2xl'>
                    <div className='h-full bg-sky-700 opacity-50 rounded-b-2xl'>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center md:w-[80%] mx-auto md:-mt-72 z-10'>

                    <div className='bg-[#F9A72B] text-white text-xl p-10 md:rounded-l-xl flex flex-col gap-4'>

                        <div className='flex gap-5 items-center'>
                            <FaHome size={80} />
                            <h4 className='text-3xl font-bold'>Residential Cleaning Service</h4>
                        </div>
                        <div className=''>
                            When you work with Cleanatrix cleaning you can cross a major choir off your list,cleaning your home.
                        </div>
                        <div className='list-disc'>
                            {listItem.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </div>
                    </div>
                    <div className='bg-[#2E85CC] text-white text-xl p-10 md:rounded-r-xl flex flex-col gap-4'>
                        <div className='flex gap-5 items-center'>
                            <BsBuildingsFill size={80} />
                            <h4 className='text-3xl font-bold'>Commercial Cleaning Service</h4>
                        </div>
                        <div>
                            When you work with Cleanatrix cleaning you can cross a major choir off your list,cleaning your home.
                        </div>
                        <div className='list-disc'>
                            {listItem.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </section> */}


            <ContactForm />

            <section>

            </section>
        </>
    )
}

export default Services