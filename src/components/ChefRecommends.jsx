import React from 'react';
import Heading from './Heading';
import img1 from '../assets/home/slide1.jpg'
import img2 from '../assets/home/slide2.jpg'
import img3 from '../assets/home/slide3.jpg'

const ChefRecommends = () => {


    return (
        <div className='max-w-[1240px] mx-auto mt-20'>
            <section>
                <Heading heading='CHEF RECOMMENDS' subHeading='Should Try' />
            </section>
            <div className='grid md:grid-cols-3 gap-8 my-10'>
                <div>
                    <img className='w-[424px] h-[350px] object-cover' src={img1} alt="" />
                    <div className='text-center'>
                        <h2 className='text-2xl my-2'>Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='bg-[#E8E8E8] hover:bg-[#1F2937] border-b-4 border-[#BB8506] hover:border-[#1F2937] text-[#BB8506] px-5 py-2 rounded-md my-4'>add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='w-[424px] h-[350px] object-cover' src={img2} alt="" />
                    <div className='text-center'>
                        <h2 className='text-2xl my-2'>pizzas</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='bg-[#E8E8E8] hover:bg-[#1F2937] border-b-4 border-[#BB8506] hover:border-[#1F2937] text-[#BB8506] px-5 py-2 rounded-md my-4'>add to cart</button>
                    </div>
                </div>
                <div>
                    <img className='w-[424px] h-[350px] object-cover' src={img3} alt="" />
                    <div className='text-center'>
                        <h2 className='text-2xl my-2'>Soups</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='bg-[#E8E8E8] hover:bg-[#1F2937] border-b-4 border-[#BB8506] hover:border-[#1F2937] text-[#BB8506] px-5 py-2 rounded-md my-4'>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommends;