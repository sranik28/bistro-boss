import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/header/NavBar';

const Root = () => {
    return (
        <div className=''>
            <NavBar />
            <Outlet />
        </div>
    );
};

export default Root;