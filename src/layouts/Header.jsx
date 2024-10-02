import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { Modal } from '@mui/material';
import { NavHashLink } from 'react-router-hash-link'; // Import NavHashLink for hash scrolling

const Header = () => {
    const navLinks = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact Us',
            link: '/contact'
        },
        {
            name: 'FAQs',
            link: '/about/#faq' // Link to the FAQ section
        }
    ];

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {/* Desktop Header */}
            <header className='bg-[#1F2A59] lg:flex justify-between items-center xl:mx-0 px-20 py-10 hidden'>
                <nav className='flex gap-5 text-xl text-white'>
                    {navLinks.map((data, index) => {
                        return (
                            data.name === 'FAQs' ? (
                                <NavHashLink
                                    smooth // Enable smooth scrolling
                                    className={({ isActive }) => isActive ? 'font-medium' : ''}
                                    to={data.link}
                                    key={index}
                                >
                                    {data.name}
                                </NavHashLink>
                            ) : (
                                <NavLink
                                    className={({ isActive }) => isActive ? 'font-medium' : ''}
                                    to={data.link}
                                    key={index}
                                >
                                    {data.name}
                                </NavLink>
                            )
                        );
                    })}
                </nav>

                <Link to='/cost-calculator' className='bg-[#F9A72B] text-white text-xl py-2 px-6 rounded-md'>
                    Calculate Cost
                </Link>
            </header>

            {/* Mobile Header */}
            <header className='bg-[#1F2A59] flex justify-between items-center lg:mx-24 px-5 py-5 lg:hidden'>
                <RiMenu2Line onClick={handleOpen} size={30} className='text-white' />
                <Link to='/cost-calculator' className='bg-[#F9A72B] text-white text-xl py-2 px-6 rounded-md'>
                    Calculate Cost
                </Link>
            </header>

            {/* Mobile Menu Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                className='flex justify-center items-center'
            >
                <div className='bg-white p-10 rounded-xl'>
                    <nav className='flex flex-col gap-5 text-xl text-[#004AAD]'>
                        {navLinks.map((data, index) => {
                            return (
                                data.name === 'FAQs' ? (
                                    <NavHashLink
                                        smooth
                                        onClick={handleClose}
                                        className={({ isActive }) => isActive ? 'font-medium' : ''}
                                        to={data.link}
                                        key={index}
                                    >
                                        {data.name}
                                    </NavHashLink>
                                ) : (
                                    <NavLink
                                        onClick={handleClose}
                                        className={({ isActive }) => isActive ? 'font-medium' : ''}
                                        to={data.link}
                                        key={index}
                                    >
                                        {data.name}
                                    </NavLink>
                                )
                            );
                        })}
                    </nav>
                </div>
            </Modal>
        </>
    );
};

export default Header;
