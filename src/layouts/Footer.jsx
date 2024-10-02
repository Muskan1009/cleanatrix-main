import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const footerData = [
        {
            title: 'Quick Links',
            links: [
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
                    name: 'Contact Us',
                    link: '/contact'
                },
                {
                    name: 'Blog',
                    link: 'https://cleanatrix.blogspot.com/'
                }
            ]
        },
        {
            title: 'Socials',
            links: [
                {
                    name: 'Facebook',
                    link: 'https://www.facebook.com/cleanatrix'
                },
                {
                    name: 'Yelp',
                    link: 'https://m.yelp.com/biz/cleanatrix-cleaning-oakland'
                },
                {
                    name: 'Nextdoor',
                    link: 'https://nextdoor.com/pages/cleanatrix-llc-oakland-md'
                },
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com/company/cleanatrix-llc/'
                },
                {
                    name: 'Trustpilot',
                    link: 'https://www.trustpilot.com/review/cleanatrix.com'
                }
            ]
        },
        {
            title: 'Important Links',
            links: [
                {
                    name: 'Privacy Policy',
                    link: '/privacy'
                },
                {
                    name: 'Terms of Services',
                    link: '/terms'
                }
            ]
        }
    ]

    return (
        <>
            <footer className='xl:mx-0 px-20 py-24 bg-slate-300 flex'>

                <div className='flex flex-col md:flex-row gap-10 text-black'>
                    {footerData.map((data, index) => {
                        return (
                            <div key={index} className='text-xl'>
                                <h4 className='font-medium mb-5'>{data.title}</h4>
                                <nav className='flex flex-col gap-2'>
                                    {data.links.map((link, index) => {
                                        return (
                                            <Link to={link.link} key={index} className=' hover:underline opacity-80 hover:opacity-100 duration-300 text-lg'>
                                                {link.name}
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>
                        )
                    })}
                </div>

            </footer>
            <footer>
                <div className='bg-[#004AAD] text-white py-5 text-center'>
                    <p>© 2024 Cleanatrix. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer