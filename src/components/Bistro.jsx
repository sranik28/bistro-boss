import React from 'react';
import chef from '../assets/home/chef-service.jpg';

const Bistro = () => {
    return (
        <div style={{ backgroundImage: `url(${chef})` }} className=' max-w-[1240px] mx-auto  h-[500px] mt-[140px] bg-cover flex justify-center items-center'>
            <div className='bg-white p-5 m-[40px] text-center md:px-[167px] md:py-[68px]'>
                <h3 className='text-4xl'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Bistro;