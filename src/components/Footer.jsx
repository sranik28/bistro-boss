import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 text-white'>
                <div className='bg-[#1F2937] text-center py-16'>
                    <h2 className='text-2xl my-3'>CONTACT US</h2>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827]  py-16  text-center  '>
                    <h2 className='text-xl my-4'>Follow US</h2>
                    <p>Join us on social media</p>
                    <div className='flex gap-5 justify-center mt-5'>
                        <span><FaFacebookF className='w-5 h-5' /></span>
                        <span><FaInstagram className='w-5 h-5' /></span>
                        <span><FaTwitter className='w-5 h-5' /></span>
                    </div>
                </div>
            </div>
            <h3 className='bg-black py-2 text-white text-center'>Copyright © CulinaryCloud. All rights reserved.</h3>
        </div>
    );
};

export default Footer;