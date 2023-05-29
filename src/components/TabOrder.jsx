import React from 'react';
import FoodCard from './FoodCard';

const TabOrder = ({ item }) => {
    return (
        <div className='grid md:grid-cols-3 gap-8 my-10 px-3'>
            {
                item.map(item => <FoodCard key={item._id} item={item} />)
            }
        </div>
    );
};

export default TabOrder;