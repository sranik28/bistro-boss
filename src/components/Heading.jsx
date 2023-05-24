import React from 'react';

const Heading = ({ heading, subHeading }) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-8'>
            <p className='text-[#D99904] text-[16px] mb-2 '> ---{subHeading}---</p>
            <h2 className="text-4xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default Heading;