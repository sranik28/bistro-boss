import React from 'react';
import OrderMenuItem from './OrderMenuItem';
import Cover from './Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, coverImg, subTitle }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title} subTitle={subTitle} />}
            <div className='grid md:grid-cols-2 gap-5 max-w-[1240px] mx-auto my-20'>
                {
                    items.map(item => <OrderMenuItem item={item} key={item._id} />)
                }
            </div>
            <Link to={`/our-shop/${title}`}>
                <button className='py-2 px-8 border-b-2 border-[#1F2937] text-[#1F2937] rounded-md my-12 font-semibold uppercase block mx-auto'>ORDER YOUR FAVOURITE FOOD</button>
            </Link>
        </div>
    );
};

export default MenuCategory;