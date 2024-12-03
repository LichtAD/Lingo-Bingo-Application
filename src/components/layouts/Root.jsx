import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div className='font-lato'>
            <div className='space-y-10'>
                <Navbar></Navbar>

                <div className='w-11/12 mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>

            <Footer></Footer>

            <ToastContainer />
        </div>
    );
};

export default Root;