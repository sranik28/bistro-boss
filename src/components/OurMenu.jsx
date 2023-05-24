import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import OrderMenuItem from './OrderMenuItem';

const OurMenu = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('/manu.json')
            .then(res => res.json())
            .then(data => {
                const filteredPopular = data.filter(item => item.category === "popular");
                setItems(filteredPopular)
            })
    }, [])
    return (
        <section className='max-w-[1240px] mx-auto my-20'>
            <section>
                <Heading heading="FROM OUR MENU" subHeading="Check it out" />
            </section>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    items.map(item => <OrderMenuItem item={item} key={item._id} />)
                }
            </div>
            <button className='py-2 px-8 border-b-2 border-[#1F2937] text-[#1F2937] rounded-md mt-12 font-semibold uppercase block mx-auto'>View Full  Menu</button>
        </section>
    );
};

export default OurMenu;