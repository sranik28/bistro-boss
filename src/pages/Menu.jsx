import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../components/Cover';
import menuImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import saladImg from '../assets/menu/soup-bg.jpg'
import useMenu from '../hooks/useMenu';
import Heading from '../components/Heading';
import MenuCategory from '../components/MenuCategory';


const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const offered = menu.filter(item => item.category === "offered");
    return (
        <div>
            <div>
                <Helmet>
                    <title>BISTRO BOSS | Our Menu</title>
                </Helmet>

                <section>
                    <Cover img={menuImg} title={'OUR MENU'} subTitle={"Would you like to try a dish?"} />
                </section>
                <Heading heading="TODAY'S OFFER" subHeading="Don't miss" />
                <MenuCategory items={offered} />
                <MenuCategory
                    items={dessert}
                    title={"dessert"}
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={dessertImg}
                />
                <MenuCategory
                    items={pizza}
                    title={"pizza"}
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={pizzaImg}
                />
                <MenuCategory
                    items={soup}
                    title={"soup"}
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={soupImg}
                />
                <MenuCategory
                    items={salad}
                    title={"salad"}
                    subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    coverImg={saladImg}
                />
            </div>
           
        </div>
    );
};

export default Menu;