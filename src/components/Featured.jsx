import React from 'react';
import Heading from './Heading';
import featuredImg from '../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div style={{ backgroundImage: `url(${featuredImg}) ` }} className=" my-20  px-10 pb-32 bg-fixed  pt-10 bg-cover ">
            <section>
                <Heading heading='FROM OUR MENU' subHeading='Check it out' />
            </section>
            <section>
                <div className='md:flex justify-center  mt-10 items-center bg-slate-500 bg-order-10 gap-5 text-white max-w-[1240px] mx-auto'>
                    <img  className='w-[600px] rounded-md' src={featuredImg} alt="" />
                    <div>
                        <p>March 20, 2023</p>
                        <h3 className='my-2'>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className='border-b-4 border-white rounded-md px-5 py-2 mt-5'>Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;