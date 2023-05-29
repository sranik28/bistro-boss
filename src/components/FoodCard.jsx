import React from 'react';

const FoodCard = ({ item }) => {

    const { image, name, price, recipe } = item;

    return (
        <div className='relative'>
            <div>
                <img className='w-[424px] h-[350px] object-cover' src={image} alt="" />
                <div className='p-4'>
                    <p className=' absolute top-5 right-5 px-3 py-2 rounded bg-[#111827] text-white'>${price}</p>
                    <h2 className='text-center text-2xl my-2'>{name}</h2>
                    <p>{recipe}</p>
                    <button className='text-center bg-[#E8E8E8] hover:bg-[#1F2937] border-b-4 border-[#BB8506] hover:border-[#1F2937] text-[#BB8506] px-5 py-2 rounded-md my-4'>add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;