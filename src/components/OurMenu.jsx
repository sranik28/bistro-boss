import Heading from './Heading';
import OrderMenuItem from './OrderMenuItem';
import useMenu from '../hooks/useMenu';

const OurMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className='max-w-[1240px] mx-auto my-20'>
            <section>
                <Heading heading="FROM OUR MENU" subHeading="Check it out" />
            </section>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    popular.map(item => <OrderMenuItem item={item} key={item._id} />)
                }
            </div>
            <button className='py-2 px-8 border-b-2 border-[#1F2937] text-[#1F2937] rounded-md mt-12 font-semibold uppercase block mx-auto'>View Full  Menu</button>
        </section>
    );
};

export default OurMenu;