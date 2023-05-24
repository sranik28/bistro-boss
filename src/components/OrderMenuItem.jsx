import React from 'react';

const OrderMenuItem = ({ item }) => {
    console.log(item)
    const { image, name, price, recipe } = item
    return (
        <div className='flex gap-3 mt-8'>
            <img style={{borderRadius: "0px 200px 200px 200px"}} className='w-[115px]' src={image} alt="" />
            <div className=''>
                <h3 className='uppercase text-[#151515] text-[20px]'>{name}---------------</h3>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default OrderMenuItem;