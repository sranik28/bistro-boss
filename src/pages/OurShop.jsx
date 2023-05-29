import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../components/Cover';
import coverImg from '../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import useMenu from '../hooks/useMenu';
import FoodCard from '../components/FoodCard';
import TabOrder from '../components/TabOrder';
import { useParams } from 'react-router-dom';

const OurShop = () => {

    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    
    const dessert = menu.filter(item => item.category === "dessert");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const soup = menu.filter(item => item.category === "soup");
    const Drinks = menu.filter(item => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>BISTRO BOSS | Our Shop</title>
            </Helmet>

            <Cover img={coverImg} title={'Our Shop'} subtitle={"Would you like to try a dish?"} />

            <section className='text-center max-w-[1240px] mx-auto my-24'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <TabOrder item={salad} />
                    </TabPanel>
                    <TabPanel>
                        <TabOrder item={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <TabOrder item={soup} />
                    </TabPanel>
                    <TabPanel>
                        <TabOrder item={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <TabOrder item={Drinks} />
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default OurShop;