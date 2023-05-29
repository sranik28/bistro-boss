import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../pages/header/NavBar';
import Footer from '../components/Footer';

const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login');
    const noHeaderFooterSinUp = location.pathname.includes('/register');
    return (
        <div>
            {noHeaderFooter || noHeaderFooterSinUp || <NavBar />}
            <div className='md:min-h-[calc(100vh-100px)] '>
                <Outlet />
            </div>
            {noHeaderFooter || noHeaderFooterSinUp || <Footer />}
        </div>
    );
};

export default Root;