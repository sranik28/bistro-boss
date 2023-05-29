import React from 'react';
import { Parallax } from 'react-parallax';


const Cover = ({ img, title, subTitle }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className='h-[500px] bg-cover flex justify-center items-center px-3'>
                <div className='bg-black/40 p-5 md:m-[150px] text-center md:px-[280px] md:py-[68px] text-white'>
                    <h3 className='text-5xl font-semibold my-2'>{title}</h3>
                    <p>{subTitle}</p>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;