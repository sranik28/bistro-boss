import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../components/Cover';
import menuImg from '../assets/menu/banner3.jpg'
import OurMenu from '../components/OurMenu';


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Our Menu</title>
            </Helmet>

            <section>
                <Cover img={menuImg} title={'OUR MENU'} />
            </section>
            <OurMenu />
            <section>
                <Cover img={menuImg} />
            </section>
            <OurMenu />
            <section>
                <Cover img={menuImg} />
            </section>
            <OurMenu />
            <section>
                <Cover img={menuImg} />
            </section>
            <OurMenu />
        </div>
    );
};

export default Menu;