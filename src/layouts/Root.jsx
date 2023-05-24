import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/header/NavBar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className=''>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;